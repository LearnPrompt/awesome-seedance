// 本仓独立 Skill（一个片型一个）的纯渲染函数：
//   renderStandaloneSkillMd   → agents/skills/<skillId>/SKILL.md
//   renderStandaloneCasesMd   → agents/skills/<skillId>/references/cases.md
// 输入是合并后的模板（data/style-library.json + data/templates-local.json）和归到它名下的案例。
// 不读盘；generate-standalone-skills.mjs 负责 IO。
import { pickLang, displayTitle, fenceForPrompt, classifySeedance } from "./render.mjs";

export const STANDALONE_CASE_LIMIT = 8;
export const STANDALONE_PROMPT_MAX_CHARS = 3500;

function listOf(value, lang) {
  const v = value && (value[lang] ?? value.en);
  return Array.isArray(v) ? v : v ? [v] : [];
}

/** frontmatter 的 description 要能触发：写清片型、中英触发词、什么时候用。 */
export function skillDescription(template, skill) {
  const zh = pickLang(template.title, "zh");
  const en = pickLang(template.title, "en");
  const extra = (skill.triggers || []).join(", ");
  return (
    `${pickLang(template.description, "en")} Use when the user wants a Seedance 2.5 / 2.0 video prompt for this kind of clip` +
    ` (${en}; 中文触发词: ${zh}${extra ? `, ${extra}` : ""}), or asks how published cases of this type were prompted.` +
    ` Read references/cases.md before drafting.`
  ).replace(/\s+/g, " ");
}

export function renderStandaloneSkillMd(template, skill, cases) {
  const en = pickLang(template.title, "en");
  const zh = pickLang(template.title, "zh");
  const lines = [];
  lines.push("---");
  lines.push(`name: ${skill.id}`);
  lines.push(`description: ${JSON.stringify(skillDescription(template, skill))}`);
  lines.push("---");
  lines.push("");
  lines.push(`# ${en} · ${zh}`);
  lines.push("");
  lines.push(pickLang(template.description, "en"));
  lines.push("");
  lines.push(
    `This Skill carries one prompt structure distilled from ${cases.length} human-verified Seedance cases on [goodcase.ai](https://goodcase.ai). ` +
      "It is a sibling of `seedance-prompt-library` (all templates in one Skill); install this one when you only want this kind of clip. " +
      "Do not invent structure from general video-generation knowledge: follow the structure below and ground the draft in one anchor case from `references/cases.md`."
  );
  lines.push("");
  lines.push("## Use when");
  lines.push("");
  lines.push(`- ${pickLang(template.useWhen, "en")}`);
  lines.push(`- 中文：${pickLang(template.useWhen, "zh")}`);
  lines.push("");
  lines.push("## Workflow");
  lines.push("");
  lines.push("1. **Collect inputs.** Ask only for what is missing: subject or product, setting, duration, aspect ratio, whether reference images / audio exist, and which language the final prompt should be in.");
  lines.push("2. **Pick one anchor case.** Read `references/cases.md`, choose the case closest to the request, and name it in the reply. One anchor, never an average of several.");
  lines.push("3. **Fill the structure block by block.** Every block below must be present in the final prompt; an empty block is where prompts go vague.");
  const structure = listOf(template.structure, "en");
  structure.forEach((s, i) => lines.push(`   ${i + 1}. ${s}`));
  lines.push("4. **Apply the guidance and check the pitfalls** (next two sections) before returning anything.");
  lines.push("5. **Return** the finished prompt as one copy-pasteable block, the anchor case link, and a three-line checklist of what to verify in the generated video.");
  lines.push("");
  lines.push("## Guidance (from the cases)");
  lines.push("");
  for (const g of listOf(template.guidance, "en")) lines.push(`- ${g}`);
  lines.push("");
  lines.push("## Pitfalls");
  lines.push("");
  for (const p of listOf(template.pitfalls, "en")) lines.push(`- ${p}`);
  lines.push("");
  lines.push("## Language");
  lines.push("");
  lines.push("Reply in the user's language. The prompt itself can stay in English when that is what the user's Seedance workflow expects; ask if unclear. The Chinese version of this structure follows.");
  lines.push("");
  lines.push(`## 中文：${zh}`);
  lines.push("");
  lines.push(pickLang(template.description, "zh"));
  lines.push("");
  lines.push("**结构:**");
  lines.push("");
  listOf(template.structure, "zh").forEach((s, i) => lines.push(`${i + 1}. ${s}`));
  lines.push("");
  lines.push("**要点:**");
  lines.push("");
  for (const g of listOf(template.guidance, "zh")) lines.push(`- ${g}`);
  lines.push("");
  lines.push("**常见坑:**");
  lines.push("");
  for (const p of listOf(template.pitfalls, "zh")) lines.push(`- ${p}`);
  lines.push("");
  if (template.copyPrompt) {
    lines.push("## Copy-ready lead-in / 可复制引导语");
    lines.push("");
    lines.push("For users who would rather paste into a chat model than run this Skill, hand them this line above the structure:");
    lines.push("");
    if (template.copyPrompt.en) lines.push(`> ${template.copyPrompt.en}`);
    if (template.copyPrompt.zh) lines.push(">", `> ${template.copyPrompt.zh}`);
    lines.push("");
  }
  lines.push("## Notes");
  lines.push("");
  lines.push("- `references/cases.md` is generated from `data/` in [LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) and refreshed daily; do not hand-edit an installed copy.");
  lines.push("- Prompts in the reference file belong to their creators (linked on every card). Transfer the structure; do not present a close copy as original work.");
  lines.push("- For the full library across every model, install the `goodcase` Skill from [LearnPrompt/goodcase-lite](https://github.com/LearnPrompt/goodcase-lite).");
  return lines.join("\n") + "\n";
}

