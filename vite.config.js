
export default {
  server: {
    host: '0.0.0.0',
    port: 5000,
    hmr: {
      clientPort: 443,
      host: 'localhost'
    },
    watch: {
      usePolling: true
    },
    allowedHosts: [
      'eb55c678-4d53-435a-a453-0a69324ce6d1-00-17gfaa2oemi6r.janeway.replit.dev',
      '.replit.dev',
      '.repl.co'
    ]
  },
  preview: {
    host: '0.0.0.0'
  }
};
