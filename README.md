# Design Token

[English](./README-EN.md) | 中文

一套从 Figma 导出的设计令牌（Design Tokens），包含 CSS 变量和工具类，帮助你快速构建一致的用户界面。

## 特点

- **Figma 命名一致** - CSS 类名与 Figma Token 命名完全对应，设计师和开发者使用同一套语言
- **开箱即用** - 只需引入一个 CSS 文件，无需构建工具
- **支持多主题** - 基于 CSS 变量，轻松实现主题切换
- **AI 友好** - 提供清晰的命名规范，方便 AI 生成符合设计规范的页面

## 安装

### 方式一：直接下载

下载 [dist/design-tokens.css](./dist/design-tokens.css) 文件，放到你的项目中引入：

```html
<link rel="stylesheet" href="path/to/design-tokens.css">
```

### 方式二：CDN 引入

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/siriusharrison-png/design-token@main/dist/design-tokens.css">
```

### 方式三：npm 安装

```bash
npm install design-token
```

```javascript
// 在你的 JS/CSS 中引入
import 'design-token/dist/design-tokens.css';
```

## 快速开始

### 使用 CSS 变量

```css
.my-button {
  background-color: var(--brand-primary-1);
  color: var(--text-4);
  padding: var(--space-8) var(--space-16);
  border-radius: var(--radius-4-small);
}
```

### 使用工具类

```html
<!-- 主按钮 -->
<button class="btn-primary">提交</button>

<!-- 次按钮 -->
<button class="btn-secondary">取消</button>

<!-- 使用原子类组合 -->
<button class="bg-brand-primary-1 text-4 h-32-medium px-16 radius-4-small">
  自定义按钮
</button>

<!-- 卡片 -->
<div class="card">
  <h3 class="text-1 font-size-16 font-semibold mb-8">标题</h3>
  <p class="text-2 font-size-14">内容描述</p>
</div>

<!-- 标签 -->
<span class="tag-system">系统通知</span>
<span class="tag-success">成功</span>
<span class="tag-danger">警告</span>
```

## Token 对照表

### 颜色

| 类型 | CSS 变量 | 工具类 | 用途 |
|------|---------|-------|------|
| 品牌色 | `--brand-primary-1` | `.bg-brand-primary-1` | 主按钮、链接 |
| 品牌色浅 | `--brand-primary-5` | `.bg-brand-primary-5` | 提示背景 |
| 文字主色 | `--text-1` | `.text-1` | 标题、正文 |
| 文字次色 | `--text-2` | `.text-2` | 次要文字 |
| 文字辅助 | `--text-3` | `.text-3` | 提示、禁用 |
| 反色文字 | `--text-4` | `.text-4` | 深色背景上的文字 |
| 边框常规 | `--border-3` | `.border-3` | 常规边框 |
| 填充背景 | `--fill-4` | `.bg-fill-4` | 页面背景 |
| 成功色 | `--success-1` | `.bg-success-1` | 成功状态 |
| 警告色 | `--warning-1` | `.bg-warning-1` | 警告状态 |
| 危险色 | `--red-1` | `.bg-red-1` | 错误、危险 |

### 间距

| CSS 变量 | 工具类 | 值 |
|---------|-------|-----|
| `--space-0` | `.p-0` `.m-0` `.gap-0` | 0px |
| `--space-4` | `.p-4` `.m-4` `.gap-4` | 4px |
| `--space-8` | `.p-8` `.m-8` `.gap-8` | 8px |
| `--space-12` | `.p-12` `.m-12` `.gap-12` | 12px |
| `--space-16` | `.p-16` `.m-16` `.gap-16` | 16px |
| `--space-24` | `.p-24` `.m-24` `.gap-24` | 24px |
| `--space-48` | `.p-48` `.gap-48` | 48px |

### 圆角

| CSS 变量 | 工具类 | 值 | 用途 |
|---------|-------|-----|------|
| `--radius-0-none` | `.radius-0-none` | 0px | 无圆角 |
| `--radius-2-minismall` | `.radius-2-minismall` | 2px | 标签 |
| `--radius-4-small` | `.radius-4-small` | 4px | 按钮、输入框 |
| `--radius-6-regular` | `.radius-6-regular` | 6px | 表单 |
| `--radius-8-medium` | `.radius-8-medium` | 8px | 弹窗 |
| `--radius-999-round` | `.radius-999-round` | 999px | 全圆角 |

### 组件高度

| CSS 变量 | 工具类 | 值 |
|---------|-------|-----|
| `--height-20-supersmall` | `.h-20-supersmall` | 20px |
| `--height-24-minismall` | `.h-24-minismall` | 24px |
| `--height-28-small` | `.h-28-small` | 28px |
| `--height-32-medium` | `.h-32-medium` | 32px |
| `--height-36-large` | `.h-36-large` | 36px |
| `--height-40-xlarge` | `.h-40-xlarge` | 40px |
| `--height-44-superlarge` | `.h-44-superlarge` | 44px |

更多详细对照请查看 [docs/mapping.md](./docs/mapping.md)

## AI 生成页面指南

如果你使用 AI（如 Claude、ChatGPT）来生成页面，可以给 AI 以下提示：

```
请使用 design-token 设计系统来生成页面。规范要求：

