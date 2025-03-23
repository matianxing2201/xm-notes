import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), qiankun('vue-project', {
    useDevMode: true
  })],
  server: {
    port: 3002
  }
})
