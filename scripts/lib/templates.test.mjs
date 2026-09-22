import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { githubSlug, LANGS } from "./render.mjs";
import { retestHeading } from "./sections.mjs";
import { mergeLibrary, buildTemplateIndex, applyTemplateOverride } from "./library.mjs";
import {
  anchorOf,
  copyPromptOf,
  countSkills,
  orderedTemplates,
  renderCopyBlock,
  renderSkillGrid,
  renderStartHere,
  renderTemplateDoc,
  renderTemplateGrid,
  renderTemplateIndex,
  skillsHeading,
  startHereHeading,
  templateDocLang,
  templatesHeading,
  withUtm,
} from "./templates.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const load = (name) => JSON.parse(readFileSync(path.join(__dirname, "../../data/fixtures", name), "utf8"));
const casesData = load("cases.fixture.json");
const cases = casesData.cases;
// 小型内联库（style-library.fixture.json 没有 categories），形状与 data/style-library.json 一致。
const styleData = {
  categories: [
    { id: "foundation", title: { en: "Structural foundations", zh: "结构基础" }, description: { en: "Skeletons.", zh: "骨架。" } },
    { id: "realism", title: { en: "Realism and UGC", zh: "真实感与 UGC" }, description: { en: "Believability.", zh: "真实感。" } },
  ],
  templates: [
    {
      id: "timeline",
      category: "foundation",
      title: { en: "Timeline script", zh: "时间轴脚本" },
      description: { en: "Timed beats.", zh: "分段。" },
      useWhen: { en: "Clips over 8s.", zh: "超过 8 秒。" },
      guidance: { en: ["Write `[00:00-00:04]` blocks."], zh: ["写 `[00:00-00:04]` 这样的时间块。"] },
      structure: { en: ["Header", "Timeline"], zh: ["页头", "时间轴"] },
      pitfalls: { en: ["Too many shots."], zh: ["镜头太多。"] },
      exampleCases: [cases[0].slug, cases[1].slug],
    },
    {
      id: "ugc",
      category: "realism",
      title: { en: "Handheld UGC", zh: "手持 UGC" },
      description: { en: "Camera flaws.", zh: "相机瑕疵。" },
      useWhen: { en: "Talk-to-camera.", zh: "口播。" },
      guidance: { en: ["Name the flaws."], zh: ["把瑕疵点名。"] },
      structure: { en: ["Person", "Scene"], zh: ["人物", "场景"] },
      pitfalls: { en: ["Too clean."], zh: ["太干净。"] },
      exampleCases: [cases[2].slug],
    },
  ],
};
const baseTemplate = styleData.templates[0];

const local = {
  overrides: {
    [baseTemplate.id]: {
      title: { ja: "タイムライン脚本" },
      copyPrompt: { zh: "我要做一条分镜视频，【我的主角是一只橘猫】。请按下面的模板改写：", en: "I want a timeline clip. [My hero is an orange cat.] Rewrite using the template below:" },
    },
  },
  templates: [
    {
      id: "food-asmr",
      title: { en: "Food ASMR", zh: "美食 ASMR" },
      description: { en: "Close-up cooking with crisp sound.", zh: "贴脸拍的烹饪特写，声音要脆。" },
      category: styleData.categories[0].id,
      useWhen: { en: "Food clips.", zh: "美食短片。" },
      guidance: { en: ["Name the sound: `sizzle`, not just cooking."], zh: ["把声音点名：写 `sizzle`，别只写在做饭。"] },
      structure: { en: ["Ingredient close-up", "Action beat"], zh: ["食材特写", "动作节拍"] },
      pitfalls: { en: ["Hands drift."], zh: ["手会飘。"] },
    },
  ],
};

test("mergeLibrary layers local overrides per language and appends local templates", () => {
  const lib = mergeLibrary(styleData, local);
  const merged = lib.templates.find((tp) => tp.id === baseTemplate.id);
  assert.equal(merged.title.ja, "タイムライン脚本");
  assert.equal(merged.title.en, baseTemplate.title.en, "upstream languages survive a per-language override");
  assert.equal(lib.templates.length, styleData.templates.length + 1);
  assert.equal(lib.templates.at(-1).local, true);
  assert.equal(styleData.templates[0].copyPrompt, undefined, "upstream data is not mutated");
});

test("mergeLibrary fails loudly on typos instead of silently dropping hand-written content", () => {
  assert.throws(() => mergeLibrary(styleData, { overrides: { "no-such-template": {} } }), /unknown template/);
  assert.throws(() => mergeLibrary(styleData, { templates: [{ ...local.templates[0], id: baseTemplate.id }] }), /already exists/);
  assert.throws(() => mergeLibrary(styleData, { templates: [{ ...local.templates[0], category: "nope" }] }), /unknown category/);
  assert.deepEqual(applyTemplateOverride({ tags: ["a"] }, { tags: ["b"] }).tags, ["b"], "non-language fields are replaced");
});

test("buildTemplateIndex unions taxonomy with curated examples, sorts by heat, ignores delisted slugs, rejects unknown ids", () => {
  const lib = mergeLibrary(styleData, local);
  const free = cases.filter((c) => !styleData.templates.some((tp) => (tp.exampleCases || []).includes(c.slug)));
  assert.ok(free.length >= 2, "fixture has cases that no template lists as an example");
  const taxonomy = { assignments: { [free[0].slug]: "food-asmr", [free[1].slug]: "food-asmr", "delisted-case": "food-asmr", "unfiled-on-purpose": null } };
  const index = buildTemplateIndex(lib.templates, taxonomy, cases);
  const food = index.byTemplate.get("food-asmr");
  assert.equal(food.length, 2);
  assert.ok((food[0].heatScore || 0) >= (food[1].heatScore || 0));
  const curated = index.byTemplate.get(baseTemplate.id).map((c) => c.slug);
  for (const slug of baseTemplate.exampleCases.filter((s) => cases.some((c) => c.slug === s))) assert.ok(curated.includes(slug));
  const filed = [...index.byTemplate.values()].flat().length;
  assert.equal(filed + index.unassigned.length, cases.length, "every case is either filed once or unassigned");
  assert.throws(() => buildTemplateIndex(lib.templates, { assignments: { [free[0].slug]: "typo-id" } }, cases), /unknown template "typo-id"/);
});

test("buildTemplateIndex lets the taxonomy move a curated example to another template without double-filing it", () => {
  const lib = mergeLibrary(styleData, local);
  const slug = baseTemplate.exampleCases.find((s) => cases.some((c) => c.slug === s));
  const index = buildTemplateIndex(lib.templates, { assignments: { [slug]: "food-asmr" } }, cases);
  assert.ok(index.byTemplate.get("food-asmr").some((c) => c.slug === slug));
  assert.ok(!index.byTemplate.get(baseTemplate.id).some((c) => c.slug === slug));
});

test("renderCopyBlock = placeholder lead-in + template body, in a fence that inline backticks cannot break", () => {
  const lib = mergeLibrary(styleData, local);
  const food = lib.templates.find((tp) => tp.id === "food-asmr");
  const zh = renderCopyBlock(food, "zh", ["https://goodcase.ai/cases/x"]);
  const fence = zh.split("\n")[0].replace("text", "");
  assert.ok(fence.length >= 4 && /^`+$/.test(fence));
  assert.equal(zh.split("\n").at(-1), fence, "closing fence matches the opening fence");
  const inner = zh.split("\n").slice(1, -1).join("\n");
  assert.ok(!inner.includes(fence), "body never contains the fence itself");
  assert.match(inner, /【[^】]+】/, "every template ships a 【】 placeholder, even without a hand-written copyPrompt");
  assert.match(inner, /#### 美食 ASMR/);
  assert.match(inner, /\*\*适用场景:\*\*/);
  assert.match(inner, /\*\*结构:\*\*\n\n1\. 食材特写\n2\. 动作节拍/, "structure is numbered 1. 2. 3., not 1. 1. 1.");
  assert.match(inner, /\*\*示例:\*\* \[#1\]\(https:\/\/goodcase\.ai\/cases\/x\)/);
  assert.match(renderCopyBlock(food, "en"), /\[[^\]]+\]/);
  const merged = lib.templates.find((tp) => tp.id === baseTemplate.id);
  assert.match(copyPromptOf(merged, "zh"), /橘猫/, "a hand-written copyPrompt wins over the default");
  // 正文里出现一长串反引号时围栏要更长
  const nasty = { ...food, guidance: { zh: ["危险：`````` 六个反引号"] } };
  const nastyFence = renderCopyBlock(nasty, "zh").split("\n")[0].replace("text", "");
  assert.ok(nastyFence.length >= 7);
});

test("renderTemplateDoc links resolve: language switch, back to the localized README anchor, neighbours; zh/en only", () => {
  const lib = mergeLibrary(styleData, local);
  const ordered = orderedTemplates(lib);
  const index = buildTemplateIndex(lib.templates, { assignments: {} }, cases);
  const tp = ordered[0];
  const anchor = anchorOf(templatesHeading("zh"));
  const md = renderTemplateDoc(tp, "zh", { cases: index.byTemplate.get(tp.id), prev: null, next: ordered[1], readmeAnchor: anchor });
  assert.ok(md.startsWith(`[English](../en/${tp.id}.md) | **中文**`));
  assert.ok(md.includes(`(../../../README_zh.md${anchor})`));
  assert.ok(md.includes(`(./${ordered[1].id}.md)`));
  assert.match(md, /## 直接复制/);
  assert.match(md, /## 这一类的案例（已归类 \d+ 条，按热度）/);
  const en = renderTemplateDoc(tp, "en", { cases: [], prev: null, next: null, readmeAnchor: anchorOf(templatesHeading("en")) });
  assert.ok(en.startsWith(`**English** | [中文](../zh/${tp.id}.md)`));
  assert.ok(en.includes("(../../../README.md#-prompt-templates-by-category)"));
  assert.doesNotMatch(en, /## Cases in this category/, "no empty case table");
  assert.throws(() => renderTemplateDoc(tp, "ja", { cases: [] }), /zh\/en only/);
  assert.equal(templateDocLang("ja"), "en");
});

test("renderTemplateGrid renders one tile per template, 3 per row, linking to the per-language template file", () => {
  const lib = mergeLibrary(styleData, local);
  const index = buildTemplateIndex(lib.templates, { assignments: {} }, cases);
  const zh = renderTemplateGrid(lib, "zh", index);
  assert.ok(zh.startsWith("## 🧩 分类提示语模板"));
  assert.equal((zh.match(/<td /g) || []).length, lib.templates.length);
  assert.match(zh, /<td width="33%"/);
  for (const tp of lib.templates) assert.ok(zh.includes(`./docs/templates/zh/${tp.id}.md`));
  const ja = renderTemplateGrid(lib, "ja", index);
  assert.ok(ja.includes(`./docs/templates/en/${lib.templates[0].id}.md`), "Japanese README links to the English template files");
  assert.match(ja, /タイムライン脚本/, "title.ja from the local layer is used");
  assert.match(renderTemplateIndex(lib, "en", index, "#x"), /\| \[Food ASMR\]\(\.\/food-asmr\.md\) \|/);
});

const skillsData = {
  moreUrl: "https://goodcase.ai/skills?category=video",
  skills: [
    { id: "a", title: { en: "A", zh: "甲", ja: "A" }, description: { en: "d", zh: "说明", ja: "d" }, install: "npx a install", url: "https://github.com/x/a", coverCase: cases[0].slug, variants: [] },
    { id: "b", title: { en: "B", zh: "乙", ja: "B" }, description: { en: "d", zh: "d", ja: "d" }, install: "npx skills add x --skill b", url: "https://goodcase.ai/skills/b", cover: { src: "https://media.goodcase.ai/cases/b.jpg" }, variants: [{ creator: "卡尔", url: "https://goodcase.ai/skills/b-by-1" }, { creator: "A&B", url: "https://goodcase.ai/skills/b-by-2" }] },
  ],
};

test("renderSkillGrid: one Skill per cell, 2x2 poster collage, install line, variant count instead of names, UTM on site links", () => {
  const bySlug = new Map(cases.map((c) => [c.slug, c]));
  const withPosters = cases.filter((c) => c.posterUrl);
  const md = renderSkillGrid(skillsData, "zh", bySlug, { coverCasesFor: (s) => (s.id === "a" ? withPosters : []) });
  assert.ok(md.startsWith("## 🧰 Skill"));
  assert.equal((md.match(/<td width/g) || []).length, 2);
  const tileA = md.split("<td width")[1];
  assert.match(tileA, /<table><tbody><tr><td><a href="[^"]+"><img src="[^"]+" width="128" alt=""><\/a><\/td>/, "collage of thumbnails");
  assert.equal((tileA.match(/<img /g) || []).length, Math.min(4, withPosters.length));
  const tileB = md.split("<td width")[2];
  assert.ok(tileB.includes('<img src="https://media.goodcase.ai/cases/b.jpg" width="260"'), "single cover falls back to cover.src");
  assert.match(md, /<code>npx a install<\/code>/);
  assert.doesNotMatch(md, /卡尔|A&amp;B/, "creator names are not listed");
  assert.match(md, /<a href="https:\/\/goodcase\.ai\/skills\/b\?utm_source=awesome-seedance">另有 2 个创作者变体<\/a>/);
  assert.ok(md.includes('href="https://github.com/x/a"'), "non-goodcase links are left alone");
  assert.equal(countSkills(skillsData), 4);
  assert.equal(withUtm("https://goodcase.ai/skills?category=video"), "https://goodcase.ai/skills?category=video&utm_source=awesome-seedance");
  assert.equal(withUtm(withUtm("https://goodcase.ai/x")), "https://goodcase.ai/x?utm_source=awesome-seedance");
});

test("renderStartHere explains templates vs Skills with tables (no list items: awesome-lint treats lists after Contents as entries)", () => {
  const anchors = { templates: "#t", skills: "#s", top: "#top", all: "#all", retests: "#r" };
  for (const lang of LANGS) {
    const md = renderStartHere(lang, anchors, { templates: 20, skills: 26, cases: 463 });
    assert.ok(md.startsWith(startHereHeading(lang)));
    assert.doesNotMatch(md, /^\s*(?:[-*]|\d+\.)\s/m, `${lang}: no markdown lists`);
    assert.equal((md.match(/^\| \d \|/gm) || []).length, 5, `${lang}: five steps`);
    assert.ok(md.includes("](#t)") && md.includes("](#s)"));
  }
});

test("section headings carry no U+FE0F, so computed anchors match what GitHub generates", () => {
  for (const lang of LANGS) {
    for (const h of [startHereHeading(lang), templatesHeading(lang), skillsHeading(lang), retestHeading(lang)]) {
      assert.ok(!h.includes("️"), `${h} contains a variation selector`);
      assert.equal(anchorOf(h), `#${githubSlug(h.replace(/^#+\s+/, ""))}`);
    }
  }
  assert.equal(anchorOf(templatesHeading("zh")), "#-分类提示语模板");
});
