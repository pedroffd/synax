# Synax 🚀

The ultimate CLI to initialize and manage AI-ready projects. Synax establishes a "Persistent Context" bridge between you and your AI agents (Antigravity, Cursor, Claude Code, etc.), ensuring your projects are built with professional-grade engineering and design standards.

## 🌟 Features

- **Project Initialization**: Setup `AGENTS.md`, `PROJECT_CONTEXT.md`, and a custom `domain-expert` skill in seconds.
- **Categorized Skill Library**: Injects specialized AI personas (Architects, Bug Hunters, Security Engineers) and Visual Design experts.
- **Quality Guard**: Native Husky + Commitlint integration to enforce Conventional Commits.
- **Context Bridge**: Automatically syncs skills and rules to `.cursorrules` and other agent-specific directories.
- **Security Audit**: Scans for secrets and API keys to prevent context leakage.

## 🚀 Getting Started

### 1. Installation
For now, Synax is used locally. Clone the repo and link the command:

```bash
cd synax
npm install
npm run build
npm link
```

### 2. Usage Tutorial

#### **Initialize a New Project**
Run this in any new codebase to prepare it for AI. It will detect your frameworks and suggest relevant skills.
```bash
synax init
```

#### **Add a Specific Skill**
Want to inject a specialized persona or framework knowledge?
```bash
synax add          # Opens interactive selection menu
synax add nextjs   # Directly installs Next.js skill
```

#### **Audit Context**
Check if your project has secrets exposed in code or if your context files are getting too large.
```bash
synax audit
```

#### **Sync Bridge**
Consolidate all installed skills and rules into a single source of truth for your AI Agent.
```bash
synax bridge
```

---

## 🛠️ Specialized Skills Library

| Category | Skill | Description |
| :--- | :--- | :--- |
| **Engineers** | `architect` | Architectural strategy and trade-offs evaluator. |
| **Engineers** | `bug-hunter` | Laser-focused debugging and log analysis. |
| **Engineers** | `quality` | Production standards and API contract auditor. |
| **Engineers** | `security-engineer` | Security auditing, STRIDE and OWASP expert. |
| **Designers** | `ui-ux-pro-max` | Comprehensive database of UI/UX guidelines. |
| **Designers** | `ui-design-system` | Design tokens and component architecture. |
| **Designers** | `design-md` | Design-to-Dev synthesis (Stitch). |
| **Designers** | `image-enhancer` | utility for screenshot/asset enhancement. |
| **Frameworks** | `nextjs` | Next.js App Router & Server Actions. |
| **Frameworks** | `nestjs` | NestJS Modular backend patterns. |
| **Frameworks** | `django` | Django backend and Python security. |
| **Frameworks** | `vue` | Vue.js 3 / Nuxt frontend development. |
| **Frameworks** | `python` | General purpose Python expertise. |

---

## 📚 Credits & Attribution

I didn't build everything from scratch; I transformed and bundled great tools to make them accessible. Here are the amazing authors whose skills inspired Synax:

| Skill / Tool | Author | Repository / Source |
| :--- | :--- | :--- |
| **Husky** | Typicode | [GitHub](https://github.com/typicode/husky) |
| **Commitlint** | Conventional Commits | [GitHub](https://github.com/conventional-changelog/commitlint) |
| **Caveman** | Julius Brussee | [GitHub](https://github.com/JuliusBrussee/caveman) |
| **Serena** | Serena MCP | [GitHub](https://github.com/sourcegraph/serena) |
| **Django Expert** | jeffallan | [MCP Market](https://mcpmarket.com/tools/skills/django-expert) |
| **Python Expert** | rstarkey | [MCP Market](https://mcpmarket.com/tools/skills/python-development-expert) |
| **Vue TDD** | ssiertsema | [MCP Market](https://mcpmarket.com/tools/skills/vue-development-tdd-workflow) |
| **Design MD** | Google Labs | [Stitch](https://mcpmarket.com/tools/stitch) |

## 📄 License
MIT
