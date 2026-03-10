/**
 * Figma Token JSON 解析器
 * 解析 Token Studio for Figma 导出的 JSON
 */

/**
 * 解析 Figma Tokens JSON
 * @param {Object} json - Token Studio 导出的 JSON 对象
 * @returns {Object} 解析后的 token 数据
 */
function parseTokens(json) {
  const result = {
    variables: {
      colors: {},
      spacing: {},
      radius: {},
      typography: {}
    },
    theme: {
      colorStyles: {},
      textStyles: {},
      effectStyles: {}
    },
    layout: {
      breakpoints: {}
    }
  };

  // 获取数据源 - 支持两种格式
  // 格式1: 直接的 "Primitive tokens" 等顶级 key
  // 格式2: "PPIO/Mode 1" 等 collection 包裹
  let data = json;

  // 检查是否是 collection 包裹格式
  const keys = Object.keys(json).filter(k => !k.startsWith('$'));
  if (keys.length > 0 && !json['Primitive tokens'] && !json['primitive']) {
    // 可能是 collection 格式，取第一个 collection
    const collectionKey = keys.find(k => typeof json[k] === 'object' && json[k] !== null);
    if (collectionKey) {
      data = json[collectionKey];
      console.log(`  📂 检测到 Collection: ${collectionKey}`);
    }
  }

  // 解析 primitive（基础变量）
  const primitives = data['Primitive tokens'] || data['primitive'];
  if (primitives) {
    // 解析颜色
    if (primitives.color) {
      result.variables.colors = flattenColorTokens(primitives.color);
    }

    // 解析间距
    if (primitives.space) {
      result.variables.spacing = flattenNumberTokens(primitives.space, 'space');
    }
  }

  // 解析 radius（圆角）
  const radiusData = data['Radius'] || data['radius'];
  if (radiusData) {
    result.variables.radius = flattenNumberTokens(radiusData, 'radius');
  }

  // 解析 height（组件高度）
  const heightData = data['height'];
  if (heightData) {
    result.variables.typography.height = flattenNumberTokens(heightData, 'height');
  }

  // 解析 font（字体相关）
  const fontData = data['Font'] || data['font'];
  if (fontData) {
    // Font-weight / weight
    const weightData = fontData['Font-weight'] || fontData['weight'];
    if (weightData) {
      result.variables.typography.fontWeight = flattenNumberTokens(weightData, 'font-weight');
    }

    // Font-size / size
    const sizeData = fontData['Font-size'] || fontData['size'];
    if (sizeData) {
      result.variables.typography.fontSize = flattenNumberTokens(sizeData, 'font-size');
    }

    // Font-spacing / spacing
    const spacingData = fontData['Font-spacing'] || fontData['spacing'];
    if (spacingData) {
      result.variables.typography.fontSpacing = flattenNumberTokens(spacingData, 'font-spacing');
    }

    // Font-color / color → 放入 theme
    const colorData = fontData['Font-color'] || fontData['color'];
    if (colorData) {
      result.theme.colorStyles = {
        ...result.theme.colorStyles,
        ...flattenReferenceTokens(colorData, 'font-color')
      };
    }
  }

  // 解析 字体行高
  const lineHeightData = data['字体行高'] || data['Height-I18N'];
  if (lineHeightData) {
    // 如果是嵌套的（Height-I18N 格式）
    if (lineHeightData['字体行高']) {
      result.variables.typography.lineHeight = flattenModeTokens(lineHeightData['字体行高'], 'line-height', 'CN');
    } else {
      result.variables.typography.lineHeight = flattenNumberTokens(lineHeightData, 'line-height');
    }
  }

  // 解析 semantic tokens / 换色（主题色）
  const semanticData = data['semantic tokens'] || data['换色*暂时不做'];
  if (semanticData) {
    // dark 语义色
    if (semanticData.dark) {
      const darkColors = flattenReferenceTokens(semanticData.dark, 'dark');
      result.theme.colorStyles = { ...result.theme.colorStyles, ...darkColors };
    }

    // light 语义色
    if (semanticData.light) {
      const lightColors = flattenReferenceTokens(semanticData.light, 'light');
      result.theme.colorStyles = { ...result.theme.colorStyles, ...lightColors };
    }

    // mask
    if (semanticData.mask) {
      const maskColors = flattenReferenceTokens(semanticData.mask, 'mask');
      result.theme.colorStyles = { ...result.theme.colorStyles, ...maskColors };
    }
  }

  // 解析 webheader → layout breakpoints
  const webheaderData = data['webheader'];
  if (webheaderData) {
    if (webheaderData.width) {
      const widthValue = webheaderData.width.$value;
      if (typeof widthValue === 'object') {
        // 多模式格式 { pc: "1440px", pad: "1040px", phone: "375px" }
        result.layout.breakpoints = widthValue;
      } else {
        // 单值格式
        result.layout.breakpoints = { default: addUnit(widthValue, 'px') };
      }
    }
  }

  // 解析 stroke（描边）
  const strokeData = data['stroke'];
  if (strokeData) {
    result.variables.stroke = flattenNestedNumberTokens(strokeData, 'stroke');
  }

  // 解析 component（组件间距）
  const componentData = data['component'] || data['component-padding'];
  if (componentData) {
    result.variables.componentPadding = flattenNestedTokens(componentData, 'component');
  }

  // 解析 frame（框架间距）
  const frameData = data['frame'] || data['frame-padding'];
  if (frameData) {
    result.variables.framePadding = flattenTokens(frameData, 'frame');
  }

  // 解析 component-margin
  if (data['component-margin']) {
    result.variables.componentMargin = flattenTokens(data['component-margin'], 'component-margin');
  }

  // 解析 frame-margin
  if (data['frame-margin']) {
    result.variables.frameMargin = flattenTokens(data['frame-margin'], 'frame-margin');
  }

  return result;
}

