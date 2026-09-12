# Contributing to Awesome Seedance

Thanks for wanting to help. This list works differently from most awesome lists: **prompt entries are not accepted as pull requests.** Everything under `data/` is exported from the [goodcase.ai](https://goodcase.ai) review pipeline, and every visible file (`README.md`, `README_zh.md`, `docs/`, the Skill reference) is generated from that data. Hand edits to generated files are overwritten on the next run.

## Submitting a prompt case

1. Go to [goodcase.ai/submit](https://goodcase.ai/submit).
2. Provide the **original post** where the creator published the prompt (X, Xiaohongshu, Bilibili, Douyin, YouTube, a blog, etc.), the full prompt text, and the output video or poster.
3. Name the model as precisely as the source does (`Seedance 2.5`, `Seedance 2.0`, or just `Seedance` if the post doesn't say). Do not guess a version.
4. Once a case passes review and ranks on heat score, it is exported here automatically (daily) and appears in the next regenerated README.

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
- **Generator bugs, rendering issues, Skill improvements:** pull requests welcome. Change `scripts/` (and add or update a test in `scripts/lib/render.test.mjs`), run `npm test`, then `npm run generate`, and commit the regenerated files together with your change.

## How the README is generated

```bash
npm test          # unit tests for scripts/lib/render.mjs
npm run generate  # regenerates README.md, README_zh.md, docs/gallery-*.md and the Skill reference
```

- `scripts/generate-readme.mjs` builds both READMEs (intro, statistics, featured entries, cross-model retests, templates, the Top 30 table, gallery links) and the sharded galleries under `docs/`. Galleries are split per Seedance version and kept under ~350KB per file so GitHub renders them.
- `scripts/generate-skill-reference.mjs` builds `agents/skills/seedance-prompt-library/references/style-library.md` from `data/style-library.json`.
- `.github/workflows/update-readme.yml` runs the same two commands on every change to `data/` or `scripts/` and commits the result, so you never need to regenerate by hand on `main`.

Please keep pull requests focused: code and tests in one PR, regenerated output in the same PR only when your code change affects it.

## Code of conduct

By participating you agree to the [code of conduct](./code-of-conduct.md).
