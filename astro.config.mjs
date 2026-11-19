// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["www.datocms-assets.com"],
  },
  site: "https://saklani.dev",
  // Astro 7 defaults to "jsx" whitespace stripping; keep v6 rendering.
  compressHTML: true,
});
