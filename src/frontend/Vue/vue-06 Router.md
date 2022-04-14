# Vue-06 Router

## 一、路由

* 后端路由：对于普通的网站，所有的超链接都是url地址，所有的url地址都对应服务器上对应的资源
* 前端路由：在SPA单页面应用程序中，主要通过url中的`hash`（#号）来实现不同页面之间的切换；因为`hash`有个特点，http请求中不会包含`hash`相关的内容；

### 搭建路由

* src/router/index.js

```js
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  base: '/', // 默认为/, 针对页面的根路径
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'HelloWorld', // 用来路由跳转的;
      component: () => import('@/components/HelloWorld'),
      children: [
          {
            path: 'article', // children下面的地址访问是: /home/article;
            name: 'article',
            component: _ => import('@/components/article') // '_'是占位符, 不用写小括号
          }
      ]
    }
  ]
})
```

* 修改main.js文件

```js
import router from './router'
new Vue({
    router
})
```



## 二、配置路由

### 配置方法

在src/router/index.js，导入组件名，并在routers里面配置路由

* `path` 为配置的路由地址
* `name `为组件里面定义的name名字，组件里name名字还可以用在调试的时候；
* `component` 为填写导入路由要显示的组件；

### 路由显示

在app.vue文件中填写

* 路由中转：`<router-link to='/menu'>菜单</router-link>`
* 用来显示要加载的组件：`<router-view/>`



## 三、动态路由

### path路径

```js
path:'/movie/:id'
path: '/shop/:type/:id?  // 路由后面加问号表示可有可无
<router-link to='/movie/123'>
<router-link :to='{name:'Movie',params:{id:123}}>
// 接收参数：$route.params.id  传递params必须使用路由的name名
```

### 查询字符串

```js
path:'/movie'
<router-link to='movie?id=123'>
<router-link :to='{path:'movie',query:{id:123}}'>
// 接收参数：$route.query.id
```



### 使用props代替$route.params接收参数

* 单个时

```js
{
    component: User,
    props: true
}
// or 
{
    component: User,
    props: route => ({
        id: route.query.id
    })
}
```

```js
export default {
    props: ['id'],
}
```



* 多个时

```js
{components:{a:..,b:...},
props:{a:true,b:false}};  //true为支持props，false为不支持;
```

在组件内像接收父组件传值一样传入




### 路由参数变化组件不更新

* 解决方案一：

```js
watch: {
    '$route' (to, from) {
        if(to.query.id !== from.query.id){
            this.id = to.query.id
            this.init() // 重新加载数据
        }
    }
}
// 方法二：设置路径变化时的处理函数
watch: {
    '$route': {
        handler: 'init',
        immediate: true
    }
}
```

* 解决方案二：

为了实现这样的效果可以给router-view添加一个不同的key，这样即使是公用组件，只要url变化了，就一定会重新创建这个组件

```html
<router-view :key='$route.fullpath'/>
```



## 四、路由嵌套

1. 在父路由填写：children:[{path:''...}...]

   注意：组件嵌套时，子路由的开头位置不要加 / 路径符

2. 填写router-link时，可以直接写路由name名称

3. 在父组件里面需要添加\<router-view/>标签；要显示的位置

4. 使用redirect 实现路由重定向；指向另外一个地址

```js
{path:'/',redirect:'/account/login'},
{path:'/account',....};
```



## 五、router激活的类

1. 在router/index.js文件中指定类名

```js
new Router({linkActiveClass:'myactive'})；
```

2. 给router-link添加属性 active-class='select'，给select添加样式即可
3. active-class被激活的路由，当路由为'/'路径和'/a'路径都会被添加类名，可以使用exact，精确激活，也可以使用exact-active-class='select'被精确激活



## 六、编程式导航

1. `push`：`this.$router.push(url)`；跳转带历史记录
2. `replace`：`this.$router.replace(url)`；跳转不带历史记录
3. `go`：`this.$router.go(num)`；1为前进，-1为后退

4. 重复点击路由报错问题

   修改router/index.js文件，添加以下代码

```js
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
```

### $route和$router的区别

* `$route` 是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。
* `$router `是“路由实例”对象包括了路由的跳转方法，钩子函数等



## 七、命名视图

定义多个router-view，实现一个url地址同时加载多个组件

* 在父组件里添加多个router-view，并添加name属性区分

```html
<router-view name='left'/>
```

* 在index.js文件里，导入父组件，并配置路由，在父组件里定义children，并给孩子定义一个path路径；在显示子组件时，记得带上子组件的path路径

