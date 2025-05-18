
import { defineConfig } from 'astro/config';
import viteConfig from './vite.config.js';

export default defineConfig({
  output: 'static',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  vite: {
    server: {
      hmr: {
        clientPort: 443
      },
      watch: {
        usePolling: true
      }
    }
  }
});
