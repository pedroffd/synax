---
name: ui-ux-pro-max
description: "UI/UX design intelligence for web and mobile. Includes 50+ styles, 161 color palettes, 57 font pairings, and hundreds of product types/guidelines. Actions: plan, build, design, implement, review, and optimize UI/UX code."
---

# UI/UX Pro Max - Design Intelligence 💎

Comprehensive design guide for professional web and mobile applications.

## When to Apply
This Skill should be used when the task involves **UI structure, visual design decisions, interaction patterns, or user experience quality control**.

### Use it for:
- Designing new pages (Landing Pages, Dashboards, Admin Panels, SaaS).
- Creating or refactoring UI components (buttons, modals, forms, tables, charts).
- Choosing color schemes, typography, spacing, and layout systems.
- Reviewing code for UX, accessibility, and visual consistency.

## Rule Categories by Priority
1. **Accessibility (CRITICAL)**: Contrast ratios, Alt text, Keyboard navigation, Aria-labels.
2. **Touch & Interaction (CRITICAL)**: Hit target minimums (44pt+), visual feedback.
3. **Performance (HIGH)**: Optimization of images, fonts, and reserve space (CLS prevention).
4. **Style Selection (HIGH)**: Consistency in visual language (minimalism, glassmorphism, etc.).
5. **Layout & Responsive (HIGH)**: Mobile-first design and Systematic breakpoints.

## Usage Workflow

### Step 1: Generate Design System
Always start by defining the design system for the product type and keywords.
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "fintech dashboard minimal" --design-system
```

### Step 2: Persist Rules
Save the design system to ensure context across sessions.
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "fintech" --design-system --persist -p "MyProject"
```

### Step 3: Domain Deep-Dive
If you need specific details about a domain (e.g., typography or UX patterns):
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "vibrant" --domain color
```

**Golden Rule**: Design is the bridge between technology and humans. Prioritize clarity and usability above all else.
