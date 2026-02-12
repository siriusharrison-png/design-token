# Design Tokens 映射文档

> 命名完全对应 Figma 中的 Tokens 名称，设计师和开发者使用同一套命名。

---

## 一、使用方式

### 引入 CSS 文件

```html
<link rel="stylesheet" href="design-tokens.css">
```

### 使用 CSS 变量

```css
.my-element {
  background-color: var(--brand-primary-1);
  color: var(--text-1);
}
```

### 使用工具类

```html
<button class="bg-brand-primary-1 text-4 h-32-medium px-16 radius-4-small">
  按钮
</button>
```

---

## 二、颜色 Tokens

### 2.1 品牌色 (brand primary)

| Figma Token | CSS 变量 | 色值 | 背景类 | 文字类 |
|-------------|---------|------|--------|--------|
| brand primary/0 | `--brand-primary-0` | #0e58ea | `.bg-brand-primary-0` | `.text-brand-primary-0` |
| brand primary/1 | `--brand-primary-1` | #1161fe | `.bg-brand-primary-1` | `.text-brand-primary-1` |
| brand primary/2 | `--brand-primary-2` | #4080ff | `.bg-brand-primary-2` | `.text-brand-primary-2` |
| brand primary/3 | `--brand-primary-3` | #bed4ff | `.bg-brand-primary-3` | - |
| brand primary/4 | `--brand-primary-4` | #e6edfa | `.bg-brand-primary-4` | - |
| brand primary/5 | `--brand-primary-5` | #f4f7ff | `.bg-brand-primary-5` | - |

### 2.2 文字色 (gray/text)

| Figma Token | CSS 变量 | 色值 | 类名 | 用途 |
|-------------|---------|------|------|------|
| gray/text/1 | `--text-1` | #181818 | `.text-1` | 主要文字、标题 |
| gray/text/2 | `--text-2` | #616161 | `.text-2` | 次要文字、正文 |
| gray/text/3 | `--text-3` | #9e9e9e | `.text-3` | 辅助文字、提示 |
| gray/text/4 | `--text-4` | #ffffff | `.text-4` | 反色文字（白色） |

### 2.3 边框色 (gray/border)

| Figma Token | CSS 变量 | 色值 | 类名 | 用途 |
|-------------|---------|------|------|------|
| gray/border/1 | `--border-1` | #86909c | `.border-1` | 深边框 |
| gray/border/2 | `--border-2` | #c9cdd4 | `.border-2` | 中等边框 |
| gray/border/3 | `--border-3` | #ebecef | `.border-3` | 常规边框（最常用） |
| gray/border/4 | `--border-4` | #f2f3f5 | `.border-4` | 浅边框、分割线 |

### 2.4 填充色 (gray/fill)

| Figma Token | CSS 变量 | 色值 | 类名 | 用途 |
|-------------|---------|------|------|------|
| gray/fill/1 | `--fill-1` | #5c6168 | `.bg-fill-1` | 深色填充 |
| gray/fill/2 | `--fill-2` | #c9cdd4 | `.bg-fill-2` | 中等填充 |
| gray/fill/3 | `--fill-3` | #f2f3f5 | `.bg-fill-3` | 浅色填充、已读标签 |
| gray/fill/4 | `--fill-4` | #f7f8fa | `.bg-fill-4` | 页面背景 |
| gray/fill/5 | `--fill-5` | #ffffff | `.bg-fill-5` | 白色背景、卡片 |

### 2.5 语义色 - 成功 (semantic/success)

| Figma Token | CSS 变量 | 色值 | 背景类 | 文字类 |
|-------------|---------|------|--------|--------|
| semantic/success/0 | `--success-0` | #009a29 | `.bg-success-0` | `.text-success-0` |
| semantic/success/1 | `--success-1` | #00b42a | `.bg-success-1` | `.text-success-1` |
| semantic/success/2 | `--success-2` | #23c343 | `.bg-success-2` | - |
| semantic/success/3 | `--success-3` | #aff0b5 | `.bg-success-3` | - |
| semantic/success/4 | `--success-4` | #e8ffea | `.bg-success-4` | - |

### 2.6 语义色 - 警告 (semantic/warning)

| Figma Token | CSS 变量 | 色值 | 背景类 | 文字类 |
|-------------|---------|------|--------|--------|
| semantic/warning/0 | `--warning-0` | #d25f00 | `.bg-warning-0` | `.text-warning-0` |
| semantic/warning/1 | `--warning-1` | #ff7d00 | `.bg-warning-1` | `.text-warning-1` |
| semantic/warning/2 | `--warning-2` | #ff9a2e | `.bg-warning-2` | - |
| semantic/warning/3 | `--warning-3` | #ffe4ba | `.bg-warning-3` | - |
| semantic/warning/4 | `--warning-4` | #fff7e8 | `.bg-warning-4` | - |

