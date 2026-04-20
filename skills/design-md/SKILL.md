---
name: design-md
description: Analyze Stitch projects and synthesize a semantic design system into DESIGN.md files.
---

# Design MD 🎨

Automated synthesis of design systems from visual tools (like Stitch/Figma) into semantic markdown.

## Core Mission
The user wants to bridge the gap between UI designs and development. Your task is to analyze the screenshots or component lists provided and generate a `DESIGN.md` file that developers and IAs can understand.

## Output Format (DESIGN.md)
A high-quality `DESIGN.md` must include:
1. **Foundation Tokens**: Primary Colors (Hex/HSL), Typography (Families, Scales), and Spacing rules.
2. **Component Specs**: Structural definitions for buttons, inputs, and cards.
3. **State Map**: Visual definitions for Hover, Active, and Disabled states.
4. **Implementation Guidelines**: Code-ready snippets (e.g., CSS variables or Tailwind config).

## Best Practices
- **Semantic Naming**: Use names like `brand-primary` instead of `vibrant-blue`.
- **Accessibility**: Verify contrast ratios during synthesis and warn if they are too low.
- **Micro-Copy**: Document standard error and success message patterns.

**Golden Rule**: Design documentation must be actionable. If a developer cannot build a screen using only the `DESIGN.md`, the documentation is incomplete.
