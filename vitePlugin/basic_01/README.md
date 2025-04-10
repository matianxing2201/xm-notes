# 几个好用的vite插件

## unplugin-auto-import 
自动导入API和函数 从而减少手动导入的繁琐工作，提高开发效率。该插件支持Vue Composition API（如ref、reactive、computed等）、第三方库（如Vue Router的useRoute、useRouter，Pinia的defineStore等），

without
```
import { computed, ref } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
```
with
```
const count = ref(0)
const doubled = computed(() => count.value * 2)
```


```
安装
pnpm add unplugin-auto-import -D
```

```
配置
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
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
      ],
    }),
  ],
})
```
options的详细配置https://github.com/unplugin/unplugin-auto-import?tab=readme-ov-file

## unplugin-vue-components
组件自动导入 从而提高开发效率


```
安装
pnpm add unplugin-vue-components -D
```
默认情况下，我们是将组件放在src/components目录中，但是如果我们没有将组件放在这个目录下，我们需要配置一个新的路径。在unplugin-vue-components插件中提供了dirs参数来实现新路径配置，该参数是传值是一个数组类型：
```
import Components from 'unplugin-vue-components/vite'
 
export default defineConfig(
  plugins: [
    Components({})
  ]
})
```
和UI库搭配使用
unplugin-vue-components插件中Resolvers 是根据组件名称将组件定向到特定包的函数。 
```
plugins: [
  Components({
    resolvers: [
      AntDesignVueResolver({
        importStyle: false,
      })
    ]
  }),
]

```


## unplugin-vue-router
不再需要为每一个路由编写冗长的 routes 配置，新建文件便可自动生成路由。
```
安装
pnpm add unplugin-vue-router -D
```
plugins配置中加入 vueRouter
```
  import vueRouter from 'unplugin-vue-router/vite';
  export default defineConfig(
    plugins: [
      VueRouter({}),
    ],
  })
 
```
```
router配置信息修改 并在main函数中use router
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
```

自动路由规则
默认情况下，会为 src/pages 中的文件自动创建路由（可以通过配置修改为其他目录）

- vite-plugin-vue-layouts