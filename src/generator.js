/**
 * SCSS 文件生成器
 * 将解析后的 token 数据生成为 SCSS 文件
 */

const fs = require('fs');
const path = require('path');

/**
 * 生成 SCSS 文件
 * @param {Object} tokens - 解析后的 token 数据
 * @param {string} outputDir - 输出目录
 */
function generateScss(tokens, outputDir) {
  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 生成 _variables.scss
  const variablesContent = generateVariables(tokens.variables);
  fs.writeFileSync(path.join(outputDir, '_variables.scss'), variablesContent);
  console.log('  ✓ _variables.scss');

  // 生成 _theme.scss
  const themeContent = generateTheme(tokens.theme);
  fs.writeFileSync(path.join(outputDir, '_theme.scss'), themeContent);
  console.log('  ✓ _theme.scss');

  // 生成 _layout.scss
  const layoutContent = generateLayout(tokens.layout);
  fs.writeFileSync(path.join(outputDir, '_layout.scss'), layoutContent);
  console.log('  ✓ _layout.scss');

  // 生成 _animation.scss（模板）
  const animationContent = generateAnimation();
  fs.writeFileSync(path.join(outputDir, '_animation.scss'), animationContent);
  console.log('  ✓ _animation.scss');

  // 生成 index.scss
  const indexContent = generateIndex();
  fs.writeFileSync(path.join(outputDir, 'index.scss'), indexContent);
  console.log('  ✓ index.scss');
}

function generateVariables(variables) {
  let content = '';

  // Colors
  content += '// ==================== Colors ====================\n\n';
  if (variables.colors && Object.keys(variables.colors).length > 0) {
    for (const [name, value] of Object.entries(variables.colors)) {
      content += `$${name}: ${value};\n`;
    }
  } else {
    content += '// 待填充\n';
  }

  // Spacing
  content += '\n// ==================== Spacing ====================\n\n';
  if (variables.spacing && Object.keys(variables.spacing).length > 0) {
    for (const [name, value] of Object.entries(variables.spacing)) {
      content += `$${name}: ${value};\n`;
    }
  } else {
    content += '// 待填充\n';
  }

  // Radius
  content += '\n// ==================== Radius ====================\n\n';
  if (variables.radius && Object.keys(variables.radius).length > 0) {
    for (const [name, value] of Object.entries(variables.radius)) {
      content += `$${name}: ${value};\n`;
    }
  } else {
    content += '// 待填充\n';
  }

  // Typography
  content += '\n// ==================== Typography ====================\n\n';
  if (variables.typography) {
    // Font Size
    if (variables.typography.fontSize) {
      content += '// Font Size\n';
      for (const [name, value] of Object.entries(variables.typography.fontSize)) {
        content += `$${name}: ${value};\n`;
      }
      content += '\n';
    }

    // Font Weight
    if (variables.typography.fontWeight) {
      content += '// Font Weight\n';
      for (const [name, value] of Object.entries(variables.typography.fontWeight)) {
        content += `$${name}: ${value};\n`;
      }
      content += '\n';
    }

    // Font Spacing
    if (variables.typography.fontSpacing) {
      content += '// Font Spacing\n';
      for (const [name, value] of Object.entries(variables.typography.fontSpacing)) {
        content += `$${name}: ${value};\n`;
      }
      content += '\n';
    }

    // Height
    if (variables.typography.height) {
      content += '// Component Height\n';
      for (const [name, value] of Object.entries(variables.typography.height)) {
        content += `$${name}: ${value};\n`;
      }
      content += '\n';
    }
  }

  // Stroke
  if (variables.stroke && Object.keys(variables.stroke).length > 0) {
    content += '\n// ==================== Stroke ====================\n\n';
    for (const [name, value] of Object.entries(variables.stroke)) {
      content += `$${name}: ${value};\n`;
    }
  }

  // Component Padding
  if (variables.componentPadding && Object.keys(variables.componentPadding).length > 0) {
    content += '\n// ==================== Component Padding ====================\n\n';
    for (const [name, value] of Object.entries(variables.componentPadding)) {
      content += `$${name}: ${value};\n`;
    }
  }

  // Frame Padding
  if (variables.framePadding && Object.keys(variables.framePadding).length > 0) {
    content += '\n// ==================== Frame Padding ====================\n\n';
    for (const [name, value] of Object.entries(variables.framePadding)) {
      content += `$${name}: ${value};\n`;
    }
  }

  // Component Margin
  if (variables.componentMargin && Object.keys(variables.componentMargin).length > 0) {
    content += '\n// ==================== Component Margin ====================\n\n';
    for (const [name, value] of Object.entries(variables.componentMargin)) {
      content += `$${name}: ${value};\n`;
    }
  }

  // Frame Margin
  if (variables.frameMargin && Object.keys(variables.frameMargin).length > 0) {
    content += '\n// ==================== Frame Margin ====================\n\n';
    for (const [name, value] of Object.entries(variables.frameMargin)) {
      content += `$${name}: ${value};\n`;
    }
  }

  return content;
}

