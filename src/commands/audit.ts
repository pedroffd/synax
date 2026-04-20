import path from "node:path";
import chalk from "chalk";
import fs from "fs-extra";
import { glob } from "glob";

const SECRET_PATTERNS = [
  { name: "Generic API Key", regex: /[a-z0-9]{32,}/gi },
  { name: "Stripe Key", regex: /sk_test_[0-9a-zA-Z]{24}/g },
  { name: "AWS Key", regex: /AKIA[0-9A-Z]{16}/g },
];

export async function auditCommand() {
  const cwd = process.cwd();
  console.log(
    chalk.blue("\n🔍 Auditing project for AI readiness and secrets..."),
  );

  // 1. Check Context Files
  const contextFiles = ["AGENTS.md", "PROJECT_CONTEXT.md"];
  for (const file of contextFiles) {
    if (await fs.pathExists(path.join(cwd, file))) {
      console.log(chalk.green(`✅ Found ${file}`));
    } else {
      console.log(chalk.yellow(`⚠️ Missing ${file}`));
    }
  }

  // 2. Secret Scanner (Basic)
  console.log(chalk.blue("\n🛡️ Scanning for secrets..."));
  const filesToScan = await glob("**/{.env,*.config.*,package.json}", {
    ignore: "node_modules/**",
    cwd,
  });

  let secretsFound = 0;
  for (const file of filesToScan) {
    const content = await fs.readFile(path.join(cwd, file), "utf8");
    for (const pattern of SECRET_PATTERNS) {
      if (pattern.regex.test(content)) {
        console.log(chalk.red(`❌ Potential ${pattern.name} found in ${file}`));
        secretsFound++;
      }
    }
  }

  if (secretsFound === 0) {
    console.log(
      chalk.green("✅ No obvious secrets found in common config files."),
    );
  }

  // 3. Large Files (Context Fatigue)
  console.log(chalk.blue("\n📏 Checking for Context Fatigue (Large files)..."));
  const allFiles = await glob("src/**/*.{ts,tsx,js,jsx}", {
    ignore: "node_modules/**",
    cwd,
  });

  for (const file of allFiles) {
    const content = await fs.readFile(path.join(cwd, file), "utf8");
    const lines = content.split("\n").length;
    if (lines > 500) {
      console.log(
        chalk.yellow(
          `⚠️ ${file} is large (${lines} lines). Consider splitting or adding a specific SKILL.md.`,
        ),
      );
    }
  }

  console.log(chalk.blue("\n✅ Audit complete."));
}
