#!/bin/bash

# 安全的 TSP 同步脚本
# 确保不会意外推送子模块修改

set -e

echo "🔄 开始安全同步 TSP 子模块..."

# 检查当前状态
if git status --porcelain | grep -q "src/content/docs/tondi-standard-proposal/"; then
    echo "⚠️  检测到子模块有未提交的修改"
    echo "   正在暂存这些修改..."
    git stash push -m "TSP frontmatter modifications - $(date)" -- src/content/docs/tondi-standard-proposal/
fi

# 更新子模块
echo "📥 更新子模块..."
git submodule update --remote src/content/docs/tondi-standard-proposal

# 添加 frontmatter
echo "🔧 添加 frontmatter..."
pnpm frontmatter

# 检查是否有新的修改
if git status --porcelain | grep -q "src/content/docs/tondi-standard-proposal/"; then
    echo "✅ 检测到新的 frontmatter 修改"
    echo "   这些修改已添加到工作区，但不会推送到子模块主分支"
    echo ""
    echo "💡 提示:"
    echo "   - 这些 frontmatter 修改只在本地使用"
    echo "   - 不会影响子模块的原始仓库"
    echo "   - 每次同步后都会重新生成"
else
    echo "✅ 没有新的修改需要处理"
fi

echo ""
echo "🎉 TSP 同步完成！"
echo "   现在可以运行 'pnpm dev' 启动开发服务器"
