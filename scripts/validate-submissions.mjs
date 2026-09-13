#!/usr/bin/env node
// 校验 submissions/*.json 的投稿文件：字段齐全、URL 合法、模型名规范、slug 未与库内重复。
// CI 在 PR 上跑；本地 `node scripts/validate-submissions.mjs`。TEMPLATE.json 和 README.md 跳过。
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { validateSubmission } from "./lib/submissions.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIR = path.join(ROOT, "submissions");

const cases = JSON.parse(readFileSync(path.join(ROOT, "data/cases.json"), "utf8")).cases || [];
const knownSources = new Set(cases.map((c) => String(c.sourceUrl || "").trim()));

const files = readdirSync(DIR).filter((f) => f.endsWith(".json") && f !== "TEMPLATE.json");
let failed = 0;
for (const file of files) {
  let data;
  try {
    data = JSON.parse(readFileSync(path.join(DIR, file), "utf8"));
  } catch (err) {
    console.log(`✗ ${file}: invalid JSON (${err.message})`);
    failed += 1;
    continue;
  }
  const problems = validateSubmission(data, { fileName: file, knownSources });
  if (problems.length) {
    failed += 1;
    console.log(`✗ ${file}`);
    for (const p of problems) console.log(`    - ${p}`);
  } else {
    console.log(`✓ ${file}`);
  }
}
console.log(files.length ? `${files.length} submission(s), ${failed} with problems.` : "No submissions to validate.");
process.exit(failed ? 1 : 0);
