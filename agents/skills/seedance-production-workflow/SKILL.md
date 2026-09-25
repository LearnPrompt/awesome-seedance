---
name: seedance-production-workflow
description: Plan and carry a Seedance video from brief through references, storyboard, generation handoff, shot-level review, and targeted repair. Use for an end-to-end Seedance production request; use a narrower prompt skill for a single prompt.
---

# Seedance production workflow

Produce a traceable video package, not just a polished prompt. Distinguish `planned`, `assets-ready`, `submitted`, `generated`, and `reviewed` states. Never call a prompt or an unrun storyboard a completed video.

This Skill coordinates production and review. For case-backed prompt structure, use the repository's [timeline](https://github.com/LearnPrompt/awesome-seedance/blob/main/docs/templates/en/timeline-shot-script.md), [reference-image identity](https://github.com/LearnPrompt/awesome-seedance/blob/main/docs/templates/en/character-reference-lock.md), or [storyboard grid](https://github.com/LearnPrompt/awesome-seedance/blob/main/docs/templates/en/storyboard-grid-to-video.md) template when it fits. Those cases support the prompt structures; they do not prove that this end-to-end workflow improves final-video quality. Treat that as a test question.

## Route the project

1. Collect only missing essentials: story or product, intended viewer, duration, aspect ratio, desired look, must-have actions, audio/dialogue, existing reference assets, target Seedance entry point, and the user's time or generation budget. Use a fictional subject for a pilot when the user has not chosen one and say so.
2. Choose the simplest control structure that fits the brief:
   - One continuous shot: a timed action and camera plan may be enough.
   - Multi-shot with exact order or composition: shot list plus numbered storyboard grid or per-shot keyframes.
   - Identity/product-sensitive: add a master reference and an explicit inherit / do-not-inherit map.
   - Complex choreography: use authorized motion video or spatial/clay reference if the entry point supports it.
   - Longer than one generation: plan a native extension first where available; otherwise plan a segment handoff using the prior video or returned last frame, and verify the join.
3. Check current model and entry-point limits in [provider capabilities](references/provider-capabilities.md) before fixing duration, media count, resolution, or an API route. A supported model capability does not prove that the user's account exposes it.

## Prepare the inputs

Write `brief.md`, `reference-map.md`, `plan.json`, and the needed prompts in a project directory. Use [the editable template](references/editable-template.md) to collect inputs and draft original prompts; use [deliverable definitions](references/deliverables.md) for fields and state handoff. References need stable IDs, source/rights status, the properties they control, and properties they must not control. Do not copy a creator's complete published prompt into a new original case; cite an anchor case and adapt the structure.

For multi-shot work, each shot needs a start/end time, one visible action, a camera framing, entry state, exit state, and audio. Make the next shot start from the preceding exit state. For a threshold or object interaction, also fix the subject's side, camera side, contact point, and motion direction across the cut. Generate or request the character/product reference and storyboard; compare every panel against the written entry/exit states before sending them to Seedance. A panel that puts a person on the wrong side of a door can override a correct text prompt. If an image tool is unavailable, deliver exact image prompts and mark the images pending.

Run the `scripts/validate_plan.py` located beside this SKILL.md against `<project>/plan.json` using its absolute path. Resolve reported duration, order, or missing-reference errors before video generation. Visually check image identity and panel order as well; the script cannot judge those.

## Generate and inspect

Return a copy-ready Seedance prompt plus an ordered reference upload map and actual settings. Explain which image controls identity, which controls storyboard/layout, and which controls motion, style, or audio. A storyboard grid is optional for simple shots. Keep text and visual instructions consistent.

When an authorized and available video tool/API exists, submit the request, save task ID and settings in `run-manifest.json`, retrieve the result, and inspect it. Generation can incur credits and may upload assets: obtain authorization for the actual service, assets, and spend before that external step. Never read or publish credentials. If there is no usable video tool, give exact UI handoff instructions and mark the project `assets-ready`, then resume QA when the user supplies the output.

Review the actual video using [the QA rubric](references/qa-rubric.md). Record failures with shot/time, observation, and narrow repair. Use local or timestamped edits when possible; otherwise revise only the faulty reference, panel, or shot prompt. Compare against the same model/settings when assessing an improvement. Respect the agreed retry or cost limit, and report remaining failures honestly.

If a local trim or other post-processing is selected, retain the unedited model output and record the source hash, edit operation, derived file, and time offset in the run manifest. Review the delivered edit as well as the source; never present an edited preview as a direct model generation.

## Finish

Deliver the video or generation handoff, input manifest, storyboard/shot list, prompt, model/settings, QA record, and provenance. Keep personal source media and credentials out of public Git. If the user later requests a case PR, verify the original public post, exact published prompt, matching media, date, creator, model, and repository submission rules. A workflow Skill PR follows a different path; see the repository's current `contributing.md` before editing it.
