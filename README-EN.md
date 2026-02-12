# Design Token

English | [中文](./README.md)

A set of design tokens exported from Figma, including CSS variables and utility classes to help you build consistent user interfaces quickly.

## Features

- **Figma-Aligned Naming** - CSS class names match Figma Token names exactly, so designers and developers speak the same language
- **Ready to Use** - Just include one CSS file, no build tools required
- **Theme Support** - CSS variables make theme switching easy
- **AI-Friendly** - Clear naming conventions help AI generate design-compliant pages

## Live Preview

- [Usage Guide](https://htmlpreview.github.io/?https://github.com/siriusharrison-png/design-token/blob/main/docs/guide.html) - Complete documentation and code examples
- [Token Preview](https://htmlpreview.github.io/?https://github.com/siriusharrison-png/design-token/blob/main/docs/preview.html) - Visual preview of all tokens

## Installation

### Option 1: Direct Download

Download [dist/design-tokens.css](./dist/design-tokens.css) and include it in your project:

```html
<link rel="stylesheet" href="path/to/design-tokens.css">
```

### Option 2: CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/siriusharrison-png/design-token@main/dist/design-tokens.css">
```

### Option 3: npm

```bash
npm install design-token
```

```javascript
// Import in your JS/CSS
import 'design-token/dist/design-tokens.css';
```

## Quick Start

### Using CSS Variables

```css
.my-button {
  background-color: var(--brand-primary-1);
  color: var(--text-4);
  padding: var(--space-8) var(--space-16);
  border-radius: var(--radius-4-small);
}
```

### Using Utility Classes

```html
<!-- Primary Button -->
<button class="btn-primary">Submit</button>

<!-- Secondary Button -->
<button class="btn-secondary">Cancel</button>

<!-- Custom with atomic classes -->
<button class="bg-brand-primary-1 text-4 h-32-medium px-16 radius-4-small">
  Custom Button
</button>

<!-- Card -->
<div class="card">
  <h3 class="text-1 font-size-16 font-semibold mb-8">Title</h3>
  <p class="text-2 font-size-14">Description</p>
</div>

<!-- Tags -->
<span class="tag-system">System</span>
<span class="tag-success">Success</span>
<span class="tag-danger">Warning</span>
```

## Token Reference

### Colors

| Type | CSS Variable | Utility Class | Usage |
|------|-------------|---------------|-------|
| Brand | `--brand-primary-1` | `.bg-brand-primary-1` | Primary buttons, links |
| Brand Light | `--brand-primary-5` | `.bg-brand-primary-5` | Hint backgrounds |
| Text Primary | `--text-1` | `.text-1` | Headings, body text |
| Text Secondary | `--text-2` | `.text-2` | Secondary text |
| Text Hint | `--text-3` | `.text-3` | Hints, disabled |
| Text Inverse | `--text-4` | `.text-4` | Text on dark backgrounds |
| Border | `--border-3` | `.border-3` | Default borders |
| Fill | `--fill-4` | `.bg-fill-4` | Page background |
| Success | `--success-1` | `.bg-success-1` | Success states |
| Warning | `--warning-1` | `.bg-warning-1` | Warning states |
| Danger | `--red-1` | `.bg-red-1` | Error, danger |

### Spacing

| CSS Variable | Utility Classes | Value |
|-------------|-----------------|-------|
| `--space-0` | `.p-0` `.m-0` `.gap-0` | 0px |
| `--space-4` | `.p-4` `.m-4` `.gap-4` | 4px |
| `--space-8` | `.p-8` `.m-8` `.gap-8` | 8px |
| `--space-12` | `.p-12` `.m-12` `.gap-12` | 12px |
| `--space-16` | `.p-16` `.m-16` `.gap-16` | 16px |
| `--space-24` | `.p-24` `.m-24` `.gap-24` | 24px |
| `--space-48` | `.p-48` `.gap-48` | 48px |

### Border Radius

| CSS Variable | Utility Class | Value | Usage |
|-------------|---------------|-------|-------|
| `--radius-0-none` | `.radius-0-none` | 0px | No radius |
| `--radius-2-minismall` | `.radius-2-minismall` | 2px | Tags |
| `--radius-4-small` | `.radius-4-small` | 4px | Buttons, inputs |
| `--radius-6-regular` | `.radius-6-regular` | 6px | Forms |
| `--radius-8-medium` | `.radius-8-medium` | 8px | Modals |
| `--radius-999-round` | `.radius-999-round` | 999px | Full round |

### Component Heights

| CSS Variable | Utility Class | Value |
|-------------|---------------|-------|
| `--height-20-supersmall` | `.h-20-supersmall` | 20px |
| `--height-24-minismall` | `.h-24-minismall` | 24px |
| `--height-28-small` | `.h-28-small` | 28px |
| `--height-32-medium` | `.h-32-medium` | 32px |
| `--height-36-large` | `.h-36-large` | 36px |
| `--height-40-xlarge` | `.h-40-xlarge` | 40px |
| `--height-44-superlarge` | `.h-44-superlarge` | 44px |

See [docs/mapping.md](./docs/mapping.md) for the complete reference.

## AI Page Generation Guide

When using AI (like Claude or ChatGPT) to generate pages, provide this prompt:

```
Please use the design-token design system to generate the page. Requirements:

1. Colors must use CSS variables:
   - Brand: var(--brand-primary-1)
   - Text: var(--text-1), var(--text-2), var(--text-3)
   - Border: var(--border-3)
   - Background: var(--fill-4), var(--fill-5)

2. Spacing uses utility classes:
   - padding: .p-8, .p-16, .px-16, .py-8
   - margin: .m-8, .mt-16, .mb-24
   - gap: .gap-8, .gap-16

3. Border radius uses utility classes:
   - Buttons/inputs: .radius-4-small
   - Cards: .radius-6-regular
   - Modals: .radius-8-medium

4. Heights use utility classes:
   - Small button: .h-28-small
   - Standard button: .h-32-medium
   - Large button: .h-36-large

5. Component classes:
   - Primary button: .btn-primary
   - Secondary button: .btn-secondary
   - Card: .card
   - Tags: .tag-system, .tag-success, .tag-danger

【STRICT RULES - MUST FOLLOW】

6. No arbitrary Emoji usage:
   - Do NOT add decorative emojis to the page
   - Only keep emojis if the original design explicitly includes them
   - Use SVG or icon fonts for icons

7. Preserve structure during refactoring:
   - Do NOT change the overall page layout structure
   - Do NOT change the information hierarchy of sections
   - Only adjust styles (colors, spacing, radius), NOT DOM structure
   - Keep all existing functional modules and content
   - Icons: only include icons where the original page has them, do NOT add icons to places without them

8. Do NOT modify text content:
   - All text, labels, and button copy must match the original page exactly
   - Do NOT translate, rewrite, simplify, or "improve" any copy
   - Do NOT add text content that doesn't exist in the original
   - Do NOT delete or merge existing text content
```

> **Important:** Rules 6 and 7 are mandatory. AI must strictly follow these when generating or refactoring pages.

## Using with Tailwind CSS

This project includes a Tailwind config file to extend Tailwind with the same design tokens:

```javascript
// tailwind.config.js
const designTokens = require('design-token/tailwind.config.js');

module.exports = {
  presets: [designTokens],
  // your other config...
}
```

## File Structure

```
design-token/
├── dist/
│   └── design-tokens.css    # Core CSS file (import directly)
├── src/
│   └── tokens.json          # Original Figma Tokens
├── docs/
│   ├── mapping.md           # Complete token mapping
│   └── preview.html         # Visual preview page
├── tailwind.config.js       # Tailwind configuration
└── package.json
```

## Custom Themes

With CSS variables, you can easily create custom themes:

```css
/* Dark theme example */
.dark-theme {
  --brand-primary-1: #4080ff;
  --text-1: #ffffff;
  --text-2: #c9cdd4;
  --fill-4: #1e1e1e;
  --fill-5: #2d2d2d;
  --border-3: #3d3d3d;
}
```

```html
<body class="dark-theme">
  <!-- All components automatically use dark theme -->
</body>
```

## License

[MIT](./LICENSE)

---

*Maintained by Zhuanzhuan Design System Team*
