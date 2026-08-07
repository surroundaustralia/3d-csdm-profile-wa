#!/usr/bin/env python3
"""
validate_bblocks.py
====================
Validate local data files against OGC Building Blocks (bblocks) JSON Schemas,
using the bblocks-client-python library.

Install:
    pip install "bblocks_client[jsonschema]"      # JSON Schema validation
    pip install "bblocks_client[all]"             # + SHACL validation (--shacl), needs rdflib/pyshacl
    pip install pyyaml                            # optional, to validate .yaml/.yml files

Usage:
    # Validate specific files against one bblock
    python validate_bblocks.py data/parcel1.json data/parcel2.json --bblock ogc.geo.topo.features.topo-solid

    # Validate files listed in a CSV (columns: file,bblock -- bblock may be left blank
    # for a file, in which case you'll be prompted interactively)
    python validate_bblocks.py --csv validation-targets.csv

    # No --bblock given: pick interactively from the blocks in the current register
    python validate_bblocks.py data/parcel1.json

    # Point at a different register (defaults to this repo's own published register)
    python validate_bblocks.py data/parcel1.json --bblock ogc.foo.bar --register https://example.org/build/register.json

    # Also run SHACL validation (semantic uplift + shapes), where the block declares shapes
    python validate_bblocks.py data/parcel1.json --bblock ogc.foo.bar --shacl

    # Write a machine-readable summary
    python validate_bblocks.py --csv validation-targets.csv --report report.json

CSV format (for --csv):
    file,bblock
    data/parcel1.json,ogc.geo.topo.features.topo-feature-multi-collection
    data/parcel2.json,
    data/parcel3.json,ogc.geo.topo.features.topo-solid

A blank/missing "bblock" cell triggers the same interactive picker used when no
--bblock is given on the command line.

Exit codes: 0 = every file validated successfully, 1 = at least one failure or
error, 2 = usage/configuration problem (bad args, missing deps, bad CSV, etc.)
"""
from __future__ import annotations

import argparse
import csv
import json
import os
import sys
from dataclasses import dataclass, field
from difflib import get_close_matches
from pathlib import Path
from typing import Any

# Default register for this repo. Override with --register or the
# BBLOCKS_REGISTER_URL environment variable when reusing this script elsewhere.
DEFAULT_REGISTER_URL = os.environ.get(
    "BBLOCKS_REGISTER_URL",
    "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/register.json",
)


def _import_client():
    try:
        from ogc.bblocks.register import load_register, BuildingBlockRegister, BuildingBlockSummary
        from ogc.bblocks.validate import validate_json, ValidationResult
    except ImportError as e:
        sys.exit(
            "error: bblocks-client-python is not installed (or missing the 'jsonschema' extra).\n"
            "  pip install \"bblocks_client[jsonschema]\"\n"
            f"  ({e})"
        )
    return load_register, BuildingBlockRegister, BuildingBlockSummary, validate_json, ValidationResult


@dataclass
class Target:
    file: str
    bblock: str | None
    source: str = "cli"  # "cli", "csv:<path>:<line>" -- for error messages


@dataclass
class Outcome:
    file: str
    bblock: str | None
    ok: bool
    stage: str  # "resolve" | "load" | "json" | "shacl"
    message: str = ""
    extra: dict[str, Any] = field(default_factory=dict)


def load_data_file(path: Path) -> Any:
    suffix = path.suffix.lower()
    text = path.read_text(encoding="utf-8")
    if suffix in (".yaml", ".yml"):
        try:
            import yaml
        except ImportError:
            raise RuntimeError(
                f"{path}: PyYAML is required to load .yaml/.yml files (pip install pyyaml)"
            )
        return yaml.safe_load(text)
    return json.loads(text)


def list_local_bblocks(register) -> list:
    """Blocks in the *current* register only (not walking imports), sorted by identifier."""
    return sorted(register.bblocks.values(), key=lambda b: b.item_identifier)


