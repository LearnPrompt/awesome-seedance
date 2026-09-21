# Contributing to Awesome Seedance

Thanks for wanting to help. This list works differently from most awesome lists: **prompt entries are not accepted as pull requests.** Everything under `data/` is exported from the [goodcase.ai](https://goodcase.ai) review pipeline, and every visible file (`README.md`, `README_zh.md`, `docs/`, the Skill reference) is generated from that data. Hand edits to generated files are overwritten on the next run.

## Submitting a prompt case

1. Go to [goodcase.ai/submit](https://goodcase.ai/submit).
2. Provide the **original post** where the creator published the prompt (X, Xiaohongshu, Bilibili, Douyin, YouTube, a blog, etc.), the full prompt text, and the output video or poster.
3. Name the model as precisely as the source does (`Seedance 2.5`, `Seedance 2.0`, or just `Seedance` if the post doesn't say). Do not guess a version. A bare `Seedance` tag is still accepted in the data; at display time the generator files the case under the version named in the post's own title or caption, and under 2.0 when the post names none, so the README never shows an unversioned bucket.
4. Once a case passes review and ranks on heat score, it is exported here automatically (daily) and appears in the next regenerated README.

Prefer GitHub? Copy [`submissions/TEMPLATE.json`](./submissions/TEMPLATE.json) to `submissions/<slug>.json`, fill every field, and open a pull request. The `Validate submissions` check runs on the PR (required fields, original-source URL, model names, no duplicate of a case already in `data/`), `CODEOWNERS` requests a maintainer review automatically, and the maintainer pushes accepted cases through the same goodcase.ai review; see [`submissions/README.md`](./submissions/README.md). Run the check locally with `npm run validate:submissions`.

## Source-verification standard

Every entry must be checkable against a public primary source. Reviewers confirm, per the [goodcase.ai collection standards](https://goodcase.ai/standards) (in force since 2026-08-05):

- The prompt text in the submission matches what the creator actually published, not a paraphrase.
- The output media belongs to that post and that prompt.
- Author handle, platform, and publish date are recorded so the entry can be traced later.
- The model line named in the entry is the one the creator named.

Entries are additionally re-run on other video models where possible; verdicts, scores and output artifacts are logged publicly on each case's goodcase.ai page and summarised in the README.

## What gets rejected

- Prompts reverse-engineered from an output video with no source post.
- Prompts copied from a secondary aggregator without the original creator's post.
- Submissions where the media does not match the prompt or the claimed model.
- Duplicates of a case already in the library (the earliest verified source wins).
- Content that violates the original platform's rules or the creator's stated reuse terms.

## Fixing something that is wrong

- **Wrong attribution, broken source link, wrong model version, takedown request:** open a GitHub issue with the entry's slug (the last segment of its goodcase.ai URL) and the original source link. Fixes and removals land in `data/` on the next export and propagate to every generated file.
- **Generator bugs, rendering issues, Skill improvements, template wording, a new category template, a better copy-ready lead-in, English title or summary corrections:** pull requests welcome. Change the source (`scripts/`, `agents/`, or `data/templates-local.json`; add or update a test under `scripts/lib/*.test.mjs` for renderer changes), run `npm test`, then `npm run generate`, and commit the regenerated files together with your change.

## How the README is generated

```bash
npm test          # unit tests for everything under scripts/lib/
npm run generate  # regenerates README.md, README_zh.md, README_ja.md, docs/gallery*.md, docs/templates/, assets/hero.svg, data/stats.json and the Skill reference
```

- `data/site.json` holds goodcase.ai site-wide numbers (total cases, creators, video cases, video Skills) and the retest spend; refresh it with `node scripts/fetch-site-stats.mjs`. `data/skills.json` lists the Skills in the README grid: titles, descriptions and install lines are hand-written, the same script refreshes each Skill's creator variants and cover from goodcase.ai. `scripts/fetch-retest-posters.mjs` (needs ffmpeg) extracts a frame from each showcase retest video into `assets/retests/`; the generator falls back to a plain link when a frame is missing.
- `scripts/generate-readme.mjs` builds the three READMEs (English, Chinese, Japanese; case titles and template text stay English in the Japanese edition) (hero banner, badges, the Start Here path, the template grid, the Skill grid, the Top 30 table, cross-model retest spotlight, gallery links), the gallery index `docs/gallery.md` and the sharded galleries under `docs/`, plus one copy-ready file per template under `docs/templates/zh/` and `docs/templates/en/` (the Japanese README links to the English files). Galleries are split per Seedance version and kept under ~350KB per file so GitHub renders them. The Top 30 collapses same-creator prompt series (same author, same opening, ≥20% shared trigrams) to the earliest post; galleries and statistics stay complete. It also writes `assets/hero.svg` (the banner, numbers baked in) and `data/stats.json` (read by the shields.io dynamic badges at the top of the README, so the counts update with every data sync).
- `scripts/lib/render.mjs` holds the entry, table and gallery renderers; `scripts/lib/sections.mjs` holds the badges, retest spotlight, hero SVG and gallery index; `scripts/lib/templates.mjs` holds the Start Here path, the template grid, the Skill grid and the per-template files. All are pure functions over the data, each with a matching `*.test.mjs`. In-page anchors are always computed from the localized heading, never hard-coded, and headings must not use emoji that carry a U+FE0F variation selector (GitHub keeps it in the anchor).
- Templates come from three files, merged by `scripts/lib/library.mjs`. `data/style-library.json` is an export of the private distillation pipeline and is rewritten by its sync script, so do not hand-edit it. `data/templates-local.json` is the repo-owned layer: `overrides` patches an upstream template by id (Japanese titles, the `copyPrompt` lead-in with its 【】 / [ ] placeholders), `templates` holds templates that only exist here. `data/case-taxonomy.json` files every case under one template (`slug → templateId`, or `null` to leave a case unfiled on purpose); an unknown template id fails the build, a slug that has been delisted upstream is ignored. New cases arrive daily, so run `npm run taxonomy:todo` to list what is not filed yet.
- `scripts/generate-skill-reference.mjs` builds `agents/skills/seedance-prompt-library/references/style-library.md` from the same merged library, so the installable Skill always carries every template on the README.
- `.github/workflows/update-readme.yml` runs the same two commands on every change to `data/` or `scripts/` and commits the result, so you never need to regenerate by hand on `main`. `.github/workflows/refresh-site-stats.yml` runs daily at 09:30 Beijing time: it refreshes `data/site.json` from goodcase.ai, re-extracts the retest poster frames, and regenerates. `.github/workflows/validate-submissions.yml` checks `submissions/*.json` on pull requests.

Please keep pull requests focused: code and tests in one PR, regenerated output in the same PR only when your code change affects it.

## Code of conduct

By participating you agree to the [code of conduct](./code-of-conduct.md).
