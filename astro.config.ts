import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import compressor from "astro-compressor";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

const { PUBLIC_SITE_URL, GITHUB_REPO_URL } = loadEnv(process.env.NODE_ENV!, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
    redirects: {
        '/': '/guides/intro',
    },
    site: PUBLIC_SITE_URL!,
    output: "static",
    prefetch: {
        defaultStrategy: "viewport",
        prefetchAll: true,
    },
    integrations: [
        sitemap(),
        compressor(),
        starlight({
            title: "Wiki",
            social: [{ icon: "github", label: "GitHub", href: GITHUB_REPO_URL! }],
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        { label: "Intro", slug: "guides/intro" },
                    ],
                },
                {
                    label: "Whitepaper",
                    items: [
                        { label: "I. Project Overview", slug: "whitepaper/01-overview" },
                        { label: "II. Layer 2: RGB on Tondi", slug: "whitepaper/02-layer2-rgb-on-tondi" },
                        { label: "III. FUN20 Standard", slug: "whitepaper/03-fun20-standard" },
                        { label: "IV. Technical Architecture", slug: "whitepaper/04-technical-architecture" },
                        { label: "V. Consensus & Governance", slug: "whitepaper/05-consensus-governance" },
                        { label: "VI. Evolution Mechanism", slug: "whitepaper/06-evolution-mechanism" },
                        { label: "VII. Strategic Positioning", slug: "whitepaper/07-strategic-positioning" },
                        { label: "VIII. Copperfield Plan", slug: "whitepaper/08-copperfield-plan" },
                        { label: "IX. Conclusion", slug: "whitepaper/09-conclusion" },
                    ],
                },
                {
                    label: "Tondi Standard Proposals",
                    autogenerate: { directory: "tondi-standard-proposal" },
                },
            ],
            head: [
                {
                    tag: "style",
                    content: `
                        body {
                            position: relative;
                        }
                        body::before {
                            content: '';
                            position: absolute;
                            inset: 0;
                            background-size: 20px 20px;
                            background-image: radial-gradient(#FCF8E8 3px, transparent 1px);
                            pointer-events: none;
                            z-index: -1;
                        }
                        [data-theme="dark"] body::before {
                            background-image: radial-gradient(#404040 1px, transparent 1px);
                        }
                        
                        /* Tondi-landing inspired color scheme */
                        :root {
                            --sl-color-accent-low: oklch(0.95 0.05 93.6deg);
                            --sl-color-accent: oklch(0.877 0.166 93.6deg);
                            --sl-color-accent-high: oklch(0.3 0.1 93.6deg);
                            --sl-color-accent-text: oklch(0.1 0.05 93.6deg);
                            
                            --sl-color-primary: oklch(0.877 0.166 93.6deg);
                            --sl-color-primary-high: oklch(0.3 0.1 93.6deg);
                            --sl-color-primary-low: oklch(0.95 0.05 93.6deg);
                            --sl-color-primary-text: oklch(0.1 0.05 93.6deg);
                            
                            --sl-color-accent-hover: oklch(0.8 0.15 93.6deg);
                            --sl-color-accent-active: oklch(0.7 0.2 93.6deg);
                        }
                        
                        [data-theme="dark"] {
                            --sl-color-accent-low: oklch(0.2 0.05 93.6deg);
                            --sl-color-accent: oklch(0.877 0.166 93.6deg);
                            --sl-color-accent-high: oklch(0.95 0.05 93.6deg);
                            --sl-color-accent-text: oklch(0.95 0.05 93.6deg);
                            
                            --sl-color-primary: oklch(0.877 0.166 93.6deg);
                            --sl-color-primary-high: oklch(0.95 0.05 93.6deg);
                            --sl-color-primary-low: oklch(0.2 0.05 93.6deg);
                            --sl-color-primary-text: oklch(0.95 0.05 93.6deg);
                            
                            --sl-color-accent-hover: oklch(0.9 0.15 93.6deg);
                            --sl-color-accent-active: oklch(0.95 0.2 93.6deg);
                        }
                        
                        /* Override specific Starlight components with higher specificity */
                        .site-title:where(.astro-hsvpg3nm) {
                            color: var(--sl-color-accent) !important;
                        }
                        
                        .sl-markdown-content a {
                            color: var(--sl-color-accent) !important;
                        }
                        
                        .sl-markdown-content a:hover {
                            color: var(--sl-color-accent-hover) !important;
                        }
                        
                        .sl-markdown-content h1,
                        .sl-markdown-content h2,
                        .sl-markdown-content h3,
                        .sl-markdown-content h4,
                        .sl-markdown-content h5,
                        .sl-markdown-content h6 {
                            color: var(--sl-color-accent-text) !important;
                        }
                        
                        .sl-anchor-link {
                            color: var(--sl-color-accent) !important;
                        }
                        
                        .sl-anchor-link:hover {
                            color: var(--sl-color-accent-hover) !important;
                        }
                        
                        /* Override Starlight's default accent colors */
                        html {
                            --sl-color-accent-low: oklch(0.95 0.05 93.6deg) !important;
                            --sl-color-accent: oklch(0.877 0.166 93.6deg) !important;
                            --sl-color-accent-high: oklch(0.3 0.1 93.6deg) !important;
                            --sl-color-text-accent: oklch(0.877 0.166 93.6deg) !important;
                            --sl-color-text-invert: oklch(0.1 0.05 0deg) !important;
                        }
                        
                        [data-theme="dark"] html {
                            --sl-color-accent-low: oklch(0.2 0.05 93.6deg) !important;
                            --sl-color-accent: oklch(0.877 0.166 93.6deg) !important;
                            --sl-color-accent-high: oklch(0.95 0.05 93.6deg) !important;
                            --sl-color-text-accent: oklch(0.877 0.166 93.6deg) !important;
                            --sl-color-text-invert: oklch(0.1 0.05 0deg) !important;
                        }
                        
                        /* Fix selected/active states for better readability */
                        [aria-current="page"] {
                            color: var(--sl-color-text-invert) !important;
                            background-color: var(--sl-color-accent) !important;
                        }
                        
                        [aria-current="page"]:hover {
                            color: var(--sl-color-text-invert) !important;
                            background-color: var(--sl-color-accent) !important;
                        }
                        
                        [aria-current="page"]:focus {
                            color: var(--sl-color-text-invert) !important;
                            background-color: var(--sl-color-accent) !important;
                        }
                        
                        /* Fix sidebar navigation selected state */
                        .sl-sidebar a[aria-current="page"] {
                            color: var(--sl-color-text-invert) !important;
                            background-color: var(--sl-color-accent) !important;
                        }
                        
                        /* Increase sidebar width for longer titles */
                        .sl-sidebar {
                            width: 320px !important;
                            min-width: 320px !important;
                        }
                        
                        /* Adjust main content area to accommodate wider sidebar */
                        .sl-main {
                            margin-left: 320px !important;
                        }
                        
                        /* Ensure sidebar content has proper spacing */
                        .sl-sidebar-content {
                            padding: 1rem !important;
                        }
                        
                        /* Make sidebar navigation items wrap text properly */
                        .sl-sidebar-nav a {
                            white-space: normal !important;
                            word-wrap: break-word !important;
                            line-height: 1.4 !important;
                        }
                        
                        .sl-sidebar a[aria-current="page"]:hover {
                            color: var(--sl-color-text-invert) !important;
                            background-color: var(--sl-color-accent) !important;
                        }
                    `,
                },
            ],
        }),
    ],
    experimental: {
        clientPrerender: true,
        contentIntellisense: true,
        preserveScriptOrder: true,
    },
    vite: {
        plugins: [tailwindcss()],
        css: {
            transformer: "lightningcss",
        },
        build: {
            cssMinify: "lightningcss",
        },
    },
});
