// 「分类提示语模板」相关的纯渲染函数：
//   - renderTemplateDoc   → docs/templates/{zh,en}/<id>.md（一个模板一个文件，带可直接复制的块）
//   - renderTemplateIndex → docs/templates/{zh,en}/README.md（GitHub 浏览目录时自动渲染）
//   - renderTemplateGrid  → README 里的「分类提示语模板」板块（一个模板一格，带素材封面）
//   - renderSkillGrid     → README 里的 Skill 网格（一格一个 Skill，变体挂在基础款下面）
//   - renderStartHere     → README 目录之后的第一节：新手路径 + 模板 vs Skill
// 不读盘、不联网；数据由 generate-readme.mjs 准备好传进来。
import { t, pickLang, displayTitle, githubSlug, fenceForPrompt, classifySeedance, bucketShortLabel } from "./render.mjs";
import { escapeXml, CATEGORY_ICON } from "./sections.mjs";

export const TEMPLATE_DOC_LANGS = ["zh", "en"];
export const TEMPLATE_DOC_CASES = 12;
const UTM = "utm_source=awesome-seedance";

/** README 的语言 → 模板文件的语言。模板只有中英两版，日文 README 链英文模板。 */
export function templateDocLang(lang) {
  return lang === "zh" ? "zh" : "en";
}

function readmeFile(lang) {
  return lang === "zh" ? "README_zh.md" : lang === "ja" ? "README_ja.md" : "README.md";
}

export function withUtm(url) {
  if (!url || /[?&]utm_source=/.test(url)) return url;
  return `${url}${url.includes("?") ? "&" : "?"}${UTM}`;
}

// ---------------------------------------------------------------------------
// 标题（单独导出，generate-readme 用它们算锚点，杜绝硬编码）
// ---------------------------------------------------------------------------

export function startHereHeading(lang) {
  return t(lang, { en: "## 🚀 Start Here", zh: "## 🚀 从这里开始", ja: "## 🚀 ここから始める" });
}

export function templatesHeading(lang) {
  return t(lang, { en: "## 🧩 Prompt Templates by Category", zh: "## 🧩 分类提示语模板", ja: "## 🧩 カテゴリ別プロンプトテンプレート" });
}

export function skillsHeading(lang) {
  return t(lang, { en: "## 🧰 Skills", zh: "## 🧰 Skill", ja: "## 🧰 Skill" });
}

export function anchorOf(heading) {
  return `#${githubSlug(heading.replace(/^#+\s+/, ""))}`;
}

// ---------------------------------------------------------------------------
// 可复制块
// ---------------------------------------------------------------------------

/** 没有专门写 copyPrompt 的模板用这句兜底，保证每个模板文件都有能直接复制的引导语。 */
export function defaultCopyPrompt(template, lang) {
  const title = pickLang(template.title, lang);
  return lang === "zh"
    ? `我要做一个${title}类型的视频，【在这里写你的主体、场景和想要的效果，有参考图就一起发给你】。请根据下面这个提示语模板，帮我改写成一条可以直接用的 Seedance 视频提示语：`
    : `I want to make a "${title}" video. [Describe your subject, setting and the effect you want here; attach reference images if you have them.] Using the prompt template below, rewrite it into one ready-to-use Seedance video prompt for me:`;
}

export function copyPromptOf(template, lang) {
  const own = template.copyPrompt && template.copyPrompt[lang];
  return own && own.trim() ? own.trim() : defaultCopyPrompt(template, lang);
}

function listOf(value, lang) {
  const v = value && (value[lang] ?? value.en);
  return Array.isArray(v) ? v : v ? [v] : [];
}

