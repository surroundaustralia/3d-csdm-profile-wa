#!/usr/bin/env python3
"""
migrate_vectors_to_edges.py
=============================
Migrate the legacy top-level "observedVectors" / "adoptedVectors" properties
into a single "edges" FeatureCollection array, matching the pattern used in
3d-csdm-common/_sources/csdm/features/CSD/extended_example.json:

    "edges": [
      { "id": "observedVectors", "type": "FeatureCollection",
        "featureType": "ObservedVector", "features": [ ... ] },
      { "id": "adoptedVectors", "type": "FeatureCollection",
        "featureType": "AdoptedVector", "features": [ ... ] }
    ]

In every example file in this repo, "observedVectors" (and, if present,
"adoptedVectors") is already an array holding exactly one FeatureCollection
object shaped like the above -- so for the common case this script performs
a precise, format-preserving rename of the top-level key to "edges", editing
only the key text itself and leaving every other byte of the file untouched.

If a file has BOTH "observedVectors" and "adoptedVectors" as separate
top-level keys, they are merged into one "edges" array (their FeatureCollection
items concatenated, in that order) -- this case doesn't currently exist in
this repo's examples but is handled for completeness.

Usage:
    # Default: scan _sources/wa-core/examples/*.json
    python migrate_vectors_to_edges.py

    # Scan specific files instead
    python migrate_vectors_to_edges.py _sources/wa-mining/examples/example.json

    # Also do this in the tests directory
    python migrate_vectors_to_edges.py "_sources/wa-core/tests/*.json"

    # Non-interactive: accept every candidate
    python migrate_vectors_to_edges.py --yes

    # Preview without writing
    python migrate_vectors_to_edges.py --dry-run

Interactive prompt per candidate:
    y = accept the rename/merge into "edges"
    n = skip this file
    q = quit -- stop reviewing entirely (edits already accepted are still written)
"""
from __future__ import annotations

import argparse
import glob
import json
from pathlib import Path

DEFAULT_GLOB = "_sources/wa-core/examples/*.json"
SOURCE_KEYS = ("observedVectors", "adoptedVectors")
TARGET_KEY = "edges"

WHITESPACE = " \t\n\r"


class ParseError(Exception):
    pass


# ---------------------------------------------------------------------------
# Minimal position-tracking JSON parser (see annotate_compound_name_type.py
# for the rationale: we need exact byte offsets so edits can be spliced in
# without reformatting anything else in the file).
# ---------------------------------------------------------------------------

def _skip_ws(s: str, i: int) -> int:
    n = len(s)
    while i < n and s[i] in WHITESPACE:
        i += 1
    return i


def _parse_string(s: str, i: int) -> tuple[str, int]:
    start = i
    n = len(s)
    i += 1
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


def _parse_value(s: str, i: int) -> tuple[dict, int]:
    i = _skip_ws(s, i)
    c = s[i]
    if c == "{":
        return _parse_object(s, i)
    if c == "[":
        return _parse_array(s, i)
    if c == '"':
        raw, j = _parse_string(s, i)
        return {"kind": "string", "start": i, "end": j, "raw": raw}, j
    n = len(s)
    j = i
    while j < n and s[j] not in ",]}" and s[j] not in WHITESPACE:
        j += 1
    return {"kind": "literal", "start": i, "end": j, "raw": s[i:j]}, j


def _parse_object(s: str, i: int) -> tuple[dict, int]:
    start = i
    i += 1
    entries: list[tuple[str, int, dict]] = []  # (key, key_start_offset, value_node)
    i = _skip_ws(s, i)
    if i < len(s) and s[i] == "}":
        i += 1
        return {"kind": "object", "start": start, "end": i, "entries": entries}, i
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
        value_node, i = _parse_value(s, i)
        entries.append((key, key_start, value_node))
        i = _skip_ws(s, i)
        if s[i] == ",":
            i += 1
            continue
        if s[i] == "}":
            i += 1
            break
        raise ParseError(f"Expected ',' or '}}' at offset {i}")
    return {"kind": "object", "start": start, "end": i, "entries": entries}, i


