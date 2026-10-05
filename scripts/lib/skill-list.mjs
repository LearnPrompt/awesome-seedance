// goodcase.ai 全部视频 Skill 的总表页：docs/skills.md / docs/skills.zh.md / docs/skills.ja.md。
// 数据是 data/site-skills.json（私仓导出，每天同步覆盖）：每个官方 Skill 后面跟着它名下的创作者方法。
// 一个官方 Skill 一节，节前放显式锚点 <a id="<slug>">，README 的 Skill 网格按 slug 直接跳过来。
// 创作者方法用表格不用列表（awesome-lint 会把目录之后的列表项当条目校验）。
// 和其他渲染器一样：只吃数据吐字符串，不碰文件系统。
import { t, pickLang, LANGS, readmeFileName } from "./render.mjs";
import { withUtm, anchorOf, skillsHeading, skillListFileName } from "./templates.mjs";

const LANG_LABELS = { en: "English", zh: "中文", ja: "日本語" };

/**
 * 把 site-skills 的扁平数组按官方 Skill 分组：[{ slug, official, methods }]，顺序沿用导出顺序。
 * 找不到官方 Skill 的创作者方法（导出里不该出现）单独成组，official 为 null，保证一个都不丢。
 */
export function groupSiteSkills(siteSkills) {
  const entries = (siteSkills && siteSkills.skills) || [];
  const groups = [];
  const bySlug = new Map();
  const groupFor = (slug) => {
    if (!bySlug.has(slug)) {
      const g = { slug, official: null, methods: [] };
      bySlug.set(slug, g);
      groups.push(g);
    }
    return bySlug.get(slug);
  };
  for (const s of entries) {
    if (s.kind === "creator_method") groupFor(s.baseSlug).methods.push(s);
    else groupFor(s.slug).official = s;
  }
  return groups;
}

/** 官方 Skill 数与创作者方法数，按数组现算，不信导出里的 counts 字段。 */
export function siteSkillCounts(siteSkills) {
  const entries = (siteSkills && siteSkills.skills) || [];
  const official = entries.filter((s) => s.kind !== "creator_method").length;
  return { official, creatorMethods: entries.length - official, total: entries.length };
}

/** 方法名：标题形如「作者 · 方法名」，去掉作者前缀；风格标签和方法名不同时括号补上。 */
export function methodLabel(method, lang) {
  const raw = pickLang(method.title, lang);
  const prefix = `${method.creator} · `;
  const name = method.creator && raw.startsWith(prefix) ? raw.slice(prefix.length) : raw;
  const tag = method.styleTag ? pickLang(method.styleTag, lang) : "";
  return tag && tag !== name ? `${name} (${tag})` : name;
}

