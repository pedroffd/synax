import path from "node:path";
import fs from "fs-extra";
import { FRAMEWORK_DETECTORS } from "../types";

export async function detectFrameworks(cwd: string) {
  const detected: string[] = [];

  for (const [framework, markers] of Object.entries(FRAMEWORK_DETECTORS)) {
    for (const marker of markers) {
      if (await fs.pathExists(path.join(cwd, marker))) {
        detected.push(framework);
        break;
      }
    }
  }

  return detected;
}