def _parse_array(s: str, i: int) -> tuple[dict, int]:
    start = i
    i += 1
    items: list[dict] = []
    i = _skip_ws(s, i)
    if i < len(s) and s[i] == "]":
        i += 1
        return {"kind": "array", "start": start, "end": i, "items": items}, i
    while True:
        i = _skip_ws(s, i)
        item_node, i = _parse_value(s, i)
        items.append(item_node)
        i = _skip_ws(s, i)
        if s[i] == ",":
            i += 1
            continue
        if s[i] == "]":
            i += 1
            break
        raise ParseError(f"Expected ',' or ']' at offset {i}")
    return {"kind": "array", "start": start, "end": i, "items": items}, i


def parse_json_with_positions(text: str) -> dict:
    node, end = _parse_value(text, 0)
    end = _skip_ws(text, end)
    if end != len(text):
        raise ParseError(f"Unexpected trailing content at offset {end}")
    return node


def line_number(text: str, offset: int) -> int:
    return text.count("\n", 0, offset) + 1


# ---------------------------------------------------------------------------
# Edit construction
# ---------------------------------------------------------------------------

def describe_array_items(array_node: dict) -> list[str]:
    descriptions = []
    for item in array_node["items"]:
        if item["kind"] != "object":
            descriptions.append("(non-object item)")
            continue
        item_id = None
        feature_type = None
        feature_count = None
        for k, _pos, v in item["entries"]:
            if k == "id" and v["kind"] == "string":
                item_id = json.loads(v["raw"])
            elif k == "featureType" and v["kind"] == "string":
                feature_type = json.loads(v["raw"])
            elif k == "features" and v["kind"] == "array":
                feature_count = len(v["items"])
        bits = [b for b in (item_id, feature_type) if b]
        label = " / ".join(bits) if bits else "(unlabelled FeatureCollection)"
        if feature_count is not None:
            label += f", {feature_count} feature(s)"
        descriptions.append(label)
    return descriptions


def rename_edit(text: str, key_start: int, key_raw: str) -> tuple[int, int, str]:
    """Simple case: exactly one of the source keys is present. Replace just
    the key's own text (offset key_start .. key_start+len(key_raw)) with
    "edges" -- the value and all surrounding formatting is untouched."""
    return key_start, key_start + len(key_raw), f'"{TARGET_KEY}"'


def merge_edit(text: str, first: tuple[str, int, dict], second: tuple[str, int, dict]) -> tuple[int, int, str]:
    """Both source keys present: replace the span from the start of the
    first key through the end of the second key's value with a single
    "edges": [ <first's items>, <second's items> ] entry. Only used when a
    file actually has both keys -- not exercised by this repo's current
    examples, so formatting here is regenerated (2-space-per-level) rather
    than copied verbatim."""
    first_key, first_key_start, first_value = first
    second_key, second_key_start, second_value = second

    def item_texts(array_node: dict) -> list[str]:
        return [text[item["start"] : item["end"]] for item in array_node["items"]]

    items = item_texts(first_value) + item_texts(second_value)
    if not items:
        new_value = "[]"
    else:
        indented = ",\n    ".join(items)
        new_value = "[\n    " + indented + "\n  ]"

    span_start = min(first_key_start, second_key_start)
    span_end = max(first_value["end"], second_value["end"])
    # If the second entry appears after the first in the source and there is
    # a leading ",\n  " before it that belongs to the object separator, that
    # separator is naturally consumed by taking span_end as the later value's
    # end and span_start as the earlier key's start -- anything outside that
    # range (the comma between them) collapses away, which is what we want
    # since the two entries become one.
    return span_start, span_end, f'"{TARGET_KEY}": {new_value}'


# ---------------------------------------------------------------------------
# Per-file processing
# ---------------------------------------------------------------------------

