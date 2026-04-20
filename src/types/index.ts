export interface ProjectConfig {
  name: string;
  description: string;
  frameworks: {
    backend?: string;
    frontend?: string;
    language?: string;
  };
}

export const FRAMEWORK_DETECTORS = {
  django: ["manage.py"],
  nestjs: ["src/app.module.ts", "nest-cli.json"],
  nextjs: ["next.config.js", "next.config.mjs"],
  vue: ["src/main.ts", "src/main.js"], // Check for Vue markers
  react: ["src/App.tsx", "src/App.jsx"],
  python: ["requirements.txt", "pyproject.toml"],
  node: ["package.json"],
};
