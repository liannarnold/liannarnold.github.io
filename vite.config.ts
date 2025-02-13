import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    cors: {
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
    },
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
})