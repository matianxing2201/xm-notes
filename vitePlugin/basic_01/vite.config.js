import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import VueRouter from 'unplugin-vue-router/vite';
import Layouts from 'vite-plugin-vue-layouts';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueRouter({
      exclude: ['**/components/*.vue'],
    }),
    Layouts({
      layoutsDirs: 'src/layouts', // 指定布局文件的目录路径
      defaultLayout: 'default', // 指定默认布局文件的名称
      pagesDirs: 'src/pages',
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        })
      ]
    }),
    AutoImport({
      // 需要处理的文件类型
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // 指定需要自动导入的模块
      imports: [
        'vue',
        'vue-router'
      ],
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
