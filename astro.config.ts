import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import compressor from "astro-compressor";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

const { PUBLIC_SITE_URL, GITHUB_REPO_URL } = loadEnv(process.env['NODE_ENV']!, process.cwd(), "");

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
                    label: "📚 Guides",
                    items: [
                        { label: "Intro", slug: "guides/intro" },
                        { label: "Timeline", slug: "guides/timeline" },
                    ],
                },
                {
                    label: "📄 Whitepaper",
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
                    label: "📋 Tondi Standard Proposals",
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
                        /* Force dark mode only - no theme switching */
                        html {
                            color-scheme: dark !important;
                        }
                        
                        body::before {
                            background-image: radial-gradient(#1a1a1a 0.8px, transparent 0.8px);
                        }
                        
                        /* Dark mode colors - applied globally */
                        :root {
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
                        
                        /* Enhanced Starlight accent colors with cyber theme - dark mode only */
                        html {
                            --sl-color-accent-low: oklch(0.2 0.05 93.6deg) !important;
                            --sl-color-accent: oklch(0.877 0.166 93.6deg) !important;
                            --sl-color-accent-high: oklch(0.95 0.05 93.6deg) !important;
                            --sl-color-text-accent: oklch(0.877 0.166 93.6deg) !important;
                            --sl-color-text-invert: oklch(0.1 0.05 0deg) !important;
                            
                            /* Dark mode cyber variables for subtler glow */
                            --cyber-glow: 0 0 15px rgba(250, 204, 21, 0.2);
                            --cyber-glow-intense: 0 0 25px rgba(250, 204, 21, 0.3);
                            --cyber-border: rgba(250, 204, 21, 0.2);
                            --cyber-bg-overlay: rgba(250, 204, 21, 0.05);
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
                        
                        /* Make sidebar darker - dark mode only */
                        .sl-sidebar {
                            background-color: oklch(0.05 0 0) !important;
                        }
                        
                        .sl-sidebar-content {
                            background-color: oklch(0.05 0 0) !important;
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
                        
                        /* Enhanced Starlight components with cyber styling */
                        .sl-markdown-content {
                            position: relative;
                            max-width: none !important;
                            padding: 0 2rem !important;
                        }
                        
                        /* Expand main content area */
                        .sl-main-pane {
                            max-width: none !important;
                            width: 100% !important;
                            padding: 0 2rem !important;
                        }
                        
                        .sl-main-pane .sl-markdown-content {
                            max-width: none !important;
                            width: 100% !important;
                            padding: 0 !important;
                        }
                        
                        /* Force content to use full width */
                        .sl-main-pane .sl-markdown-content > * {
                            max-width: none !important;
                        }
                        
                        /* Specific width adjustments for different screen sizes */
                        @media (min-width: 1200px) {
                            .sl-main-pane {
                                padding: 0 4rem !important;
                            }
                        }
                        
                        @media (min-width: 1600px) {
                            .sl-main-pane {
                                padding: 0 6rem !important;
                            }
                        }
                        
                        .sl-markdown-content::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            height: 1px;
                            background: linear-gradient(90deg, transparent, var(--cyber-border), transparent);
                            opacity: 0.3;
                        }
                        
                        /* Enhanced code blocks */
                        .sl-markdown-content pre {
                            border: 1px solid var(--cyber-border) !important;
                            box-shadow: var(--cyber-glow) !important;
                            transition: box-shadow 0.3s ease !important;
                        }
                        
                        .sl-markdown-content pre:hover {
                            box-shadow: var(--cyber-glow-intense) !important;
                        }
                        
                        /* Enhanced blockquotes */
                        .sl-markdown-content blockquote {
                            border-left: 4px solid var(--sl-color-accent) !important;
                            background: var(--cyber-bg-overlay) !important;
                            box-shadow: var(--cyber-glow) !important;
                        }
                        
                        /* Enhanced tables */
                        .sl-markdown-content table {
                            border: 1px solid var(--cyber-border) !important;
                            box-shadow: var(--cyber-glow) !important;
                        }
                        
                        .sl-markdown-content th {
                            background: var(--cyber-bg-overlay) !important;
                            border-bottom: 2px solid var(--sl-color-accent) !important;
                        }
                        
                        /* Enhanced search */
                        .sl-search {
                            border: 1px solid var(--cyber-border) !important;
                            box-shadow: var(--cyber-glow) !important;
                        }
                        
                        .sl-search:focus {
                            box-shadow: var(--cyber-glow-intense) !important;
                        }
                        
                        /* Enhanced pagination */
                        .sl-pagination a {
                            border: 1px solid var(--cyber-border) !important;
                            transition: all 0.3s ease !important;
                        }
                        
                        .sl-pagination a:hover {
                            box-shadow: var(--cyber-glow) !important;
                            transform: translateY(-2px) !important;
                        }
                        
                        /* Enhanced breadcrumbs */
                        .sl-breadcrumb a {
                            transition: color 0.3s ease !important;
                        }
                        
                        .sl-breadcrumb a:hover {
                            text-shadow: var(--cyber-glow) !important;
                        }
                        
                        /* Dark mode heading colors - applied globally */
                        .sl-markdown-content h1,
                        .sl-markdown-content h2,
                        .sl-markdown-content h3,
                        .sl-markdown-content h4,
                        .sl-markdown-content h5,
                        .sl-markdown-content h6 {
                            color: #fde047 !important;
                            text-shadow: 0 0 8px rgba(253, 224, 71, 0.3) !important;
                        }
                        
                        .sl-markdown-content h1:hover,
                        .sl-markdown-content h2:hover,
                        .sl-markdown-content h3:hover,
                        .sl-markdown-content h4:hover,
                        .sl-markdown-content h5:hover,
                        .sl-markdown-content h6:hover {
                            text-shadow: 0 0 12px rgba(253, 224, 71, 0.5) !important;
                        }
                        
                        /* Enhanced table styling for consistent appearance */
                        .sl-markdown-content {
                            overflow-x: visible !important;
                            overflow-y: visible !important;
                        }
                        
                        /* 1) 让 table 恢复为正常元素（不作为滚动容器） */
                        .sl-markdown-content table {
                            display: table !important;
                            width: 100% !important;
                            border-collapse: collapse !important;
                            overflow: visible !important;        /* 关键：不要在 table 上做滚动容器 */
                            white-space: normal !important;       /* 取消 nowrap，避免强制横向滚动 */
                            table-layout: fixed !important;       /* 等比伸展列 */
                        }
                        
                        /* 2) 恢复语义化子元素的 display，避免布局怪异 */
                        .sl-markdown-content table thead { display: table-header-group !important; }
                        .sl-markdown-content table tbody { display: table-row-group !important; }
                        .sl-markdown-content table tr    { display: table-row !important; }
                        .sl-markdown-content table th,
                        .sl-markdown-content table td    { display: table-cell !important; }
                        
                        /* 3) 把横向滚动交给外层容器（如果需要横向滚动） */
                        .sl-markdown-content .table-container {
                            overflow-x: auto !important;
                            overflow-y: visible !important;
                            -webkit-overflow-scrolling: touch;
                            width: 100% !important;
                        }
                        .sl-markdown-content .table-container table {
                            min-width: 640px; /* 需要更宽就调这个值 */
                        }
                        
                        /* 4) 表头那条"黄线"不拦截鼠标事件 */
                        .sl-markdown-content table thead th {
                            position: relative !important;
                        }
                        .sl-markdown-content table thead th::after {
                            pointer-events: none;                 /* 避免伪元素吃掉滚轮/选择等事件 */
                        }
                        
                        /* 可选：只在小屏时允许横向滚动，桌面端保持正常换行 */
                        @media (max-width: 768px) {
                            .sl-markdown-content .table-container { overflow-x: auto !important; }
                            .sl-markdown-content table { white-space: nowrap !important; }
                        }
                        @media (min-width: 769px) {
                            .sl-markdown-content table { white-space: normal !important; }
                        }
                        
                        .sl-markdown-content table {
                            border-collapse: collapse !important;
                            margin: 1.5rem 0 !important;
                            border: 1px solid var(--cyber-border) !important;
                            box-shadow: var(--cyber-glow) !important;
                        }
                        
                        .sl-markdown-content table th {
                            width: auto !important;
                            text-align: left !important;
                            padding: 0.75rem 1rem !important;
                            border-bottom: 2px solid var(--sl-color-accent) !important;
                            background: var(--cyber-bg-overlay) !important;
                            font-weight: 600 !important;
                            position: relative !important;
                            min-width: 0 !important;
                        }
                        
                        .sl-markdown-content table td {
                            padding: 0.75rem 1rem !important;
                            border-bottom: 1px solid var(--cyber-border) !important;
                            vertical-align: top !important;
                            min-width: 0 !important;
                        }
                        
                        .sl-markdown-content table tr:hover {
                            background: var(--cyber-bg-overlay) !important;
                        }
                        
                        /* Prevent heading scroll issues */
                        .sl-markdown-content h1,
                        .sl-markdown-content h2,
                        .sl-markdown-content h3,
                        .sl-markdown-content h4,
                        .sl-markdown-content h5,
                        .sl-markdown-content h6 {
                            overflow: visible !important;
                            overflow-x: visible !important;
                            overflow-y: visible !important;
                            white-space: normal !important;
                            word-wrap: break-word !important;
                        }
                        
                        /* Ensure proper scrolling for wide tables */
                        @media (max-width: 768px) {
                            .sl-markdown-content table {
                                min-width: 500px !important;
                            }
                        }
                        
                        /* Ensure table header border extends full width */
                        .sl-markdown-content table thead th::after {
                            content: '' !important;
                            position: absolute !important;
                            bottom: -2px !important;
                            left: 0 !important;
                            right: 0 !important;
                            height: 2px !important;
                            background: var(--sl-color-accent) !important;
                            box-shadow: var(--cyber-glow) !important;
                            z-index: 1 !important;
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
        plugins: [tailwindcss()] as any,
        css: {
            transformer: "lightningcss",
        },
        build: {
            cssMinify: "lightningcss",
        },
    },
});
