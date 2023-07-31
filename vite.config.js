import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        '/src/assets/img/join.png',
        '/src/assets/img/github-btn.png',
        '/src/assets/img/logo_tony.png',
        '/src/assets/img/tony-profile.png',
      ]
    }
  },
  //base: process.env.NODE_ENV === 'production' ? '/dist' : '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
