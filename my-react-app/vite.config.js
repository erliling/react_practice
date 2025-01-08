import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        changeOrigin: true,
        // secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/2api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        // secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/2api/, '')
      }
    },
    port: 5173
  }
})
