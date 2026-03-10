# Design Tokens 命名映射表

> 版本：2.0.0
> 更新：2026-03-09
> 来源：Figma - PPIO Design System (2026)

---

## 概述

本文档记录 **Figma 标准命名** 与 **PPIO 项目旧命名** 的对应关系。

新版 `design-tokens.css` 同时支持两种命名，通过兼容别名实现平滑过渡。

---

## 颜色映射

### 品牌色 (Brand)

| Figma 标准 | PPIO 旧命名 | 色值 | 用途 |
|-----------|------------|------|------|
| `--brand-primary-0` | `--brand-1` | #0e58ea | 深色/hover |
| `--brand-primary-1` | `--brand-0` | #1161fe | 主色 |
| `--brand-primary-2` | `--brand-2` | #4080ff | 浅色 |
| `--brand-primary-3` | `--brand-3` | #bed4ff | 更浅 |
| `--brand-primary-4` | `--brand-4` | #e6edfa | 背景浅 |
| `--brand-primary-5` | `--brand-5` | #f4f7ff | 背景最浅 |

> **注意**：PPIO 的 `--brand-0` 对应 Figma 的 `--brand-primary-1`（顺序不同）

### 文字色 (Text)

| Figma 标准 | PPIO 旧命名 | 色值 | 用途 |
|-----------|------------|------|------|
| `--text-1` | `--dark-1` | #181818 | 主要文字 |
| `--text-2` | `--dark-2` | #616161 | 次要文字 |
| `--text-3` | `--dark-3` | #9e9e9e | 辅助文字 |
| `--text-disable` | `--dark-4` | #d3d4d5 | 禁用文字 |

### 中性色 (Neutral)

| Figma 标准 | PPIO 旧命名 | 色值 |
|-----------|------------|------|
| `--neutral-0` | `--black` | #181818 |
| `--neutral-5` | `--white` | #ffffff |

### 成功色 (Success)

| Figma 标准 | PPIO 旧命名 | 色值 |
|-----------|------------|------|
| `--success-0` | `--green-0` | #009a29 |
| `--success-1` | `--green-1` | #00b42a |
| `--success-2` | `--green-2` | #23c343 |
| `--success-3` | `--green-3` | #aff0b5 |
| `--success-4` | `--green-4` | #e8ffea |

### 警告色 (Warning)

| Figma 标准 | PPIO 旧命名 | 色值 |
|-----------|------------|------|
| `--warning-0` | `--orange-0` | #d25f00 |
| `--warning-1` | `--orange-1` | #ff7d00 |
| `--warning-2` | `--orange-2` | #ff9a2e |
| `--warning-3` | `--orange-3` | #ffe4ba |
| `--warning-4` | `--orange-4` | #fff7e8 |

### 危险色 (Danger/Red)

| Figma 标准 | PPIO 旧命名 | 色值 |
|-----------|------------|------|
| `--red-0` | `--red-0` | #cb2634 |
| `--red-1` | `--red-1` | #f53f3f |
| `--red-2` | `--red-2` | #f76560 |
| `--red-3` | `--red-3` | #fdcdc5 |
| `--red-4` | `--red-4` | #ffece8 |

> 危险色命名一致，无需映射

### 阴影 (Shadow)

| Figma 标准 | Tailwind 别名 | 值 |
|-----------|--------------|-----|
| `--shadow-1` | `--shadow-sm` | 0 2px 5px 0 rgba(0,0,0,0.05) |
| `--shadow-2` | `--shadow` | 0 2px 8px 0 rgba(0,0,0,0.08) |
| `--shadow-3` | `--shadow-md` | 复合阴影 |
| `--shadow-4` | `--shadow-lg` | 复合阴影 |
| `--shadow-5` | `--shadow-xl` | 复合阴影 |
| `--shadow-drop` | - | 侧边阴影 |
| `--shadow-home` | - | 首页卡片 |
| `--shadow-module` | - | 模块阴影 |

---

## 无变化的 Tokens

以下 Tokens 命名一致，新旧项目通用：

| 类别 | 变量前缀 |
|------|---------|
| 填充色 | `--fill-1` ~ `--fill-5` |
| 边框色 | `--border-1` ~ `--border-4` |
| 间距 | `--space-0` ~ `--space-120` |
| 圆角 | `--radius-*` |
| 高度 | `--height-*` |
| 字号 | `--font-size-*` |
| 字重 | `--font-weight-*` |

---

## 新增 Tokens（Figma 2.0）

以下是新版新增的变量，PPIO 旧代码中不存在：

| 类别 | 变量 | 说明 |
|------|------|------|
| 透明色 | `--transparent-blue` | 蓝色 20% 透明 |
| 透明色 | `--transparent-red` | 红色 20% 透明 |
| 透明色 | `--transparent-orange` | 橙色 20% 透明 |
| 透明色 | `--transparent-green` | 绿色 20% 透明 |
| 透明色 | `--transparent-gray` | 灰色 20% 透明 |
| 透明色 | `--transparent-neutral` | 白色 20% 透明 |
| 遮罩 | `--mask-light` | 浅遮罩 20% |
| 遮罩 | `--mask-dark` | 深遮罩 40% |
| 行高 | `--line-height-*` | 配合字号使用 |
| 字间距 | `--font-spacing-*` | tight/normal/loose |

---

## 迁移指南

### 方式一：保持旧命名（推荐）

新版 CSS 已包含兼容别名，无需修改代码。

```css
/* 旧代码继续工作 */
color: var(--dark-1);
background: var(--brand-0);
```

### 方式二：逐步迁移到新命名

在写新代码时使用 Figma 标准命名：

```css
/* 新代码使用新命名 */
color: var(--text-1);
background: var(--brand-primary-1);
```

### 方式三：批量替换（高风险）

使用全局搜索替换，但需要注意：
- `--brand-0` 对应 `--brand-primary-1`（不是 0）
- `--brand-1` 对应 `--brand-primary-0`（顺序反）

```bash
# 不推荐简单替换，容易出错
```

---

## 文件位置

| 文件 | 路径 |
|------|------|
| CSS 源文件 | `design-token/dist/design-tokens.css` |
| Tokens JSON | `design-token/src/tokens.json` |
| 本映射文档 | `design-token/docs/naming-mapping.md` |

---

## 版本历史

| 版本 | 日期 | 变更 |
|------|------|------|
| 2.0.0 | 2026-03-09 | 从 Figma 重新导出，添加 PPIO 兼容别名 |
| 1.0.3 | 2026-02-12 | 初始版本 |
