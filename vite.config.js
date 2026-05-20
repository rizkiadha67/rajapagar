import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Generates manifest.json inside the outDir for PHP script mapping
    manifest: true,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // Directs Vite to compile directly from our React entry point file
      input: 'src/main.jsx',
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      }
    },
  },
  server: {
    // Enable CORS so WordPress can load HMR assets in local dev
    cors: true,
    strictPort: true,
    port: 5173,
    hmr: {
      host: 'localhost',
    },
  },
});
