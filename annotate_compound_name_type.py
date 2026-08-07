#!/usr/bin/env python3
"""
annotate_compound_name_type.py
===============================
Find compound-name objects (OGC bblocks "hasPart" pattern) that are missing
their "type" declaration, and interactively add it.

Written for _sources/wa-core/examples/*.json, where every "appellation"
object should declare "type": "wa:LotOnPlanAppellation" (per the lotOnPlan
datatype block, _sources/datatypes/lotOnPlan/schema.json), but several
examples predate that requirement and only carry "label"/"hasPart".

The script edits files with a minimal text splice (not a full JSON
parse+dump), so untouched parts of the file -- indentation, line endings,
inline single-line objects -- are left byte-for-byte identical. Only a new
"type" line is inserted, copying the exact whitespace already used before
the object's first existing key.

Usage:
    # Default: scan _sources/wa-core/examples/*.json for "appellation"
    # objects with hasPart but no type; review each interactively.
    python annotate_compound_name_type.py

    # Scan specific files instead
    python annotate_compound_name_type.py _sources/wa-core/examples/parcels.json

    # Use a different key name / type value (e.g. reusing this script
    # elsewhere for a different compound-name datatype)
    python annotate_compound_name_type.py --key name --type wa:SurveyPointName

    # Also consider hasPart objects under ANY key, not just --key
    # (still reviewed interactively, so false positives can be skipped)
    python annotate_compound_name_type.py --any-key

    # Non-interactive: accept every candidate as-is (e.g. for CI/dry runs)
    python annotate_compound_name_type.py --yes

    # Preview proposed edits without writing any files
    python annotate_compound_name_type.py --dry-run

Interactive prompt per candidate:
    y = accept (insert the default type value)
    n = skip this one
    e = edit -- type a different value to insert for this candidate
    a = accept this one and all remaining candidates in this file
    s = skip all remaining candidates in this file
    q = quit -- stop reviewing entirely (edits already accepted are still written)
"""
from __future__ import annotations

import argparse
import glob
import json
import sys
from dataclasses import dataclass, field
from pathlib import Path

DEFAULT_GLOB = "_sources/wa-core/examples/*.json"
DEFAULT_KEY = "appellation"
DEFAULT_TYPE = "wa:LotOnPlanAppellation"

WHITESPACE = " \t\n\r"


class ParseError(Exception):
    pass


# ---------------------------------------------------------------------------
# Minimal position-tracking JSON parser.
#
# We need exact byte offsets for object boundaries and key positions so we
# can splice new text in without disturbing anything else -- json.load()
# alone doesn't expose this, and a full json.load()+json.dump() round trip
# would reformat every line in the file (these examples mix multi-line and
# single-line object styles that a generic dumper would not reproduce).
# ---------------------------------------------------------------------------

def _skip_ws(s: str, i: int) -> int:
    n = len(s)
    while i < n and s[i] in WHITESPACE:
        i += 1
    return i


def _parse_string(s: str, i: int) -> tuple[str, int]:
    start = i
    n = len(s)
    i += 1  # opening quote
    while i < n:
        c = s[i]
        if c == "\\":
            i += 2
            continue
        if c == '"':
            i += 1
            return s[start:i], i
        i += 1
    raise ParseError(f"Unterminated string starting at offset {start}")


def _parse_value(s: str, i: int, path: list) -> tuple[dict, int]:
    i = _skip_ws(s, i)
    c = s[i]
    if c == "{":
        return _parse_object(s, i, path)
    if c == "[":
        return _parse_array(s, i, path)
    if c == '"':
        raw, j = _parse_string(s, i)
        return {"kind": "string", "start": i, "end": j, "raw": raw}, j
    # number / true / false / null
    n = len(s)
    j = i
    while j < n and s[j] not in ",]}" and s[j] not in WHITESPACE:
        j += 1
    return {"kind": "literal", "start": i, "end": j, "raw": s[i:j]}, j


