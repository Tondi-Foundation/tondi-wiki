#!/usr/bin/env python3
"""
自动为 TSP 文件添加 frontmatter 的脚本
使用方法: python3 scripts/add-frontmatter.py
"""

import os
import re
import sys
from pathlib import Path

def extract_title_from_content(content):
    """从内容中提取标题"""
    # 查找第一个 # 开头的标题
    title_match = re.search(r'^# (.+)$', content, re.MULTILINE)
    if title_match:
        title = title_match.group(1)
        # 清理标题，移除 ** 标记
        clean_title = re.sub(r'\*\*([^*]+)\*\*', r'\1', title)
        # 处理 TSP-XXXX: 格式
        clean_title = re.sub(r'^(TSP-\d+): (.+)', r'\1 - \2', clean_title)
        return clean_title
    return None

def extract_description_from_content(content):
    """从内容中提取描述"""
    # 查找 Overview 部分
    overview_match = re.search(r'### 🔍 Overview\s*\n\s*\n(.+?)(?:\.|$)', content, re.DOTALL)
    if overview_match:
        description = overview_match.group(1).strip()
        # 清理描述，移除 Markdown 格式
        description = re.sub(r'\*\*([^*]+)\*\*', r'\1', description)
        description = re.sub(r'\s+', ' ', description)
        # 限制长度
        if len(description) > 150:
            description = description[:147] + "..."
        return description
    
    # 如果没有 Overview，尝试从第一段提取
    first_para_match = re.search(r'^[^#\n].+?(?:\.|$)', content, re.MULTILINE)
    if first_para_match:
        description = first_para_match.group(0).strip()
        description = re.sub(r'\*\*([^*]+)\*\*', r'\1', description)
        description = re.sub(r'\s+', ' ', description)
        if len(description) > 150:
            description = description[:147] + "..."
        return description
    
    return "Tondi Standard Proposal for blockchain development"

def add_frontmatter_to_file(file_path):
    """为文件添加 frontmatter"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 检查是否已经有 frontmatter
        if content.startswith('---'):
            return False, "已有 frontmatter"
        
        # 提取标题和描述
        title = extract_title_from_content(content)
        if not title:
            return False, "无法提取标题"
        
        description = extract_description_from_content(content)
        
        # 创建新的内容
        frontmatter = f"""---
title: {title}
description: {description}
---

"""
        
        # 移除第一个标题行（如果存在）
        lines = content.split('\n')
        if lines[0].startswith('#'):
            new_content = frontmatter + '\n'.join(lines[1:])
        else:
            new_content = frontmatter + content
        
        # 写回文件
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True, f"已添加 frontmatter: {title}"
    
    except Exception as e:
        return False, f"处理失败: {str(e)}"

def main():
    """主函数"""
    tsp_dir = Path("src/content/docs/tondi-standard-proposal")
    
    if not tsp_dir.exists():
        print("❌ 错误: TSP 目录不存在")
        sys.exit(1)
    
    print("🔧 开始为 TSP 文件添加 frontmatter...")
    print()
    
    processed_count = 0
    skipped_count = 0
    error_count = 0
    
    # 处理所有 .md 文件
    for md_file in tsp_dir.glob("*.md"):
        print(f"📝 处理文件: {md_file.name}")
        
        success, message = add_frontmatter_to_file(md_file)
        
        if success:
            print(f"  ✅ {message}")
            processed_count += 1
        elif "已有 frontmatter" in message:
            print(f"  ⏭️  {message}")
            skipped_count += 1
        else:
            print(f"  ❌ {message}")
            error_count += 1
    
    print()
    print("🎉 处理完成！")
    print(f"  ✅ 已处理: {processed_count} 个文件")
    print(f"  ⏭️  已跳过: {skipped_count} 个文件")
    print(f"  ❌ 错误: {error_count} 个文件")
    print()
    print("💡 提示: 每次更新子模块后，运行此脚本即可自动添加 frontmatter")
    print("   命令: python3 scripts/add-frontmatter.py")

if __name__ == "__main__":
    main()
