#!/usr/bin/env node

/**
 * Design Token 转换工具
 * 将 Figma 导出的 JSON 转换为 SCSS 文件
 *
 * 使用方式：
 *   npx design-token transform <input.json> --output <dir>
 */

const fs = require('fs');
const path = require('path');
const { parseTokens } = require('../src/parser');
const { generateScss } = require('../src/generator');

const args = process.argv.slice(2);
const command = args[0];

if (command === 'transform') {
  const inputFile = args[1];
  const outputIndex = args.indexOf('--output');
  const outputDir = outputIndex !== -1 ? args[outputIndex + 1] : './tokens';

  if (!inputFile) {
    console.error('❌ 请指定输入文件：npx design-token transform <input.json>');
    process.exit(1);
  }

  if (!fs.existsSync(inputFile)) {
    console.error(`❌ 文件不存在：${inputFile}`);
    process.exit(1);
  }

  console.log(`📦 读取文件：${inputFile}`);
  const json = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

  console.log(`🔄 解析 Tokens...`);
  const parsed = parseTokens(json);

  console.log(`📝 生成 SCSS 文件到：${outputDir}`);
  generateScss(parsed, outputDir);

  console.log(`✅ 完成！`);

} else {
  console.log(`
Design Token 转换工具

命令：
  transform <input.json> --output <dir>    转换 Figma JSON 为 SCSS

示例：
  npx design-token transform ./tokens.json --output ./styles/tokens/
  `);
}
