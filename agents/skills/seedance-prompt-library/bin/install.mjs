#!/usr/bin/env node
// Installs the seedance-prompt-library Agent Skill into Claude Code (~/.claude/skills)
// and Codex ($CODEX_HOME/skills, default ~/.codex/skills), the same way
// freestylefly/awesome-gpt-image-2's installer works: copy the skill directory
// (SKILL.md + references/) into each host's skills folder.
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import os from "node:os";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SKILL_DIR = path.resolve(__dirname, ".."); // agents/skills/seedance-prompt-library
const SKILL_NAME = "seedance-prompt-library";

function skillFiles() {
  return ["SKILL.md", "references"].filter((f) => existsSync(path.join(SKILL_DIR, f)));
}

function installTo(targetSkillsDir, hostLabel) {
  if (!targetSkillsDir) {
    console.log(`  skip: ${hostLabel} (no target directory resolved)`);
    return false;
  }
  const dest = path.join(targetSkillsDir, SKILL_NAME);
  try {
    mkdirSync(dest, { recursive: true });
    for (const f of skillFiles()) {
      const src = path.join(SKILL_DIR, f);
      const destPath = path.join(dest, f);
      if (existsSync(destPath)) rmSync(destPath, { recursive: true, force: true });
      cpSync(src, destPath, { recursive: true });
    }
    console.log(`  ✓ ${hostLabel}: ${dest}`);
    return true;
  } catch (err) {
    console.log(`  ✗ ${hostLabel}: ${err.message}`);
    return false;
  }
}

function claudeSkillsDir() {
  return path.join(os.homedir(), ".claude", "skills");
}

function codexSkillsDir() {
  const codexHome = process.env.CODEX_HOME || path.join(os.homedir(), ".codex");
  return path.join(codexHome, "skills");
}

const command = process.argv[2] || "install";

if (command !== "install") {
  console.log(`Usage: npx seedance-prompt-library install`);
  console.log(`Unknown command: ${command}`);
  process.exit(1);
}

console.log(`Installing ${SKILL_NAME} Agent Skill...`);
const results = [
  installTo(claudeSkillsDir(), "Claude Code"),
  installTo(codexSkillsDir(), "Codex"),
];

if (results.some(Boolean)) {
  console.log("");
  console.log("Done. Restart Claude Code / Codex (or start a new session) to pick up the new skill.");
} else {
  console.log("");
  console.log("Nothing installed — could not write to either host's skills directory.");
  process.exit(1);
}
