import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { never } from 'astro/zod';

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  site: "https://checkedtv.com",
  integrations: [react(), tailwind(), sitemap()],
});