def _parse_object(s: str, i: int, path: list) -> tuple[dict, int]:
    start = i
    i += 1  # '{'
    entries: list[tuple[str, int, dict]] = []  # (key, key_start_offset, value_node)
    keys: dict[str, dict] = {}
    i = _skip_ws(s, i)
    if i < len(s) and s[i] == "}":
        i += 1
        return {"kind": "object", "start": start, "end": i, "entries": entries, "keys": keys, "path": path}, i
    while True:
        i = _skip_ws(s, i)
        if s[i] != '"':
            raise ParseError(f"Expected string key at offset {i}")
        key_start = i
        key_raw, i = _parse_string(s, i)
        key = json.loads(key_raw)
        i = _skip_ws(s, i)
        if s[i] != ":":
            raise ParseError(f"Expected ':' at offset {i}")
        i += 1
        i = _skip_ws(s, i)
        value_node, i = _parse_value(s, i, path + [key])
        entries.append((key, key_start, value_node))
        keys[key] = value_node
        i = _skip_ws(s, i)
        if i >= len(s):
            raise ParseError("Unexpected end of input in object")
        if s[i] == ",":
            i += 1
            continue
        if s[i] == "}":
            i += 1
            break
        raise ParseError(f"Expected ',' or '}}' at offset {i}")
    return {"kind": "object", "start": start, "end": i, "entries": entries, "keys": keys, "path": path}, i


def _parse_array(s: str, i: int, path: list) -> tuple[dict, int]:
    start = i
    i += 1  # '['
    items: list[dict] = []
    i = _skip_ws(s, i)
    if i < len(s) and s[i] == "]":
        i += 1
        return {"kind": "array", "start": start, "end": i, "items": items, "path": path}, i
    idx = 0
    while True:
        i = _skip_ws(s, i)
        item_node, i = _parse_value(s, i, path + [idx])
        items.append(item_node)
        idx += 1
        i = _skip_ws(s, i)
        if s[i] == ",":
            i += 1
            continue
        if s[i] == "]":
            i += 1
            break
        raise ParseError(f"Expected ',' or ']' at offset {i}")
    return {"kind": "array", "start": start, "end": i, "items": items, "path": path}, i


def parse_json_with_positions(text: str) -> dict:
    node, end = _parse_value(text, 0, [])
    end = _skip_ws(text, end)
    if end != len(text):
        raise ParseError(f"Unexpected trailing content at offset {end}")
    return node


# ---------------------------------------------------------------------------
# Candidate discovery
# ---------------------------------------------------------------------------

@dataclass
class Candidate:
    path: list          # breadcrumb, e.g. ["points", 3, "properties", "appellation"]
    node: dict           # the object node (value of the matched key)
    label: str | None
    has_part_summary: list[str]


def _decode_maybe(node: dict | None):
    if node is None:
        return None
    if node["kind"] == "string":
        return json.loads(node["raw"])
    if node["kind"] == "literal":
        return node["raw"]
    return None


def _summarize_has_part(has_part_node: dict | None) -> list[str]:
    if has_part_node is None or has_part_node["kind"] != "array":
        return []
    summary = []
    for item in has_part_node["items"]:
        if item["kind"] != "object":
            continue
        t = _decode_maybe(item["keys"].get("type"))
        v = _decode_maybe(item["keys"].get("label")) or _decode_maybe(item["keys"].get("ref"))
        summary.append(f"{t}={v}" if t else str(v))
    return summary