def prompt_for_bblock(register, context: str = "") -> str | None:
    """Interactive numbered menu over the current register's blocks.

    Returns the chosen identifier, or None if the user cancelled (blank input).
    Supports typing a number, an exact identifier, or a substring to filter the
    list down before choosing.
    """
    if not sys.stdin.isatty():
        sys.exit(
            "error: no --bblock given and this is not an interactive terminal "
            "(stdin is not a TTY) -- pass --bblock or use --csv with a 'bblock' column."
        )

    blocks = list_local_bblocks(register)
    if not blocks:
        sys.exit(f"error: register {register.url!r} has no blocks to choose from")

    candidates = blocks
    while True:
        label = f" for {context}" if context else ""
        print(f"\nAvailable building blocks{label} (in {register.name or register.url}):")
        for i, b in enumerate(candidates, start=1):
            status = f" [{getattr(b.status, 'value', b.status)}]" if b.status else ""
            print(f"  {i:>3}. {b.item_identifier}{status}  -  {b.name}")
        prompt = (
            "\nEnter a number, a full identifier, or text to filter "
            "(blank to cancel): "
        )
        try:
            choice = input(prompt).strip()
        except (EOFError, KeyboardInterrupt):
            print()
            return None

        if not choice:
            return None

        if choice.isdigit():
            idx = int(choice)
            if 1 <= idx <= len(candidates):
                return candidates[idx - 1].item_identifier
            print(f"'{choice}' is out of range.")
            continue

        exact = register.get_item_summary(choice)
        if exact is not None:
            return exact.item_identifier

        filtered = [
            b for b in candidates
            if choice.lower() in b.item_identifier.lower() or choice.lower() in (b.name or "").lower()
        ]
        if not filtered:
            print(f"No blocks match {choice!r}. Try again.")
            continue
        if len(filtered) == 1:
            return filtered[0].item_identifier
        candidates = filtered


def read_csv_targets(csv_path: Path) -> list[Target]:
    targets: list[Target] = []
    with csv_path.open(newline="", encoding="utf-8-sig") as fh:
        reader = csv.DictReader(fh)
        if reader.fieldnames is None:
            sys.exit(f"error: {csv_path} is empty")
        fields = {name.strip().lower(): name for name in reader.fieldnames}
        if "file" not in fields:
            sys.exit(
                f"error: {csv_path} must have a 'file' column "
                f"(found columns: {', '.join(reader.fieldnames)})"
            )
        file_col = fields["file"]
        bblock_col = fields.get("bblock")
        for lineno, row in enumerate(reader, start=2):  # header is line 1
            file_val = (row.get(file_col) or "").strip()
            if not file_val:
                continue
            bblock_val = (row.get(bblock_col) or "").strip() if bblock_col else ""
            targets.append(
                Target(file=file_val, bblock=bblock_val or None, source=f"{csv_path}:{lineno}")
            )
    return targets


def resolve_file_path(raw: str, base_dir: Path) -> Path:
    p = Path(raw)
    if p.is_file():
        return p
    candidate = base_dir / raw
    if candidate.is_file():
        return candidate
    return p  # let the caller report the missing-file error uniformly


def validate_target(register, validate_json, target: Target) -> list[Outcome]:
    outcomes: list[Outcome] = []
    file_path = Path(target.file)

    if not file_path.is_file():
        return [Outcome(target.file, target.bblock, False, "load", f"file not found: {file_path}")]

    bblock_id = target.bblock
    if not bblock_id:
        bblock_id = prompt_for_bblock(register, context=str(file_path))
        if not bblock_id:
            return [Outcome(target.file, None, False, "resolve", "no bblock selected (cancelled)")]

    summary = register.get_item_summary(bblock_id)
    if summary is None:
        blocks = list_local_bblocks(register)
        suggestions = get_close_matches(bblock_id, [b.item_identifier for b in blocks], n=3)
        hint = f" Did you mean: {', '.join(suggestions)}?" if suggestions else ""
        return [Outcome(target.file, bblock_id, False, "resolve", f"unknown bblock {bblock_id!r}.{hint}")]

    try:
        data = load_data_file(file_path)
    except Exception as e:
        return [Outcome(target.file, bblock_id, False, "load", str(e))]

    try:
        report = validate_json(summary, data)
    except Exception as e:
        return [Outcome(target.file, bblock_id, False, "json", f"validator error: {e}")]

    if report.valid:
        outcomes.append(Outcome(target.file, bblock_id, True, "json", "schema validation passed"))
    else:
        outcomes.append(Outcome(target.file, bblock_id, False, "json", str(report.exception)))

    return outcomes


