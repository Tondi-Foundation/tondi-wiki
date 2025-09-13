# TSP Frontmatter 自动化脚本

这些脚本用于自动为 TSP (Tondi Standard Proposal) 文件添加 frontmatter，解决每次同步子模块后需要手动添加的问题。

## 使用方法

### 方法 1: 使用 npm 脚本（推荐）

```bash
# 只添加 frontmatter
pnpm frontmatter

# 同步子模块并自动添加 frontmatter
pnpm sync-tsp
```

### 方法 2: 直接运行脚本

```bash
# 使用 Python 脚本（推荐）
python3 scripts/add-frontmatter.py

# 或使用 Bash 脚本
chmod +x scripts/add-frontmatter.sh
./scripts/add-frontmatter.sh
```

## 脚本功能

### `add-frontmatter.py`
- ✅ 自动提取标题（从 `# TSP-XXXX: Title` 格式）
- ✅ 自动提取描述（从 Overview 部分或第一段）
- ✅ 清理 Markdown 格式标记
- ✅ 跳过已有 frontmatter 的文件
- ✅ 详细的处理报告

### `add-frontmatter.sh`
- ✅ Bash 版本，无需 Python
- ✅ 基本的前置元数据添加功能
- ✅ 简单的错误处理

## 工作流程

1. **更新子模块**：
   ```bash
   git submodule update --remote src/content/docs/tondi-standard-proposal
   ```

2. **自动添加 frontmatter**：
   ```bash
   pnpm frontmatter
   ```

3. **启动开发服务器**：
   ```bash
   pnpm dev
   ```

## 一键同步命令

使用 `pnpm sync-tsp` 可以一次性完成子模块更新和 frontmatter 添加：

```bash
pnpm sync-tsp
```

这个命令会：
1. 更新 TSP 子模块到最新版本
2. 自动为所有新的 TSP 文件添加 frontmatter
3. 跳过已有 frontmatter 的文件

## 注意事项

- 脚本会自动跳过已有 frontmatter 的文件
- 如果 TSP 文件没有标准的标题格式，脚本会跳过该文件
- 建议在每次同步子模块后运行 frontmatter 脚本
- 脚本会保持原有的文件内容和格式不变
