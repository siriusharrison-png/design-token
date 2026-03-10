# Design Token

[English](./README-EN.md) | 中文

Figma Design Token 转换工具 —— 将 Token Studio for Figma 导出的 JSON 转换为 SCSS 文件。

## 特点

- **Figma 命名一致** - SCSS 变量名与 Figma Token 命名完全对应
- **分层架构** - Variables（基础变量）+ Theme（语义化样式）+ Layout + Animation
- **CLI 工具** - 一行命令完成转换
- **支持多主题** - 基于 SCSS 变量，轻松实现主题切换

## 前置准备

1. 在 Figma 中安装 [Token Studio for Figma](https://www.figma.com/community/plugin/843461159747178978) 插件
2. 使用插件导出 Variables 和 Styles 为 JSON 文件
3. 将导出的 JSON 作为本工具的输入

## 安装

```bash
# 克隆项目
git clone https://github.com/siriusharrison-png/design-token.git
cd design-token

# 或者全局安装（可选）
npm install -g .
```

## 使用方法

```bash
# 基本用法
node bin/transform.js transform <input.json> --output <output-dir>

# 示例
node bin/transform.js transform ./my-tokens.json --output ./src/styles/tokens/
```

### 输出文件

转换后会生成以下 SCSS 文件：

```
tokens/
├── _variables.scss    ← 基础变量（颜色、间距、圆角、字体）
├── _theme.scss        ← 语义化样式（主题色引用）
├── _layout.scss       ← 布局系统（断点、栅格）
├── _animation.scss    ← 动画系统（过渡、关键帧）
└── index.scss         ← 统一入口
```

### 在项目中使用

```scss
// 引入全部
@use 'tokens' as *;

// 或单独引入
@use 'tokens/variables' as *;
@use 'tokens/theme' as *;

// 使用变量
.button {
  background-color: $blue-1;
  padding: $space-8 $space-16;
  border-radius: $radius-4-small;
}
```

## 全局规范（必须遵守）

| 规则 | 说明 |
|------|------|
| ❌ 禁止直接写像素值或颜色值 | 不要在代码中硬编码 `16px`、`#1161fe` 等具体数值 |
| ✅ 必须使用已有的 Design Token | 所有样式值都应引用 `$<token-name>` |
| 🚨 缺少 Token 时必须先沟通 | 如果找不到合适的 Token，先告知或提议新增，**禁止自行创建一次性数值** |

## 文件结构

```
design-token/
├── bin/
│   └── transform.js       ← CLI 入口
├── src/
│   ├── parser.js          ← JSON 解析器
│   └── generator.js       ← SCSS 生成器
├── example/
│   ├── input/
│   │   └── tokens.json    ← 示例输入
│   └── output/            ← 示例输出
├── output/
│   └── ppio/              ← PPIO 项目存档
├── demo/                  ← 演示页面
├── docs/
│   ├── mapping.md         ← Token 映射表
│   ├── preview.html       ← 可视化预览
│   └── guide.html         ← 使用指南
├── dist/
│   └── design-tokens.css  ← 旧版 CSS（保留）
├── SPEC.md                ← 架构规范文档
└── package.json
```

## 在线预览

- [使用指南](https://htmlpreview.github.io/?https://github.com/siriusharrison-png/design-token/blob/main/docs/guide.html)
- [Token 预览](https://htmlpreview.github.io/?https://github.com/siriusharrison-png/design-token/blob/main/docs/preview.html)

## 版本历史

### v2.0.0（当前）
- 架构重构：从单 CSS 文件改为 CLI 转换工具
- 支持 Token Studio for Figma 导出格式
- 输出分层 SCSS 文件（variables / theme / layout / animation）

### v1.x
- 单个 design-tokens.css 文件
- Tailwind 配置文件

## License

[MIT](./LICENSE)

---

*由转转设计系统团队维护*
