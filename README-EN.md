# Design Token

English | [中文](./README.md)

Figma Design Token Transformer — Convert Token Studio for Figma exported JSON to SCSS files.

## Features

- **Figma Naming Consistency** - SCSS variable names match Figma Token names exactly
- **Layered Architecture** - Variables (primitives) + Theme (semantic) + Layout + Animation
- **CLI Tool** - One command to transform
- **Multi-theme Support** - Easy theme switching with SCSS variables

## Prerequisites

1. Install [Token Studio for Figma](https://www.figma.com/community/plugin/843461159747178978) plugin in Figma
2. Export Variables and Styles as JSON using the plugin
3. Use the exported JSON as input for this tool

## Installation

```bash
# Clone the project
git clone https://github.com/siriusharrison-png/design-token.git
cd design-token

# Or install globally (optional)
npm install -g .
```

## Usage

```bash
# Basic usage
node bin/transform.js transform <input.json> --output <output-dir>

# Example
node bin/transform.js transform ./my-tokens.json --output ./src/styles/tokens/
```

### Output Files

The transformation generates the following SCSS files:

```
tokens/
├── _variables.scss    ← Primitives (colors, spacing, radius, typography)
├── _theme.scss        ← Semantic styles (theme color references)
├── _layout.scss       ← Layout system (breakpoints, grid)
├── _animation.scss    ← Animation system (transitions, keyframes)
└── index.scss         ← Unified entry point
```

### Using in Your Project

```scss
// Import all
@use 'tokens' as *;

// Or import individually
@use 'tokens/variables' as *;
@use 'tokens/theme' as *;

// Use variables
.button {
  background-color: $blue-1;
  padding: $space-8 $space-16;
  border-radius: $radius-4-small;
}
```

## Global Rules (Must Follow)

| Rule | Description |
|------|-------------|
| ❌ Never hardcode values | Don't write `16px`, `#1161fe` directly in code |
| ✅ Always use Design Tokens | All style values should reference `$<token-name>` |
| 🚨 Report missing tokens | If a token doesn't exist, report first or propose a new one. **Never create one-off values** |

## File Structure

```
design-token/
├── bin/
│   └── transform.js       ← CLI entry point
├── src/
│   ├── parser.js          ← JSON parser
│   └── generator.js       ← SCSS generator
├── example/
│   ├── input/
│   │   └── tokens.json    ← Example input
│   └── output/            ← Example output
├── output/
│   └── ppio/              ← PPIO project archive
├── demo/                  ← Demo pages
├── docs/
│   ├── mapping.md         ← Token mapping table
│   ├── preview.html       ← Visual preview
│   └── guide.html         ← Usage guide
├── dist/
│   └── design-tokens.css  ← Legacy CSS (preserved)
├── SPEC.md                ← Architecture specification
└── package.json
```

## Live Preview

- [Usage Guide](https://htmlpreview.github.io/?https://github.com/siriusharrison-png/design-token/blob/main/docs/guide.html)
- [Token Preview](https://htmlpreview.github.io/?https://github.com/siriusharrison-png/design-token/blob/main/docs/preview.html)

## Version History

### v2.0.0 (Current)
- Architecture refactor: from single CSS file to CLI transformation tool
- Support Token Studio for Figma export format
- Output layered SCSS files (variables / theme / layout / animation)

### v1.x
- Single design-tokens.css file
- Tailwind configuration file

## License

[MIT](./LICENSE)

---

*Maintained by Zhuanzhuan Design System Team*
