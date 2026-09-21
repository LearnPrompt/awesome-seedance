// 模板库加载：data/style-library.json（私仓蒸馏管线的导出物，同步脚本会改写它）
// 叠加 data/templates-local.json（本仓自有，手写内容只放这里）。
// 再配上 data/case-taxonomy.json（全量 case → 模板 的归类结果），算出每个模板名下的案例。
// 纯函数在前，读盘的 loadLibrary 在最后；生成 README、模板文件、Skill 参考文档都走这一个入口。
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const LANG_KEYED = ["title", "description", "useWhen", "structure", "guidance", "pitfalls", "copyPrompt"];

function isPlainObject(v) {
  return v != null && typeof v === "object" && !Array.isArray(v);
}

/** 覆盖一个模板：按语言分的字段（title.ja、copyPrompt.zh …）逐语言合并，其余字段整体替换。 */
export function applyTemplateOverride(template, override) {
  const out = { ...template };
  for (const [key, value] of Object.entries(override || {})) {
    if (LANG_KEYED.includes(key) && isPlainObject(value) && isPlainObject(out[key])) {
      out[key] = { ...out[key], ...value };
    } else {
      out[key] = value;
    }
  }
  return out;
}

/**
 * 合并上游库与本地覆盖层。
 * local: { categories?: [...], overrides?: { [templateId]: {...} }, templates?: [...] }
 * - categories：id 已存在则按语言合并 title/description，否则追加到末尾
 * - overrides：只能指向已存在的模板 id，写错直接抛错（避免悄悄失效）
 * - templates：本地新增的完整模板，id 不得与上游重复，category 必须存在
 */
export function mergeLibrary(styleData, local = {}) {
  const categories = (styleData.categories || []).map((c) => ({ ...c }));
  for (const cat of local.categories || []) {
    const i = categories.findIndex((c) => c.id === cat.id);
    if (i >= 0) categories[i] = applyTemplateOverride(categories[i], cat);
    else categories.push({ ...cat });
  }
  const categoryIds = new Set(categories.map((c) => c.id));

  const upstreamIds = new Set((styleData.templates || []).map((tp) => tp.id));
  const overrides = local.overrides || {};
  for (const id of Object.keys(overrides)) {
    if (!upstreamIds.has(id)) throw new Error(`templates-local.json: override for unknown template "${id}"`);
  }
  const templates = (styleData.templates || []).map((tp) => applyTemplateOverride(tp, overrides[tp.id]));
  for (const tp of local.templates || []) {
    if (upstreamIds.has(tp.id) || templates.some((x) => x.id === tp.id)) {
      throw new Error(`templates-local.json: template id "${tp.id}" already exists`);
    }
    const exampleCases = tp.exampleCases || [];
    // 上游模板自带 exampleCaseUrls；本地模板只写 slug，这里按 goodcase 的固定规则补出链接。
    const exampleCaseUrls = tp.exampleCaseUrls || exampleCases.map((slug) => `https://goodcase.ai/cases/${slug}`);
    templates.push({ ...tp, exampleCases, exampleCaseUrls, local: true });
  }
  for (const tp of templates) {
    if (!categoryIds.has(tp.category)) {
      throw new Error(`Template "${tp.id}" points at unknown category "${tp.category}"`);
    }
  }
  return { ...styleData, categories, templates };
}

/**
 * 每个模板名下的案例（按热度降序）。来源 = taxonomy 的归类 ∪ 模板自带的 exampleCases。
 * - taxonomy.assignments 里出现未知模板 id 直接抛错
 * - 指向已下架 case 的 slug 静默忽略（上游每天同步，下架是常态）
 * 返回 { byTemplate: Map<templateId, case[]>, unassigned: case[] }
 */
export function buildTemplateIndex(templates, taxonomy, cases) {
  const templateIds = new Set(templates.map((tp) => tp.id));
  const assignments = (taxonomy && taxonomy.assignments) || {};
  const casesBySlug = new Map(cases.map((c) => [c.slug, c]));
  const slugsByTemplate = new Map(templates.map((tp) => [tp.id, new Set()]));
  for (const [slug, templateId] of Object.entries(assignments)) {
    if (templateId == null) continue;
    if (!templateIds.has(templateId)) {
      throw new Error(`case-taxonomy.json: "${slug}" is assigned to unknown template "${templateId}"`);
    }
    if (casesBySlug.has(slug)) slugsByTemplate.get(templateId).add(slug);
  }
  for (const tp of templates) {
    for (const slug of tp.exampleCases || []) {
      // taxonomy 明确把它归到了别的模板时，以 taxonomy 为准，避免同一条挂两处
      const assigned = assignments[slug];
      if (assigned && assigned !== tp.id) continue;
      if (casesBySlug.has(slug)) slugsByTemplate.get(tp.id).add(slug);
    }
  }
  const byHeat = (a, b) => (b.heatScore || 0) - (a.heatScore || 0);
  const byTemplate = new Map();
  const seen = new Set();
  for (const tp of templates) {
    const list = Array.from(slugsByTemplate.get(tp.id)).map((s) => casesBySlug.get(s)).sort(byHeat);
    for (const c of list) seen.add(c.slug);
    byTemplate.set(tp.id, list);
  }
  const unassigned = cases.filter((c) => !seen.has(c.slug)).sort(byHeat);
  return { byTemplate, unassigned };
}

function readJsonIfExists(file, fallback) {
  return existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : fallback;
}

/** 读盘入口：返回合并后的库 + taxonomy。缺 local / taxonomy 文件时退化为上游原样。 */
export function loadLibrary(root) {
  const styleData = JSON.parse(readFileSync(path.join(root, "data/style-library.json"), "utf8"));
  const local = readJsonIfExists(path.join(root, "data/templates-local.json"), {});
  const taxonomy = readJsonIfExists(path.join(root, "data/case-taxonomy.json"), { assignments: {} });
  return { library: mergeLibrary(styleData, local), taxonomy };
}
