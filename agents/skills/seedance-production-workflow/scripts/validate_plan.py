#!/usr/bin/env python3
"""Check deterministic timing and reference invariants in a Seedance plan."""

from __future__ import annotations

import json
import math
import sys
from pathlib import Path


def _finite_number(value) -> bool:
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        return False
    try:
        return math.isfinite(float(value))
    except OverflowError:
        return False


def _short(value) -> str:
    text = repr(value)
    return text if len(text) <= 80 else text[:77] + "..."


def validate(plan: dict) -> list[str]:
    errors: list[str] = []
    duration = plan.get("duration_seconds")
    if not _finite_number(duration) or duration <= 0:
        return ["duration_seconds must be a positive finite number"]

    references = plan.get("references", [])
    if not isinstance(references, list):
        return ["references must be a list"]
    ref_ids: set[str] = set()
    for i, ref in enumerate(references, 1):
        if not isinstance(ref, dict) or not isinstance(ref.get("id"), str) or not ref["id"].strip():
            errors.append(f"reference {i} needs a nonempty id")
            continue
        if ref["id"] in ref_ids:
            errors.append(f"duplicate reference id: {_short(ref['id'])}")
        ref_ids.add(ref["id"])

    shots = plan.get("shots")
    if not isinstance(shots, list) or not shots:
        return errors + ["shots must be a nonempty list"]
    previous_end: float | None = 0.0
    used_ids: set[str] = set()
    for i, shot in enumerate(shots, 1):
        if not isinstance(shot, dict):
            errors.append(f"shot {i} must be an object")
            continue
        shot_id = shot.get("id")
        if not (isinstance(shot_id, int) and not isinstance(shot_id, bool) and shot_id == i):
            errors.append(f"shot {i} id must be {i}")
        for field in ("action", "camera", "audio", "entry_state", "exit_state"):
            if not isinstance(shot.get(field), str) or not shot[field].strip():
                errors.append(f"shot {i} needs {field}")
        used = shot.get("references", [])
        if not isinstance(used, list) or any(not isinstance(x, str) for x in used):
            errors.append(f"shot {i} references must be a list of IDs")
        else:
            for ref in used:
                used_ids.add(ref)
                if ref not in ref_ids:
                    errors.append(f"shot {i} uses unknown reference: {_short(ref)}")
        start, end = shot.get("start"), shot.get("end")
        if not all(_finite_number(x) for x in (start, end)):
            errors.append(f"shot {i} start/end must be finite numbers")
            previous_end = None
            continue
        if previous_end is not None and not math.isclose(start, previous_end, abs_tol=1e-6):
            errors.append(f"shot {i} starts at {start}, expected {previous_end}")
        if end <= start:
            errors.append(f"shot {i} end must exceed start")
        previous_end = end
    if previous_end is not None and not math.isclose(previous_end, duration, abs_tol=1e-6):
        errors.append(f"shots end at {previous_end}, expected duration {duration}")
    for ref in references:
        ref_id = ref.get("id") if isinstance(ref, dict) else None
        if isinstance(ref_id, str) and ref_id.strip() and ref_id not in used_ids:
            errors.append(f"reference {_short(ref_id)} is declared but no shot uses it")
    return errors


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: validate_plan.py <plan.json>", file=sys.stderr)
        return 2
    try:
        plan = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    except (OSError, ValueError, RecursionError) as exc:
        print(f"cannot read plan: {exc}", file=sys.stderr)
        return 2
    if not isinstance(plan, dict):
        print("plan must be a JSON object", file=sys.stderr)
        return 2
    errors = validate(plan)
    for error in errors:
        print(f"- {error}", file=sys.stderr)
    if errors:
        return 1
    print("plan timing and reference IDs: OK")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
