// README 新增区块的渲染器（2026-09-13 对标 awesome-gpt-image-2 的最后一轮修改）：
// 横幅 SVG、动态徽章、Quick Links、复测聚焦区、分类总览、模板紧凑表、画廊总览页。
// 三语（en / zh / ja）：文案走 t(lang, {en, zh, ja})；数据里的多语字段（模板/分类只有 en/zh）走 pickLang，ja 回落 en。
// 和 render.mjs 一样：只吃数据吐字符串，不碰文件系统。
import {
  renderTable,
  displayTitle,
  displaySummary,
  sortByHeat,
  thumbCell,
  githubSlug,
  aggregateRetestsByModel,
  classifySeedance,
  bucketShortLabel,
  bucketLabel,
  SEEDANCE_BUCKETS,
  galleryIndexFileName,
  readmeFileName,
  t,
  pickLang,
  THUMB_WIDTH,
} from "./render.mjs";

const REPO = "LearnPrompt/awesome-seedance";
// Quick Links 用绝对 URL：awesome-lint 的 list-item 规则把目录之后的列表当条目校验，相对链接和页内锚点会被判无效。
const REPO_URL = `https://github.com/${REPO}`;
const BLOB_URL = `${REPO_URL}/blob/main`;
const RAW_STATS_URL = `https://raw.githubusercontent.com/${REPO}/main/data/stats.json`;
export const LIVE_SITE_URL = "https://goodcase.ai/cases?filter=video&q=seedance&utm_source=awesome-seedance";
const SPONSOR_URL = `https://github.com/${REPO}/issues/new?title=Sponsor%20a%20retest%20batch&labels=sponsor`;

