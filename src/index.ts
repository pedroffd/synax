import { Command } from "commander";
import { addCommand } from "./commands/add";
import { auditCommand } from "./commands/audit";
import { bridgeCommand } from "./commands/bridge";
import { initCommand } from "./commands/init";

const program = new Command();

program
  .name("synax")
  .description("The ultimate AI-ready project initializer")
  .version("1.0.0");

program
  .command("init")
  .description("Initialize a project for AI readiness")
  .action(initCommand);

program
  .command("add")
  .description("Add a specialized AI skill to the project")
  .argument("[skill]", "Name of the skill to add (e.g., django, vue, python)")
  .action(addCommand);

program
  .command("audit")
  .description("Audit project for AI readiness and secret isolation")
  .action(auditCommand);

program
  .command("bridge")
  .description("Sync skills to target AI agent rules (e.g., .cursorrules)")
  .action(bridgeCommand);

program.parse();