1. 颜色必须使用 CSS 变量：
   - 品牌色：var(--brand-primary-1)
   - 文字色：var(--text-1), var(--text-2), var(--text-3)
   - 边框色：var(--border-3)
   - 背景色：var(--fill-4), var(--fill-5)

2. 间距使用工具类：
   - padding: .p-8, .p-16, .px-16, .py-8
   - margin: .m-8, .mt-16, .mb-24
   - gap: .gap-8, .gap-16

3. 圆角使用工具类：
   - 按钮/输入框: .radius-4-small
   - 卡片: .radius-6-regular
   - 弹窗: .radius-8-medium

4. 高度使用工具类：
   - 小按钮: .h-28-small
   - 标准按钮: .h-32-medium
   - 大按钮: .h-36-large

5. 组件类：
   - 主按钮: .btn-primary
   - 次按钮: .btn-secondary
   - 卡片: .card
   - 标签: .tag-system, .tag-success, .tag-danger

【严格规范 - 必须遵守】

6. 禁止随意使用 Emoji：
   - 不要在页面中添加装饰性 emoji
   - 仅在原设计明确包含 emoji 时才保留
   - 图标请使用 SVG 或图标字体

7. 重构时保持结构不变：
   - 不要改变页面的整体布局结构
   - 不要改变板块的信息层级和内容结构
   - 只调整样式（颜色、间距、圆角等），不改变 DOM 结构
   - 保留原有的所有功能模块和信息内容
```

> **注意：** 第 6、7 条为强制规范，AI 在生成或重构页面时必须严格遵守。

## 与 Tailwind CSS 配合使用

本项目提供了 Tailwind 配置文件，可以扩展 Tailwind 使用相同的设计令牌：

```javascript
// tailwind.config.js
const designTokens = require('design-token/tailwind.config.js');

module.exports = {
  presets: [designTokens],
  // 你的其他配置...
}
```

## 文件结构

```
design-token/
├── dist/
│   └── design-tokens.css    # 核心 CSS 文件（直接引入使用）
├── src/
│   └── tokens.json          # Figma 导出的原始 Tokens
├── docs/
│   ├── mapping.md           # Token 完整映射表
│   └── preview.html         # 可视化预览页面
├── tailwind.config.js       # Tailwind 配置
└── package.json
```

## 自定义主题

基于 CSS 变量，你可以轻松创建自定义主题：

```css
/* 深色主题示例 */
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
  <!-- 所有组件自动应用深色主题 -->
</body>
```

## License

[MIT](./LICENSE)

---

*由转转设计系统团队维护*
