import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// GitHub Pages (user site at apex)  base '/'
export default defineConfig({
  site: 'https://luozizhou.cn',
  output: 'static',
  integrations: [mdx()],
  trailingSlash: 'ignore',
  vite: {
    build: {
      // keep Pyodide/CDN assets out of inlining; safer for large bundles
      assetsInlineLimit: 0,
    },
  },
});
