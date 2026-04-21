import path from "node:path";
import chalk from "chalk";
import fs from "fs-extra";
import inquirer from "inquirer";
import { detectFrameworks } from "../lib/detector";
import { SKILL_REGISTRY } from "../lib/registry";
import { installSkill } from "./add";

export async function initCommand() {
  const cwd = process.cwd();

  console.log(chalk.blue("\n🚀 Initializing Synax AI Context..."));

  const detectedFrameworks = await detectFrameworks(cwd);

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of this project?",
      default: path.basename(cwd),
    },
    {
      type: "input",
      name: "description",
      message: "Briefly describe the project's goal (for the AI):",
    },
    {
      type: "checkbox",
      name: "frameworks",
      message: "Confirm/Select detected frameworks:",
      choices: ["django", "nestjs", "nextjs", "vue", "react", "python", "node"],
      default: detectedFrameworks,
    },
  ]);

  const agentsMdContent = `# AGENTS.md

## Project: ${answers.name}
${answers.description}

## Tech Stack
${answers.frameworks.map((f: string) => `- ${f}`).join("\n")}

## Core Rules
- Maintain strict modularity.
- Always check PROJECT_CONTEXT.md before starting a task.
`;

  const contextMdContent = `# PROJECT_CONTEXT.md

## Current State
Initial setup phase.

## Active Tasks
- [ ] Implement core features.
`;

  await fs.ensureDir(path.join(cwd, ".agents/skills/domain-expert"));
  await fs.writeFile(path.join(cwd, "AGENTS.md"), agentsMdContent);
  await fs.writeFile(path.join(cwd, "PROJECT_CONTEXT.md"), contextMdContent);

  const domainExpertSkill = `---
name: domain-expert
description: Knowledge about ${answers.name}
---

# Domain Expert: ${answers.name}

You are an expert on ${answers.name}. Your goal is:
${answers.description}
`;
  await fs.writeFile(
    path.join(cwd, ".agents/skills/domain-expert/SKILL.md"),
    domainExpertSkill,
  );

  console.log(chalk.green("\n✅ Core context files generated."));

  // --- Specialized Skill Selection ---
  console.log(chalk.blue("\n💡 Select specialized AI skills to inject:"));

  const skillChoices = [
    new inquirer.Separator("--- Engineers ---"),
    ...Object.entries(SKILL_REGISTRY)
      .filter(([_, entry]) => entry.category === "Engineers")
      .map(([id, entry]) => ({
        name: `${entry.name} - ${entry.description}`,
        value: id,
      })),

    new inquirer.Separator("--- Designers & Visuals ---"),
    ...Object.entries(SKILL_REGISTRY)
      .filter(([_, entry]) => entry.category === "Designers")
      .map(([id, entry]) => ({
        name: `${entry.name} - ${entry.description}`,
        value: id,
      })),

    new inquirer.Separator("--- Framework Experts ---"),
    ...Object.entries(SKILL_REGISTRY)
      .filter(([_, entry]) => entry.category === "Frameworks")
      .map(([id, entry]) => ({
        name: `${entry.name} - ${entry.description}`,
        value: id,
      })),
  ];

  // Auto-select based on frameworks + foundational skills
  const preSelectedSkills = Object.keys(SKILL_REGISTRY).filter(
    (id) =>
      answers.frameworks.includes(id) ||
      ["serena", "caveman"].includes(id) ||
      (id === "frontend" &&
        answers.frameworks.some((f) => ["react", "vue", "nextjs"].includes(f))),
  );

  const { skillsToInstall } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "skillsToInstall",
      message: "Select skills to install:",
      choices: skillChoices,
      default: preSelectedSkills,
      pageSize: 15,
    },
  ]);

  if (skillsToInstall.length > 0) {
    console.log(chalk.blue("\n📥 Installing selected skills..."));
    for (const skill of skillsToInstall) {
      try {
        await installSkill(skill, cwd);
        console.log(chalk.green(`  ✔ ${skill} installed`));
      } catch (_err) {
        console.log(chalk.red(`  ✘ Failed to install ${skill}`));
      }
    }
  }

  console.log(chalk.green("\n✅ Synax initialization complete!"));
  console.log(chalk.dim("- Created AGENTS.md"));
  console.log(chalk.dim("- Created PROJECT_CONTEXT.md"));
  console.log(chalk.dim("- Created .agents/skills/domain-expert/SKILL.md"));
  console.log(
    chalk.blue(
      "\nNext step: Try 'synax audit' or 'synax bridge' to sync rules!",
    ),
  );
}
