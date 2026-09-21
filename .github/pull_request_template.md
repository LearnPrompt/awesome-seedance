<!-- Pick the block that matches your PR and delete the other. -->

## Case submission (files under `submissions/`)

- [ ] One JSON file per case, copied from `submissions/TEMPLATE.json`, every field filled
- [ ] `sourceUrl` is the creator's **original** post (not an aggregator or repost)
- [ ] `promptFull` is the prompt exactly as the creator published it
- [ ] `models` names the model the way the source does (`Seedance 2.5`, `Seedance 2.0`, or `Seedance`; a bare tag is filed by the post's own wording, 2.0 when it names no version)
- [ ] I have read the [collection standards](https://goodcase.ai/standards) and [contributing.md](../contributing.md)

The `Validate submissions` check runs automatically. A maintainer pushes accepted cases through goodcase.ai's review; they land in `data/` on the next export and this file is then removed.

## Code / template change

- [ ] Source changed under `scripts/`, `agents/` or `data/templates-local.json` / `data/case-taxonomy.json` (not the generated files, and not `data/style-library.json`, which the upstream sync rewrites)
- [ ] `npm test` passes and `npm run generate` was run; regenerated files are in this PR
- [ ] Tests added or updated in `scripts/lib/*.test.mjs` for renderer changes

What changed and why:
