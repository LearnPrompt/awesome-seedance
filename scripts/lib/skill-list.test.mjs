import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { LANGS } from "./render.mjs";
import { skillListFileName } from "./templates.mjs";
import { groupSiteSkills, siteSkillCounts, methodLabel, renderSkillListDoc } from "./skill-list.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const official = (slug, caseCount) => ({
  slug,
  baseSlug: slug,
  kind: "shared",
  title: { en: `Skill ${slug}`, zh: `技能 ${slug}` },
  description: { en: `About ${slug}.`, zh: `关于 ${slug}。` },
  styleTag: null,
  creator: null,
  caseCount,
  creatorCount: 7,
  install: `npx skills add LearnPrompt/goodcase-lite --skill ${slug}`,
  url: `https://goodcase.ai/skills/${slug}`,
  cover: null,
});
const method = (baseSlug, id, creator, styleTag = null, caseCount = 3) => ({
  slug: `${baseSlug}-by-${id}`,
  baseSlug,
  kind: "creator_method",
  title: styleTag ? { en: `${creator} · ${styleTag.en}`, zh: `${creator} · ${styleTag.zh}` } : { en: `${creator} · Skill ${baseSlug}`, zh: `${creator} · 技能 ${baseSlug}` },
  description: { en: "d", zh: "说明" },
  styleTag,
  creator,
  caseCount,
  creatorCount: 1,
  install: `npx skills add LearnPrompt/goodcase-lite --skill ${baseSlug}-by-${id}`,
  url: `https://goodcase.ai/skills/${baseSlug}-by-${id}`,
  cover: null,
});
// 两个官方 Skill：alpha 带两个创作者方法（一个有风格标签），beta 一个都没有；最后一个方法故意排在 beta 后面。
const data = {
  category: "video",
  counts: { official: 2, creatorMethods: 3 },
  skills: [
    official("alpha", 40),
    method("alpha", "1", "Kim_ai", { en: "Neon | Rain", zh: "霓虹雨夜" }, 6),
    official("beta", 12),
    method("alpha", "2", "lee"),
  ],
};

test("groupSiteSkills puts every creator method under its official Skill, keeping export order", () => {
  const groups = groupSiteSkills(data);
  assert.deepEqual(groups.map((g) => g.slug), ["alpha", "beta"]);
  assert.deepEqual(groups[0].methods.map((m) => m.slug), ["alpha-by-1", "alpha-by-2"]);
  assert.equal(groups[1].methods.length, 0);
  assert.equal(groups[0].official.caseCount, 40);
  // 找不到官方 Skill 的方法单独成组，不丢
  const orphan = groupSiteSkills({ skills: [method("ghost", "9", "x")] });
  assert.equal(orphan[0].official, null);
  assert.equal(orphan[0].methods.length, 1);
  assert.deepEqual(siteSkillCounts(data), { official: 2, creatorMethods: 2, total: 4 });
});

test("methodLabel drops the creator prefix and adds the style tag only when it says something new", () => {
  const [, tagged, , plain] = data.skills;
  assert.equal(methodLabel(tagged, "en"), "Neon | Rain");
  assert.equal(methodLabel(tagged, "zh"), "霓虹雨夜");
  assert.equal(methodLabel(plain, "en"), "Skill alpha");
  assert.equal(methodLabel({ ...plain, styleTag: { en: "Grainy", zh: "颗粒" } }, "ja"), "Skill alpha (Grainy)");
});

test("renderSkillListDoc: intro counts, explicit anchors, install blocks and creator-method tables in all three languages", () => {
  for (const lang of LANGS) {
    const md = renderSkillListDoc(data, lang);
    const own = skillListFileName(lang);
    assert.ok(md.split("\n")[0].includes(`**[`) && md.split("\n")[0].includes(`](./${own})**`), `${lang}: switcher bolds the current page`);
    for (const l of LANGS) assert.ok(md.includes(`(./${skillListFileName(l)})`), `${lang}: switcher links ${l}`);
    const readme = { en: "../README.md#-skills", zh: "../README_zh.md#-skill", ja: "../README_ja.md#-skill" }[lang];
    assert.ok(md.includes(`](${readme})`), `${lang}: back link to the README Skill section`);
    const intro = { en: /2 official Skills plus 2 creator methods, 4 in all/, zh: /2 个官方 Skill，加 2 个创作者方法，共 4 个/, ja: /公式 Skill 2 個とクリエイターメソッド 2 個、計 4 個/ }[lang];
    assert.match(md, intro, `${lang}: intro counts`);
    // 每个官方 Skill 一个显式锚点，总目录指向它
    for (const slug of ["alpha", "beta"]) {
      assert.ok(md.includes(`<a id="${slug}"></a>`), `${lang}: anchor ${slug}`);
      assert.ok(md.includes(`](#${slug})`), `${lang}: index links #${slug}`);
    }
    assert.ok(md.includes("```bash\nnpx skills add LearnPrompt/goodcase-lite --skill alpha\n```"), `${lang}: official install block`);
    assert.ok(md.includes("`npx skills add LearnPrompt/goodcase-lite --skill alpha-by-2`"), `${lang}: method install inline`);
    assert.ok(md.includes("(https://goodcase.ai/skills/alpha-by-1?utm_source=awesome-seedance)"), `${lang}: UTM on method link`);
    assert.ok(md.includes("(https://goodcase.ai/skills/beta?utm_source=awesome-seedance)"), `${lang}: UTM on official link`);
    // 方法表在 alpha 小节里、beta 小节之前；表格里的竖线要转义
    const alpha = md.slice(md.indexOf('<a id="alpha">'), md.indexOf('<a id="beta">'));
    assert.equal((alpha.match(/^\| Kim_ai \||^\| lee \|/gm) || []).length, 2, `${lang}: both methods tabled under alpha`);
    if (lang !== "zh") assert.ok(alpha.includes("Neon \\| Rain"), `${lang}: pipe escaped`);
    const beta = md.slice(md.indexOf('<a id="beta">'));
    assert.doesNotMatch(beta, /^\| (?:Kim_ai|lee) \|/m, `${lang}: beta has no methods`);
    assert.doesNotMatch(md, /^\s*(?:[-*]|\d+\.)\s/m, `${lang}: tables only, no markdown lists`);
  }
  // 日文页没有日文数据，标题沿用英文
  assert.match(renderSkillListDoc(data, "ja"), /^### Skill alpha$/m);
  assert.match(renderSkillListDoc(data, "zh"), /^### 技能 alpha$/m);
});

test("data/site-skills.json: counts field matches the entries and every method has an official Skill", () => {
  const real = JSON.parse(readFileSync(path.join(__dirname, "../../data/site-skills.json"), "utf8"));
  const counts = siteSkillCounts(real);
  assert.equal(counts.official, real.counts.official);
  assert.equal(counts.creatorMethods, real.counts.creatorMethods);
  const groups = groupSiteSkills(real);
  assert.ok(groups.every((g) => g.official), "no orphan creator methods");
  assert.equal(groups.reduce((n, g) => n + g.methods.length, 0), counts.creatorMethods);
  for (const s of real.skills) assert.equal(s.install, `npx skills add LearnPrompt/goodcase-lite --skill ${s.slug}`);
});
