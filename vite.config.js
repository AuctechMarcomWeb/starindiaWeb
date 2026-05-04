import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    port: 5173,
    open: true,
    host: true,
  },

  build: {
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
         manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }
      },
    },
  },
    // Enable minification
    minify: 'esbuild',
    // Target modern browsers for smaller output
    target: 'es2015',
    // CSS code splitting
    cssCodeSplit: true,
  },

  // Optimize deps pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
