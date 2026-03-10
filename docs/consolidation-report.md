# Design Tokens 整合报告

> 日期：2026-03-09
> 版本：2.0.0

---

## 概述

本报告记录 PPIO 项目样式文件与 Design Tokens 的整合情况。

---

## 整合结果

### ✅ 已删除（重复内容）

| 文件 | 原路径 | 说明 |
|------|--------|------|
| colors.scss | `src/styles/colors.scss` | 所有变量已在 design-tokens.css 中定义 |

### ✅ 已迁移到 Design Tokens

| 类别 | 原来源 | 现位置 |
|------|--------|--------|
| 品牌色 | colors.scss, theme.scss | design-tokens.css `--brand-primary-*` |
| 文字色 | colors.scss | design-tokens.css `--text-*`, `--dark-*`(兼容) |
| 边框色 | colors.scss | design-tokens.css `--border-*` |
| 填充色 | colors.scss | design-tokens.css `--fill-*` |
| 语义色 | colors.scss | design-tokens.css `--success-*`, `--warning-*`, `--red-*` |
| 阴影 | effects.scss | design-tokens.css `--shadow-*` |

### ⚠️ 精简后保留

| 文件 | 路径 | 保留内容 |
|------|------|----------|
| effects.scss | `src/styles/effects.scss` | 仅保留 `.sticky-shadow-*`（伪元素交互效果） |

### 📌 必须保留（不可迁移）

| 文件 | 路径 | 原因 |
|------|------|------|
| mixins.scss | `src/styles/mixins.scss` | SCSS mixin 功能，CSS 无法替代 |
| theme.scss | `src/styles/theme.scss` | 业务相关变量 + 主题覆盖逻辑（详见下方分析） |
| iconfont.scss | `src/styles/iconfont.scss` | 图标字体定义，与 design tokens 无关 |

### ⚠️ theme.scss 详细分析

**文件现状**：877 行，包含混合内容

**内容分类**：

| 类别 | 行数(约) | 状态 | 说明 |
|------|---------|------|------|
| 品牌色 `--brand-*` | 6行 | ⚠️ 重复 | 已在 design-tokens.css 中定义 |
| Text Styles `--h0~h6-*` | 60行 | 📌 保留 | 组合变量（font-size + line-height + weight） |
| 字体基础 `--font-size-*` | 15行 | ⚠️ 部分重复 | 建议引用 design-tokens |
| 状态色 `--success-color` 等 | 15行 | 📌 独立 | 业务定义，颜色值不同于 Figma |
| 背景/边框 `--bg-*`, `--stroke-*` | 20行 | 📌 独立 | 业务场景专用 |
| Header/Footer | 30行 | 📌 业务 | 页面组件专用 |
| Console 控制台 | 50行 | 📌 业务 | 控制台专用变量 |
| Model API 页面 | 200+行 | 📌 业务 | 页面特有渐变/效果 |
| Billing/Settings | 100+行 | 📌 业务 | 功能模块专用 |

**结论**：theme.scss 约 90% 是业务相关变量，不属于 Design Tokens 范围。

**建议处理方式**：
1. **短期**：保持现状，不做大改动（避免影响项目稳定）
2. **中期**：将重复的基础变量改为引用 design-tokens
3. **长期**：按业务模块拆分 theme.scss

---

## PPIO 样式文件职责划分

```
src/styles/
├── design-tokens.css    # ← 引用 design-token 项目输出（推荐）
│                        #    或直接复制内容到项目中
├── effects.scss         # 仅交互效果（伪元素实现的复杂样式）
├── mixins.scss          # SCSS mixins（响应式、字体、阴影）
├── theme.scss           # 业务变量 + 主题覆盖
└── iconfont.scss        # 图标字体
```

---

## 变量来源对照

### 🎨 颜色系统

| 分类 | 变量名 | 来源 |
|------|--------|------|
| 品牌色 | `--brand-primary-0` ~ `--brand-primary-5` | design-tokens.css |
| 品牌色(兼容) | `--brand-0` ~ `--brand-5` | design-tokens.css |
| 文字色 | `--text-1` ~ `--text-disable` | design-tokens.css |
| 文字色(兼容) | `--dark-1` ~ `--dark-5` | design-tokens.css |
| 边框色 | `--border-1` ~ `--border-4` | design-tokens.css |
| 填充色 | `--fill-1` ~ `--fill-5` | design-tokens.css |
| 成功色 | `--success-0` ~ `--success-4` | design-tokens.css |
| 成功色(兼容) | `--green-0` ~ `--green-4` | design-tokens.css |
| 警告色 | `--warning-0` ~ `--warning-4` | design-tokens.css |
| 警告色(兼容) | `--orange-0` ~ `--orange-4` | design-tokens.css |
| 危险色 | `--red-0` ~ `--red-4` | design-tokens.css |

### 📐 尺寸系统

| 分类 | 变量名 | 来源 |
|------|--------|------|
| 间距 | `--space-0` ~ `--space-120` | design-tokens.css |
| 圆角 | `--radius-*` | design-tokens.css |
| 高度 | `--height-*` | design-tokens.css |

### ✍️ 字体系统

| 分类 | 变量名 | 来源 |
|------|--------|------|
| 字号 | `--font-size-12` ~ `--font-size-56` | design-tokens.css |
| 字重 | `--font-weight-*` | design-tokens.css |
| 行高 | `--line-height-*` | design-tokens.css |
| 字间距 | `--font-spacing-*` | design-tokens.css |

### 🌫️ 阴影系统

| 分类 | 变量名 | 来源 |
|------|--------|------|
| 基础阴影 | `--shadow-1` ~ `--shadow-5` | design-tokens.css |
| 场景阴影 | `--shadow-drop`, `--shadow-home`, `--shadow-module` | design-tokens.css |

---

## 交互样式（不在 Design Tokens 范围）

以下样式涉及伪元素、动画、复杂选择器，不属于 Design Tokens 管理范围：

### effects.scss 中保留

```scss
/* 表格固定列阴影 */
.sticky-shadow-right  // 右侧伪元素渐变
.sticky-shadow-left   // 左侧伪元素渐变
```

### mixins.scss 中保留

```scss
@mixin responsive($breakpoint)     // 响应式断点
@mixin font-h0 ~ @mixin font-h6    // 标题字体组合
@mixin shadow-1 ~ @mixin shadow-5  // 阴影（可选用 CSS 变量替代）
```

---

## 迁移建议

### 对于新代码

1. **直接使用 CSS 变量**：`color: var(--text-1);`
2. **使用工具类**：`class="text-1 bg-fill-4"`
3. **阴影优先用变量**：`box-shadow: var(--shadow-2);`

### 对于旧代码

1. **无需修改**：兼容别名已添加（--dark-*, --brand-*, --green-*, --orange-*）
2. **逐步迁移**：新代码使用新命名，旧代码保持稳定

---

## 更新记录

| 日期 | 变更 |
|------|------|
| 2026-03-09 | 删除 colors.scss，迁移阴影到 design-tokens.css |
| 2026-03-09 | 精简 effects.scss，仅保留交互效果 |
| 2026-03-09 | 创建本整合报告 |
| 2026-03-09 | **theme.scss 映射完成**：品牌色、字号、行高、字重、圆角改为引用 design-tokens |
| 2026-03-09 | **globals.scss 更新**：移除 colors.scss 引用，圆角变量改为引用 design-tokens |
| 2026-03-09 | 复制 design-tokens.css 到 PPIO 项目 `src/styles/` |