/**
 * 扁平化颜色 tokens
 */
function flattenColorTokens(colorObj, prefix = '') {
  const result = {};

  for (const [key, value] of Object.entries(colorObj)) {
    if (key.startsWith('$')) continue;

    const name = prefix ? `${prefix}-${key}` : key;

    if (value.$value !== undefined) {
      // 叶子节点
      result[sanitizeName(name)] = value.$value;
    } else if (typeof value === 'object') {
      // 嵌套对象，递归
      Object.assign(result, flattenColorTokens(value, name));
    }
  }

  return result;
}

/**
 * 扁平化数字 tokens（自动添加 px 单位，font-weight 除外）
 */
function flattenNumberTokens(obj, prefix) {
  const result = {};

  // font-weight 不需要单位
  const noUnitPrefixes = ['font-weight'];
  const needsUnit = !noUnitPrefixes.includes(prefix);

  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('$')) continue;

    if (value.$value !== undefined) {
      const name = `${prefix}-${key}`;
      result[sanitizeName(name)] = needsUnit ? addUnit(value.$value, 'px') : value.$value;
    }
  }

  return result;
}

/**
 * 扁平化嵌套数字 tokens
 */
function flattenNestedNumberTokens(obj, prefix) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('$')) continue;

    if (value.$value !== undefined) {
      const name = `${prefix}-${key}`;
      result[sanitizeName(name)] = addUnit(value.$value, 'px');
    } else if (typeof value === 'object') {
      // 嵌套
      for (const [subKey, subValue] of Object.entries(value)) {
        if (subKey.startsWith('$')) continue;
        if (subValue.$value !== undefined) {
          // 智能命名：如果 subKey 已经包含 key 前缀，就不重复添加
          // 例如：icon -> icon-16 不变成 icon-icon-16，而是直接用 icon-16
          let name;
          if (subKey.toLowerCase().startsWith(key.toLowerCase())) {
            name = `${prefix}-${subKey}`;
          } else {
            name = `${prefix}-${key}-${subKey}`;
          }
          result[sanitizeName(name)] = addUnit(subValue.$value, 'px');
        }
      }
    }
  }

  return result;
}

