
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // This ensures process.env.API_KEY works correctly in the browser
    'process.env': process.env
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