function capitalize(str) {
  const s = String(str || "");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function readmeUrl(lang) {
  return `${BLOB_URL}/${readmeFileName(lang)}`;
}

export function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ---------------------------------------------------------------------------
// 统计快照 + 动态徽章
// ---------------------------------------------------------------------------

/**
 * data/stats.json 的内容：shields.io 的 dynamic/json 徽章直接读 raw.githubusercontent 上的这个文件，
 * 所以 README 顶部的数字随每天的数据同步自动变，不用重新生成徽章 URL。
 */
export function buildStatsSnapshot(stats, templates, categories, site = null, skillsCount = null) {
  const videoSkills = site?.videoSkills ? (site.videoSkills.base || 0) + (site.videoSkills.creatorVariants || 0) : 0;
  return {
    cases: stats.total,
    // goodcase.ai 站点全量（含非 Seedance）：来自 data/site.json 快照。
    siteTotalCases: site?.totalCases ?? null,
    siteVideoCases: site?.videoCases ?? null,
    siteCreators: site?.creators ?? null,
    siteFetchedAt: site?.fetchedAt ?? null,
    // AI 视频 Skill 数：goodcase.ai 上的视频 Skill（基础 + 创作者变体）+ 本仓库自带的 1 个。
    videoSkillsOnSite: videoSkills,
    // skillsCount：README Skill 网格里的总数（data/skills.json 的 Skill + 创作者变体）；没传时退回旧口径。
    skills: skillsCount ?? videoSkills + 1,
    seedance25: stats.v25Count,
    seedance20: stats.v20Count,
    authors: stats.authorCount,
    retestRuns: stats.retestRuns,
    retestCases: stats.retestCases,
    stabilityCases: stats.stabilityCases,
    stabilityAvg: stats.stabilityAvg,
    templates: templates.length,
    templateCategories: categories.length,
    lastUpdated: stats.lastUpdated,
  };
}

function dynamicBadge(query, label, color, href) {
  const url =
    `https://img.shields.io/badge/dynamic/json?url=${encodeURIComponent(RAW_STATS_URL)}` +
    `&query=${encodeURIComponent(query)}&label=${encodeURIComponent(label)}&color=${color}&style=flat-square`;
  return `[![${label}](${url})](${href})`;
}

/** 顶部徽章行：案例数 / 复测次数 / 模板数 / 最近更新 走动态 JSON，Skill 版本走 npm，其余静态。 */
/** anchors: { all, retests, templates, skills }，都是带 # 的页内锚点，由调用方按当前语言的标题算出。 */
export function renderBadges(lang, anchors = {}) {
  const L = {
    cases: t(lang, { en: "cases", zh: "案例", ja: "ケース" }),
    retests: t(lang, { en: "cross-model retests", zh: "跨模型复测", ja: "クロスモデル再テスト" }),
    templates: t(lang, { en: "templates", zh: "模板", ja: "テンプレート" }),
    updated: t(lang, { en: "updated", zh: "更新", ja: "更新" }),
    skill: t(lang, { en: "agent skill", zh: "Agent Skill", ja: "Agent Skill" }),
  };
  return [
    dynamicBadge("$.cases", L.cases, "e8541e", anchors.all || LIVE_SITE_URL),
    dynamicBadge("$.retestRuns", L.retests, "111111", anchors.retests || LIVE_SITE_URL),
    dynamicBadge("$.templates", L.templates, "111111", anchors.templates || LIVE_SITE_URL),
    dynamicBadge("$.skills", t(lang, { en: "AI video skills", zh: "AI 视频 Skill", ja: "AI 動画 Skill" }), "111111", anchors.skills || LIVE_SITE_URL),
    dynamicBadge("$.lastUpdated", L.updated, "555555", LIVE_SITE_URL),
    `[![npm](https://img.shields.io/npm/v/seedance-prompt-library?label=${encodeURIComponent(L.skill)}&color=111111&style=flat-square)](https://www.npmjs.com/package/seedance-prompt-library)`,
    "[![License: MIT (code)](https://img.shields.io/badge/code-MIT-lightgrey.svg?style=flat-square)](./LICENSE)",
    "[![Content: CC BY 4.0 (curation)](https://img.shields.io/badge/curation-CC%20BY%204.0-lightgrey.svg?style=flat-square)](https://creativecommons.org/licenses/by/4.0/)",
    "[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-lightgrey.svg?style=flat-square)](./contributing.md)",
  ].join(" ");
}

// ---------------------------------------------------------------------------
// 横幅 SVG（goodcase.ai 视觉：米白底、黑字、单一橙色强调、1px 边框、0 圆角、Swiss grid）
// ---------------------------------------------------------------------------

export function renderHeroSvg(snapshot) {
  const W = 1200;
  const H = 400;
  const bg = "#F4F1EA";
  const ink = "#111111";
  const accent = "#E8541E";
  const muted = "#6B675F";
  const sans = "Helvetica Neue, Helvetica, Arial, 'PingFang SC', sans-serif";
  const mono = "SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace";
  const cells = [
    { n: snapshot.cases, label: "VERIFIED CASES" },
    { n: snapshot.retestRuns, label: "CROSS-MODEL RETESTS" },
    { n: snapshot.templates, label: "PROMPT TEMPLATES" },
    { n: snapshot.skills ?? 1, label: "AI VIDEO SKILLS" },
  ];
  const cellW = (W - 80) / cells.length;
  const cellY = 268;
  const cellH = 92;
  const cellSvg = cells
    .map((c, i) => {
      const x = 40 + i * cellW;
      return [
        `<rect x="${x}" y="${cellY}" width="${cellW}" height="${cellH}" fill="${bg}" stroke="${ink}" stroke-width="1"/>`,
        `<text x="${x + 20}" y="${cellY + 48}" font-family="${sans}" font-size="40" font-weight="700" fill="${ink}">${escapeXml(c.n ?? "-")}</text>`,
        `<text x="${x + 20}" y="${cellY + 74}" font-family="${mono}" font-size="12" letter-spacing="1.5" fill="${muted}">${escapeXml(c.label)}</text>`,
      ].join("");
    })
    .join("");
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Awesome Seedance: ${snapshot.cases} verified cases, ${snapshot.retestRuns} cross-model retests, ${snapshot.templates} prompt templates, ${snapshot.skills ?? 1} AI video skills">`,
    `<rect width="${W}" height="${H}" fill="${bg}"/>`,
    ...Array.from({ length: 12 }, (_, i) => `<line x1="${(i * W) / 12}" y1="0" x2="${(i * W) / 12}" y2="${H}" stroke="${ink}" stroke-opacity="0.05" stroke-width="1"/>`),
    `<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="${ink}" stroke-width="1"/>`,
    `<rect x="40" y="36" width="12" height="12" fill="${accent}"/>`,
    `<text x="62" y="47" font-family="${mono}" font-size="13" letter-spacing="2" fill="${ink}">GOODCASE.AI · OPEN DATA</text>`,
    `<text x="${W - 40}" y="47" text-anchor="end" font-family="${mono}" font-size="13" letter-spacing="2" fill="${muted}">SYNCED ${escapeXml(snapshot.lastUpdated || "")} · DAILY</text>`,
    `<line x1="40" y1="64" x2="${W - 40}" y2="64" stroke="${ink}" stroke-width="1"/>`,
    `<text x="40" y="150" font-family="${sans}" font-size="84" font-weight="800" letter-spacing="-3" fill="${ink}">Awesome <tspan fill="${accent}">Seedance</tspan></text>`,
    `<text x="40" y="196" font-family="${sans}" font-size="24" fill="${ink}">Verified Seedance 2.5 / 2.0 video prompts, each checked against its original post,</text>`,
    `<text x="40" y="228" font-family="${sans}" font-size="24" fill="${ink}">then re-run on a second model so you can see which ones actually hold up.</text>`,
    cellSvg,
    `<text x="40" y="${H - 18}" font-family="${mono}" font-size="11" letter-spacing="1.5" fill="${muted}">github.com/${REPO}</text>`,
    `<text x="${W - 40}" y="${H - 18}" text-anchor="end" font-family="${mono}" font-size="11" letter-spacing="1.5" fill="${muted}">npx seedance-prompt-library install</text>`,
    `</svg>`,
  ].join("\n");
}

