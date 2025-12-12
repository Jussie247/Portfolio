// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // WICHTIG: Repo-Name hier eintragen
  base: '/justus-portfolio/',
});
