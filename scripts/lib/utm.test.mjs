import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { withUtm, utmLinker, tagGoodcaseLinks, readmeCampaign, isGoodcasePage, UTM_CAMPAIGNS, UTM_CONTENTS } from "./utm.mjs";
import { renderCaseEntry, renderGalleryParts, renderTopTable, thumbCell } from "./render.mjs";
import { renderBadges, renderGalleryIndex, renderRetestSpotlight, LIVE_SITE_URL } from "./sections.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const casesData = JSON.parse(readFileSync(path.join(__dirname, "../../data/fixtures/cases.fixture.json"), "utf8"));
const cases = casesData.cases;

const FULL = "utm_source=awesome-seedance&utm_medium=github";

test("withUtm adds source, medium, campaign and content to a goodcase.ai page", () => {
  assert.equal(
    withUtm("https://goodcase.ai/cases/abc", { campaign: "gallery", content: "entry" }),
    `https://goodcase.ai/cases/abc?${FULL}&utm_campaign=gallery&utm_content=entry`
  );
  // campaign / content 不传就不带对应参数，source 和 medium 永远有
  assert.equal(withUtm("https://goodcase.ai/cases/abc"), `https://goodcase.ai/cases/abc?${FULL}`);
  assert.equal(withUtm("https://goodcase.ai/cases/abc", { campaign: "skills" }), `https://goodcase.ai/cases/abc?${FULL}&utm_campaign=skills`);
  assert.ok(withUtm("https://www.goodcase.ai/cases/abc", { campaign: "skills" }).includes("utm_campaign=skills"), "www host is a goodcase.ai page too");
});

test("withUtm merges into an existing query: one question mark, filters kept, fragment last, hand-written utm replaced", () => {
  const url = withUtm("https://goodcase.ai/cases?filter=video&q=seedance", { campaign: "readme-en", content: "hero" });
  assert.equal(url, `https://goodcase.ai/cases?filter=video&q=seedance&${FULL}&utm_campaign=readme-en&utm_content=hero`);
  assert.equal(url.split("?").length, 2);
  assert.equal(
    withUtm("https://goodcase.ai/cases?filter=video#top", { campaign: "gallery", content: "index" }),
    `https://goodcase.ai/cases?filter=video&${FULL}&utm_campaign=gallery&utm_content=index#top`
  );
  // 已经带着手写 utm_source 的链接不会出现两个 utm_source
  const dup = withUtm("https://goodcase.ai/cases?filter=video&utm_source=awesome-seedance", { campaign: "readme-ja", content: "hero" });
  assert.equal(new URL(dup).searchParams.getAll("utm_source").length, 1);
  assert.equal(new URL(dup).searchParams.get("filter"), "video");
  // 裸域名：URL 规范化会补一个斜杠
  assert.equal(withUtm("https://goodcase.ai", { campaign: "readme-en", content: "footer" }), `https://goodcase.ai/?${FULL}&utm_campaign=readme-en&utm_content=footer`);
});

test("withUtm is idempotent for the same arguments", () => {
  const opts = { campaign: "templates", content: "cases" };
  const once = withUtm("https://goodcase.ai/cases/x?a=1", opts);
  assert.equal(withUtm(once, opts), once);
  assert.equal(withUtm(withUtm("https://goodcase.ai/x")), `https://goodcase.ai/x?${FULL}`);
});

