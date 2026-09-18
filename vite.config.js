import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Lädt die .env Datei explizit
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./tests/setup.js'],
      css: true,
    },
    server: {
      port: 3000,
    },
    define: {
      'process.env': {},
      // Injiziert die Contentful-Variablen erzwungen in import.meta.env
      'import.meta.env.VITE_REACT_APP_CONTENTFUL_SPACE_ID': JSON.stringify(
        env.VITE_REACT_APP_CONTENTFUL_SPACE_ID || env.REACT_APP_CONTENTFUL_SPACE_ID
      ),
      'import.meta.env.VITE_REACT_APP_CONTENTFUL_ACCESS_TOKEN': JSON.stringify(
        env.VITE_REACT_APP_CONTENTFUL_ACCESS_TOKEN || env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
      ),
    },
    base: '/',
    build: {
      minify: 'esbuild', // standardmäßig aktiviert
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('lucide-react')) return 'vendor-icons';
              if (id.includes('framer-motion')) return 'vendor-animation';
              if (id.includes('react')) return 'vendor-core';
            }
          },
        },
      },
    },
  };
});