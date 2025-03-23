import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun'


/**
 * qiankun 
 * @param {*} name 
 * 
 * 
 */

// https://vite.dev/config/
export default defineConfig({
  plugins: [
        qiankun('react-project', {
            useDevMode: true,
        })
    ],
  server: {
    port: 3001
  }
})
