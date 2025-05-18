
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  vite: {
    server: {
      hmr: {
        clientPort: 443
      },
      // Add the Replit domain to allowed hosts
      host: '0.0.0.0',
      strictPort: true
    }
  }
});