function generateTheme(theme) {
  let content = "@use 'variables' as *;\n\n";

  // Color Styles
  content += '// ==================== Color Styles ====================\n\n';
  if (theme.colorStyles && Object.keys(theme.colorStyles).length > 0) {
    for (const [name, value] of Object.entries(theme.colorStyles)) {
      content += `$${name}: ${value};\n`;
    }
  } else {
    content += '// 待填充\n';
  }

  // Text Styles
  content += '\n// ==================== Text Styles ====================\n\n';
  if (theme.textStyles && Object.keys(theme.textStyles).length > 0) {
    for (const [name, style] of Object.entries(theme.textStyles)) {
      content += `@mixin ${name} {\n`;
      if (style.fontSize) content += `  font-size: ${style.fontSize};\n`;
      if (style.fontWeight) content += `  font-weight: ${style.fontWeight};\n`;
      if (style.lineHeight) content += `  line-height: ${style.lineHeight};\n`;
      content += '}\n\n';
    }
  } else {
    content += '// 待填充\n';
  }

  // Effect Styles
  content += '\n// ==================== Effect Styles ====================\n\n';
  if (theme.effectStyles && Object.keys(theme.effectStyles).length > 0) {
    for (const [name, value] of Object.entries(theme.effectStyles)) {
      content += `$${name}: ${value};\n`;
    }
  } else {
    content += '// 待填充\n';
  }

  return content;
}

function generateLayout(layout) {
  let content = '';

  // Breakpoints
  content += '// ==================== Breakpoints ====================\n\n';
  if (layout && layout.breakpoints && Object.keys(layout.breakpoints).length > 0) {
    for (const [name, value] of Object.entries(layout.breakpoints)) {
      content += `$breakpoint-${name}: ${value};\n`;
    }

    content += '\n// Mixins\n';
    const breakpointNames = Object.keys(layout.breakpoints);
    for (const name of breakpointNames) {
      content += `@mixin ${name} {\n`;
      content += `  @media (min-width: $breakpoint-${name}) { @content; }\n`;
      content += '}\n\n';
    }
  } else {
    content += '// 待填充\n';
  }

  // Grid
  content += '\n// ==================== Grid ====================\n\n';
  content += '// 待填充\n';

  return content;
}

function generateAnimation() {
  return `// ==================== Transitions ====================

// 待填充
// $transition-<name>: <duration> <easing>;

// ==================== Keyframes ====================

// 待填充
// @keyframes <name> {
//   from { <properties> }
//   to { <properties> }
// }
`;
}

function generateIndex() {
  return `@forward 'variables';
@forward 'theme';
@forward 'layout';
@forward 'animation';
`;
}

module.exports = { generateScss };
