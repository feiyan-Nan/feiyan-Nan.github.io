# Vue-07 Vuex

## Vuex

### 概念

* Vuex是一个专为vue.js开发的状态管理模式，vuex也是单向数据流，当一个状态需要在多个页面中使用，发生改变，建议将数据储存在vuex中，比如登录token；

### props和data和vuex的区别

vuex是一个全局的共享数据存储区域，就相当于是一个数据的仓库；

data是组件中的私有数据，props是父组件与子组件传递数据的；

### 注意

vuex的数据修改后在页面刷新之后就没有了，如果是请求数据建议使用其他的方法；vuex本质上是全局变量，因此刷新则会没了；



## 安装

1. 安装：yarn add vuex

2. 在src下面创建一个store文件夹，在里面创建一个index.js文件，并引入

   ```js
   import Vue from 'vue'
   import Vuex from 'vuex'
   Vue.use(Vuex)
   export default new Vuex.Store({
       state: {},  //相当于data
       mutations: {}, //相当于method
       actions: {}, //可以执行异步操作
       getters: {}  //相当于计算属性,主要是过滤
   })
   ```

   mutations里面定义的函数接收两个形参，第一个为state，第二个是接收到的数据；

3. 在main.js文件下引入

   ```js
   import store from './store'   //引入文件夹的时候会自动找index.js
   new Vue({store})  //放进实例中
   ```

   这里的store引入之后就是全局的$store了，首字母大写的话全局也必须使用大写的首字母；

   只要挂载到了实例中，就可以在全局访问store了；

   在template标签里面访问，不需要加this；



## Vuex成员介绍

### State

> 保存的状态，如同组件里面写入的data是一样的

#### 获取state值

* 直接获取

  ```js
  this.$store.state.user   //获取state值
  this.$store.getters.users   //获取getters值
  ```

* 使用mapState获取

  ```js
  import {mapState} from 'vuex'
  computed: {
      ...mapState({
          count: state.count
      })
  }
  ```

  

### Getter

> 相当于vue组件里面的computed，进行计算，返回state值





### Mutation

> vuex里唯一能改变state状态的属性

如果要操作store中的state值，只能通过调用mutations提供的方法，才能操作对应的数据，不推荐直接操作state中的数据，因为万一导致了数据的紊乱，不能快速定位到错误的原因，因为每个组件都可能有操作数据的方法；**mutations就像是一个仓库管理员；**

#### 创建mutation

```js
// 定义mutation方法
mutations: {
    increment(state){  //第一个参数一定的state
        state.count++
    }
}
```

注意：mutations不支持异步操作，异步只能使用action；

#### 调用mutation

* 使用commit调用

  ```js
  this.$store.commit('方法名',参数);
  ```

* 使用对象风格提交

  ```js
  this.$store.commit({ type:'方法名',  mount: 10;})
  ```

* 使用vuex方法mapMutations提交

  ```js
  import {mapMutations} from 'vuex'
  methods: {
      // 括号接收一个数组，数组填写方法名字即可,使用this.increment调用
      ...mapMutations(['increment'])
      
      // 如果需要更换mutation定义方法的名字
      ...mapMutations({add: 'increment'}) // 将increment修改成add，在组件里面使this.add即可直接调用increment方法；
  }
  ```

#### 工作中建议

由于mutations是唯一管理仓库的成员，因此建议创建一个types.js的文件夹，用于专门管理mutation函数名字

1. 新建types.js

   ```js
   export const SET_COUNT = 'SET_COUNT'
   ```

2. 在需要定义mutations的函数里面引入该名字

   ```js
   import * as types from './types' // 使用as语法将*重命名为types
   mutations: {
       types.SET_COUNT (state) {}
   }
   ```

   



### Action

> 与mutation使用方法雷同，action想要修改state状态，需要在action里面调用mutation事件

action可以包含任意异步操作，一般使用与含有回调函数的事件

#### 创建action

```js
actions: {
    // 接收一个context，里面有commit，用来触发mutation事件, 第二个参数为传入的值
    async setIncrement(context, val){
        let res = await fetch('')
        context.commit('increment', res)
    }
    // 使用解构方式
    async setIncrement({commit}){commit('increment')}
}
```

action函数接受一个与store实例具有相同方法和属性的`context`对象，因此可以调用`commit`方法，提交一个mutation，当然也可以调用`dispatch`，也可以通过`context.state`和`context.getters`来获取当前状态



#### 调用action

* dispatch触发

  ```js
  this.$store.dispatch('increment')
  ```

* 使用mapActions触发

  ```js
  import {mapActions} from 'vuex'
  methods: {
      ...mapActions(['setIncrement'])
  }
  ```



### model

> model包含五个方法，分别是state、mutations、actions、getters、model，由于项目太大，因此可以使用model可以创建模块，每个模块都包含这五个方法

#### 基本使用方法