// ---------------------------------------------------------------------------
// 共用小件
// ---------------------------------------------------------------------------

function pageRange(p, listLength, lang, { withTotal = false } = {}) {
  if (p.totalParts > 1) {
    return t(lang, {
      en: withTotal ? `cases ${p.rangeStart}–${p.rangeEnd} of ${listLength}` : `cases ${p.rangeStart}–${p.rangeEnd}`,
      zh: withTotal ? `第 ${p.rangeStart}–${p.rangeEnd} 条，共 ${listLength} 条` : `第 ${p.rangeStart}–${p.rangeEnd} 条`,
      ja: withTotal ? `${listLength} 件中 ${p.rangeStart}–${p.rangeEnd} 件目` : `${p.rangeStart}–${p.rangeEnd} 件目`,
    });
  }
  return t(lang, { en: `${listLength} cases`, zh: `${listLength} 条`, ja: `${listLength} 件` });
}

function partTag(p, lang, style) {
  if (p.totalParts <= 1) return "";
  if (style === "inline") {
    return t(lang, { en: `, part ${p.partNo}/${p.totalParts}`, zh: `，第 ${p.partNo}/${p.totalParts} 页`, ja: `、Part ${p.partNo}/${p.totalParts}` });
  }
  return t(lang, { en: ` · Part ${p.partNo}/${p.totalParts}`, zh: ` · 第 ${p.partNo}/${p.totalParts} 页`, ja: ` · Part ${p.partNo}/${p.totalParts}` });
}

// ---------------------------------------------------------------------------
// Quick Links：和 Contents 的分工——Contents 是本页章节，Quick Links 是带数量的资产入口。
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// 🔁 复测聚焦区：往前提到 Featured 之前。说明我们是谁、复测了什么、结果如何、钱和赞助。
// ---------------------------------------------------------------------------