/** 模板正文：标题、简介、适用场景、要点、示例、结构、常见坑。版式照用户给的 UGC 口播测评样例。 */
export function renderTemplateBody(template, lang, exampleUrls = []) {
  const L = lang === "zh"
    ? { use: "适用场景:", guide: "要点:", ex: "示例:", st: "结构:", pit: "常见坑:" }
    : { use: "Use when:", guide: "Guidance:", ex: "Examples:", st: "Structure:", pit: "Pitfalls:" };
  const lines = [`#### ${pickLang(template.title, lang)}`, "", pickLang(template.description, lang) || "", ""];
  const useWhen = pickLang(template.useWhen, lang);
  if (useWhen) lines.push(`**${L.use}** ${useWhen}`, "");
  const guidance = listOf(template.guidance, lang);
  if (guidance.length) lines.push(`**${L.guide}**`, "", ...guidance.map((g) => `- ${g}`), "");
  if (exampleUrls.length) lines.push(`**${L.ex}** ${exampleUrls.map((u, i) => `[#${i + 1}](${u})`).join(" ")}`, "");
  const structure = listOf(template.structure, lang);
  if (structure.length) lines.push(`**${L.st}**`, "", ...structure.map((s, i) => `${i + 1}. ${s}`), "");
  const pitfalls = listOf(template.pitfalls, lang);
  if (pitfalls.length) lines.push(`**${L.pit}**`, "", ...pitfalls.map((p) => `- ${p}`), "");
  while (lines[lines.length - 1] === "") lines.pop();
  return lines.join("\n");
}

export function renderCopyBlock(template, lang, exampleUrls = []) {
  const text = `${copyPromptOf(template, lang)}\n\n${renderTemplateBody(template, lang, exampleUrls)}`;
  // 正文里有行内反引号（台词样例等），围栏长度按内容算；至少 4 个，和普通代码块区分开。
  const fence = "`".repeat(Math.max(4, fenceForPrompt(text).length));
  return `${fence}text\n${text}\n${fence}`;
}

// ---------------------------------------------------------------------------
// 模板文件
// ---------------------------------------------------------------------------

function posterStrip(cases, lang, max = 4, width = 200) {
  const shown = cases.filter((c) => c.posterUrl).slice(0, max);
  if (!shown.length) return "";
  const cells = shown.map(
    (c) => `<td align="center" valign="top"><a href="${c.goodcaseUrl}"><img src="${c.posterUrl}" width="${width}" alt="${escapeXml(displayTitle(c, lang))}"></a></td>`
  );
  return `<table>\n<tr>\n${cells.join("\n")}\n</tr>\n</table>`;
}

function exampleCasesOf(template, cases) {
  const bySlug = new Map(cases.map((c) => [c.slug, c]));
  const curated = (template.exampleCases || []).map((s) => bySlug.get(s)).filter(Boolean);
  return curated.length ? curated : cases.slice(0, 4);
}

/**
 * ctx: { cases: 该模板名下按热度排序的案例, prev, next: 相邻模板或 null, category, readmeAnchor }
 * lang 只能是 zh / en。
 */
export function renderTemplateDoc(template, lang, ctx) {
  if (!TEMPLATE_DOC_LANGS.includes(lang)) throw new Error(`Template docs are zh/en only, got "${lang}"`);
  const zh = lang === "zh";
  const other = zh ? "en" : "zh";
  const cases = ctx.cases || [];
  const examples = exampleCasesOf(template, cases);
  const exampleUrls = examples.map((c) => c.goodcaseUrl);
  const icon = CATEGORY_ICON[template.category] || "🧩";
  const title = pickLang(template.title, lang);
  const readme = `../../../${readmeFile(lang)}${ctx.readmeAnchor || ""}`;
  const lines = [];
  lines.push(zh ? `[English](../${other}/${template.id}.md) | **中文**` : `**English** | [中文](../${other}/${template.id}.md)`);
  lines.push("");
  lines.push(
    zh
      ? `[← 全部分类提示语模板](${readme}) · [模板索引](./README.md)`
      : `[← All prompt templates](${readme}) · [Template index](./README.md)`
  );
  lines.push("");
  lines.push(`# ${icon} ${title}`);
  lines.push("");
  lines.push(`> ${pickLang(template.description, lang)}`);
  lines.push("");
  lines.push(zh ? "<!-- 由 data/ 生成，请勿手改；改 data/templates-local.json 后跑 npm run generate -->" : "<!-- Generated from data/. Do not hand-edit; change data/templates-local.json and run npm run generate -->");
  lines.push("");
  const strip = posterStrip(examples, lang);
  if (strip) lines.push(strip, "");

  lines.push(zh ? "## 直接复制" : "## Copy this");
  lines.push("");
  lines.push(
    zh
      ? "点代码块右上角的复制按钮整段拿走，把【】里的内容换成你自己的，连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行）。它会按这个模板替你写出一条可以直接丢进 Seedance 的提示语。"
      : "Hit the copy button on the block, replace everything in [square brackets] with your own details, and send it to any AI chat (ChatGPT, Claude, Gemini) together with your reference images. It will write a Seedance-ready prompt for you that follows this template."
  );
  lines.push("");
  lines.push(renderCopyBlock(template, lang, exampleUrls));
  lines.push("");

  lines.push(zh ? "## 三步用起来" : "## Three steps");
  lines.push("");
  lines.push(
    zh
      ? [
          "| 步骤 | 做什么 |",
          "| --- | --- |",
          "| 1 | 复制上面整段，把【】换成你的产品、人物或场景，能给参考图就给 |",
          "| 2 | 发给任意 AI 对话，拿到一条按这个结构写好的 Seedance 提示语 |",
          "| 3 | 粘到 Seedance（即梦 / Dreamina）生成；效果不对先回头看常见坑，再改提示语重跑 |",
        ].join("\n")
      : [
          "| Step | What to do |",
          "| --- | --- |",
          "| 1 | Copy the whole block above and replace the [bracketed] parts with your product, person or scene. Attach reference images if you can. |",
          "| 2 | Send it to any AI chat and get back a Seedance prompt written to this structure. |",
          "| 3 | Paste that prompt into Seedance (Dreamina / Jimeng) and generate. If the result is off, check the pitfalls first, then adjust and re-run. |",
        ].join("\n")
  );
  lines.push("");

  if (cases.length) {
    const shown = cases.slice(0, TEMPLATE_DOC_CASES);
    lines.push(zh ? `## 这一类的案例（已归类 ${cases.length} 条，按热度）` : `## Cases in this category (${cases.length} filed, by heat)`);
    lines.push("");
    lines.push(zh ? "| 预览 | 案例 | 版本 | 热度 |" : "| Preview | Case | Version | Heat |");
    lines.push("| --- | --- | --- | --- |");
    for (const c of shown) {
      const alt = escapeXml(displayTitle(c, lang));
      const img = c.posterUrl ? `<a href="${c.goodcaseUrl}"><img src="${c.posterUrl}" width="160" alt="${alt}"></a>` : "-";
      const name = displayTitle(c, lang).replace(/\|/g, "\\|");
      lines.push(`| ${img} | [${name}](${c.goodcaseUrl}) | ${bucketShortLabel(classifySeedance(c), lang)} | ${c.heatScore ?? "-"} |`);
    }
    lines.push("");
    if (cases.length > shown.length) {
      lines.push(
        zh
          ? `其余 ${cases.length - shown.length} 条在[完整画廊](../../gallery.zh.md)和 [goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&${UTM}) 上。`
          : `The other ${cases.length - shown.length} are in the [full gallery](../../gallery.md) and on [goodcase.ai](https://goodcase.ai/cases?filter=video&q=seedance&${UTM}).`
      );
      lines.push("");
    }
  }

  const nav = [];
  if (ctx.prev) nav.push(zh ? `[← 上一个：${pickLang(ctx.prev.title, lang)}](./${ctx.prev.id}.md)` : `[← Previous: ${pickLang(ctx.prev.title, lang)}](./${ctx.prev.id}.md)`);
  if (ctx.next) nav.push(zh ? `[下一个：${pickLang(ctx.next.title, lang)} →](./${ctx.next.id}.md)` : `[Next: ${pickLang(ctx.next.title, lang)} →](./${ctx.next.id}.md)`);
  if (nav.length) lines.push("---", "", nav.join(" · "), "");
  return lines.join("\n");
}

/** 模板按大类分组并保持稳定顺序：大类按 categories 顺序，类内按模板在库里的顺序。 */
export function groupTemplates(library) {
  return library.categories
    .map((category) => ({ category, templates: library.templates.filter((tp) => tp.category === category.id) }))
    .filter((g) => g.templates.length);
}

export function orderedTemplates(library) {
  return groupTemplates(library).flatMap((g) => g.templates);
}

export function renderTemplateIndex(library, lang, index, readmeAnchor = "") {
  const zh = lang === "zh";
  const other = zh ? "en" : "zh";
  const total = orderedTemplates(library).length;
  const lines = [];
  lines.push(zh ? `[English](../${other}/README.md) | **中文**` : `**English** | [中文](../${other}/README.md)`);
  lines.push("");
  lines.push(zh ? `[← 返回 README](../../../${readmeFile(lang)}${readmeAnchor})` : `[← Back to README](../../../${readmeFile(lang)}${readmeAnchor})`);
  lines.push("");
  lines.push(zh ? `# 分类提示语模板（${total} 个）` : `# Prompt Templates by Category (${total})`);
  lines.push("");
  lines.push(
    zh
      ? "每个模板一个文件，里面有一段可以直接复制的提示语：把【】换成你自己的内容，发给任意 AI 对话，就能拿到一条 Seedance 可用的提示语。"
      : "One file per template. Each holds a copy-ready block: replace the [bracketed] parts with your own details, send it to any AI chat, and get back a prompt you can run in Seedance."
  );
  lines.push("");
  for (const g of groupTemplates(library)) {
    const icon = CATEGORY_ICON[g.category.id] || "🧩";
    lines.push(`## ${icon} ${pickLang(g.category.title, lang)}`);
    lines.push("");
    lines.push(zh ? "| 模板 | 适合做什么 | 已归类案例 |" : "| Template | Use it for | Cases filed |");
    lines.push("| --- | --- | --- |");
    for (const tp of g.templates) {
      const n = (index.byTemplate.get(tp.id) || []).length;
      const desc = (pickLang(tp.description, lang) || "").replace(/\|/g, "\\|");
      lines.push(`| [${pickLang(tp.title, lang)}](./${tp.id}.md) | ${desc} | ${n} |`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// README：分类提示语模板网格
// ---------------------------------------------------------------------------

export function renderTemplateGrid(library, lang, index, opts = {}) {
  const cols = opts.cols || 3;
  const width = Math.floor(100 / cols);
  const imgWidth = cols >= 4 ? 200 : 260;
  const docLang = templateDocLang(lang);
  const docBase = `./docs/templates/${docLang}`;
  const total = orderedTemplates(library).length;
  const filed = orderedTemplates(library).reduce((n, tp) => n + (index.byTemplate.get(tp.id) || []).length, 0);
  const lines = [templatesHeading(lang), ""];
  lines.push(
    t(lang, {
      en: `${total} templates, one per kind of clip, distilled from ${filed} verified cases. Pick the look you want, open its template, copy the block, swap the [bracketed] parts for your own subject, and hand it to any AI chat. Browse them all in the [template index](${docBase}/README.md).`,
      zh: `${total} 个模板，一类片子一个，从 ${filed} 条已验证案例里提炼出来。看图挑你想要的画面，点开模板，复制那一段，把【】换成你自己的内容，发给任意 AI 对话就行。全部模板也可以在[模板索引](${docBase}/README.md)里按表格浏览。`,
      ja: `作りたいクリップの種類ごとに ${total} 個のテンプレート。${filed} 件の検証済みケースから抽出しました。絵柄で選んでテンプレートを開き、ブロックをコピーして [角括弧] の部分を自分の内容に置き換え、任意の AI チャットに渡してください。一覧は[テンプレート索引](${docBase}/README.md)（英語）にあります。`,
    })
  );
  lines.push("");
  for (const g of groupTemplates(library)) {
    const icon = CATEGORY_ICON[g.category.id] || "🧩";
    const n = g.templates.length;
    lines.push(
      t(lang, {
        en: `### ${icon} ${pickLang(g.category.title, lang)} (${n} ${n === 1 ? "template" : "templates"})`,
        zh: `### ${icon} ${pickLang(g.category.title, lang)}（${n} 个模板）`,
        ja: `### ${icon} ${pickLang(g.category.title, lang)}（テンプレート ${n} 件）`,
      })
    );
    lines.push("");
    const catDesc = pickLang(g.category.description, lang);
    if (catDesc) lines.push(catDesc, "");
    lines.push("<table>");
    for (let i = 0; i < g.templates.length; i += cols) {
      lines.push("<tr>");
      for (const tp of g.templates.slice(i, i + cols)) {
        const cases = index.byTemplate.get(tp.id) || [];
        const cover = exampleCasesOf(tp, cases).find((c) => c.posterUrl) || cases.find((c) => c.posterUrl) || null;
        const href = `${docBase}/${tp.id}.md`;
        const img = cover ? `<a href="${href}"><img src="${cover.posterUrl}" width="${imgWidth}" alt="${escapeXml(pickLang(tp.title, lang))}"></a>` : "";
        const countLine = t(lang, { en: `${cases.length} cases filed`, zh: `已归类 ${cases.length} 条案例`, ja: `分類済み ${cases.length} 件` });
        const open = t(lang, { en: "Open template", zh: "打开模板", ja: "テンプレートを開く" });
        const topCase = t(lang, { en: "Top case", zh: "热度最高案例", ja: "トップケース" });
        const links = `<a href="${href}"><b>${open}</b></a>${cases[0] ? ` · <a href="${cases[0].goodcaseUrl}">${topCase}</a>` : ""}`;
        lines.push(
          `<td width="${width}%" valign="top" align="center"><b>${escapeXml(pickLang(tp.title, lang))}</b><br><sub>${escapeXml(countLine)}</sub><br><br>${img}<br><sub>${escapeXml(pickLang(tp.description, lang) || "")}</sub><br>${links}</td>`
        );
      }
      lines.push("</tr>");
    }
    lines.push("</table>", "");
  }
  while (lines[lines.length - 1] === "") lines.pop();
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// README：Skill 网格
// ---------------------------------------------------------------------------

/**
 * skills: data/skills.json 的 skills 数组。
 * opts.coverCasesFor(skill) → 该 Skill 的封面案例数组（调用方按 coverCases / templateId / coverTemplateId 解析好），
 * 取前 4 张有海报的拼成 2×2 小格，像 goodcase.ai 的 Skill 卡片那样一眼看到多种效果；不够 4 张就有几张放几张。
 * 创作者变体不再逐个列名，只留一句数量，链到 Skill 页。
 */
export function renderSkillGrid(skillsData, lang, casesBySlug = new Map(), opts = {}) {
  const cols = opts.cols || 3;
  const width = Math.floor(100 / cols);
  const skills = (skillsData && skillsData.skills) || [];
  const variantCount = skills.reduce((n, s) => n + (s.variants || []).length, 0);
  const moreUrl = withUtm((skillsData && skillsData.moreUrl) || "https://goodcase.ai/skills?category=video");
  const coverCasesFor = opts.coverCasesFor || ((s) => (s.coverCase && casesBySlug.get(s.coverCase) ? [casesBySlug.get(s.coverCase)] : []));
  const lines = [skillsHeading(lang), ""];
  lines.push(
    t(lang, {
      en: `A Skill is an installable instruction pack for coding agents (Claude Code, Codex and friends). Install one and just tell your agent what you want: it picks the template, fills the structure, and pulls from the style library to give you several looks at once. ${skills.length} Skills below, plus ${variantCount} creator variants that carry one creator's signature style.`,
      zh: `Skill 是装进 Claude Code、Codex 这类 agent 里的指令包。装好以后直接跟 agent 说你要什么，它自己选模板、填结构，还能调风格库一次给你出好几种画风。下面是 ${skills.length} 个 Skill，另有 ${variantCount} 个创作者变体，带着某位创作者的个人风格。`,
      ja: `Skill は Claude Code や Codex などのエージェントに入れる指示パックです。入れたあとは作りたいものを伝えるだけで、テンプレート選択、構造の埋め込み、スタイルライブラリからの複数ルック出しまでエージェントが行います。以下に ${skills.length} 個の Skill、さらにクリエイター個人のスタイルを持つ ${variantCount} 個のバリアントがあります。`,
    })
  );
  lines.push("");
  lines.push("<table>");
  for (let i = 0; i < skills.length; i += cols) {
    lines.push("<tr>");
    for (const s of skills.slice(i, i + cols)) {
      const url = /goodcase\.ai/.test(s.url) ? withUtm(s.url) : s.url;
      const title = escapeXml(pickLang(s.title, lang));
      const covers = coverCasesFor(s).filter((c) => c && c.posterUrl).slice(0, 4);
      const fallback = s.cover && s.cover.src ? [{ posterUrl: s.cover.src, goodcaseUrl: url }] : [];
      const shots = covers.length ? covers : fallback;
      let img = "";
      if (shots.length >= 2) {
        const cell = (c) => `<td><a href="${c.goodcaseUrl}"><img src="${c.posterUrl}" width="128" alt=""></a></td>`;
        const rows = [];
        for (let r = 0; r < shots.length; r += 2) rows.push(`<tr>${shots.slice(r, r + 2).map(cell).join("")}</tr>`);
        img = `<table><tbody>${rows.join("")}</tbody></table>`;
      } else if (shots.length === 1) {
        img = `<a href="${url}"><img src="${shots[0].posterUrl}" width="260" alt="${title}"></a><br>`;
      }
      const n = (s.variants || []).length;
      const variantLine = n
        ? `<br><sub><a href="${url}">${t(lang, { en: `${n} creator ${n === 1 ? "variant" : "variants"}`, zh: `另有 ${n} 个创作者变体`, ja: `クリエイター版 ${n} 件` })}</a></sub>`
        : "";
      lines.push(
        `<td width="${width}%" valign="top" align="center">${img}<a href="${url}"><b>${title}</b></a><br><sub>${escapeXml(pickLang(s.description, lang) || "")}</sub><br><br><code>${escapeXml(s.install)}</code>${variantLine}</td>`
      );
    }
    lines.push("</tr>");
  }
  lines.push("</table>");
  lines.push("");
  lines.push(
    t(lang, {
      en: `Every install line works with the [skills CLI](https://github.com/vercel-labs/skills). Skills named \`seedance-…\` live in this repo under [agents/skills](./agents/skills): the library Skill carries every template, the single-kind Skills carry one template each with their own case evidence, all regenerated daily from the same data. \`npx seedance-prompt-library install\` also drops the library Skill straight into Claude Code and Codex. More Skills across image, coding and writing live on [goodcase.ai](${moreUrl}).`,
      zh: `上面每条安装命令都走 [skills CLI](https://github.com/vercel-labs/skills)。名字以 \`seedance-\` 开头的 Skill 就放在本仓的 [agents/skills](./agents/skills) 下：模板库 Skill 带全部模板，单片型 Skill 各带一个模板和它自己的案例证据，每天随数据一起重新生成。模板库 Skill 也可以用 \`npx seedance-prompt-library install\` 一步装进 Claude Code 和 Codex。图像、编程、文案方向的更多 Skill 在 [goodcase.ai](${moreUrl})。`,
      ja: `各インストールコマンドは [skills CLI](https://github.com/vercel-labs/skills) で動きます。\`seedance-…\` で始まる Skill はこのリポジトリの [agents/skills](./agents/skills) にあり、ライブラリ Skill は全テンプレートを、単一ジャンルの Skill はテンプレート 1 つとそのケース証拠を持ち、毎日同じデータから再生成されます。ライブラリ Skill は \`npx seedance-prompt-library install\` でも Claude Code と Codex に直接入ります。画像、コーディング、ライティング向けの Skill は [goodcase.ai](${moreUrl}) にあります。`,
    })
  );
  return lines.join("\n");
}

export function countSkills(skillsData) {
  const skills = (skillsData && skillsData.skills) || [];
  return skills.length + skills.reduce((n, s) => n + (s.variants || []).length, 0);
}

// ---------------------------------------------------------------------------
// README：从这里开始
// ---------------------------------------------------------------------------

/** anchors: { templates, skills, top, retests, all }（都带 #）；counts: { templates, skills, cases } */
export function renderStartHere(lang, anchors, counts) {
  const docBase = `./docs/templates/${templateDocLang(lang)}`;
  const lines = [startHereHeading(lang), ""];
  // 目录之后的列表会被 awesome-lint 当条目校验，所以路径和对照都用表格，不用列表。
  lines.push(
    t(lang, {
      en: "New to AI video? Follow these five steps and you will have your own clip. Nothing to install.",
      zh: "第一次做 AI 视频？跟着这五步走，就能做出你自己的片段，什么都不用装。",
      ja: "AI 動画が初めてでも、この 5 ステップで自分のクリップが作れます。インストールは不要です。",
    })
  );
  lines.push("");
  const steps = t(lang, {
    en: [
      ["1", `Pick a look in [Prompt Templates by Category](${anchors.templates}). Choose by the pictures.`],
      ["2", `Open that template (for example [UGC creator review](${docBase}/ugc-creator-review.md)) and copy the block under *Copy this*.`],
      ["3", "Replace the [bracketed] parts with your own product, person or scene."],
      ["4", "Send it to any AI chat (ChatGPT, Claude, Gemini) along with your reference images. You get back a finished prompt."],
      ["5", "Paste that prompt into Seedance (Dreamina / Jimeng) and generate. If it looks off, read the template's pitfalls and re-run."],
    ],
    zh: [
      ["1", `在[分类提示语模板](${anchors.templates})里看图挑一个你想要的画面类型。`],
      ["2", `点开那个模板（比如 [UGC 口播测评带货](${docBase}/ugc-creator-review.md)），复制「直接复制」下面那一整段。`],
      ["3", "把【】里的内容换成你自己的产品、人物或场景。"],
      ["4", "连同参考图一起发给任意 AI 对话（ChatGPT、Claude、豆包都行），拿到一条写好的提示语。"],
      ["5", "把提示语粘到 Seedance（即梦 / Dreamina）生成。效果不对，先看模板里的常见坑，改完再跑。"],
    ],
    ja: [
      ["1", `[カテゴリ別プロンプトテンプレート](${anchors.templates})で、作りたい絵柄を画像から選びます。`],
      ["2", `そのテンプレート（例: [UGC creator review](${docBase}/ugc-creator-review.md)、英語）を開き、*Copy this* の下のブロックをコピーします。`],
      ["3", "[角括弧] の部分を自分の商品、人物、シーンに置き換えます。"],
      ["4", "参照画像と一緒に任意の AI チャット（ChatGPT、Claude、Gemini）に送ると、完成したプロンプトが返ってきます。"],
      ["5", "そのプロンプトを Seedance（Dreamina / 即夢）に貼って生成します。うまくいかないときはテンプレートの落とし穴を確認して再実行します。"],
    ],
  });
  lines.push(t(lang, { en: "| Step | What to do |", zh: "| 步骤 | 做什么 |", ja: "| ステップ | やること |" }));
  lines.push("| --- | --- |");
  for (const [n, text] of steps) lines.push(`| ${n} | ${text} |`);
  lines.push("");
  lines.push(
    t(lang, {
      en: `**Templates or Skills?** Both are built from the same ${counts.cases} verified cases. They differ in who does the work.`,
      zh: `**用模板还是用 Skill？** 两者都来自同一批 ${counts.cases} 条已验证案例，区别在于谁来干活。`,
      ja: `**テンプレートと Skill、どちらを使う？** どちらも同じ ${counts.cases} 件の検証済みケースから作られています。違いは誰が作業するかです。`,
    })
  );
  lines.push("");
  const rows = t(lang, {
    en: [
      ["", `[Prompt templates](${anchors.templates})`, `[Skills](${anchors.skills})`],
      ["Who it is for", "Beginners, and anyone who does not want to install anything", "People already working in Claude Code, Codex or another coding agent"],
      ["How you use it", "Copy, replace the [brackets], paste into any AI chat", "One install command, then just tell your agent what you want"],
      ["What it covers", `${counts.templates} category templates`, `The same templates plus a style library, across ${counts.skills} Skills and creator variants`],
      ["What you get", "One solid prompt at a time", "Batches of prompts in several visual styles, picked and filled in for you"],
    ],
    zh: [
      ["", `[提示语模板](${anchors.templates})`, `[Skill](${anchors.skills})`],
      ["适合谁", "新手，以及不想装任何东西的人", "已经在用 Claude Code、Codex 这类 agent 的专业用户"],
      ["怎么用", "复制，换掉【】，粘到任意 AI 对话", "一行命令装好，之后直接跟 agent 说需求"],
      ["覆盖范围", `${counts.templates} 个分类模板`, `同一套模板加风格库，共 ${counts.skills} 个 Skill 与创作者变体`],
      ["拿到什么", "一次一条靠谱的提示语", "一次一批、多种画风的提示语，模板和结构都替你选好填好"],
    ],
    ja: [
      ["", `[プロンプトテンプレート](${anchors.templates})`, `[Skill](${anchors.skills})`],
      ["向いている人", "初心者、何もインストールしたくない人", "すでに Claude Code や Codex などのエージェントを使っている人"],
      ["使い方", "コピーして [角括弧] を置き換え、任意の AI チャットに貼る", "コマンド 1 行で導入し、あとはエージェントに要望を伝えるだけ"],
      ["カバー範囲", `カテゴリ別テンプレート ${counts.templates} 個`, `同じテンプレートにスタイルライブラリを加えた、${counts.skills} 個の Skill とクリエイター版`],
      ["得られるもの", "確かなプロンプトを 1 本ずつ", "複数の画風のプロンプトをまとめて。選択と埋め込みはエージェントが代行"],
    ],
  });
  lines.push(`| ${rows[0].join(" | ")} |`);
  lines.push("| --- | --- | --- |");
  for (const r of rows.slice(1)) lines.push(`| **${r[0]}** | ${r[1]} | ${r[2]} |`);
  lines.push("");
  lines.push(
    t(lang, {
      en: `Just browsing? Go to [Top 30 by heat](${anchors.top}) or [all cases](${anchors.all}). Want proof that a prompt holds up? See the [cross-model retests](${anchors.retests}).`,
      zh: `只想看案例，去[热度 Top 30](${anchors.top}) 或[全部案例](${anchors.all})。想知道一条提示语靠不靠谱，看[跨模型复测](${anchors.retests})。`,
      ja: `ケースを眺めたいだけなら[ヒート Top 30](${anchors.top}) か[全ケース](${anchors.all})へ。プロンプトの再現性を確かめたいなら[クロスモデル再テスト](${anchors.retests})をどうぞ。`,
    })
  );
  return lines.join("\n");
}
