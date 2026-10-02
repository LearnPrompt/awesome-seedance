import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { renderStandaloneSkillMd, renderStandaloneCasesMd, skillDescription, STANDALONE_CASE_LIMIT, STANDALONE_SKILL_MARKER } from "./standalone-skill.mjs";

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

test("rendered SKILL.md carries the generator marker the generator uses to recognise its own output", () => {
  assert.ok(renderStandaloneSkillMd(template, skill, cases).includes(STANDALONE_SKILL_MARKER));
});

// Filesystem checks cover hand-maintained entries only: generated dirs are created and pruned by
// `npm run generate`, which CI runs after `npm test`, so asserting on them would depend on run order.
test("hand-maintained seedance-* Skills (no templateId) have a SKILL.md without the generator marker and no generated cases.md", () => {
  const root = path.join(__dirname, "../..");
  const { skills } = JSON.parse(readFileSync(path.join(root, "data/skills.json"), "utf8"));
  const handMaintained = skills.filter((s) => s.id.startsWith("seedance-") && !s.templateId);
  assert.ok(handMaintained.length > 0);
  for (const s of handMaintained) {
    const skillMd = path.join(root, "agents/skills", s.id, "SKILL.md");
    assert.ok(existsSync(skillMd), `${s.id}: missing SKILL.md`);
    assert.ok(!existsSync(path.join(root, "agents/skills", s.id, "references/cases.md")), `${s.id}: hand-maintained Skill must not look generated`);
    assert.ok(!readFileSync(skillMd, "utf8").includes(STANDALONE_SKILL_MARKER), `${s.id}: hand-maintained SKILL.md contains the generator marker`);
  }
});

test("marketplace.json and data/skills.json list exactly the same seedance-* Skills", () => {
  const root = path.join(__dirname, "../..");
  const { skills } = JSON.parse(readFileSync(path.join(root, "data/skills.json"), "utf8"));
  const ids = new Set(skills.filter((s) => s.id.startsWith("seedance-")).map((s) => s.id));
  const { plugins } = JSON.parse(readFileSync(path.join(root, ".claude-plugin/marketplace.json"), "utf8"));
  for (const id of ids) {
    const plugin = plugins.find((p) => p.name === id);
    assert.ok(plugin, `${id}: no plugin entry in marketplace.json`);
    assert.equal(plugin.source, `./agents/skills/${id}`, `${id}: wrong marketplace source`);
  }
  for (const plugin of plugins) {
    assert.ok(ids.has(plugin.name), `${plugin.name}: marketplace plugin is not a seedance-* id in data/skills.json`);
  }
});
