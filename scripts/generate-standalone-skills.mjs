#!/usr/bin/env node
// 生成本仓的独立 Skill（一个片型一个）：agents/skills/<skillId>/{SKILL.md, references/cases.md}。
// 哪些模板做成独立 Skill由 data/skills.json 决定：带 templateId 的条目就是。
// 正文来自合并后的模板（style-library + templates-local），证据来自 case-taxonomy 归到该模板名下的案例。
// Run: node scripts/generate-standalone-skills.mjs（已并入 npm run generate）
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { loadLibrary, buildTemplateIndex } from "./lib/library.mjs";
import { renderStandaloneSkillMd, renderStandaloneCasesMd } from "./lib/standalone-skill.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_DIR = path.join(ROOT, "agents/skills");
const { cases } = JSON.parse(readFileSync(path.join(ROOT, "data/cases.json"), "utf8"));
const { library, taxonomy } = loadLibrary(ROOT);
const index = buildTemplateIndex(library.templates, taxonomy, cases);
const skillsData = JSON.parse(readFileSync(path.join(ROOT, "data/skills.json"), "utf8"));
const standalone = (skillsData.skills || []).filter((s) => s.templateId);

const written = new Set();
for (const skill of standalone) {
  const template = library.templates.find((tp) => tp.id === skill.templateId);
  if (!template) throw new Error(`skills.json: "${skill.id}" points at unknown template "${skill.templateId}"`);
  if (!/^[a-z0-9][a-z0-9-]*$/.test(skill.id)) throw new Error(`skills.json: bad skill id "${skill.id}"`);
  const filed = index.byTemplate.get(template.id) || [];
  const dir = path.join(SKILLS_DIR, skill.id);
  mkdirSync(path.join(dir, "references"), { recursive: true });
  writeFileSync(path.join(dir, "SKILL.md"), renderStandaloneSkillMd(template, skill, filed), "utf8");
  writeFileSync(path.join(dir, "references/cases.md"), renderStandaloneCasesMd(template, skill, filed), "utf8");
  written.add(skill.id);
  console.log(`agents/skills/${skill.id}: ${filed.length} cases`);
}
// 清理已从 skills.json 撤掉的独立 Skill（只删本脚本生成过的：目录里有 references/cases.md 且没有 package.json）。
for (const name of readdirSync(SKILLS_DIR)) {
  const dir = path.join(SKILLS_DIR, name);
  if (written.has(name) || existsSync(path.join(dir, "package.json"))) continue;
  if (existsSync(path.join(dir, "references/cases.md"))) {
    rmSync(dir, { recursive: true, force: true });
    console.log(`removed stale agents/skills/${name}`);
  }
}
