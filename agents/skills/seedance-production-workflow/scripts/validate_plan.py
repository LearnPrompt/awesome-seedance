#!/usr/bin/env python3
"""Check deterministic timing and reference invariants in a Seedance plan."""

import json
import math
import sys
from pathlib import Path


def validate(plan: dict) -> list[str]:
    errors: list[str] = []
    duration = plan.get("duration_seconds")
    if isinstance(duration, bool) or not isinstance(duration, (int, float)) or not math.isfinite(duration) or duration <= 0:
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
            errors.append(f"duplicate reference id: {ref['id']}")
        ref_ids.add(ref["id"])

    shots = plan.get("shots")
    if not isinstance(shots, list) or not shots:
        return errors + ["shots must be a nonempty list"]
    previous_end = 0.0
    for i, shot in enumerate(shots, 1):
        if not isinstance(shot, dict):
            errors.append(f"shot {i} must be an object")
            continue
        if shot.get("id") != i:
            errors.append(f"shot {i} id must be {i}")
        start, end = shot.get("start"), shot.get("end")
        numbers_ok = all(isinstance(x, (int, float)) and not isinstance(x, bool) and math.isfinite(x) for x in (start, end))
        if not numbers_ok:
            errors.append(f"shot {i} start/end must be finite numbers")
            continue
        if not math.isclose(start, previous_end, abs_tol=1e-6):
            errors.append(f"shot {i} starts at {start}, expected {previous_end}")
        if end <= start:
            errors.append(f"shot {i} end must exceed start")
        previous_end = end
        for field in ("action", "camera", "audio", "entry_state", "exit_state"):
            if not isinstance(shot.get(field), str) or not shot[field].strip():
                errors.append(f"shot {i} needs {field}")
        used = shot.get("references", [])
        if not isinstance(used, list) or any(not isinstance(x, str) for x in used):
            errors.append(f"shot {i} references must be a list of IDs")
        else:
            for ref in used:
                if ref not in ref_ids:
                    errors.append(f"shot {i} uses unknown reference: {ref}")
    if not math.isclose(previous_end, duration, abs_tol=1e-6):
        errors.append(f"shots end at {previous_end}, expected duration {duration}")
    return errors


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: validate_plan.py <plan.json>", file=sys.stderr)
        return 2
    try:
        plan = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
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