test("withUtm leaves everything that is not a goodcase.ai page alone", () => {
  const untouched = [
    "https://media.goodcase.ai/cases/abc.jpg", // 媒体 CDN
    "https://media.goodcase.ai/retests/x/video/generated.mp4",
    "https://goodcase.ai/media/goodcase/aimikoda-2054460932068200517-01.jpg", // goodcase.ai 上的图片资源
    "https://goodcase.ai/community/feishu-group-qr.png",
    "https://goodcase.ai/some/path/poster.webp",
    "mailto:carl@goodcase.ai",
    "https://github.com/LearnPrompt/awesome-seedance",
    "https://goodcase.ai.evil.example/cases/x",
    "https://evilgoodcase.ai/cases/x",
    "./docs/gallery.md",
    "#top",
    "",
  ];
  for (const url of untouched) assert.equal(withUtm(url, { campaign: "gallery", content: "entry" }), url, url);
  assert.equal(withUtm(undefined, { campaign: "gallery" }), undefined);
  assert.equal(isGoodcasePage("https://goodcase.ai/skills/x"), true);
  assert.equal(isGoodcasePage("https://media.goodcase.ai/x"), false);
});

test("withUtm rejects campaign and content values that are not registered", () => {
  assert.throws(() => withUtm("https://goodcase.ai/x", { campaign: "readme-fr" }), /unknown campaign/);
  assert.throws(() => withUtm("https://goodcase.ai/x", { campaign: "gallery", content: "typo" }), /unknown content/);
  // 登记的取值都是小写英文加连字符
  for (const v of [...UTM_CAMPAIGNS, ...UTM_CONTENTS]) assert.match(v, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.equal(readmeCampaign("zh"), "readme-zh");
  assert.throws(() => readmeCampaign("fr"), /no README campaign/);
});

test("utmLinker is the identity without a campaign and tags with one", () => {
  assert.equal(utmLinker(undefined, "hero")("https://goodcase.ai/x"), "https://goodcase.ai/x");
  assert.equal(utmLinker("gallery", "entry")("https://goodcase.ai/x"), `https://goodcase.ai/x?${FULL}&utm_campaign=gallery&utm_content=entry`);
});

test("tagGoodcaseLinks tags link targets only, never images or other hosts", () => {
  const md = [
    "[a](https://goodcase.ai/standards) and <a href=\"https://goodcase.ai/submit\">b</a>",
    "[<img src=\"./assets/x.png\" alt=\"c\">](https://goodcase.ai/cases?filter=video)",
    "<img src=\"https://goodcase.ai/community/feishu-group-qr.png\" width=\"180\">",
    "![qr](https://goodcase.ai/community/feishu-group-qr.png)",
    "[mail](mailto:carl@goodcase.ai) [gh](https://github.com/x/y) plain https://goodcase.ai/text",
  ].join("\n");
  const out = tagGoodcaseLinks(md, { campaign: "readme-en", content: "submit" });
  const tail = `${FULL}&utm_campaign=readme-en&utm_content=submit`;
  assert.ok(out.includes(`[a](https://goodcase.ai/standards?${tail})`));
  assert.ok(out.includes(`href="https://goodcase.ai/submit?${tail}"`));
  assert.ok(out.includes(`](https://goodcase.ai/cases?filter=video&${tail})`));
  assert.ok(out.includes('<img src="https://goodcase.ai/community/feishu-group-qr.png" width="180">'));
  assert.ok(out.includes("![qr](https://goodcase.ai/community/feishu-group-qr.png)"));
  assert.ok(out.includes("[mail](mailto:carl@goodcase.ai) [gh](https://github.com/x/y) plain https://goodcase.ai/text"));
  assert.equal(tagGoodcaseLinks(md, {}), md, "no campaign: text untouched");
});

const hasUtm = (s) => /utm_source=awesome-seedance/.test(s);

test("renderCaseEntry tags the cover and the View on goodcase.ai link, never the poster or the source link", () => {
  const c = cases.find((x) => x.posterUrl && x.sourceUrl) || cases[0];
  const plain = renderCaseEntry(c, "en");
  assert.equal(hasUtm(plain), false, "no campaign, no UTM");
  const md = renderCaseEntry(c, "en", { campaign: "gallery" });
  const tail = `${FULL}&utm_campaign=gallery&utm_content=entry`;
  assert.ok(md.includes(`](${c.goodcaseUrl}?${tail})`), "link to the case page is tagged");
  assert.equal((md.match(/utm_source=/g) || []).length, c.posterUrl || c.mediaType === "image" ? 2 : 1, "cover + view link only");
  if (c.posterUrl) assert.ok(md.includes(`src="${c.posterUrl}"`), "poster src untouched");
  assert.ok(md.includes(`](${c.sourceUrl})`), "original source link untouched");
});

test("renderGalleryParts: campaign tags links without moving a single page boundary or anchor", () => {
  const opts = { bucket: "2.5", budget: 6000 };
  const plain = renderGalleryParts(cases, "en", opts);
  const tagged = renderGalleryParts(cases, "en", { ...opts, campaign: "gallery" });
  assert.ok(plain.length > 1, "fixture is big enough to page at this budget");
  assert.deepEqual(
    tagged.map((p) => [p.fileName, p.caseCount, p.rangeStart, p.rangeEnd, p.entries]),
    plain.map((p) => [p.fileName, p.caseCount, p.rangeStart, p.rangeEnd, p.entries]),
    "page sizing ignores the UTM suffix"
  );
  assert.ok(tagged.every((p) => hasUtm(p.markdown)));
  assert.ok(plain.every((p) => !hasUtm(p.markdown)));
});

test("renderTopTable and thumbCell tag case links with content top30 / the given linker", () => {
  const top = renderTopTable(cases.slice(0, 3), "en", { campaign: "readme-en" });
  assert.ok(top.markdown.includes("utm_campaign=readme-en&utm_content=top30"));
  const goodcaseLinks = top.markdown.match(/\]\(https:\/\/goodcase\.ai\/[^)]*\)/g) || [];
  assert.ok(goodcaseLinks.length >= 3);
  assert.ok(goodcaseLinks.every((l) => hasUtm(l)), "every goodcase.ai link in the table is tagged");
  assert.equal(hasUtm(renderTopTable(cases.slice(0, 3), "en").markdown), false);
  const c = cases.find((x) => x.posterUrl);
  assert.ok(thumbCell(c, "t", 160, utmLinker("readme-en", "retests")).includes("utm_content=retests"));
  assert.equal(thumbCell(c, "t", 160), `[<img src="${c.posterUrl}" width="160" alt="t">](${c.goodcaseUrl})`);
});

