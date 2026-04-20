import path from "node:path";
import axios from "axios";
import chalk from "chalk";
import fs from "fs-extra";
import { SKILL_REGISTRY } from "../lib/registry";

export async function installSkill(skillName: string, cwd: string) {
  const entry = SKILL_REGISTRY[skillName.toLowerCase()];

  if (!entry) {
    throw new Error(`Skill "${skillName}" not found in registry.`);
  }

  const response = await axios.get(entry.url);
  const skillContent = response.data;

  const skillDir = path.join(cwd, `.agents/skills/${skillName}`);
  await fs.ensureDir(skillDir);
  await fs.writeFile(path.join(skillDir, "SKILL.md"), skillContent);
}

export async function addCommand(skillName: string) {
  const cwd = process.cwd();
  console.log(chalk.blue(`\n📥 Fetching skill: ${skillName}...`));

  try {
    await installSkill(skillName, cwd);
    console.log(
      chalk.green(`\n✅ Skill "${skillName}" installed successfully!`),
    );
    console.log(chalk.dim(`Stored in .agents/skills/${skillName}/SKILL.md`));
  } catch (error) {
    console.log(
      chalk.red(
        `\n❌ Failed to fetch skill: ${error instanceof Error ? error.message : String(error)}`,
      ),
    );
    if (error instanceof Error && error.message.includes("not found")) {
      console.log(
        chalk.dim(
          `Available skills: ${Object.keys(SKILL_REGISTRY).join(", ")}`,
        ),
      );
    }
  }
}
