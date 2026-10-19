import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dannarzharkyn.github.io',
  output: 'static',
  // Keep small stylesheets with their HTML to avoid stale asset links after Pages deploys.
  build: { inlineStylesheets: 'always' },
  trailingSlash: 'always',
});