function clipPrompt(text) {
  const t = (text || "").trim();
  if (t.length <= STANDALONE_PROMPT_MAX_CHARS) return t;
  return `${t.slice(0, STANDALONE_PROMPT_MAX_CHARS).trimEnd()}\n\n[… truncated, full prompt on the goodcase.ai page]`;
}

export function renderStandaloneCasesMd(template, skill, cases, limit = STANDALONE_CASE_LIMIT) {
  const en = pickLang(template.title, "en");
  const shown = cases.slice(0, limit);
  const lines = [];
  lines.push(`# Case evidence · ${en}`);
  lines.push("");
  lines.push(`${cases.length} verified cases are filed under this template in awesome-seedance; the ${shown.length} hottest are below, full prompts included. Pick one as the anchor before drafting.`);
  lines.push("");
  lines.push("Generated from `data/cases.json` + `data/case-taxonomy.json`. Do not hand-edit.");
  lines.push("");
  shown.forEach((c, i) => {
    const title = displayTitle(c, "en");
    lines.push(`## E${i + 1} · ${title}`);
    lines.push("");
    const meta = [
      `Seedance ${classifySeedance(c)}`,
      c.creator ? `creator: ${c.creator}` : null,
      c.heatScore != null ? `heat: ${c.heatScore}` : null,
      c.stabilityScore ? `stability: ${c.stabilityScore}` : null,
    ].filter(Boolean);
    lines.push(`- ${meta.join(" · ")}`);
    const links = [`[GoodCase](${c.goodcaseUrl})`];
    if (c.mediaUrl) links.push(`[finished media](${c.mediaUrl})`);
    if (c.posterUrl) links.push(`[poster](${c.posterUrl})`);
    if (c.sourceUrl) links.push(`[original source](${c.sourceUrl})`);
    lines.push(`- Evidence: ${links.join(" · ")}`);
    const summary = (c.summary || "").replace(/\s+/g, " ").trim();
    if (summary) lines.push(`- Summary: ${summary.slice(0, 400)}`);
    lines.push("");
    const prompt = clipPrompt(c.promptFull);
    if (prompt) {
      const fence = fenceForPrompt(prompt);
      lines.push(`${fence}text`, prompt, fence, "");
    }
  });
  return lines.join("\n");
}
