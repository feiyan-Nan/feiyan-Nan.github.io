# Vue3 造轮子常用

## vite环境变量配置

1. 根目录建以下文件

```
.env.development
.env.production
```

2. 修改`vite.config.js`

```js
import { loadEnv, defineConfig } from 'vite'
export default defineConfig((env) => {
    const envs = loadEnv(env.mode, process.cwd())
    // 在.env.* 文件写的将会自动读取
    console.log(envs)
})
```



## 自动按需加载api、组件、样式

1. 安装

```bash
pnpm add unplugin-vue-components unplugin-auto-import -D
```

2. 修改`vite.config.js`

```js
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default {
  plugins: [
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: './src/auto-imports.d.ts',
      // 这里写入按需加载的组件库
      imports: ['vue', 'pinia', 'vue-router', '@vueuse/core']
    }),
   // https://github.com/antfu/unplugin-vue-components
    Components({
      // 自动引入的后缀
      extensions: ['vue', 'md'],
        
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
       
      dts: './src/components.d.ts',
      // imports 指定组件所在位置，默认为 src/components
      dirs: ['src/components/'],
    }),
  ],
}
```





## 增加页面加载进度条

1. 安装

```bash
pnpm add nprogress
```

2. 修改路由拦截器

```js
import NProgress from 'nprogress'
router.beforeEach((to, from) => {
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})
```

3. 添加css样式文件并引入，地址：https://unpkg.com/nprogress@0.2.0/nprogress.css





## 增加UI组件库
下面以`element-plus`为例，直接配置按需引入即可，其他组件库也是如此
其他支持按需引入的组件库：
https://github.com/antfu/unplugin-vue-components/blob/main/src/core/resolvers/index.ts

1. 安装
```bash
pnpm add element-plus
```

2. 按需引入
修改vite.config.ts文件
```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```
3. 直接在模板里面使用即可



## 增加markdown组件
1. 安装
```bash
pnpm add @vueuse/head
pnpm add -D vite-plugin-md markdown-it-link-attributes markdown-it-prism
```

2. main入口文件加入
```js
import { createHead } from '@vueuse/head'
app.use(createHead())
```

3. vite.config.ts配置
```js
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['@vuevue/head']
    }),
    Markdown({
        wrapperClasses: 'markdown-body',
        headEnabled: true,
        markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true,
        },
        markdownItSetup(md) {
          // https://prismjs.com/
          md.use(Prism)
          md.use(LinkAttributes, {
            matcher: (link: string) => /^https?:\/\//.test(link),
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          })
        },
      }),
  ]
})
```

4. 新增views/markdown.vue 文件
```vue
<template>
  <MarkdownPage />
</template>
<script lang="ts" setup>
import MarkdownPage from '@/docs/Test.md'
</script>
```

5. 添加一个新的路由
```json
{
  name: 'Markdown',
  path: '/markdown',
  component: MarkdownPage,
  meta: {
    title: 'markdown',
  },
}
```


6. 下载markdown样式
地址：https://prismjs.com/plugins/file-highlight/#examples
点击DOWNLOAD，选择对应的主题，滚动到最下面，点击下载css
添加src/assets/styles/markdown.scss，并将下载好的css内容复制进去
```scss
.markdown-body {
  // 复制到这里
}
```
之后将该css文件在index.scss文件内导入



## 让svg支持组件一样引入

1. 安装

```bash
pnpm add vite-svg-loader -D
```

2. 修改`vite.config.js`

```js
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [
  	// ...
  	svgLoader()
  ]
})
```

3. 使用示例

```vue
<script setup lang="ts">
import MyIcon from '@/assets/example.svg?component';
</script>

<template>
  <MyIcon />
</template>
```



## 配置scss全局变量

修改`vite.config.js`

```js
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `
      @import "@/assets/styles/variables.scss";
    `,
      javascriptEnabled: true,
    },
  },
},
```



## 封装hooks取全局数据

1. 创建 useGlobal.ts 文件

```ts
import { getCurrentInstance } from 'vue'
function useGlobal() {
    const instance = getCurrentInstance() as unknown as ICurrentInstance;
    return instance.appContext.config.globalProperties;
}
export default useGLobal;
```

2. 全局定义类型有更好的提示

```ts
interface ICurrentInstance extends ComponentInternalInstance {
    appContext: {
      config: { globalProperties: IGlobal };
    };
}

interface IGlobal {
    // ...
}
```

