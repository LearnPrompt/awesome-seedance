# Deliverables and plan contract

Write only artifacts the chosen route needs. Use one project directory and preserve the source files used for each generated artifact.

| File | Purpose |
| --- | --- |
| `brief.md` | Story, audience, look, duration, aspect ratio, platform, budget, rights and unknowns |
| `reference-map.md` | Stable media IDs; source; permitted use; what each controls and must not control |
| `plan.json` | Deterministic timeline and reference IDs for preflight |
| `character-prompt.txt`, `storyboard-prompt.txt` | Image prompts when reference art must be made |
| `storyboard.png` or shot keyframes | Checked visual plan for multi-shot generation |
| `video-prompt.txt` | Copy-ready final prompt with matching shot numbering and reference IDs |
| `run-manifest.json` | Actual model, platform, date, duration, ratio, resolution, seed if available, asset paths/hashes, task ID and output path; retain the raw output and record any derived edit with its source hash and time offset; no secret values |
| `qa.md` | Observable result, failure timestamps, targeted revisions and final state |

Minimal `plan.json` shape:

```json
{
  "duration_seconds": 12,
  "references": [
    {"id": "Image1", "role": "identity"},
    {"id": "Image2", "role": "storyboard"}
  ],
  "shots": [
    {"id": 1, "start": 0, "end": 3, "action": "approach the door", "camera": "wide exterior", "audio": "footsteps", "entry_state": "outside, envelope in right hand", "exit_state": "at door, envelope in right hand", "references": ["Image1", "Image2"]},
    {"id": 2, "start": 3, "end": 6, "action": "open the door", "camera": "medium threshold", "audio": "door handle", "entry_state": "at door, envelope in right hand", "exit_state": "inside, envelope in right hand", "references": ["Image1", "Image2"]},
    {"id": 3, "start": 6, "end": 9, "action": "place envelope on counter", "camera": "medium interior", "audio": "paper on wood", "entry_state": "inside, envelope in right hand", "exit_state": "inside, envelope on counter", "references": ["Image1", "Image2"]},
    {"id": 4, "start": 9, "end": 12, "action": "walk toward exit", "camera": "wide interior", "audio": "footsteps", "entry_state": "inside, envelope on counter", "exit_state": "at exit, envelope on counter", "references": ["Image1", "Image2"]}
  ]
}
```

The script checks timeline arithmetic, numbering, required fields and reference IDs. The agent must still verify semantic handoff and visual continuity. Use `audio: "silent"` when the brief calls for silence.
