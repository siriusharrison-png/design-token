# Design Token 架构规范

## 前置准备

| 步骤 | 说明 |
|------|------|
| 1 | 在 Figma 中安装 **Token Studio for Figma** 插件 |
| 2 | 使用插件导出 Variables 和 Styles 为 JSON 文件 |
| 3 | 将导出的 JSON 作为本工具的输入 |

> 🔗 插件地址：[Token Studio for Figma](https://www.figma.com/community/plugin/843461159747178978)

---

## 全局使用规范（必须遵守）

| 规则 | 说明 |
|------|------|
| ❌ 禁止直接写像素值或颜色值 | 不要在代码中硬编码 `16px`、`#1161fe` 等具体数值 |
| ✅ 必须使用已有的 Design Token | 所有样式值都应引用 `$<token-name>` |
| 🚨 缺少 Token 时必须先沟通 | 如果找不到合适的 Token，先告知或提议新增，**禁止自行创建一次性数值** |

---

## 模块结构

```
tokens/
├── _variables.scss    ← Figma Variables 导出
├── _theme.scss        ← Figma Styles 导出
├── _layout.scss       ← 布局系统
├── _animation.scss    ← 动画系统
└── index.scss         ← 统一入口
```

---

## Figma 导出对照表

| Figma 来源 | 对应文件 |
|-----------|---------|
| Variables → Color / Number | `_variables.scss` |
| Styles → Color / Text / Effect | `_theme.scss` |
| 手动维护 | `_layout.scss` / `_animation.scss` |

---

## 文件规范

### _variables.scss（Figma Variables）

```scss
// ==================== Colors ====================

$<name>: <value>;

// ==================== Spacing ====================

$<name>: <value>;

// ==================== Radius ====================

$<name>: <value>;

// ==================== Typography ====================

$<name>: <value>;
```

---

### _theme.scss（Figma Styles）

```scss
@use 'variables' as *;

// ==================== Color Styles ====================

$<name>: $<variable-reference>;

// ==================== Text Styles ====================

@mixin <name> {
  font-size: $<variable>;
  font-weight: $<variable>;
  line-height: <value>;
}

// ==================== Effect Styles ====================

$<name>: <value>;
```

---

### _layout.scss（手动维护）

```scss
// ==================== Breakpoints ====================

$<name>: <value>;

@mixin <name> {
  @media (<condition>) { @content; }
}

// ==================== Grid ====================

$<name>: <value>;
```

---

### _animation.scss（手动维护）

```scss
// ==================== Transitions ====================

$<name>: <duration> <easing>;

// ==================== Keyframes ====================

@keyframes <name> {
  from { <properties> }
  to { <properties> }
}
```

---

### index.scss（统一入口）

```scss
@forward 'variables';
@forward 'theme';
@forward 'layout';
@forward 'animation';
```

---

## Figma 导出检查清单

| ✅ | 检查项 | 去向 |
|---|--------|------|
| ☐ | Variables → Color | `_variables.scss` → Colors 板块 |
| ☐ | Variables → Number（spacing） | `_variables.scss` → Spacing 板块 |
| ☐ | Variables → Number（radius） | `_variables.scss` → Radius 板块 |
| ☐ | Variables → Number（typography） | `_variables.scss` → Typography 板块 |
| ☐ | Styles → Color Styles | `_theme.scss` → Color Styles 板块 |
| ☐ | Styles → Text Styles | `_theme.scss` → Text Styles 板块 |
| ☐ | Styles → Effect Styles | `_theme.scss` → Effect Styles 板块 |
