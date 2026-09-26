# Editable production template

Use this as a form, not as a claim that every Seedance interface accepts every control. Replace the bracketed values with concrete facts, remove unused sections, and check the current entry point before naming settings or upload slots. All sample wording below is original to this Skill.

## Brief fields

| Field | Fill in |
| --- | --- |
| `concept` | One sentence describing the finished video |
| `subject` | Person, product, or object; visible identity details |
| `objective` | One observable outcome the viewer should see |
| `duration` / `ratio` | Requested total length and aspect ratio |
| `look` | Lighting, color, texture, location, period |
| `shots` | Ordered shot count and each shot's time range |
| `camera` | Per-shot framing and movement |
| `continuity` | Details that must persist, including hand/object position |
| `spatial_anchors` | For a doorway or similar transition: subject side, camera side, fixed hinge/contact point, and motion direction before and after the cut |
| `audio` | Ambience, effects, music, speech, or silence |
| `reference_assets` | Existing media, owner/rights, and intended control role |
| `entry_point` | Exact product UI or API the user will run |
| `budget` | Generation and retry limit |
| `acceptance` | Observable pass/fail conditions |

If the user has no concept, offer one clearly labeled fictional pilot. If the user provides a published prompt as inspiration, record its original link and creator separately; draft new wording and do not represent the adaptation as the creator's exact case prompt.

## 1. Master reference prompt, when identity matters

```text
Create a clean visual reference for [subject]. Show [fixed appearance or product features] in [neutral pose/view] against [simple background]. Use [look] with even lighting that makes the fixed features readable. Preserve [specific marks, proportions, colors, costume or packaging]. Avoid extra people, duplicated parts, text, logos, or accessories that are not in the brief. This is a reference image for visual consistency, not a frame from the final video.
```

Inspect the resulting image. Record its stable ID (for example, `Image1`) and which properties it may control. If no image tool is available, save this text as `character-prompt.txt` and mark the asset pending.

## 2. Storyboard prompt, when shot order or composition matters

```text
Create a [number]-panel storyboard in reading order for a [duration]-second [ratio] video. Each panel corresponds to exactly one shot and has a visible panel number. Keep [subject and fixed details] consistent across all panels. Use the same [look] throughout unless a shot explicitly changes it.

Panel 1, [start-end seconds]: [entry state]. [one visible action]. Camera: [framing/movement]. End state: [state].
Panel 2, [start-end seconds]: Begin from Panel 1 end state. [one visible action]. Camera: [framing/movement]. End state: [state].
[Continue through the final panel.]

Do not add panels, rearrange actions, or invent objects. Keep panel borders clear. This board fixes intended composition and order; it does not guarantee the video model will obey it.
```

Inspect the board for panel count, labels, identity, object continuity, and the physical side of any threshold or prop interaction. Compare each panel's depicted entry state and contact point to the written shot plan. Record its ID (for example, `Image2`). If the entry point cannot use a grid effectively, use per-shot keyframes or a shot list instead.

## 3. Final video prompt

```text
Goal: [concept and objective]. Create [duration] seconds at [ratio] in [look].

Reference map: [Image1] controls only [identity features]. [Image2] controls [panel order, composition, and main action]. [Other asset] controls only [motion/style/audio role]. Do not transfer [unwanted properties] from those references.

Shot 1, [start-end seconds]: Start with [entry state]. Show [one action] in [camera framing/movement]. End with [exit state]. Audio: [audio or silence].
Shot 2, [start-end seconds]: Continue from the prior exit state. Show [one action] in [camera framing/movement]. End with [exit state]. Audio: [audio or silence].
[Continue through the final shot.]

Continuity: Keep [identity/product details] consistent. Preserve [prop location, hand, direction of travel, lighting]. The shot order is [1 → 2 → ...].

Avoid: [only concrete failure modes relevant to this brief].
```

Use the actual upload order and role labels exposed by the chosen entry point. If that entry point has no way to give references separate roles, rewrite the reference map as plain-language guidance and treat role adherence as a QA item. Do not promise a deterministic identity or storyboard lock.

## Package and review

Write the chosen values into `brief.md`; record reference roles and usage rights in `reference-map.md`; turn the shot timing and state handoffs into `plan.json`; save the final text in `video-prompt.txt`. Run `scripts/validate_plan.py` on the JSON. Then inspect actual output against the `acceptance` conditions and [QA rubric](qa-rubric.md). Change the smallest faulty panel, reference, shot, or setting on retry and record what changed.