### 2.7 语义色 - 危险 (semantic/red)

| Figma Token | CSS 变量 | 色值 | 背景类 | 文字类 |
|-------------|---------|------|--------|--------|
| semantic/red/0 | `--red-0` | #cb2634 | `.bg-red-0` | `.text-red-0` |
| semantic/red/1 | `--red-1` | #f53f3f | `.bg-red-1` | `.text-red-1` |
| semantic/red/2 | `--red-2` | #f76560 | `.bg-red-2` | - |
| semantic/red/3 | `--red-3` | #fdcdc5 | `.bg-red-3` | - |
| semantic/red/4 | `--red-4` | #ffece8 | `.bg-red-4` | - |

---

## 三、间距 Tokens (space)

| Figma Token | CSS 变量 | 数值 | padding | margin | gap |
|-------------|---------|------|---------|--------|-----|
| space/0 | `--space-0` | 0px | `.p-0` `.px-0` `.py-0` | `.m-0` `.mx-0` `.my-0` | `.gap-0` |
| space/2 | `--space-2` | 2px | `.p-2` `.px-2` `.py-2` | `.m-2` | `.gap-2` |
| space/4 | `--space-4` | 4px | `.p-4` `.px-4` `.py-4` | `.m-4` `.mt-4` `.mb-4` | `.gap-4` |
| space/8 | `--space-8` | 8px | `.p-8` `.px-8` `.py-8` | `.m-8` `.mt-8` `.mb-8` | `.gap-8` |
| space/12 | `--space-12` | 12px | `.p-12` `.px-12` `.py-12` | `.m-12` `.mt-12` `.mb-12` | `.gap-12` |
| space/16 | `--space-16` | 16px | `.p-16` `.px-16` `.py-16` | `.m-16` `.mt-16` `.mb-16` | `.gap-16` |
| space/24 | `--space-24` | 24px | `.p-24` `.px-24` `.py-24` | `.m-24` `.mt-24` `.mb-24` | `.gap-24` |
| space/48 | `--space-48` | 48px | `.p-48` | `.mt-48` `.mb-48` | `.gap-48` |
| space/80 | `--space-80` | 80px | `.p-80` | - | - |
| space/120 | `--space-120` | 120px | `.p-120` | - | - |

---

## 四、圆角 Tokens (Radius/Mode 1)

| Figma Token | CSS 变量 | 数值 | 完整类名 | 简写类名 | 用途 |
|-------------|---------|------|---------|---------|------|
| 0-none | `--radius-0-none` | 0px | `.radius-0-none` | `.rounded-none` | 无圆角 |
| 2-minismall | `--radius-2-minismall` | 2px | `.radius-2-minismall` | `.rounded-minismall` | 标签 |
| 4-small | `--radius-4-small` | 4px | `.radius-4-small` | `.rounded-small` | 按钮、输入框 |
| 6-regular | `--radius-6-regular` | 6px | `.radius-6-regular` | `.rounded-regular` | 表单、下拉框 |
| 8-medium | `--radius-8-medium` | 8px | `.radius-8-medium` | `.rounded-medium` | 弹窗 |
| 12-Large | `--radius-12-large` | 12px | `.radius-12-large` | `.rounded-large` | 大卡片 |
| 999-round | `--radius-999-round` | 999px | `.radius-999-round` | `.rounded-round` | 全圆角、徽章 |

---

## 五、组件高度 Tokens (height/Mode 1)

| Figma Token | CSS 变量 | 数值 | 高度类 | 最小高度类 |
|-------------|---------|------|--------|-----------|
| 20-Supersmall | `--height-20-supersmall` | 20px | `.h-20-supersmall` | `.min-h-20-supersmall` |
| 24-Minismall | `--height-24-minismall` | 24px | `.h-24-minismall` | `.min-h-24-minismall` |
| 28-Small | `--height-28-small` | 28px | `.h-28-small` | `.min-h-28-small` |
| 32-Medium | `--height-32-medium` | 32px | `.h-32-medium` | `.min-h-32-medium` |
| 36-Large | `--height-36-large` | 36px | `.h-36-large` | `.min-h-36-large` |
| 40-XLarge | `--height-40-xlarge` | 40px | `.h-40-xlarge` | `.min-h-40-xlarge` |
| 44-SuperLarge | `--height-44-superlarge` | 44px | `.h-44-superlarge` | `.min-h-44-superlarge` |

