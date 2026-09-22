import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { renderStandaloneSkillMd, renderStandaloneCasesMd, skillDescription, STANDALONE_CASE_LIMIT } from "./standalone-skill.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { cases } = JSON.parse(readFileSync(path.join(__dirname, "../../data/fixtures/cases.fixture.json"), "utf8"));
const template = {
  id: "meme-comedy",
  title: { en: "Twist-ending comedy skit", zh: "反转搞笑短片" },
  description: { en: "One punchline, straight-faced camera.", zh: "一个笑点，正经镜头。" },
  useWhen: { en: "Short skits.", zh: "搞笑短剧。" },
  guidance: { en: ["Pin the punchline second first."], zh: ["先钉死笑点落在哪一秒。"] },
  structure: { en: ["Setup", "Escalation", "Twist"], zh: ["铺垫", "升级", "反转"] },
  pitfalls: { en: ["Explaining the joke."], zh: ["把笑点讲出来。"] },
  copyPrompt: { en: "I want a comedy skit. [My setup is…] Using the template below:", zh: "我要做一条搞笑短片，【设定是…】。请按下面模板改写：" },
};
const skill = { id: "seedance-meme-comedy", templateId: "meme-comedy", triggers: ["沙雕"] };

test("SKILL.md has valid frontmatter, a triggering description, the numbered structure and both languages", () => {
  const md = renderStandaloneSkillMd(template, skill, cases);
  assert.ok(md.startsWith("---\nname: seedance-meme-comedy\ndescription: \""));
  const desc = JSON.parse(md.split("\n")[2].replace(/^description: /, ""));
  assert.equal(desc, skillDescription(template, skill));
  assert.match(desc, /Twist-ending comedy skit; 中文触发词: 反转搞笑短片, 沙雕/);
  assert.doesNotMatch(desc, /\n/);
  assert.match(md, /   1\. Setup\n   2\. Escalation\n   3\. Twist/);
  assert.match(md, /## 中文：反转搞笑短片[\s\S]*1\. 铺垫\n2\. 升级\n3\. 反转/);
  assert.match(md, /> 我要做一条搞笑短片，【设定是…】/);
  assert.match(md, new RegExp(`distilled from ${cases.length} human-verified`));
});

test("references/cases.md lists the hottest cases first, capped, with attribution links and fenced prompts", () => {
  const many = Array.from({ length: STANDALONE_CASE_LIMIT + 3 }, (_, i) => ({ ...cases[0], slug: `c${i}`, heatScore: 100 - i, promptFull: "line `x`\n```\nnested fence\n```" }));
  const md = renderStandaloneCasesMd(template, skill, many);
  assert.equal((md.match(/^## E\d+ · /gm) || []).length, STANDALONE_CASE_LIMIT);
  assert.match(md, /^## E1 · /m);
  assert.match(md, /\[GoodCase\]\(https:\/\/goodcase\.ai\/cases\//);
  assert.match(md, /\[original source\]\(/);
  assert.match(md, /^````text\nline `x`\n```\nnested fence\n```\n````$/m, "fence is longer than any backtick run inside the prompt");
  assert.match(md, new RegExp(`${many.length} verified cases are filed`));
});