test("renderBadges, renderRetestSpotlight and renderGalleryIndex tag their goodcase.ai links with their own content", () => {
  const badges = renderBadges("en", {}, { campaign: "readme-en" });
  assert.ok(badges.includes(`](${LIVE_SITE_URL}&${FULL}&utm_campaign=readme-en&utm_content=hero)`));
  assert.ok(!badges.includes("img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FLearnPrompt%2Fawesome-seedance%2Fmain%2Fdata%2Fstats.json&query=%24.cases&label=cases&color=e8541e&style=flat-square&utm"), "badge image URLs are never tagged");
  assert.equal(hasUtm(renderBadges("en")), false);

  const spot = renderRetestSpotlight(cases, casesData.meta, "en", { campaign: "readme-en" });
  assert.ok(spot.includes("utm_campaign=readme-en&utm_content=retests"));
  assert.ok(!/media\.goodcase\.ai[^\s)]*utm_/.test(spot), "output video links on the media CDN are never tagged");
  assert.equal(hasUtm(renderRetestSpotlight(cases, casesData.meta, "en")), false);

  const parts = { "2.5": renderGalleryParts(cases, "en", { bucket: "2.5" }) };
  const index = renderGalleryIndex(
    { parts, bucketCases: { "2.5": cases }, cases, promptLinks: new Map(), campaign: "gallery" },
    "en"
  );
  assert.ok(index.includes(`](${LIVE_SITE_URL}&${FULL}&utm_campaign=gallery&utm_content=index)`));
  assert.ok(index.includes("utm_campaign=gallery&utm_content=index"), "fallback case links in Recommended entries are tagged too");
});
