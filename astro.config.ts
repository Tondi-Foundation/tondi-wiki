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
                    label: "Reference",
                    autogenerate: { directory: "reference" },
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
