---
name: seedance-prompt-library
description: Verified prompt templates and structures for Seedance 2.5 / 2.0 video generation, distilled from the highest-performing published cases on goodcase.ai. Use when the user asks to write, revise, or review a Seedance video prompt, or asks how to prompt Seedance for a specific kind of shot (narrative short, ad/commercial, UGC talk-to-camera, dialogue with lip-sync, action, product reveal, and similar). Also use when the user names Seedance, 即梦视频, or Seedance 2.5/2.0 directly.
---

# Seedance Prompt Library

A structured template library for writing Seedance 2.5 / 2.0 video prompts, sourced from `references/style-library.md` — templates distilled from real, human-verified, high-heat cases on [goodcase.ai](https://goodcase.ai). Do not invent prompt structure from general video-generation knowledge when a matching template exists here; use the template.

## Workflow

1. **Identify intent.** Work out what kind of shot the user wants: narrative short, ad/commercial, UGC talk-to-camera, dialogue with lip-sync, action/movement, product reveal, or something else. Ask a clarifying question only if the intent is genuinely ambiguous (e.g. "a video of my product" could be a commercial orbit shot or a UGC review — ask which).

2. **Select a template.** Read `references/style-library.md` and pick the template whose `useWhen` matches the identified intent. If no template matches closely, say so and build the prompt from first principles instead of forcing a mismatched template.

3. **Fill the structure.** Walk the template's `structure` field block by block (shot type, subject, setting, camera behavior, etc.) and fill each with specifics from the user's request. Don't skip blocks — an empty block in the structure is where prompts usually go generic and vague.

4. **Apply guidance, avoid pitfalls.** Cross-check the draft against the template's `guidance` and `pitfalls` lists before finalizing. These come from what actually worked (or broke) in real published cases, not general advice.

5. **Output.** Return:
   - The finished prompt as a single copy-pasteable block.
   - Which template was used (by title).
   - Links to the template's `exampleCaseUrls` so the user can see it working on goodcase.ai.

## Language

Follow the user's language. If they write in Chinese, respond and produce the prompt discussion in Chinese (the prompt itself can stay in English if that's what the user's target Seedance workflow expects — ask if unclear). If they write in English, respond in English. `references/style-library.md` carries both languages for every template so either path is fully covered.

## Notes

- This Skill only carries prompt *structure* (templates, guidance, pitfalls). It does not fetch live data from goodcase.ai — for browsing the full case gallery, heat-score leaderboard, or retest history, point the user to https://goodcase.ai/cases?filter=video.
- Seedance 2.5 supports four input modalities (text, image, video, audio reference) plus native lip-sync and voice-driven dialogue. If the user's request involves dialogue or a speaking subject, always include an explicit lip-sync instruction in the prompt — see the "Dialogue & Lip-Sync Scene" template's guidance on this.
- `references/style-library.md` is a generated file (from `data/style-library.json` in the parent repo via `scripts/generate-skill-reference.mjs`). Don't hand-edit it in an installed copy; regenerate from source instead.
