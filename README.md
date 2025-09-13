# Tondi Wiki

基于 Astro Starlight 构建的 Tondi 区块链文档网站，集成了 Tondi Standard Proposals (TSP) 作为子模块。

## 🚀 项目结构

```
.
├── public/                          # 静态资源
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── guides/              # 指南文档
│   │       ├── reference/           # 参考文档
│   │       └── tondi-standard-proposal/  # TSP 子模块
│   └── content.config.ts            # 内容配置
├── scripts/                         # 自动化脚本
│   ├── add-frontmatter.py           # 自动添加 frontmatter
│   ├── add-frontmatter.sh           # Bash 版本脚本
│   └── safe-sync-tsp.sh             # 安全同步脚本
├── astro.config.ts                  # Astro 配置
├── package.json                     # 项目依赖
└── tsconfig.json                    # TypeScript 配置
```

## 🧞 命令

所有命令都在项目根目录的终端中运行：

| 命令                   | 动作                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | 安装依赖                            |
| `pnpm dev`                 | 启动本地开发服务器 `localhost:4321`      |
| `pnpm build`               | 构建生产版本到 `./dist/`          |
| `pnpm preview`             | 本地预览构建结果     |
| `pnpm frontmatter`         | 为 TSP 文件自动添加 frontmatter |
| `pnpm sync-tsp`            | 安全同步 TSP 子模块并添加 frontmatter |
| `pnpm astro ...`           | 运行 Astro CLI 命令如 `astro add`, `astro check` |
| `pnpm astro -- --help`     | 获取 Astro CLI 帮助                     |

## 📚 TSP 子模块管理

### ⚠️ 重要提醒

**永远不要将修改过的 TSP 文件推送到子模块的主分支！**

这些 frontmatter 修改只是为了在 tondi-wiki 中正确显示，不应该影响原始的 TSP 仓库。

### 🛡️ 保护机制

#### 1. .gitignore 保护
- 已添加 `src/content/docs/tondi-standard-proposal/` 到 .gitignore
- 防止意外提交子模块修改

#### 2. Git Hook 保护
- 安装了 pre-commit hook
- 自动检测并阻止子模块修改的提交

#### 3. 安全同步脚本
- 使用 `pnpm sync-tsp` 进行安全同步
- 自动处理修改和暂存

### 📋 正确的工作流程

#### ✅ 推荐操作

```bash
# 1. 安全同步 TSP（推荐）
pnpm sync-tsp

# 2. 启动开发服务器
pnpm dev
```

#### ⚠️ 如果需要手动操作

```bash
# 1. 暂存现有修改
git stash push -m "TSP frontmatter" -- src/content/docs/tondi-standard-proposal/

# 2. 更新子模块
git submodule update --remote src/content/docs/tondi-standard-proposal

# 3. 添加 frontmatter
pnpm frontmatter

# 4. 启动开发服务器
pnpm dev
```

### 🚫 禁止操作

#### ❌ 不要这样做

```bash
# 不要直接提交子模块修改
git add src/content/docs/tondi-standard-proposal/
git commit -m "Update TSP files"

# 不要推送到子模块
cd src/content/docs/tondi-standard-proposal/
git push origin main
```

## 🔧 故障排除

### 如果意外修改了子模块

```bash
# 重置子模块到原始状态
git submodule update --force src/content/docs/tondi-standard-proposal

# 重新添加 frontmatter
pnpm frontmatter
```

### 如果需要恢复暂存的修改

```bash
# 查看暂存列表
git stash list

# 恢复最近的暂存
git stash pop
```

### 如果 Git Hook 阻止了提交

1. 检查是否有子模块文件被意外添加
2. 使用 `git reset HEAD <file>` 取消暂存
3. 使用 `git stash` 暂存修改
4. 重新提交其他文件

## 💡 最佳实践

1. **总是使用 `pnpm sync-tsp`** 而不是手动操作
2. **定期检查 git status** 确保没有意外修改
3. **使用 git stash** 临时保存修改
4. **理解子模块的工作原理** 避免误操作

## 🎯 开发指南

### 添加新文档

1. 在 `src/content/docs/` 下创建新的 `.md` 文件
2. 确保文件有正确的 frontmatter：

```yaml
---
title: 文档标题
description: 文档描述
---
```

### 更新 TSP 文档

1. 使用 `pnpm sync-tsp` 同步最新的 TSP 内容
2. 脚本会自动添加必要的 frontmatter
3. 启动开发服务器查看效果

### 自定义样式

- 全局样式：`src/styles/global.css`
- 组件样式：使用 Tailwind CSS 类
- 主题配置：`astro.config.ts`

## 📞 获取帮助

如果遇到问题：

1. 查看终端错误信息
2. 检查 Git Hook 是否阻止了操作
3. 使用 `git status` 检查文件状态
4. 参考本文档的故障排除部分

记住：**子模块的修改只在本地使用，永远不要推送！**

## 🔗 相关链接

- [Astro Starlight 文档](https://starlight.astro.build/)
- [Tondi Standard Proposals](https://github.com/Tondi-Foundation/Tondi-Standard-Proposal)
- [Tondi Foundation](https://github.com/Tondi-Foundation)