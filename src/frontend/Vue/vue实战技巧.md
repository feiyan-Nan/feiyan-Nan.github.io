# Vue项目技巧

## 在vscode可以点击跳转到对应的文件

创建jsconfig.json

```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"], // 增加别名可以跳转对应文件夹
      "api": ["api"] // 其他的路径跳转
    }
  }
}
```





## 逻辑复用方法

```js
MyPlugin.install = function (Vue, options) {
    // 第一种方法. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
        // 逻辑...
    }

    // 第二种方法. 添加全局资源
    Vue.directive('my-directive', {
        bind (el, binding, vnode, oldVnode) {
            // 逻辑...
        }
        ...
    })

    // 第三种方法. 注入组件
    Vue.mixin({
        created: function () {
        // 逻辑...
        }
         ...
    })

    // 第五种方法. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
    }

    // 第六种方法，注册组件
    Vue.component(组件名, 组件)
}
```

举例使用场景： 

* toast提示可以选择Vue.prototype
* 输入框自动获取焦点可以选择Vue.directive指令，
* 自定义组件可以选择Vue.component的形式。



## 样式穿透

> 在使用UI框架时，由于一些选择器嵌套太深，无法被读取到，因此可以使用样式穿透

1. 一个组件可以同时使用scoped和非scoped两个style标签，将无法起效果的，需要穿透的放到style标签去写；

   ```js
   <style></style>
   <style scoped></style>
   ```

2. 使用>>>进行穿透

   ```css
   .father >>> .son{
       /* */
   }
   ```

3. 对于less、sass等处理器，不支持>>>解析，可以使用/deep/ 或 ::v-deep

   ```css
   .father{
      /deep/ .son{
          /* */
      }
   }
   ```



## 数据请求loading

1. 在main.js里面配置全局的loading

   ```js
   import {Loading} from 'element-ui'
   Vue.prototype.$loading = options => {
       let defaults = {
           lock: false, // 是否锁定屏幕滚动
           text: '加载中',
           spinner: 'el-icon-loading',
           background: 'rgba(0,0,0,.7)',
           target: document.body, 目标对象
           ...options
       }
       return Loading.service(defaults)
   }
   ```

2. 在请求数据时

   ```js
   async function reqData(){
       let loading = null
       this.$nextTick(() => {  // 服务方式必须使用异步处理
           loading = this.$loading({target: 'el-table'}) // 传入需要显示的位置
       })
       let res = await getData()
       loading.close()
   }
   ```



## 长列表优化

1. 安装插件：`yarn add vue-virtual-scroller`

2. 修改main.js文件

   ```js
   import Vue from 'vue'
   import VueVirtualScroller from 'vue-virtual-scroller'
   Vue.use(VueVirtualScroller)
   import 'vue-virtual-scroller/dist/vue-virtual-scroller.css
   ```



## 封装el-dialog方法

1. 创建组件模板，根据自行需要封装，主要是了解如何触发；

   ```vue
   <template>
     <div class=''>
       <el-dialog :visible.sync='visible'>
         <template #title>
           <span class='deleteDia__title--txt'>{{title}}</span>
         </template>
         <slot />
         <div slot="footer" class="">
           <el-button plain @click="visible=false">取 消</el-button>
           <el-button type="primary" @click="send">确 定</el-button>
         </div>
       </el-dialog>
     </div>
   </template>
   <script>
   export default {
     name: 'el-dialogs',
     props: {
       value: {
         type: Boolean,
         default: false
       },
       title: {
         type: String,
         default: '系统提示'
       }
     },
     computed: {
       visible: {
         get () {
           return this.value
         },
         set (val) {
           this.$emit('input', val)
         }
       }
     },
     methods: {
       send(){
           this.$emit('custom') // 触发父元素的自定义事件
       }
     }
   }
   </script>
   <style lang='scss'>
   
   </style>
   ```
   
2. 使用方法

   ```html
   <组件名 v-model='visible的变量' @custom='确定按钮的函数'/>
   ```



**其他方法：**

不使用v-model；

* 子组件：使用$parent访问父组件的方法调用事件
* 父组件：父组件使用ref访问子组件的方法显示子组件

节制地使用 `$parent` 和 `$children` - 它们的主要目的是作为访问组件的应急方法。更推荐用 props 和 events 实现父子组件通信



## 添加Message消息提示节流

```js
import {Message as message} from 'element-ui'
Vue.prototype.$messageTip = new Proxy(() => {}, {
  get(target, property, receiver) {
    const that = this;
    return function (msg) {
      that.apply(target, that, [msg, property]);
    };
  },
  apply(_target, _thisBing, [msg, status]) {
    sessionStorage.ELEMENT_MESSAGE_FLAG = sessionStorage.ELEMENT_MESSAGE_FLAG || 'true';
    if (sessionStorage.ELEMENT_MESSAGE_FLAG === 'false') return;
    sessionStorage.ELEMENT_MESSAGE_FLAG = 'false';
    message[status || 'success'](msg);
    setTimeout((_) => {
      sessionStorage.ELEMENT_MESSAGE_FLAG = 'true';
      delete sessionStorage.ELEMENT_MESSAGE_FLAG;
    }, 1500);
  },
});
```

**使用方式：**

* 两个调用方式：
  * ①$messageTip.info(消息或对象)
  * ②$messageTip(消息或对象，类型)

**注意：** 在入口文件的生命周期删除delete sessionStorage['ELEMENT_MESSAGE_FLAG']，否则可能会有bug；



## 防抖、节流用法

```js
import {debounce} from 'lodash'
methods: {
    remoteMethod: debounce(function(query) {
        // this始终指向Vue实例
    }, 100)
}
```



## 监听生命周期函数

### 内部监听生命周期

为了使代码更易阅读，可以将事件放到一个生命周期写；

可以通过`this.$on`或`this.$once`监听生命周期；

```js
export default {
    mounted() {
        window.addEventListener('resize', this.resizeFn)
        this.$once('hook:beforeDestory', () => {
            window.removeEventListener('resize', this.resizeFn)
        })
    },
    methods: {
   		resizeFn(){}
    }
}
```

### 外部监听生命周期

常用在第三方组件上面，需要监听第三方组件的生命周期事件；

```vue
<template>
	<custom @hook:updated='' />
</template>
```



## Vue.observable

大项目使用Vuex，小项目使用Vue.observable

1. 创建store

   ```js
   import Vue from 'vue'
   export const store = Vue.observable({
       userInfo: {},
       list: []
   })
   export const mutations = {
       setUserInfo(userInfo) {
           store.userInfo = userInfo
       }
   }
   ```

2. 在组件中引入

   ```vue
   <template>
   	<div>
           {{userInfo.name}}
       </div>
   </template>
   import {store, mutations} from '../store'
   
   export default {
   	computed:{
   		userInfo(){
   			return store.userInfo
   		}
   	}
   }
   ```
   



## 随时监听watch

通过`this.$watch`随时监听，通过返回的`unwatch()`取消监听

```js
methods: {
    loadData() {
        this.formData = {}
        const unwatch = this.$watch('formData', () => {}, {deep: true})
    }
}
```



## 渲染字符串

github地址：[https://github.com/alexjoverm/v-runtime-template](https://github.com/alexjoverm/v-runtime-template)

