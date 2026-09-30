import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: '/Ambio-Tracker/',
  plugins: [react()],
  build: { chunkSizeWarningLimit: 6000 },
});