const VERDICT_LABEL = {
  reproduced: { icon: "✅", en: "reproduced", zh: "复现", ja: "再現" },
  degraded: { icon: "⚠️", en: "degraded", zh: "降级", ja: "劣化" },
  failed: { icon: "❌", en: "failed", zh: "失败", ja: "失敗" },
  inconclusive: { icon: "➖", en: "inconclusive", zh: "不确定", ja: "判定不能" },
};

function verdictCounts(cases) {
  const counts = { reproduced: 0, degraded: 0, failed: 0, inconclusive: 0 };
  for (const c of cases) {
    for (const r of c.retests || []) {
      const key = VERDICT_LABEL[r.verdict] ? r.verdict : "inconclusive";
      counts[key] += 1;
    }
  }
  return counts;
}

/** 挑复测样例：热度最高的 2 条复现 + 1 条降级/失败，让读者同时看到成功和不成功。 */
export function pickRetestShowcase(cases, count = 3) {
  const withRetest = sortByHeat(cases).filter((c) => c.retestSummary && c.retestSummary.latest && c.retestSummary.latest.artifactUrl);
  const ok = withRetest.filter((c) => c.retestSummary.latest.verdict === "reproduced");
  const notOk = withRetest.filter((c) => c.retestSummary.latest.verdict !== "reproduced");
  const picked = [...ok.slice(0, Math.max(1, count - 1)), ...notOk.slice(0, 1)].slice(0, count);
  if (picked.length < count) {
    for (const c of withRetest) {
      if (picked.length >= count) break;
      if (!picked.includes(c)) picked.push(c);
    }
  }
  return picked;
}

/**
 * 复测花费一句话。spend 形状 { usd, approx?: "over"|"about", basis?: "list-price" }，
 * 来自 data/retest-spend.json（人工维护，按公开牌价、不含折扣）；没有就只说“花真钱”。
 */
export function renderSpendLine(spend, runs, lang) {
  if (!spend || spend.usd == null) {
    return t(lang, {
      en: "Every run costs real inference money, and we publish the result whether or not it flatters the prompt.",
      zh: "每次复测都是真金白银的推理费，结果好坏我们都照发。",
      ja: "再テストは毎回、実費の推論コストがかかります。結果が良くても悪くてもそのまま公開します。",
    });
  }
  const over = spend.approx !== "about";
  const listPrice = spend.basis === "list-price";
  const n = spend.runs ?? runs;
  return t(lang, {
    en: `Every run costs real inference money: ${over ? "over" : "about"} US$${spend.usd} across ${n} runs so far${
      listPrice ? ", at list price with no discounts, which is what anyone else would pay to reproduce them" : ""
    }. We publish the result whether or not it flatters the prompt.`,
    zh: `每次复测都是真金白银的推理费：到目前为止 ${n} 次复测${over ? "已超过" : "约"} ${spend.usd} 美元${
      listPrice ? "，按公开牌价算、不含任何折扣，别人复现同样的实验也是这个价" : ""
    }。结果好坏我们都照发。`,
    ja: `再テストは毎回、実費の推論コストがかかります。これまで ${n} 回で ${over ? "US$" + spend.usd + " 超" : "約 US$" + spend.usd}${
      listPrice ? "（定価ベース、割引なし。誰が再現しても同じ金額です）" : ""
    }。結果が良くても悪くてもそのまま公開します。`,
  });
}

export const SPONSOR_EMAIL = "carl@goodcase.ai";

/** 复测样例的产物封面：opts.retestPosterFor(caseObj) 返回相对路径（assets/retests/<slug>.jpg）或 null。 */
export function retestHeading(lang) {
  return t(lang, { en: "## 🔁 Cross-model retests", zh: "## 🔁 跨模型复测", ja: "## 🔁 クロスモデル再テスト" });
}

