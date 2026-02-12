/** @type {import('tailwindcss').Config} */
/**
 * 转转的设计系统 - Tailwind 配置
 * 版本: 1.0.3
 * 基于 design-tokens.tokens.json 生成（Figma Design Tokens 插件导出）
 */
module.exports = {
  // 支持暗色模式
  darkMode: 'class',

  theme: {
    extend: {
      // ==================== 颜色系统 ====================
      colors: {
        // 基础色
        'white': '#ffffff',
        'black': '#000000',
        'mask': 'rgba(0, 0, 0, 0.4)',  // 遮罩色

        // 品牌主色 (brand color)
        'brand': {
          DEFAULT: '#1161fe',
          0: '#1161fe',   // 常规
          1: '#0e58ea',   // 点击
          2: '#4080ff',   // 悬浮
          3: '#bed4ff',   // 文字禁用
          4: '#e6edfa',   // 一般/侧边栏选中
          5: '#f4f7ff',   // 浅色/提示背景
        },

        // 边框色 (border)
        'border': {
          1: '#86909c',   // 重/按钮描边
          2: '#c9cdd4',   // 深/悬浮
          3: '#ebecef',   // 一般
          4: '#f2f3f5',   // 浅
        },

        // 填充色 (fill)
        'fill': {
          1: '#5c6168',   // 强调/图标/特殊场景
          2: '#c9cdd4',   // 重/特殊场景
          3: '#f2f3f5',   // 一般/常规/白底悬浮
          4: '#f7f8fa',   // 浅/禁用
          5: '#ffffff',   // 纯白
        },

        // 文字色 (text)
        'text': {
          1: '#181818',   // 强调/正文标题
          2: '#616161',   // 次强调/正文标题
          3: '#9e9e9e',   // 次要信息、禁用
          4: '#d3d4d5',   // 置灰信息
          'highlight': '#0e58ea',  // 高亮
          'danger': '#cb2634',     // 危险
          'warning': '#d25f00',    // 提示
          'success': '#009a29',    // 成功
        },

        // 成功色 (success)
        'success': {
          DEFAULT: '#00b42a',
          0: '#009a29',   // 点击
          1: '#00b42a',   // 常规
          2: '#23c343',   // 悬浮
          3: '#aff0b5',   // 特殊场景
          4: '#e8ffea',   // 浅色背景
        },

        // 警告色 (warning)
        'warning': {
          DEFAULT: '#ff7d00',
          0: '#d25f00',   // 点击
          1: '#ff7d00',   // 常规
          2: '#ff9a2e',   // 悬浮
          3: '#ffe4ba',   // 特殊场景
          4: '#fff7e8',   // 浅色背景
        },

        // 危险色 (danger)
        'danger': {
          DEFAULT: '#f53f3f',
          0: '#cb272d',   // 点击
          1: '#f53f3f',   // 常规
          2: '#f76560',   // 悬浮
          3: '#fdcdc5',   // 特殊场景
          4: '#ffece8',   // 浅色背景
        },
      },

      // ==================== 字体系统 (Typography) ====================

      fontFamily: {
        'sans': ['PingFang SC', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },

      // 字号
      fontSize: {
        'xs': '12px',
        'sm': '13px',
        'base': '14px',
        'md': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '44px',
        '6xl': '56px',
      },

      // 字重
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },

      // 行高
      lineHeight: {
        'none': '1',
        'tight': '1.15',      // h0-h2
        'snug': '1.25',       // h3-h6
        'normal': '1.5',      // 正文
        'relaxed': '1.67',    // 宽松
      },

      // 字间距
      letterSpacing: {
        'tight': '-2px',
        'normal': '0px',
        'wide': '2px',
      },

      // ==================== 文字样式组合 (Text Styles) ====================
      // 使用方式: @apply text-style-h1; 或在 CSS 中引用

      // ==================== 间距系统 (space) ====================
      // 使用设计系统原始命名，不做转换
      spacing: {
        '0': '0px',
        '2': '2px',
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '48': '48px',
        '80': '80px',
        '120': '120px',
      },

      // ==================== 圆角 (Radius) ====================
      borderRadius: {
        'none': '0px',       // 0-none
        'xs': '2px',         // 2-minismall
        'sm': '4px',         // 4-small: 按钮/输入框/下拉选项hover
        'md': '6px',         // 6-regular: 表单边框/下拉选外框
        'lg': '8px',         // 8-medium: 弹窗
        'xl': '12px',        // 12-Large
        'full': '999px',     // 999-round
      },

      // ==================== 组件高度 (height) ====================
      height: {
        'supersmall': '20px',
        'minismall': '24px',
        'small': '28px',
        'medium': '32px',
        'large': '36px',
        'xlarge': '40px',
        'superlarge': '44px',
      },

      minHeight: {
        'supersmall': '20px',
        'minismall': '24px',
        'small': '28px',
        'medium': '32px',
        'large': '36px',
        'xlarge': '40px',
        'superlarge': '44px',
      },

      // ==================== 阴影 (Shadows) - 待补充 ====================
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
      },
    },
  },

  // ==================== 响应式断点 (webheader) ====================
  screens: {
    'phone': { 'max': '374px' },
    'mobile': { 'min': '375px', 'max': '1039px' },
    'pad': { 'min': '1040px', 'max': '1439px' },
    'pc': { 'min': '1440px' },
  },
}