```js
children: [
    {path:'',components:{default:组件,name名:组件}
]
```

多个组件需要带s，components；default为不带name名的router-view



## 八、路由守卫

可以在路由地址变化的过程中进行一些验证

场景：登录验证、VIP身份验证、只允许从组件A跳转到组件B,其它组件不允许跳转到组件B

通过next可以阻止路由跳转，如果不调用next就不会执行下一步

### 全局守卫

填写位置：router/index.js

* 前置

```js
const router = new Router({})
router.beforeEach((to,from,next)=>{});
to:目标位置,   from:原始位置   next()  必须调用，否则不执行代码
// next()  进入到下一个钩子
// next(false)  中断当前导航
// next('/')或者next({path:''})   跳转到另一个地址
// next({name: '', params: {}}) params传参需要使用路由的name名字来跳转;
// next(error)  传递给onError()
```

* 后置（后置守卫没有next）主要处理跳转之后的操作, 不需要拦截

```js
router.afterEach((to,from)=>{})
```



### 路由独享守卫

填写位置：router/index.js

```js
{
    path:'/menu',
    component:menu,
    beforeEnter(to,from,next){};
}
```



### 组件内守卫

路由生命周期钩子函数

```js
export default{
    beforeRouteEnter(to,from,next){}  // 不能访问实例this 
    beforeRouteUpdate(to,from,next){}  // 当动态路由/foo/:id, id改变时,页面不会有影响, 该方法会被调用
    beforeRouteLeave(to, from, next){}   //离开, 一般提示用户未保存修改离开
}
```

* `beforeRouteEnter`由于不能访问this，可以通过传一个回调给next来访问组件实例,`beforeRouteUpdate`和`Leave`不支持传递，因为他们可以访问this

```js
beforeRouteEnter (to, from, next) {
    next(vm => {}) // 通过vm访问组件实例
}
```



### 数据获取方式

* 导航完成后获取数据

```js
created () {
    this.fetchData()
}
watch: {
    '$route': 'fetchData' // 路由变化之后会重新获取数据
},
methods: {
    async fetchData() {
        getPost().then(res => {
            this.list = res.list
        })
    }
}
```

* 导航完成前获取数据

```js
import { Loading } from 'element-ui'
beforeRouteEnter (to, from, next) {
    let loading = Loading.service() // 在渲染时的等待界面添加Loading
    getPost().then(res => {
        loading.close()
        next(vm => vm.fetchData(res))
    })
},
methods: {
    fetchData(res){
        this.list = res.list
    }
}
```



### watch监听路由

```js
watch: {
    $route (to, from) {},
    $route.path (value) {}
    $route: 'fetchData' // 当路由发生变化会执行fetchData方法
},
methods: {
    fetchData () {}
}
```

父组件导入其它组件时，将其他子组件放在components引入；

在路由中加载其他多个组件时，写多个router-view，在父路由写children定义多个components；



## 八、路由实例方法

* router.addRoutes

动态添加路由，当后台设置了admin权限之后，还要根据admin权限判断，是否显示或隐藏一部分路由

```js
router.addRoutes([]) // 数组填写路由对象即可;
```



## 九、vue组件name作用

1. 当项目使用`keep-alive`时,可搭配组件name进行缓存过滤
2. vue-devtools调试工具里显示的组件名称是由vue中组件name决定的 
3. 在路由跳转传参时，可以不写path，直接写路由名称，并可以传递params参数
4. 使用递归组件时，需要填写组件的name名字



## 十、Vue的路由实现

> 使用hash模式和history两种模式实现

* `hash`模式：在浏览器中符号“#”，#以及#后面的字符称之为hash，用 window.location.hash 读取。特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。
* `history`模式：history采用HTML5的新特性；且提供了两个新方法： pushState()， replaceState()可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更

注意：使用history需要对后端进行配置

配置地址：[vue路由官网](https://router.vuejs.org/zh/guide/essentials/history-mode.html#后端配置例子)



## Vue3

### 注册方式

1. router.js

   ```js
   import { createRouter, createWebHistory } from 'vue-router'
   
   const routes = [
     { path: '/', component: Home },
     { path: '/about', component: About },
   ]
   
   const router = createRouter({
       history: createWebHistory(),
       routes
   })
   
   export default router;
   ```

2. main.js

   ```js
   import { createApp } from 'vue'
   import router from './router'
   const app = createApp({})
   app.use(router)
   ```



### 组合式API

**在setup访问路由**

* `useRouter`
* `useRoute`

**导航守卫**

* `onBeforeRouteLeave`
* `onBeforeRouteUpdate`

