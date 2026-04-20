import path from "node:path";
import axios from "axios";
import chalk from "chalk";
import fs from "fs-extra";
import inquirer from "inquirer";
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

export async function addCommand(skillName?: string) {
  const cwd = process.cwd();
  let selectedSkill = skillName;

  if (!selectedSkill) {
    console.log(
      chalk.blue("\n💡 No skill specified. Opening interactive menu..."),
    );

    const skillChoices = [
      new inquirer.Separator("--- Engineers ---"),
      ...Object.entries(SKILL_REGISTRY)
        .filter(([_, entry]) => entry.category === "Engineers")
        .map(([id, entry]) => ({
          name: `${entry.name} - ${entry.description}`,
          value: id,
        })),

      new inquirer.Separator("--- Designers ---"),
      ...Object.entries(SKILL_REGISTRY)
        .filter(([_, entry]) => entry.category === "Designers")
        .map(([id, entry]) => ({
          name: `${entry.name} - ${entry.description}`,
          value: id,
        })),

      new inquirer.Separator("--- Frameworks ---"),
      ...Object.entries(SKILL_REGISTRY)
        .filter(([_, entry]) => entry.category === "Frameworks")
        .map(([id, entry]) => ({
          name: `${entry.name} - ${entry.description}`,
          value: id,
        })),
    ];

    const { skill } = await inquirer.prompt([
      {
        type: "list",
        name: "skill",
        message: "Select a skill to install:",
        choices: skillChoices,
        pageSize: 15,
      },
    ]);

    selectedSkill = skill;
  }

  console.log(chalk.blue(`\n📥 Fetching skill: ${selectedSkill}...`));

  try {
    await installSkill(selectedSkill!, cwd);
    console.log(
      chalk.green(`\n✅ Skill "${selectedSkill}" installed successfully!`),
    );
    console.log(
      chalk.dim(`Stored in .agents/skills/${selectedSkill}/SKILL.md`),
    );
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
