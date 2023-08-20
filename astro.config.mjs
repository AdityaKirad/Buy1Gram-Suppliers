import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://buy1gram-suppliers.pages.dev/",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  experimental: {
    assets: true,
  },
})
