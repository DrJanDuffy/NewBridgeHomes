
export default {
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      clientPort: 443,
      host: 'localhost'
    },
    watch: {
      usePolling: true
    },
    allowedHosts: [
      '.replit.dev',
      '.repl.co'
    ]
  }
};
