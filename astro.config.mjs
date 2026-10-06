import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://karok201.github.io',
  base: '/blog',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
