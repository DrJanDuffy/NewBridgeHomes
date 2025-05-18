
import { defineConfig } from 'astro/config';
import viteConfig from './vite.config.js';

export default defineConfig({
  output: 'static',
  site: 'https://newbridgehomesforsale.com',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  vite: viteConfig
});
