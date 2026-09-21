#!/usr/bin/env node
// Generates agents/skills/seedance-prompt-library/references/style-library.md
// from data/style-library.json, for the installable Agent Skill to read.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { loadLibrary } from "./lib/library.mjs";
import { renderTemplateCard } from "./lib/render.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// 合并后的库：上游 data/style-library.json + 本仓 data/templates-local.json（新模板、copyPrompt）。
const { library: styleData } = loadLibrary(ROOT);
const templates = styleData.templates || [];

function renderFullTemplate(template) {
  const lines = [];
  lines.push(`## ${template.id}`);
  lines.push("");
  lines.push("### English");
  lines.push("");
  lines.push(renderTemplateCard(template, "en"));
  lines.push(`**Structure:**`);
  // 规范形状：structure/pitfalls 都是 {en:[...], zh:[...]}，见 data/style-library.json
  for (const step of template.structure?.en || []) lines.push(`1. ${step}`);
  lines.push("");
  const pitfallsEn = (template.pitfalls?.en || []).map((p) => `- ${p}`);
  if (pitfallsEn.length) {
    lines.push("**Pitfalls:**");
    lines.push(...pitfallsEn);
    lines.push("");
  }
  if (template.copyPrompt?.en) {
    lines.push(`**Copy-ready lead-in:** ${template.copyPrompt.en}`);
    lines.push("");
  }
  lines.push("### 中文");
  lines.push("");
  lines.push(renderTemplateCard(template, "zh"));
  lines.push(`**结构:**`);
  for (const step of template.structure?.zh || []) lines.push(`1. ${step}`);
  lines.push("");
  const pitfallsZh = (template.pitfalls?.zh || []).map((p) => `- ${p}`);
  if (pitfallsZh.length) {
    lines.push("**常见坑:**");
    lines.push(...pitfallsZh);
    lines.push("");
  }
  if (template.copyPrompt?.zh) {
    lines.push(`**可复制引导语:** ${template.copyPrompt.zh}`);
    lines.push("");
  }
  lines.push("---");
  lines.push("");
  return lines.join("\n");
}

const out = [];
out.push("# Seedance Prompt Style Library");
out.push("");
out.push(
  "Reference data for the seedance-prompt-library Agent Skill. Generated from data/style-library.json — do not hand-edit, run `node scripts/generate-skill-reference.mjs` instead."
);
out.push("");
for (const template of templates) {
  out.push(renderFullTemplate(template));
}

const outPath = path.join(ROOT, "agents/skills/seedance-prompt-library/references/style-library.md");
writeFileSync(outPath, out.join("\n"), "utf8");
console.log(`Wrote ${outPath} (${templates.length} templates)`);
