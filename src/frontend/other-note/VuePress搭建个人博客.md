# VuePress搭建个人博客

## 全局安装vuepress

`yarn global add vuepress`



## 创建vuepress目录

`.vuepress`可以使用cmd来创建，`mkdir docs\.vuepress`， 记得docs也带上；

```
docs
    .vuepress
        dist
        public
        config.js
    blog
    README.md
package.json
```

**docs**  是项目根目录，

**package.json** 是用来一键操作代码的；

**public**     图片放置文件夹，直接使用/logo.png就可以了；

**config.js**   整个项目的核心，所以配置导航栏和侧边栏都在该文件；

**blog**  自定义的文件夹；

**dist**  打包之后的文件夹



## 配置package.json

在package.json里面添加scripts一键操作代码，之后可以直接使用

`npm run docs:dev`    来运行开发环境

`npm run docs:build`： 打包 用来上传的;

```json
{
    "scripts":{
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs"
    }
}
```



## 配置默认主题

在docs下的README.md填写以下的内容，默认排版格式的首页；

heroImage为首页的图片，需要自选下载，放置public文件夹；

注意：复制下面的代码最好使用notepad++，或者其他软件打开，不要使用typora打开，会出错；

```yaml
---
home: true
heroImage: /logo.png
heroText: 前端学习圈
actionText: 快速上手 →
actionLink: /blog/type.md
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```



![image](https://notecdn.hrhe.cn/images/VuePress搭建个人博客-01.png)



## 创建新页面

在docs下面，一个文件夹就相当于一个页面，可以在docs文件夹下创建新文件夹，作为一个页面，blog文件夹可以删除，自己另外创建其他页面；

在blog文件夹下创建md文件，开始写博客；



## 配置config.js

位置：docs/.vuepress/config.js

```js
module.exports = {
    title: '前端学习圈',
    description: '描述内容',
    head:[['link',{rel:'shortcut icon',type:"image/x-icon",href:`./favicon.ico`}]],
    themeConfig:{
        repo: '项目仓库地址',
        repoLabel: '仓库地址标题',
        nav:[
            {text:'home',link:'/'},
            {text:'',link:'/blog/js'} // 注意如果是根路径需要写两个斜杠'/blog/'
        ],
        sidebarDepth: 2,  //仅支持h2和h3标题,h1作为显示的标题;
        sidebar:{
            '/blog':[{
                title:'分组标题',
                collapsable: false,// 去掉向下箭头
                children:['day01','day02']
                //children里面取一级标题作为显示名称,一个页面只能有一个一级标题,并且必须在第一行;
            }]
        } // sidebar的结束符;
    }
}
```

![image](https://notecdn.hrhe.cn/images/VuePress搭建个人博客-02.png)



head是用来放图标的，放到public文件夹，nav是顶部导航，sliderbar是侧边栏，是blog文件夹的侧边栏，js为blog文件夹下的一个js.md文件；

路径：以'/'结尾的路径会被默认查找*/README.md

搜索：仅支持二级和三级标题的搜索，填写文章时，注意不要使用h2和h3以外的标题，不会出现在侧边栏上；



## 常用的几个YAML语法

以下的内容都是给某个md文件设置的选项；

自动生成侧边栏，仅仅包含当前页面标题的链接侧边栏，不会有其他侧边栏存在

```yaml
---
sidebar: auto  # 自动生成侧边栏;  
    如果在config配置,auto需要带引号：sidebar: 'auto'
sidebar: false  # 禁用侧边栏;
navbar: false   # 禁用导航栏;
layout: custom # 改用其他组件
---
```

以上是普通配置，更多配置请查看官方文档；

[https://vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5](https://vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5)



## 侧边栏增强

1、侧边栏分组，针对所有页面都使用该侧边栏

```js
sidebar:[
    {title:'group1',collapsable:false,children:['/']},
    {title:'group1',......}
]
```

2、多个侧边栏，不同页面不同侧边栏

使用带目录的，添加链接时不需要带文件夹的路径；

```js
sidebar:{
    '/bar/':['/','one',['two','自定义标题名称;']],  //里面也可以填写分组;
    '/foo/':[....]
}
```

若没有指定标题名称，则标题使用一级标题的名称；



## 分组导航栏

```js
nav:[{
    text:'编程语言',
    items: [
        {text:'java',link:'/'},
        {text:'html',link:'/'}
    ]
}]  // 可以在items继续套分组;
```

![image](https://notecdn.hrhe.cn/images/VuePress搭建个人博客-03.png)



## 新增markedown用法

```markdown
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger STOP    //stop自定义的标题,
Danger zone, do not proceed
:::
```

![image](https://notecdn.hrhe.cn/images/VuePress搭建个人博客-04.png)

![image](https://notecdn.hrhe.cn/images/VuePress搭建个人博客-05.png)

代码块中的行高亮

```markdown
​``` js{4}  //第四行高亮
```



## vuepress中注册组件

在.vuepress下面创建一个enhanceApp.js文件，该文件相当于main.js，是入口文件，里面可以下载Element,Mini组件等等；

element组件可以直接在docs根目录下进行安装；

```js
// .vuepress/enhanceApp.js
// 全局注册 Element 组件库
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
export default ({
    Vue
})
```



## vuepress使用vue文件

1、第一种方式：

在.vuepress文件夹下创建一个components文件夹，里面的.vue文件会被注册成全局的组件，可以直接在md文件当引入,以文件名字为组件名；

注意目录路径；

```markdown
// docs/.vuepres/components/hello.vue
// docs/blog/test.md
this is <hello />   // 会自动将hello.vue的可显示内容显示到页面上;
```

2、第二种方式：

不包含头部，直接是一个单文件；

创建文件夹，并创建README.md文件

写入以下代码：

```yaml
---
layout: custom //填写components文件夹下的文件名字
---
```





## 使用element组件

>  需要完成注册Element组件库

在根目录docs下，任意一个目录创建一个.md文件，里面直接填写vue的代码，

可以直接使用element的组件，也可以直接使用component下的全局组件；

![image](https://notecdn.hrhe.cn/images/VuePress搭建个人博客-06.png)



## 部署github

1. 在github新建一个项目，不要初始化仓库，

2. 打开git bash工具，

   ```bash
   git init
   git remote add origin 地址  # 进行连接;
   ```

3. 修改base，找到.vuepress/config.js

   ```js
   base: '/<name>/'    //将创建的项目名称填入,双斜杠不能删除;
   ```

4. 下载gh-pages包

   ```bash
   npm install gh-pages
   ```

5. 在package.json文件添加脚本命令

   ```json
   "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs",
       "deploy": "gh-pages -d ./docs/.vuepress/dist",
       "deploy:build": "npm run docs:build && gh-pages -d ./docs/.vuepress/dist"
   },
   ```

6. 运行：`npm run deploy:build`

7. 打开你的github地址，`https://<name>/github.io/<repo>`



## 转发域名

![image](https://notecdn.hrhe.cn/images/VuePress搭建个人博客-08.png)

![image](https://notecdn.hrhe.cn/images/VuePress搭建个人博客-09.png)



## 遇到的问题总结

不显示侧边栏的情况：检查文件夹或者目录名是否有正确
