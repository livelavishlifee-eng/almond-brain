import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',          // project root stays at repo root
  build: {
    outDir: 'dist',
  },
  