def find_candidates(root: dict, key_name: str | None, require_has_part: bool) -> list[Candidate]:
    """Walk the parsed tree; a candidate is an object value that:
    - sits under a key named `key_name` (or any key, if key_name is None), and
    - has no "type" key of its own, and
    - (if require_has_part) has a "hasPart" key.
    """
    found: list[Candidate] = []

    def walk(node: dict):
        kind = node["kind"]
        if kind == "object":
            for key, _key_start, value in node["entries"]:
                if value["kind"] == "object" and "type" not in value["keys"]:
                    matches_key = key_name is None or key == key_name
                    has_part = value["keys"].get("hasPart")
                    if matches_key and (not require_has_part or has_part is not None):
                        found.append(
                            Candidate(
                                path=value["path"],
                                node=value,
                                label=_decode_maybe(value["keys"].get("label")),
                                has_part_summary=_summarize_has_part(has_part),
                            )
                        )
                walk(value)
        elif kind == "array":
            for item in node["items"]:
                walk(item)

    walk(root)
    return found


def format_path(path: list) -> str:
    parts = []
    for p in path:
        if isinstance(p, int):
            parts[-1] = f"{parts[-1]}[{p}]" if parts else f"[{p}]"
        else:
            parts.append(p)
    return ".".join(parts)


def line_number(text: str, offset: int) -> int:
    return text.count("\n", 0, offset) + 1


# ---------------------------------------------------------------------------
# Edit application
# ---------------------------------------------------------------------------

def build_insertion(text: str, candidate: Candidate, type_value: str) -> tuple[int, str]:
    """Return (insert_at_offset, insertion_text) that adds "type": "<value>",
    as the new first key of the candidate object, copying the exact
    whitespace the file already uses between '{' and the current first key
    so indentation/line-endings are preserved untouched."""
    node = candidate.node
    obj_start = node["start"]
    if node["entries"]:
        first_key_start = node["entries"][0][1]
        ws = text[obj_start + 1 : first_key_start]
        insertion = f'"type": "{type_value}",' + ws
        return first_key_start, insertion
    # Empty object -- no existing keys/whitespace to copy from.
    return obj_start + 1, f'"type": "{type_value}"'


# ---------------------------------------------------------------------------
# Interactive review
# ---------------------------------------------------------------------------

@dataclass
class ReviewState:
    accept_all_in_file: bool = False
    skip_rest_of_file: bool = False
    quit_all: bool = False


def review_candidate(
    file_path: Path,
    text: str,
    candidate: Candidate,
    index: int,
    total: int,
    default_type: str,
    state: ReviewState,
    non_interactive: bool,
) -> str | None:
    """Return the type value to insert, or None to skip this candidate."""
    if state.quit_all or state.skip_rest_of_file:
        return None
    if non_interactive or state.accept_all_in_file:
        return default_type

    ln = line_number(text, candidate.node["start"])
    print(f"\n[{index}/{total}] {file_path}:{ln}  ({format_path(candidate.path)})")
    if candidate.label is not None:
        print(f"    label:   {candidate.label}")
    if candidate.has_part_summary:
        print(f"    hasPart: {', '.join(candidate.has_part_summary)}")
    print(f"    proposed: insert \"type\": \"{default_type}\"")

    while True:
        try:
            choice = input("    accept? [Y]es / [n]o / [e]dit / [a]ll-in-file / [s]kip-file / [q]uit: ").strip().lower()
        except (EOFError, KeyboardInterrupt):
            print()
            state.quit_all = True
            return None

        if choice in ("", "y", "yes"):
            return default_type
        if choice in ("n", "no"):
            return None
        if choice in ("e", "edit"):
            try:
                custom = input(f"    type value [{default_type}]: ").strip()
            except (EOFError, KeyboardInterrupt):
                print()
                state.quit_all = True
                return None
            return custom or default_type
        if choice in ("a", "all"):
            state.accept_all_in_file = True
            return default_type
        if choice in ("s", "skip"):
            state.skip_rest_of_file = True
            return None
        if choice in ("q", "quit"):
            state.quit_all = True
            return None
        print("    please enter y, n, e, a, s, or q")


# ---------------------------------------------------------------------------
# Per-file processing
# ---------------------------------------------------------------------------

