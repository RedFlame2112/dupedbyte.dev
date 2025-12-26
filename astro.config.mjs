// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeCallouts from 'rehype-callouts';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },

  site: 'https://dupedbyte.dev',
  prefetch: true,

  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'nord'
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeCallouts]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],
  adapter: cloudflare()
});