def process_file(file_path: Path, non_interactive: bool, dry_run: bool) -> tuple[bool, bool]:
    """Returns (changed, quit_all)."""
    with open(file_path, "r", encoding="utf-8-sig", newline="") as fh:
        text = fh.read()

    try:
        root = parse_json_with_positions(text)
    except ParseError as e:
        print(f"skip {file_path}: could not parse with position tracking ({e})")
        return False, False
    except json.JSONDecodeError as e:
        print(f"skip {file_path}: invalid JSON ({e})")
        return False, False

    if root["kind"] != "object":
        return False, False

    found = {}
    for key, key_start, value in root["entries"]:
        if key in SOURCE_KEYS and value["kind"] == "array":
            found[key] = (key, key_start, value)

    if not found:
        return False, False

    if TARGET_KEY in {k for k, _pos, _v in root["entries"]}:
        print(f"skip {file_path}: already has a top-level \"{TARGET_KEY}\" property -- resolve manually")
        return False, False

    print(f"\n=== {file_path} ===")
    for key, key_start, value in found.values():
        ln = line_number(text, key_start)
        item_count = len(value["items"])
        print(f"  {file_path}:{ln}  \"{key}\": [ {item_count} item(s) ]")
        for desc in describe_array_items(value):
            print(f"      - {desc}")

    if len(found) == 1:
        key, key_start, value = next(iter(found.values()))
        key_raw = f'"{key}"'  # key strings here are plain identifiers, no escaping needed
        edit_start, edit_end, replacement = rename_edit(text, key_start, key_raw)
        print(f"  proposed: rename \"{key}\" -> \"{TARGET_KEY}\" (value unchanged)")
    else:
        keys_in_order = sorted(found.values(), key=lambda t: t[1])
        edit_start, edit_end, replacement = merge_edit(text, keys_in_order[0], keys_in_order[1])
        names = " + ".join(k for k, _pos, _v in keys_in_order)
        print(f"  proposed: merge {names} -> single \"{TARGET_KEY}\" array")

    if non_interactive:
        accept = True
    else:
        while True:
            try:
                choice = input("  accept? [Y]es / [n]o / [q]uit: ").strip().lower()
            except (EOFError, KeyboardInterrupt):
                print()
                return False, True
            if choice in ("", "y", "yes"):
                accept = True
                break
            if choice in ("n", "no"):
                accept = False
                break
            if choice in ("q", "quit"):
                return False, True
            print("  please enter y, n, or q")

    if not accept:
        print(f"  skipped {file_path}")
        return False, False

    new_text = text[:edit_start] + replacement + text[edit_end:]

    if dry_run:
        print(f"  [dry-run] would update {file_path}")
    else:
        with open(file_path, "w", encoding="utf-8", newline="") as fh:
            fh.write(new_text)
        print(f"  updated {file_path}")

    return True, False


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Migrate observedVectors/adoptedVectors into a unified 'edges' FeatureCollection array.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument("files", nargs="*", help=f"Files or glob patterns to scan (default: {DEFAULT_GLOB})")
    parser.add_argument("-y", "--yes", action="store_true", help="Non-interactive: accept every candidate")
    parser.add_argument("--dry-run", action="store_true", help="Show what would change without writing files")
    args = parser.parse_args(argv)

    if args.files:
        file_paths: list[Path] = []
        for pattern in args.files:
            matches = sorted(glob.glob(pattern))
            if matches:
                file_paths.extend(Path(m) for m in matches)
            else:
                file_paths.append(Path(pattern))
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

    changed_count = 0
    for file_path in file_paths:
        changed, quit_all = process_file(file_path, args.yes, args.dry_run)
        if changed:
            changed_count += 1
        if quit_all:
            print("\nStopped early at user request.")
            break

    verb = "Would update" if args.dry_run else "Updated"
    print(f"\n{verb} {changed_count} file(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
