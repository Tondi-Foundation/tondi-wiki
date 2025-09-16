# Tondi Wiki

A Tondi blockchain documentation website built with Astro Starlight, integrating Tondi Standard Proposals (TSP) as a submodule.

## 🚀 Project Structure

```
.
├── public/                          # Static assets
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── guides/              # Guide documentation
│   │       ├── reference/           # Reference documentation
│   │       └── tondi-standard-proposal/  # TSP submodule
│   └── content.config.ts            # Content configuration
├── scripts/                         # Automation scripts
│   ├── add-frontmatter.py           # Auto-add frontmatter
│   ├── add-frontmatter.sh           # Bash version script
│   └── safe-sync-tsp.sh             # Safe sync script
├── astro.config.ts                  # Astro configuration
├── package.json                     # Project dependencies
└── tsconfig.json                    # TypeScript configuration
```

## 🧞 Commands

All commands are run from the project root terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Install dependencies                            |
| `pnpm dev`                 | Start local development server `localhost:4321`      |
| `pnpm build`               | Build production version to `./dist/`          |
| `pnpm preview`             | Preview build locally     |
| `pnpm frontmatter`         | Auto-add frontmatter to TSP files |
| `pnpm sync-tsp`            | Safely sync TSP submodule and add frontmatter |
| `pnpm astro ...`           | Run Astro CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`     | Get Astro CLI help                     |



## 🔗 Related Links

- [Astro Starlight Documentation](https://starlight.astro.build/)
- [Tondi Standard Proposals](https://github.com/Tondi-Foundation/Tondi-Standard-Proposal)
- [Tondi Foundation](https://github.com/Tondi-Foundation)