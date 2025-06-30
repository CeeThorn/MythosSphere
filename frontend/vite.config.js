// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,         // You can change the dev server port here
    open: true,         // Auto-opens the app in browser
    hmr: {
      overlay: true     // Show error overlay in browser (set to false to hide)
    }
  }
});