function cell(str) {
  return String(str ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function langSwitch(lang) {
  return LANGS.map((l) => {
    const link = `[${LANG_LABELS[l]}](./${skillListFileName(l)})`;
    return l === lang ? `**${link}**` : link;
  }).join(" | ");
}

export function renderSkillListDoc(siteSkills, lang) {
  const groups = groupSiteSkills(siteSkills);
  const counts = siteSkillCounts(siteSkills);
  const readme = `../${readmeFileName(lang)}${anchorOf(skillsHeading(lang))}`;
  const lines = [];
  lines.push(langSwitch(lang));
  lines.push("");
  lines.push(t(lang, { en: `← [Back to README](${readme})`, zh: `← [返回 README](${readme})`, ja: `← [README に戻る](${readme})` }));
  lines.push("");
  lines.push(t(lang, { en: "# Awesome Seedance — All Video Skills", zh: "# Awesome Seedance — 全部视频 Skill", ja: "# Awesome Seedance — 動画 Skill 一覧" }));
  lines.push("");
  lines.push(
    t(lang, {
      en: "<!-- Generated from data/site-skills.json. Do not hand-edit; run npm run generate -->",
      zh: "<!-- 由 data/site-skills.json 生成，请勿手改；跑 npm run generate -->",
      ja: "<!-- data/site-skills.json から生成。手編集不可。npm run generate を実行 -->",
    })
  );
  lines.push("");
  lines.push(
    t(lang, {
      en: `Every video Skill on [goodcase.ai](${withUtm("https://goodcase.ai/skills?category=video")}): ${counts.official} official Skills plus ${counts.creatorMethods} creator methods, ${counts.total} in all. A Skill is an installable instruction pack for coding agents such as Claude Code and Codex. An official Skill is distilled from many creators' cases of one kind of video; a creator method is distilled from one creator's recurring cases and carries that creator's style.`,
      zh: `[goodcase.ai](${withUtm("https://goodcase.ai/skills?category=video")}) 上的全部视频 Skill：${counts.official} 个官方 Skill，加 ${counts.creatorMethods} 个创作者方法，共 ${counts.total} 个。Skill 是装进 Claude Code、Codex 这类 agent 里的指令包。官方 Skill 从许多创作者的同类视频案例里提炼；创作者方法从某一位创作者反复使用的做法里提炼，带着这位创作者的风格。`,
      ja: `[goodcase.ai](${withUtm("https://goodcase.ai/skills?category=video")}) のすべての動画 Skill です。公式 Skill ${counts.official} 個とクリエイターメソッド ${counts.creatorMethods} 個、計 ${counts.total} 個。Skill は Claude Code や Codex などのエージェントに入れる指示パックです。公式 Skill は同じ種類の動画について多くのクリエイターのケースから抽出し、クリエイターメソッドは一人のクリエイターが繰り返し使う手法から抽出して、そのスタイルを引き継ぎます。`,
    })
  );
  lines.push("");
  lines.push(
    t(lang, {
      en: "Each Skill installs with one line through the [skills CLI](https://github.com/vercel-labs/skills); the install lines are listed below. Titles and descriptions come from goodcase.ai, and this page is refreshed from the site's catalog every day.",
      zh: "每个 Skill 都能用 [skills CLI](https://github.com/vercel-labs/skills) 一行命令装好，安装命令就在下面。标题和简介来自 goodcase.ai，这一页每天按站点目录刷新。",
      ja: "各 Skill は [skills CLI](https://github.com/vercel-labs/skills) で 1 行でインストールでき、コマンドは下に載せています。タイトルと説明は goodcase.ai のもので（日本語訳はなく英語のまま）、このページは毎日サイトのカタログから更新されます。",
    })
  );
  lines.push("");

  // 总目录：一个官方 Skill 一行，点进本页对应小节。
  lines.push(t(lang, { en: "## Official Skills", zh: "## 官方 Skill", ja: "## 公式 Skill" }));
  lines.push("");
  lines.push(t(lang, { en: "| Skill | Cases | Creator methods |", zh: "| Skill | 案例 | 创作者方法 |", ja: "| Skill | ケース | クリエイターメソッド |" }));
  lines.push("| --- | --- | --- |");
  for (const g of groups) {
    const title = g.official ? pickLang(g.official.title, lang) : g.slug;
    lines.push(`| [${cell(title)}](#${g.slug}) | ${g.official ? g.official.caseCount : "-"} | ${g.methods.length} |`);
  }
  lines.push("");

  const head = {
    creator: t(lang, { en: "Creator", zh: "创作者", ja: "クリエイター" }),
    method: t(lang, { en: "Method", zh: "方法", ja: "メソッド" }),
    cases: t(lang, { en: "Cases", zh: "案例", ja: "ケース" }),
    install: t(lang, { en: "Install", zh: "安装", ja: "インストール" }),
    link: t(lang, { en: "Page", zh: "页面", ja: "ページ" }),
  };
  for (const g of groups) {
    const s = g.official;
    lines.push(`<a id="${g.slug}"></a>`);
    lines.push("");
    lines.push(`### ${s ? pickLang(s.title, lang) : g.slug}`);
    lines.push("");
    if (s) {
      lines.push(`> ${pickLang(s.description, lang)}`);
      lines.push("");
      const stats = t(lang, {
        en: `${s.caseCount} cases from ${s.creatorCount} creators · ${g.methods.length} creator ${g.methods.length === 1 ? "method" : "methods"}`,
        zh: `${s.caseCount} 个案例，来自 ${s.creatorCount} 位创作者 · ${g.methods.length} 个创作者方法`,
        ja: `${s.creatorCount} 人のクリエイターによる ${s.caseCount} ケース · クリエイターメソッド ${g.methods.length} 件`,
      });
      const open = t(lang, { en: "Open on goodcase.ai", zh: "在 goodcase.ai 打开", ja: "goodcase.ai で開く" });
      lines.push(`${stats} · [${open}](${withUtm(s.url)})`);
      lines.push("");
      lines.push("```bash", s.install, "```");
      lines.push("");
    }
    if (!g.methods.length) {
      lines.push(t(lang, { en: "No creator methods yet.", zh: "暂时还没有创作者方法。", ja: "クリエイターメソッドはまだありません。" }));
      lines.push("");
      continue;
    }
    lines.push(`| ${head.creator} | ${head.method} | ${head.cases} | ${head.install} | ${head.link} |`);
    lines.push("| --- | --- | --- | --- | --- |");
    for (const m of g.methods) {
      lines.push(`| ${cell(m.creator)} | ${cell(methodLabel(m, lang))} | ${m.caseCount} | \`${cell(m.install)}\` | [goodcase.ai](${withUtm(m.url)}) |`);
    }
    lines.push("");
  }
  while (lines[lines.length - 1] === "") lines.pop();
  return lines.join("\n") + "\n";
}
