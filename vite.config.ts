import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Dominio proprio (pos.ia.aguiaunivc.site) serve na raiz.
  // O arquivo public/CNAME e copiado para dist/ e mantem o dominio no GitHub Pages.
  base: '/',
});