export function renderRetestSpotlight(cases, meta, lang, opts = {}) {
  const retestsMeta = meta && meta.retests;
  const retestPosterFor = opts.retestPosterFor || (() => null);
  if (!retestsMeta || !retestsMeta.totalRuns) return null;
  const perModel = aggregateRetestsByModel(cases, meta);
  if (perModel.size === 0) return null;
  const counts = verdictCounts(cases);
  const runs = retestsMeta.totalRuns;
  const casesWith = retestsMeta.casesWithRetests || 0;
  const screenshot = opts.screenshot || "./assets/goodcase-retest-evidence.png";
  const spend = opts.spend ?? meta.retestSpend ?? null;

  const lines = [];
  lines.push(retestHeading(lang));
  lines.push("");
  lines.push(
    t(lang, {
      en: `**As far as we know, this is the first public prompt library that re-runs its video prompts on a second model at scale and publishes the result either way.** ${casesWith} of the cases here have been re-run (${runs} runs so far), each with a verdict, a judge score and the generated output. A prompt that only ever worked once, for its author, on one model, is a screenshot; a prompt that survives a re-run is a method.`,
      zh: `**据我们所知，这是第一个把视频提示词批量拿到第二个模型上重跑、成败都公开的提示词库。** 这里已有 ${casesWith} 条案例被重跑过（累计 ${runs} 次），每次都带结论、评分和生成产物。只在作者手里、只在一个模型上成功过一次的 prompt 是截图；能扛住重跑的 prompt 才是方法。`,
      ja: `**私たちの知る限り、動画プロンプトを別モデルで大規模に再生成し、成否を問わず結果を公開している公開ライブラリはこれが初めてです。** ここに掲載された ${casesWith} ケースが再テスト済み（累計 ${runs} 回）で、それぞれ判定・審査スコア・生成物が付いています。作者の手元で一度だけ、ひとつのモデルでしか成功しなかったプロンプトはスクリーンショットにすぎません。再生成に耐えたプロンプトこそが手法です。`,
    })
  );
  lines.push("");
  const headers = t(lang, { en: ["Model", "Runs", "Reproduction rate"], zh: ["模型", "次数", "复现率"], ja: ["モデル", "回数", "再現率"] });
  const rows = Array.from(perModel.entries())
    .sort((a, b) => b[1].runs - a[1].runs)
    .map(([model, { runs: n, reproduced }]) => [model, String(n), n > 0 ? `${Math.round((reproduced / n) * 100)}%` : "-"]);
  lines.push(renderTable(headers, rows));
  lines.push("");
  const verdictLine = ["reproduced", "degraded", "failed"]
    .map((k) => `${VERDICT_LABEL[k].icon} ${counts[k]} ${VERDICT_LABEL[k][lang]}`)
    .join(" · ");
  lines.push(
    t(lang, {
      en: `Verdicts across all runs: ${verdictLine}. Runs without a final score show as \`score n/a\`. Per-case verdicts, scores and output videos are on each case's goodcase.ai page; the model labels and batch dates are explained under [Statistics](#statistics).`,
      zh: `全部复测的结论分布：${verdictLine}。没有终评分的记录显示为“无评分”。每条案例的结论、评分和产出视频都在它的 goodcase.ai 页面上；模型标签和批次日期的说明见[统计](#统计)。`,
      ja: `全実行の判定内訳: ${verdictLine}。最終スコアのない実行は \`スコア n/a\` と表示されます。ケースごとの判定・スコア・出力動画は各ケースの goodcase.ai ページに、モデル表記とバッチ日付の説明は[統計](#統計)にあります。`,
    })
  );
  lines.push("");

  const showcase = pickRetestShowcase(cases, 3);
  if (showcase.length) {
    lines.push(
      t(lang, {
        en: "**Same prompt, second model.** Three examples, including one that did not hold up:",
        zh: "**同一段 prompt，换一个模型。** 三个样例，其中一个没扛住：",
        ja: "**同じプロンプト、別のモデル。** 3 つの例。うち 1 つは持ちこたえられなかったものです:",
      })
    );
    lines.push("");
    const h = t(lang, {
      en: ["Case", "Original (Seedance)", "Retest (second model)", "Verdict"],
      zh: ["案例", "原作（Seedance）", "复测（第二个模型）", "结论"],
      ja: ["ケース", "オリジナル（Seedance）", "再テスト（別モデル）", "判定"],
    });
    const r = showcase.map((c) => {
      const latest = c.retestSummary.latest;
      const v = VERDICT_LABEL[latest.verdict] || VERDICT_LABEL.inconclusive;
      const hasScore = latest.finalScore != null && latest.finalScore !== "";
      const score = hasScore
        ? t(lang, { en: `score ${latest.finalScore}`, zh: `${latest.finalScore} 分`, ja: `スコア ${latest.finalScore}` })
        : t(lang, { en: "score n/a", zh: "无评分", ja: "スコア n/a" });
      const title = displayTitle(c, lang);
      const poster = retestPosterFor(c);
      const posterCell = poster
        ? `[<img src="${poster}" width="160" alt="${escapeXml(`${latest.model}: ${title}`)}">](${c.goodcaseUrl})<br>`
        : "";
      return [
        `[${title}](${c.goodcaseUrl})<br>${bucketShortLabel(classifySeedance(c), lang)} · ${t(lang, { en: "heat", zh: "热度", ja: "ヒート" })} ${c.heatScore ?? "-"}`,
        thumbCell(c, title, 160),
        `${posterCell}${latest.model}<br>[${t(lang, { en: "▶ output video", zh: "▶ 复测视频", ja: "▶ 出力動画" })}](${latest.artifactUrl})`,
        `${v.icon} ${v[lang]} (${score})`,
      ];
    });
    lines.push(renderTable(h, r));
    lines.push("");
  }

  const alt = t(lang, {
    en: "Retest evidence block on a goodcase.ai case page",
    zh: "goodcase.ai 案例页上的复测证据区",
    ja: "goodcase.ai のケースページにある再テスト証拠ブロック",
  });
  lines.push(`[<img src="${screenshot}" width="800" alt="${alt}">](https://goodcase.ai/cases/${encodeURIComponent(showcase[0]?.slug || "")})`);
  lines.push("");

  const cta = t(lang, {
    en: `Want Kling, Veo, Hailuo or the Seedance 2.5 API added to the retest matrix? [Sponsor a batch →](${SPONSOR_URL}) or write to [${SPONSOR_EMAIL}](mailto:${SPONSOR_EMAIL}).`,
    zh: `想把可灵、Veo、海螺或 Seedance 2.5 API 加进复测矩阵？[赞助一批复测 →](${SPONSOR_URL})，或直接写邮件到 [${SPONSOR_EMAIL}](mailto:${SPONSOR_EMAIL})。`,
    ja: `Kling、Veo、Hailuo、Seedance 2.5 API を再テスト対象に加えたい方へ: [バッチをスポンサーする →](${SPONSOR_URL})、または [${SPONSOR_EMAIL}](mailto:${SPONSOR_EMAIL}) までご連絡ください。`,
  });
  lines.push(`${renderSpendLine(spend, runs, lang)} ${cta}`);
  lines.push("");
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// 🗂 分类总览：Featured 之后的一屏，按模板分类给缩略图 + 数量 + 入口。
// ---------------------------------------------------------------------------

export const CATEGORY_ICON = {
  foundation: "🧱",
  realism: "📱",
  commercial: "🛒",
  narrative: "🎭",
  stylized: "🎨",
  motion: "💥",
};

export function renderGalleryIndex({ parts, bucketCases, cases, promptLinks, templatesAnchor = "", templateIndexHref = null }, lang) {
  const readmeName = readmeFileName(lang);
  const back = t(lang, {
    en: `← [Back to README](../${readmeName})`,
    zh: `← [返回 README](../${readmeName})`,
    ja: `← [README に戻る](../${readmeName})`,
  });
  const lines = [];
  lines.push(t(lang, { en: "# Awesome Seedance — Gallery Index", zh: "# Awesome Seedance — 画廊总览", ja: "# Awesome Seedance — ギャラリー索引" }));
  lines.push("");
  lines.push(
    t(lang, {
      en: `All ${cases.length} cases with full prompts, split per Seedance version and paged so GitHub renders every file. Generated from data/cases.json — do not hand-edit.`,
      zh: `全部 ${cases.length} 条案例（含完整 prompt），按 Seedance 版本分文件、超长分页以保证 GitHub 能渲染。由 data/cases.json 生成，请勿手改。`,
      ja: `全 ${cases.length} ケースのプロンプト全文。Seedance のバージョンごとにファイルを分け、GitHub が描画できるサイズにページ分割しています。data/cases.json から生成、手編集不可。`,
    })
  );
  lines.push("");
  lines.push(back);
  lines.push("");
  lines.push(t(lang, { en: "## Pages", zh: "## 分页", ja: "## ページ" }));
  lines.push("");
  for (const bucket of SEEDANCE_BUCKETS) {
    const list = bucketCases[bucket];
    if (!list || !list.length) continue;
    const label = bucketLabel(bucket, lang);
    for (const p of parts[bucket]) {
      lines.push(`- [${label}${partTag(p, lang, "dot")}](./${p.fileName}) - ${pageRange(p, list.length, lang, { withTotal: true })}.`);
    }
  }
  lines.push("");
  lines.push(t(lang, { en: "## Also in this repository", zh: "## 仓库里的其他入口", ja: "## このリポジトリのその他の入口" }));
  lines.push("");
  lines.push(`- [${t(lang, { en: "Prompt templates by category", zh: "分类提示语模板", ja: "カテゴリ別プロンプトテンプレート" })}](../${readmeName}${templatesAnchor})`);
  if (templateIndexHref) {
    lines.push(`- [${t(lang, { en: "Template index (one file per template)", zh: "模板索引（一个模板一个文件）", ja: "テンプレート索引（1 テンプレート 1 ファイル、英語）" })}](${templateIndexHref})`);
  }
  lines.push(
    `- [${t(lang, { en: "Agent Skill reference (full template text)", zh: "Agent Skill 参考（模板全文）", ja: "Agent Skill リファレンス（テンプレート全文）" })}](../agents/skills/seedance-prompt-library/references/style-library.md)`
  );
  lines.push(
    `- [${t(lang, { en: "Copyright & takedown notice", zh: "版权与下架政策", ja: "著作権と削除申請" })}](../${readmeName}#${t(lang, {
      en: "copyright--takedown-notice",
      zh: "版权与下架政策",
      ja: "著作権と削除申請",
    })})`
  );
  lines.push(`- [${t(lang, { en: "Live site on goodcase.ai", zh: "goodcase.ai 在线站", ja: "goodcase.ai のライブサイト" })}](${LIVE_SITE_URL})`);
  lines.push("");
  lines.push(t(lang, { en: "## Recommended entries", zh: "## 推荐入口", ja: "## おすすめエントリ" }));
  lines.push("");
  lines.push(
    t(lang, {
      en: "The ten hottest cases across all versions; each link opens the full entry on its gallery page.",
      zh: "全部版本里热度最高的十条；每个链接直达画廊分页里的完整条目。",
      ja: "全バージョンでヒートスコア上位 10 件。各リンクはギャラリーページの完全なエントリを開きます。",
    })
  );
  lines.push("");
  for (const c of sortByHeat(cases).slice(0, 10)) {
    const href = promptLinks.get(c.slug);
    const title = displayTitle(c, lang);
    const summary = displaySummary(c, lang);
    lines.push(`- [${title}](${href ? href.replace(/^\.\/docs\//, "./") : c.goodcaseUrl}) - ${summary}`);
  }
  lines.push("");
  lines.push(back);
  lines.push("");
  return lines.join("\n");
}

export { REPO, THUMB_WIDTH };
