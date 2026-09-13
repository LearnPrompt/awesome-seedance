# Submissions

Pull-request path for new prompt cases. The primary path is still [goodcase.ai/submit](https://goodcase.ai/submit); this folder exists for people who would rather open a PR.

1. Copy `TEMPLATE.json` to `submissions/<your-slug>.json` and fill every field. The prompt must be the creator's published text, and `sourceUrl` must point at the creator's original post.
2. Open a pull request. One case per file; several files in one PR are fine.
3. A maintainer runs the file through the same [collection standards](https://goodcase.ai/standards) as every other case. Accepted cases are exported into `data/` on the next sync and appear in the regenerated README; the submission file is then removed. Rejected ones get a reason on the PR.

Files here are never read by the generator, so a merged submission does not change `README.md` until the export lands. See [contributing.md](../contributing.md) for what gets rejected.