def process_file(
    file_path: Path,
    key_name: str | None,
    require_has_part: bool,
    default_type: str,
    non_interactive: bool,
    dry_run: bool,
) -> tuple[int, bool]:
    """Returns (num_edits_applied, should_quit_all)."""
    with open(file_path, "r", encoding="utf-8-sig", newline="") as fh:
        text = fh.read()

    try:
        root = parse_json_with_positions(text)
    except ParseError as e:
        print(f"skip {file_path}: could not parse as JSON with position tracking ({e})")
        return 0, False
    except json.JSONDecodeError as e:
        print(f"skip {file_path}: invalid JSON ({e})")
        return 0, False

    candidates = find_candidates(root, key_name, require_has_part)
    if not candidates:
        return 0, False

    print(f"\n=== {file_path} -- {len(candidates)} candidate(s) ===")

    state = ReviewState()
    edits: list[tuple[int, str]] = []  # (offset, insertion_text), applied by descending offset
    for i, candidate in enumerate(candidates, start=1):
        type_value = review_candidate(
            file_path, text, candidate, i, len(candidates), default_type, state, non_interactive
        )
        if type_value:
            offset, insertion = build_insertion(text, candidate, type_value)
            edits.append((offset, insertion))
        if state.quit_all:
            break

    if not edits:
        print(f"  no changes for {file_path}")
        return 0, state.quit_all

    edits.sort(key=lambda e: e[0], reverse=True)
    new_text = text
    for offset, insertion in edits:
        new_text = new_text[:offset] + insertion + new_text[offset:]

    if dry_run:
        print(f"  [dry-run] would apply {len(edits)} change(s) to {file_path}")
    else:
        with open(file_path, "w", encoding="utf-8", newline="") as fh:
            fh.write(new_text)
        print(f"  applied {len(edits)} change(s) to {file_path}")

    return len(edits), state.quit_all


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Add a missing \"type\" declaration to compound-name (hasPart) objects.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument("files", nargs="*", help=f"Files to scan (default: {DEFAULT_GLOB})")
    parser.add_argument(
        "-k", "--key", default=DEFAULT_KEY,
        help=f"Only consider objects under this property name (default: {DEFAULT_KEY!r})",
    )
    parser.add_argument(
        "--any-key", action="store_true",
        help="Consider hasPart objects under any key, not just --key (still reviewed interactively)",
    )
    parser.add_argument(
        "-t", "--type", default=DEFAULT_TYPE, dest="type_value",
        help=f"Type value to insert (default: {DEFAULT_TYPE!r})",
    )
    parser.add_argument(
        "--no-require-haspart", dest="require_has_part", action="store_false", default=True,
        help="Also flag matching-key objects that lack 'hasPart' (default requires hasPart present)",
    )
    parser.add_argument(
        "-y", "--yes", action="store_true",
        help="Non-interactive: accept every candidate with the default --type",
    )
    parser.add_argument(
        "--dry-run", action="store_true",
        help="Show what would change without writing any files",
    )
    args = parser.parse_args(argv)

    if args.files:
        file_paths = [Path(f) for f in args.files]
    else:
        file_paths = [Path(p) for p in sorted(glob.glob(DEFAULT_GLOB))]

    if not file_paths:
        print(f"No files found (looked for {DEFAULT_GLOB})")
        return 2

    missing = [p for p in file_paths if not p.is_file()]
    if missing:
        for p in missing:
            print(f"error: file not found: {p}")
        return 2

    key_name = None if args.any_key else args.key

    total_edits = 0
    changed_files = 0
    for file_path in file_paths:
        edits, quit_all = process_file(
            file_path, key_name, args.require_has_part, args.type_value, args.yes, args.dry_run
        )
        total_edits += edits
        if edits:
            changed_files += 1
        if quit_all:
            print("\nStopped early at user request.")
            break

    verb = "Would change" if args.dry_run else "Changed"
    print(f"\n{verb} {total_edits} object(s) across {changed_files} file(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