1. 创建store/login.js

   ```js
   export default {
       state: {},
       mutations: {},
       actions: {},
       getters: {}
   }
   ```

2. 在store/index.js引入

   ```js
   import Vue from 'vue'
   import Vuex from 'Vuex'
   import login from './login'
   export default new Vuex.Store({
       state: {},
       getters: {},
       mutations: {},
       actions: {},
       model: {
           // 里面放其他的模块即可
           login: login
       }
   })
   ```



## 插件开发

> Vuex.Store对象中，接收一个plugins属性，值是一个数组，里面放置的都是函数

简单的开发插件例子：

```js
// 插件接收一个store作为形参
const myPlugin = store => {
    // 当store初始化时调用
    store.subscribe((mutation, state) => {
        // 每次mutation之后调用
        // mutation的格式为：{type, payload}
    })
}
```

使用：

```js
const store = new Vuex.store({
    // ...
    plugins: [myPlugin]
})
```

简单的本地储存开发例子：

```js
export default store => {
    // 在初始化时（页面刷新），如果store有数据则替换原有的store;
    if(localStore._vuex) state.replaceState(JSON.parse(localStore._vuex))
    store.subscribe((mutation, state) => {
        localStore._vuex = JSON.stringify(state)
    })
}
```





## 添加vuex操作日志

store/index.js常用

```js
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'  //用于操作之后可以返回一个日志，记录了信息;
Vue.use(Vuex)
export default new Vuex.Store({
  actions: {},
  getters: {},
  state: {},
  mutations: {},
  strict: process.env.NODE_ENV !== 'production', // 开启严格模式，保证状态变更是由mutation发起的，注意生产环境不能用
  plugins: debug ? [createLogger()] : []
})
```



## v-model使用vuex中的state值

```js
<input v-model='message'>
computed: {
    message: {
        get () {
            return this.$store.state.message
        },
        set (value) {
            this.$store.commit('updateMessage', value)
        }
    }
}
```





## vuex数据持久化

1. 安装：`npm i vuex-persistedstate`

2. 修改`store`的入口文件

   ```js
   import createPersistedState from 'vuex-persistedstate'
   const persistedStateOpt = {
       storage: window.localStorage // 默认为localStorage, 可以配置sesstionStorage
   }
   const store = new Vuex.Store({
       // ...
       plugins: [createPersistedState(persistedStateOpt)]
   })
   ```

3. 不需要持久化的数据

   该插件只能是包含某个持久化的数据，没有不包含的某个持久化数据

   ```js
   const persistedStateOpt = {
       paths: ['theme', 'menu', 'demo.title'], // 如果想持久化一个模块，如：theme、menu里的所有数据或'demo.title'。它跟reducer是不能共用的，配置了reducer，paths失效。
       reducer: function (val) { // 如果要选择持久化部分数据，请把reducer放开。这个方法用于部分数据持久化。
           return { // 需要持久化的对象，对象为空为所有数据都不持久化
               menu,  // 如果放置一个模块，这个模块里的getters、actions和mutations都会在storage里（是一个空对象），paths则不会有getters、actions和mutations
               demo: {
                   title: val.demo.title
               }
           }
       }
   }
   ```

   手写不需要持久化的数据

   ```js
   // 不需要持久化的数据
   const notPersistedState = []
   // 部分数据需要持久化
   // 当写部分数据时，需要在不需要持久化的数组填写模块名
   const partData = [] 
   const persistedStateOpt = {
     storage: window.localStorage,
     paths: [
       ...Object.keys(modules) // 取所有的模块名字并过滤掉
         .filter(i => !notPersisted.includes(i)),
       ...partData
     ]
   }
   ```




## Vue3

几乎所有的 Vuex 4 API 都与 Vuex 3 保持不变。

### 安装

```js
import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      count: 1
    }
  }
})
```

```js
import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'

const app = createApp(App)

app.use(store)

app.mount('#app')
```

### 组合式API

#### 访问State和Getter

为了访问 state 和 getter，需要创建 `computed` 引用以保留响应性，这与在选项式 API 中创建计算属性等效。

```js
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      // 在 computed 函数中访问 state
      count: computed(() => store.state.count),

      // 在 computed 函数中访问 getter
      double: computed(() => store.getters.double)
    }
  }
}
```

#### 访问Mutation和Action

要使用 mutation 和 action 时，只需要在 `setup` 钩子函数中调用 `commit` 和 `dispatch` 函数。

```js
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      // 使用 mutation
      increment: () => store.commit('increment'),

      // 使用 action
      asyncIncrement: () => store.dispatch('asyncIncrement')
    }
  }
}
```



### Pinia

Vue3中，更建议使用[pinia](https://github.com/vuejs/pinia)，使用方法更简单 



### Vue3例子

[https://github.com/vuejs/vuex/tree/4.0/examples](https://github.com/vuejs/vuex/tree/4.0/examples)