/**
 * 扁平化带模式的 tokens（取指定模式的值）
 */
function flattenModeTokens(obj, prefix, mode) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('$')) continue;

    if (value.$value !== undefined) {
      const name = `${prefix}-${key}`;
      let val = value.$value;
      if (typeof val === 'object' && val[mode]) {
        val = val[mode];
      }
      result[sanitizeName(name)] = addUnit(val, 'px');
    }
  }

  return result;
}

/**
 * 扁平化引用 tokens
 */
function flattenReferenceTokens(obj, prefix) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('$')) continue;

    if (value.$value !== undefined) {
      const name = prefix ? `${prefix}-${key}` : key;
      result[sanitizeName(name)] = resolveReference(value.$value);
    }
  }

  return result;
}

/**
 * 扁平化通用 tokens（支持引用）
 */
function flattenTokens(obj, prefix) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('$')) continue;

    if (value.$value !== undefined) {
      const name = `${prefix}-${key}`;
      result[sanitizeName(name)] = resolveReference(value.$value);
    }
  }

  return result;
}

/**
 * 扁平化嵌套 tokens（支持引用）
 */
function flattenNestedTokens(obj, prefix) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('$')) continue;

    if (value.$value !== undefined) {
      const name = `${prefix}-${key}`;
      result[sanitizeName(name)] = resolveReference(value.$value);
    } else if (typeof value === 'object') {
      // 嵌套
      for (const [subKey, subValue] of Object.entries(value)) {
        if (subKey.startsWith('$')) continue;
        if (subValue.$value !== undefined) {
          const name = `${prefix}-${key}-${subKey}`;
          result[sanitizeName(name)] = resolveReference(subValue.$value);
        }
      }
    }
  }

  return result;
}

/**
 * 解析引用，转换为 SCSS 变量引用
 * "{primitive.color.green.0}" → "$green-0"
 * "{primitive.space.16}" → "$space-16"
 */
function resolveReference(value) {
  if (typeof value !== 'string') return addUnit(value, 'px');

  if (value.startsWith('{') && value.endsWith('}')) {
    // 提取引用路径
    const path = value.slice(1, -1);
    const parts = path.split('.');

    // 简化路径，生成变量名
    let varName = '';

    // 处理 primitive.color.xxx 格式
    if (parts[0] === 'primitive' || parts[0] === 'Primitive tokens') {
      if (parts[1] === 'color') {
        // primitive.color.green.0 → green-0
        varName = parts.slice(2).join('-');
      } else if (parts[1] === 'space') {
        // primitive.space.16 → space-16
        varName = 'space-' + parts.slice(2).join('-');
      } else {
        varName = parts.slice(1).join('-');
      }
    } else {
      varName = parts.join('-');
    }

    return `$${sanitizeName(varName)}`;
  }

  return value;
}

/**
 * 为数值添加单位
 */
function addUnit(value, unit) {
  if (typeof value === 'number') {
    return value === 0 ? '0' : `${value}${unit}`;
  }
  return value;
}

/**
 * 清理名称，转换为合法的 SCSS 变量名
 * 支持中文字符（转换为拼音或保留）
 */
function sanitizeName(name) {
  // 中文映射表
  const chineseMap = {
    '一般': 'normal',
    '密集': 'tight',
    '宽泛': 'loose',
    '可中断': 'interruptible',
    '不可中断': 'non-interruptible'
  };

  // 替换已知的中文
  let result = name;
  for (const [cn, en] of Object.entries(chineseMap)) {
    result = result.replace(cn, en);
  }

  return result
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-\u4e00-\u9fa5]/g, '-')  // 保留中文
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

module.exports = { parseTokens };
