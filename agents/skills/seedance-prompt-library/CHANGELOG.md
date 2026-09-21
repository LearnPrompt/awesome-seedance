# Changelog

## 0.3.0 (2026-09-22)

- 11 new templates distilled from the full 463-case library, which is now filed case by case under a template: retro found footage, travel and city walk, pet and animal leads, meme comedy, horror and suspense, epic fantasy and sci-fi, 3D cartoon, car and vehicle, fashion and portrait, sports and extreme, storyboard grid to video. 25 templates in total.
- Every template now carries a `copyPrompt`: a one-line lead-in with fill-in placeholders, for people who want to paste the template into any AI chat instead of installing the Skill. The same text opens the copy-ready block in `docs/templates/`.
- The reference is built from `data/style-library.json` merged with the repo-owned `data/templates-local.json`, so templates written in this repo survive the upstream sync.
- `.claude-plugin/marketplace.json` was still on 0.1.0; all three version fields now agree.
- No change to the SKILL.md workflow or the installer.

## 0.2.0 (2026-09-14)

- Template reference regenerated from the 2026-09 distillation: example links refreshed (e.g. the timeline template now points at `boa-hancock-water-obstacle-race-prompt`), spacing normalised between sections.
- No change to the SKILL.md workflow or the installer; `npx seedance-prompt-library install` behaves as before.

## 0.1.0 (2026-08-30)

- First release: 14 templates in 6 categories with structure, guidance, pitfalls and example cases, installable into Claude Code and Codex.
