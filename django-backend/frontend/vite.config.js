import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "http://localhost:5173/static/",
  build: {
    manifest: "manifest.json",
    outDir: "../olsaat/static",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: "./src/main.jsx"
      }
    },
  },
})
