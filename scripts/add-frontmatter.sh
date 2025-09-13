#!/bin/bash

# 自动为 TSP 文件添加 frontmatter 的脚本
# 使用方法: ./scripts/add-frontmatter.sh

set -e

TSP_DIR="src/content/docs/tondi-standard-proposal"

echo "🔧 开始为 TSP 文件添加 frontmatter..."

# 检查目录是否存在
if [ ! -d "$TSP_DIR" ]; then
    echo "❌ 错误: $TSP_DIR 目录不存在"
    exit 1
fi

# 处理所有 .md 文件
for file in "$TSP_DIR"/*.md; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "📝 处理文件: $filename"
        
        # 检查是否已经有 frontmatter
        if head -1 "$file" | grep -q "^---"; then
            echo "  ✅ $filename 已有 frontmatter，跳过"
            continue
        fi
        
        # 提取标题
        title_line=$(grep -m 1 "^# " "$file" || echo "")
        if [ -z "$title_line" ]; then
            echo "  ⚠️  $filename 没有找到标题，跳过"
            continue
        fi
        
        # 清理标题（移除 # 和 ** 标记）
        clean_title=$(echo "$title_line" | sed 's/^# \*\*//' | sed 's/\*\*: / - /' | sed 's/\*\*$//' | sed 's/^# //')
        
        # 生成描述（从 Overview 部分提取第一句话）
        description=""
        if grep -q "### 🔍 Overview" "$file"; then
            overview_section=$(awk '/### 🔍 Overview/,/^### /' "$file" | head -10)
            first_sentence=$(echo "$overview_section" | grep -v "^###" | grep -v "^$" | head -1 | sed 's/^[[:space:]]*//')
            if [ -n "$first_sentence" ]; then
                # 清理描述，移除 Markdown 格式
                description=$(echo "$first_sentence" | sed 's/\*\*//g' | sed 's/^[[:space:]]*//' | cut -c1-150)
                if [ ${#description} -eq 150 ]; then
                    description="${description}..."
                fi
            fi
        fi
        
        # 如果没有找到描述，使用默认描述
        if [ -z "$description" ]; then
            description="Tondi Standard Proposal for blockchain development"
        fi
        
        # 创建临时文件
        temp_file=$(mktemp)
        
        # 添加 frontmatter
        cat > "$temp_file" << EOF
---
title: $clean_title
description: $description
---

EOF
        
        # 添加原文件内容（跳过第一个标题行）
        tail -n +2 "$file" >> "$temp_file"
        
        # 替换原文件
        mv "$temp_file" "$file"
        
        echo "  ✅ $filename 已添加 frontmatter"
    fi
done

echo "🎉 所有 TSP 文件的 frontmatter 处理完成！"
echo ""
echo "💡 提示: 每次更新子模块后，运行此脚本即可自动添加 frontmatter"
echo "   命令: ./scripts/add-frontmatter.sh"