def validate_target_shacl(register, target: Target, bblock_id: str) -> Outcome | None:
    try:
        from ogc.bblocks.semantic_uplift import uplift_json
        from ogc.bblocks.validate import validate_shacl
    except ImportError:
        return Outcome(
            target.file, bblock_id, False, "shacl",
            "SHACL requested but rdflib/pyshacl not installed (pip install \"bblocks_client[rdf]\")",
        )

    summary = register.get_item_summary(bblock_id)
    if summary is None or not summary.shacl_shapes:
        return None  # nothing to check; not a failure

    try:
        data = load_data_file(Path(target.file))
        graph = uplift_json(summary, data)
        report = validate_shacl(summary, graph)
    except Exception as e:
        return Outcome(target.file, bblock_id, False, "shacl", f"SHACL run error: {e}")

    if report.valid:
        return Outcome(target.file, bblock_id, True, "shacl", "SHACL validation passed")
    return Outcome(target.file, bblock_id, False, "shacl", report.report or "SHACL validation failed")


def build_targets(args) -> list[Target]:
    targets: list[Target] = []

    if args.csv:
        csv_path = Path(args.csv)
        if not csv_path.is_file():
            sys.exit(f"error: --csv file not found: {csv_path}")
        csv_targets = read_csv_targets(csv_path)
        for t in csv_targets:
            resolved = resolve_file_path(t.file, csv_path.parent)
            t.file = str(resolved)
        targets.extend(csv_targets)

    for f in args.files:
        targets.append(Target(file=f, bblock=args.bblock, source="cli"))

    if not targets:
        sys.exit("error: no files given -- pass file paths, --csv, or both (see --help)")

    return targets


def print_summary(outcomes: list[Outcome], quiet: bool) -> bool:
    all_ok = True
    for o in outcomes:
        status = "PASS" if o.ok else "FAIL"
        if not o.ok:
            all_ok = False
        if o.ok and quiet:
            continue
        bblock = o.bblock or "?"
        print(f"[{status}] {o.file}  ({o.stage} / {bblock})")
        if not o.ok or not quiet:
            for line in o.message.splitlines() or [o.message]:
                print(f"       {line}")

    passed = sum(1 for o in outcomes if o.ok)
    print(f"\n{passed}/{len(outcomes)} checks passed")
    return all_ok


def write_report(path: str, outcomes: list[Outcome]) -> None:
    payload = [
        {"file": o.file, "bblock": o.bblock, "ok": o.ok, "stage": o.stage, "message": o.message}
        for o in outcomes
    ]
    Path(path).write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print(f"Wrote report to {path}")


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Validate local data files against OGC Building Blocks JSON Schemas.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument("files", nargs="*", help="Files to validate")
    parser.add_argument("-b", "--bblock", help="bblock identifier to validate all given FILES against")
    parser.add_argument("-c", "--csv", help="CSV file mapping file -> bblock (columns: file,bblock)")
    parser.add_argument(
        "-r", "--register", default=DEFAULT_REGISTER_URL,
        help=f"Register URL to load (default: {DEFAULT_REGISTER_URL})",
    )
    parser.add_argument(
        "--load-dependencies", dest="load_dependencies", action="store_true", default=True,
        help="Follow the register's 'imports' to resolve blocks from dependency registers (default)",
    )
    parser.add_argument(
        "--no-load-dependencies", dest="load_dependencies", action="store_false",
        help="Only resolve blocks from the target register itself",
    )
    parser.add_argument(
        "--shacl", action="store_true",
        help="Also run SHACL validation (semantic uplift + shapes) for blocks that declare shapes",
    )
    parser.add_argument("-o", "--report", help="Write a JSON summary report to this path")
    parser.add_argument("-q", "--quiet", action="store_true", help="Only print failures")
    args = parser.parse_args(argv)

    load_register, _, _, validate_json, _ = _import_client()

    targets = build_targets(args)

    print(f"Loading register: {args.register}")
    try:
        register = load_register(args.register, load_dependencies=args.load_dependencies)
    except Exception as e:
        sys.exit(f"error: failed to load register {args.register!r}: {e}")

    outcomes: list[Outcome] = []
    for target in targets:
        result = validate_target(register, validate_json, target)
        outcomes.extend(result)

        if args.shacl and result and result[-1].ok and result[-1].bblock:
            shacl_outcome = validate_target_shacl(register, target, result[-1].bblock)
            if shacl_outcome is not None:
                outcomes.append(shacl_outcome)

    all_ok = print_summary(outcomes, args.quiet)

    if args.report:
        write_report(args.report, outcomes)

    return 0 if all_ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
