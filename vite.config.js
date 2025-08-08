import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For user/organization page (wahhajmalik.github.io) base can be default.
  // If you later use a project page (repo under username.github.io/repo), set base: '/<repo>/'.
})
