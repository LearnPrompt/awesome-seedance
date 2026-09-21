#!/usr/bin/env node
// 列出还没归到任何模板下的 case（data/cases.json 每天同步新增，data/case-taxonomy.json 是手工归类）。
// Run: npm run taxonomy:todo            → 人读的清单（按热度）
//      npm run taxonomy:todo -- --json  → JSON，方便喂给标注流程
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { loadLibrary, buildTemplateIndex } from "./lib/library.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { cases } = JSON.parse(readFileSync(path.join(ROOT, "data/cases.json"), "utf8"));
const { library, taxonomy } = loadLibrary(ROOT);
const { byTemplate, unassigned } = buildTemplateIndex(library.templates, taxonomy, cases);
const explicitlySkipped = new Set(Object.entries(taxonomy.assignments || {}).filter(([, v]) => v == null).map(([k]) => k));
const todo = unassigned.filter((c) => !explicitlySkipped.has(c.slug));

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(todo.map((c) => ({ slug: c.slug, heat: c.heatScore, title: c.title })), null, 2));
} else {
  for (const tp of library.templates) console.log(`${String((byTemplate.get(tp.id) || []).length).padStart(4)}  ${tp.id}`);
  console.log(`\n${cases.length - unassigned.length} filed, ${explicitlySkipped.size} skipped on purpose (null), ${todo.length} to file:`);
  for (const c of todo) console.log(`  ${String(c.heatScore ?? "-").padStart(3)}  ${c.slug}`);
}
