export interface SkillEntry {
  name: string;
  description: string;
  url: string;
  category: "Engineers" | "Designers" | "Frameworks";
}

export const SKILL_REGISTRY: Record<string, SkillEntry> = {
  // Engineers
  architect: {
    name: "Architect",
    description: "Architectural strategy and trade-offs evaluator.",
    category: "Engineers",
    url: "https://raw.githubusercontent.com/pedroffd/synax/main/skills/architect/SKILL.md",
  },
  "bug-hunter": {
    name: "Bug Hunter",
    description: "Hyper-focused debugging and log analysis expert.",
    category: "Engineers",
    url: "https://raw.githubusercontent.com/pedroffd/synax/main/skills/bug-hunter/SKILL.md",
  },
  quality: {
    name: "Quality & API",
    description: "Production standards and API contract auditor.",
    category: "Engineers",
    url: "https://raw.githubusercontent.com/pedroffd/synax/main/skills/quality/SKILL.md",
  },
  "security-engineer": {
    name: "Security Engineer",
    description: "Security auditing, STRIDE and OWASP expert.",
    category: "Engineers",
    url: "https://raw.githubusercontent.com/pedroffd/synax/main/skills/security-engineer/SKILL.md",
  },
  serena: {
    name: "Serena",
    description: "Semantic coding assistant with memory and smart editing.",
    category: "Engineers",
    url: "https://raw.githubusercontent.com/oraios/serena/main/README.md",
  },
  caveman: {
    name: "Caveman",
    description: "Minimalist and high-speed agentic efficiency protocol.",
    category: "Engineers",
    url: "https://raw.githubusercontent.com/JuliusBrussee/caveman/main/skills/caveman/SKILL.md",
  },

  // Designers
  "ui-ux-pro-max": {
    name: "UI/UX Pro Max",
    description: "Massive database of UI styles and UX guidelines.",
    category: "Designers",
    url: "https://raw.githubusercontent.com/pedroffd/synax/main/skills/ui-ux-pro-max/SKILL.md",
  },
  "ui-design-system": {
    name: "UI Design System",
    description: "Design tokens and component architecture toolkit.",
    category: "Designers",
    url: "https://raw.githubusercontent.com/pedroffd/synax/main/skills/ui-design-system/SKILL.md",
  },
  "design-md": {
    name: "Design MD",
    description: "Design-to-Dev synthesis (Google Labs Stitch).",
    category: "Designers",
    url: "https://raw.githubusercontent.com/pedroffd/synax/main/skills/design-md/SKILL.md",
  },
  "image-enhancer": {
    name: "Image Enhancer",
    description: "Utility for screenshot and asset enhancement.",
    category: "Designers",
    url: "https://raw.githubusercontent.com/pedroffd/synax/main/skills/image-enhancer/SKILL.md",
  },

  // Frameworks
  nextjs: {
    name: "Next.js",
    description: "App Router and Server Actions specialist.",
    category: "Frameworks",
    url: "https://raw.githubusercontent.com/jeffallan/claude-skills/main/skills/nextjs-expert/SKILL.md",
  },
  nestjs: {
    name: "NestJS",
    description: "Modular backend and TypeScript patterns.",
    category: "Frameworks",
    url: "https://raw.githubusercontent.com/jeffallan/claude-skills/main/skills/nestjs-expert/SKILL.md",
  },
  django: {
    name: "Django",
    description: "Python backend and security best practices.",
    category: "Frameworks",
    url: "https://raw.githubusercontent.com/jeffallan/claude-skills/main/skills/django-expert/SKILL.md",
  },
  vue: {
    name: "Vue.js",
    description: "Frontend development with Vue 3 / Nuxt.",
    category: "Frameworks",
    url: "https://raw.githubusercontent.com/ssiertsema/claude-code-plugins/main/skills/vue-development/SKILL.md",
  },
  python: {
    name: "Python",
    description: "General Python expert for scripts and ML.",
    category: "Frameworks",
    url: "https://raw.githubusercontent.com/rstarkey/s5y-plugins/main/skills/python-expert/SKILL.md",
  },
};