---

## 六、字号 Tokens (Typography/PC/Font-size)

| Figma Token | CSS 变量 | 数值 | 类名 |
|-------------|---------|------|------|
| Font-size/12 | `--font-size-12` | 12px | `.font-size-12` |
| Font-size/13 | `--font-size-13` | 13px | `.font-size-13` |
| Font-size/14 | `--font-size-14` | 14px | `.font-size-14` |
| Font-size/16 | `--font-size-16` | 16px | `.font-size-16` |
| Font-size/18 | `--font-size-18` | 18px | `.font-size-18` |
| Font-size/20 | `--font-size-20` | 20px | `.font-size-20` |
| Font-size/24 | `--font-size-24` | 24px | `.font-size-24` |
| Font-size/28 | `--font-size-28` | 28px | `.font-size-28` |
| Font-size/36 | `--font-size-36` | 36px | `.font-size-36` |
| Font-size/44 | `--font-size-44` | 44px | `.font-size-44` |
| Font-size/56 | `--font-size-56` | 56px | `.font-size-56` |

---

## 七、字重 Tokens (Typography/PC/Font-weight)

| Figma Token | CSS 变量 | 数值 | 完整类名 | 简写类名 |
|-------------|---------|------|---------|---------|
| 300-Light | `--font-weight-300-light` | 300 | `.font-weight-300-light` | `.font-light` |
| 400-regular | `--font-weight-400-regular` | 400 | `.font-weight-400-regular` | `.font-regular` |
| 500-Medium | `--font-weight-500-medium` | 500 | `.font-weight-500-medium` | `.font-medium` |
| 600-semibold | `--font-weight-600-semibold` | 600 | `.font-weight-600-semibold` | `.font-semibold` |
| 700-bold | `--font-weight-700-bold` | 700 | `.font-weight-700-bold` | `.font-bold` |

---

## 八、悬停状态类 (Hover)

| 效果 | 类名 |
|------|------|
| 背景变品牌色 | `.hover:bg-brand-primary-0` `.hover:bg-brand-primary-1` |
| 背景变填充色 | `.hover:bg-fill-4` |
| 背景变危险色 | `.hover:bg-red-0` |
| 文字变品牌色 | `.hover:text-brand-primary-0` `.hover:text-brand-primary-1` |
| 文字变主色 | `.hover:text-1` `.hover:text-2` |
| 文字变危险色 | `.hover:text-red-1` |
| 边框变品牌色 | `.hover:border-brand-primary-0` |

---

## 九、组合类（快捷方式）

| 类名 | 用途 |
|------|------|
| `.btn-primary` | 主按钮（品牌色背景） |
| `.btn-secondary` | 次按钮（白色背景、边框） |
| `.btn-danger` | 危险按钮（红色背景） |
| `.card` | 卡片容器 |
| `.tag-system` | 系统通知标签 |
| `.tag-account` | 账户提醒标签 |
| `.tag-success` | 成功/产品动态标签 |
| `.tag-danger` | 危险/活动消息标签 |
| `.tag-read` | 已读状态标签 |

---

## 十、代码示例

### 主按钮

```html
<!-- 使用组合类 -->
<button class="btn-primary">提交</button>

<!-- 或使用原子类 -->
<button class="bg-brand-primary-1 text-4 h-32-medium px-16 radius-4-small hover:bg-brand-primary-0">
  提交
</button>
```

### 次按钮

```html
<button class="btn-secondary">取消</button>
```

### 卡片

```html
<div class="card">
  <h3 class="text-1 font-size-16 font-semibold mb-8">标题</h3>
  <p class="text-2 font-size-14">内容描述</p>
</div>
```

### 标签

```html
<span class="tag-system">系统通知</span>
<span class="tag-account">账户提醒</span>
<span class="tag-success">产品动态</span>
<span class="tag-danger">活动消息</span>
<span class="tag-read">已读</span>
```

### 表单输入框

```html
<input
  type="text"
  class="h-32-medium px-12 radius-6-regular border-3 bg-fill-5 text-1 font-size-14"
  placeholder="请输入"
>
```

---

## 十一、文件清单

| 文件 | 路径 | 说明 |
|------|------|------|
| CSS 工具类 | `design-tokens.css` | 所有自定义类定义 |
| 映射文档 | `design-tokens-mapping.md` | 本文档 |
| 原始 Tokens | `~/Desktop/tokens.json` | Figma 导出的源文件 |

---

*文档版本：v2.0*
*更新日期：2026-02-11*
*特点：类名完全对应 Figma Tokens 命名*
