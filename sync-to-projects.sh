#!/bin/bash

# 设计系统同步脚本
# 将 design-tokens.css 同步到各个项目

# 颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 源文件
SOURCE="$(dirname "$0")/dist/design-tokens.css"

# 目标项目列表（可以添加更多项目）
TARGETS=(
  "/Users/Administrator/Desktop/PPIO/ppinfra-home/src/styles/design-tokens.css"
  # 添加更多项目路径...
)

echo "======================================"
echo "  设计系统同步工具"
echo "======================================"
echo ""

# 检查源文件
if [ ! -f "$SOURCE" ]; then
  echo "❌ 源文件不存在: $SOURCE"
  exit 1
fi

echo "📦 源文件: $SOURCE"
echo ""

# 同步到每个目标
for TARGET in "${TARGETS[@]}"; do
  if [ -f "$TARGET" ]; then
    # 检查是否有差异
    if diff -q "$SOURCE" "$TARGET" > /dev/null 2>&1; then
      echo -e "${GREEN}✅ 已是最新${NC}: $(basename $(dirname $(dirname $TARGET)))"
    else
      cp "$SOURCE" "$TARGET"
      echo -e "${YELLOW}🔄 已同步${NC}: $(basename $(dirname $(dirname $TARGET)))"
    fi
  else
    # 目标目录存在则复制
    TARGET_DIR=$(dirname "$TARGET")
    if [ -d "$TARGET_DIR" ]; then
      cp "$SOURCE" "$TARGET"
      echo -e "${YELLOW}📝 已创建${NC}: $(basename $(dirname $(dirname $TARGET)))"
    else
      echo "⚠️  目录不存在: $TARGET_DIR"
    fi
  fi
done

echo ""
echo "======================================"
echo "  同步完成！"
echo "======================================"
