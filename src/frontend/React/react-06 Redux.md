# React-06 Redux
## 一、安装redux
`yarn add redux react-redux`

为什么装redux了，还要装react-redux：

redux才是真正的状态管理库，是区别于react的一个独立的状态管理插件，在vue项目中也可以使用redux；

使用react-redux主要是做两点

* 将redux数据注册进Provider中，用于隔代传值；

* 使用connect连接到组件中，将redux数据作为props传入；

react-redux主要是给我们做了自动更新重新渲染组件的一个逻辑，当然不安装react-redux也是可以的，但是项目中状态发生改变，需要自己去重新调用`this.forceUpdate()`更新组件；



为什么需要Redux

React作为一个组件化开发框架，组件之间存在大量通信，有时这些通信跨越多个组件，或者多个组件之间共享一套数据，简单的父子组件间传值不能满足我们的需求，自然而然地，我们需要有一个地方存取和操作这些公共状态。而redux就为我们提供了一种管理公共状态的方案



## 二、创建store

1. 添加store/index.js   使用`createStore`传入一个reducer来创建一个store
```jsx
import {createStore} from 'redux'
const initialState = {
    count: 0
}

// state仓库的值, action是传递的状态
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add' : return {
            ...state,
            count: action.count
        }
        default : return state
    }
}
const store = createStore(reducer)
export default store
```
2. 创建好之后的store，一共有四个参数，
```jsx
const store = createStore(reducer)
console.log(store)
{
    dispatch(){}  //通过传入一个对象,触发修改方法
    subscribe(){}  //通过传入一个函数,在dispatch之后都会触发
    getState(){}  //调用即获取store仓库
    replaceReducer(){}  //
}
```

3. 监听store的数据变化

`store.subscribe`可以监听store的数据变化，该方法返回一个函数，调用该函数又可以解除监听（当store的值发生改变时，再重新render组件即可让组件获取最新的值）

```jsx
const unsubscribe = store.subscribe(() => {
    console.log('当前state值：', store.getState())
})
unsubscribe()
```



## 三、组件获得store中的数据

### 直接调用store

```jsx
import React from 'react'
import store from './store'
function Son(){
    console.log(store.getState().count)
}
export default Son
```
### 使用connect连接

使用connect是借助Provider实现的，需要修改index.js入口文件;

1. 修改src/index.js入口文件

```jsx
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    document.getElementById('root')
)
```
2. connect使用方法
   * 第一个小括号接收参数，有四个参数
     * `mapStateToProps`：是一个函数，用来获取store数据的；
       * 该函数第一个参数是state，该函数返回一个对象，将该对象以props的形式注入到组件中
     * `mapDispatchToProps`：值可以是一个函数，也可以是一个对象，用来获取action方法的；
       * 当值是函数第一个参数是dispatch，第二个参数是ownProps，该函数需要返回一个对象；
     * `mergeProps`：值是一个函数
     * `options`：选项
   * 第二个小括号接收组件

```jsx
// 一般使用前两个参数即足够了；
connect([mapStateToProps],[mapDispatchToProps],[mergeProps],[options])
```
组件中使用connect连接到store

* 第一种方式，使用装饰器


```jsx
import {connect} from 'react-redux'

// 一般add的函数都是写在外面，使用简写形式即可;
@connect(
	state => ({count: state.count}),
	{
        add: () => ({type: 'add'})
    }
)
function App(props){}

export default App
```
* 第二种方式

```js
function App(props){}
fucntion handleChange(dispatch, val){
    return {type: '', payload: val}
}
const mapStateToProps = state => ({count: state.count})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChange: value => handleChange(dispatch, value)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
```

* 当不传入`mapDispatchToProps`时，dispatch会被注入组件中，使用`this.props.dispatch`可以直接派发修改
* 当mapDispatchToProps和mapStateToProps都不传递时，则不会监听store的任何变化
* 当redux的数据更新，都会触发mapStateToProps函数重新执行




注意：每次store有数据更新时，我们需要对相关得到的数据正确进行渲染，需要两次调用ReactDOM.render方法，可以写一个render函数，每次store发生改变即调用
```jsx
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
    ),
    document.getElementById('root')
}
store.subscribe(render)
render() // 第一次挂载执行
```
通过store.subscribe方法订阅store的变化，并且响应此变化，触发相关组件重新渲染；



## 四、store拆分处理

1. 创建store/index.js
```jsx
import { createStore } from 'redux'
import rootReducer from './reducer.js'
const store = createStore(rootReducer)
export default store
```
2. 创建store/type.js
```jsx
// 统一管理type名字
export const ADD = 'ADD'
```
3. 创建store/reducer.js
```jsx
import * as types from './type.js'
const initialState = {
    count: 0
}

// state仓库的值, action是传递的状态
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD : return {
            ...state,
            count: action.count
        }
        default : return state
    }
}
export default reducer
```
注意事项
* store必须是唯一的，只能有一个store空间，
* 只有store能改变自己的内容，reducer不能改变
* reducer必须是纯函数；




4. 创建store/action.js
```jsx
import * as types from './type.js'
export const increment = (count) => {
    return {
        type: types.ADD,
        count
    }
}
```



## 五、拆分reducer

1. 使用redux提供的函数，combineReducers可以将每个reducer写成独立的一个文件,每一块独立负责管理state的一部分
```jsx
// reducers/index.js
import { combineReducers } from 'redux'  //引入拆分

// 引入两个拆分的js reducer文件
import login './login'
import bread from './bread'

const rootReducer = combineReducers({
    login,
    bread
})
export default rootReducer
```



## 六、redux异步处理方案

1. `redux-thunk`中间件

thunk可以看做store的dispatch()方法的封装器，使用thunk可以帮助我们在redux里面实现异步性，如果没有thunk默认是同步派遣的；

2. 安装：`npm i redux-thunk -S`

3. 注册redux-thunk中间件

applyMiddleware可以让我们为redux注册中间件
```jsx
// store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer.js';

const store = () => createStore(rootReducer, applyMiddleware(thunk));

export default store;
```
4. 使用异步处理dispatch，异步的dispatch返回的是一个函数，函数的第一个参数是dispatch；
```jsx
// action.js

import * as types from './type.js'
// 同步处理
export const increment = count => ({
    type: types.ADD,
    count
})

// 异步处理
export const increment = count => (dispatch, getState) => {
    console.log('当前state值: ',getState())

    dispatch({type: types.ADD, count})
    // 或  可以直接调用函数
    dispatch(increment(count)

    return new Promise((resolve, reject)=> {
        resolve({code: 200})
    })
}
```

无法触发问题：

1. 检查是否写法有误
2. 查看方法是否是从props里面取的，不是直接从方法里面拿的；



## 七、hook API

使用hook API必须在react-redux @7.1版本之后；

1. useSelector()

   ```js
   import { shallowEqual, useSelector} from 'react-redux'
   
   // later
   const counter = useSelector(state => ({title: state.title, content: state.content}), shallowEqual)
   // 第二个参数也可以不使用;
   // shallowEqual是比较函数,也可以使用lodash.isEqual;
   ```

   复杂的state提取：

   ```js
   import {useSelector} from 'react-redux'
   import { createSelector } from 'reselect'
   
   const selectNumOfDoneTodos = createSelector(
       state => state.todos,
       todos => todos.filter(todo => todo.isDone)
   )
   
   export const DoneTodosCounter = () => {
       const NumOfDoneTodos = useSelector(selectNumOfDoneTodos)
       return <div>{NumOfDoneTodos}</div>
   }
   
   
   import {useSelector} from 'react-redux'
   import {createSelector} from 'reselect'
   const selectNumOfTodoWithIsDoneValue = createSelector(
       state => state.todos,
       (_, isDone) => isDone,
       (todos, isDone) => todos.filter(todo => todo.isDone === isDone).length
   )
   export const TodoCounterForIsDoneValue = ({isDone}) => {
       const NumOfTodosWithIsDoneValue = useSelector(state => 
           selectNumOfTodoWithIsDoneValue(state, isDone)
       )
       return <div>{NumOfTodosWithIsDoneValue}</div>
   }
   export const App = () => {
       return (
           <>
               <span>Number of done todos: </span>
               <TodoCounterForIsDoneValue isDone={true} />
           </>
       )
   }
   
   
   import {useSelector} from 'react-redux'
   import {createSelector} from 'reselect'
   const makeNumOfTodosWithIsDoneSelector = () =>
       createSelector(
           state => state.todos,
           (_, isDone) => isDone,
           (todos, isDone) => todos.filter(todo => todo.isDone === isDone).length
       )
   
   export const TodoCounterForIsDoneValue = ({isDone}) => {
       const selectNumOfTodosWithIsDone = useMemo(makeNumOfTodosWithIsDoneSelector, [])
       const numOfTodosWithIsDoneValue = useSelector(state => selectNumOfTodosWithIsDone(state, isDone))
       return <div>{numOfTodosWithIsDoneValue}</div>
   }
   ```

   

2. useDispatch

   ```js
   import {useDispatch} from 'react-redux'
   
   // later
   const dispatch = useDispatch()
   dispatch({type: ''})
   
   // 性能优化
   const handlerIncrement = useCallback(
       () => dispatch({type:''})
   ,[dispatch])
   ```

3. useStore()

   ```js
   import { useStore } from 'react-redux'
   
   // later
   const store = useStore()
   store.getState();
   ```

   



## 八、配置redux dev tools，谷歌工具

1. 修改store下的index.js文件，将以下代码传递给store
```jsx
window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__())
```
意思是查看window有没有该方法，有则执行；
```jsx
import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
```
2. 使用谷歌插件同时使用thunk
```jsx
npm i redux-thunk redux-devtools-extension

import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk' 
export default store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
```



## 九、解决redux刷新问题

1. 下载redux-persist持久化数据存储的工具：`yarn add redux-persist`

   redux-persist，它结合redux，将store中的数据缓存到浏览器的sessionStorage或者localStorage中

2. 在store.js里面，

```jsx
import { createStore } from 'redux';
import reducer from '../reducer';//引入deducer文件
import {persistStore, persistReducer} from 'redux-persist';

//  存储机制，可换成其他机制，当前使用sessionStorage机制
import storageSession from 'redux-persist/lib/storage/session'
// import storage from 'redux-persist/lib/storage'; //localStorage机制

// 数据对象
const storageConfig = {
    key: 'root', // 必须有的
    storage:storageSession, // sessionStorage缓存机制,或者放入sotrage,localStorage机制
    blacklist: ['name','age'] // reducer 里不持久化的数据,除此外均为持久化数据
}

// 第一个形参传入配置好的数据对象,第二个为数据reducer数据;
const myPersistReducer = persistReducer(storageConfig, reducer)
const store = createStore(myPersistReducer)
export const persistor = persistStore(store)
export default store
```
3. 如果是单文件的reducer处理方式
```jsx
// reducers/index.js
import { combineReducers } from 'redux'  //引入拆分

// 引入两个拆分的js reducer文件
import login './login'
import bread from './bread'

// 如果有持久化的工具
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const loginPersistConfig = {
    key: 'login',
    storage,
    blacklist: ['password'] //password不用持久化; 加了不持久化需要在store.js里面加入名字
}

const rootReducer = combineReducers({
    login: persistReducer(loginPersistConfig, login), // 有不持久化的需要在store.js里面加入名字
    bread
})
export default rootReducer
```

4. 在入口文件index.js里面将PersistGate标签作为父标签
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import configStore, {persistor}  from './redux/store';

ReactDOM.render(
    <Provider store={configStore}>
        <PersistGate loading={null} persistor={persistor}>
            <Router/>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));
```
5. 接下来打开浏览器调试工具，就可以查看到浏览器缓存的数据

![image](https://notecdn.hrhe.cn/images/react-04_其他Api，动画-03.png)



## 十、redux添加操作日志

安装插件：`cnpm i redux-logger`；

安装到项目中：

```js
import logger from 'redux-logger'
export const store = createStore(
	composeWithDevTools(
    	applyMiddleware(
        	logger
        )
    )
)
```

当即有logger，又有thunk时，logger需要放在前面，有个先后顺序；



## 十一、redux 原理

### 基本使用

```js
import React from 'react';
import { createStore, appMiddleWare } from './Store';

function reducer(state = 0, action) {
  switch(action.type) {
    case 'add': return state + 1;
    case 'minus': return state - 1;
    default: return state;
  }
}

function logger({ getState }) {
  return dispatch => action => {
    console.group('当前修改的类型：', action.type);
    console.log('preValue: ', getState())
    dispatch(action)
    console.log('nextPre: ', getState())
    console.groupEnd();
  }
}

const store = createStore(reducer, appMiddleWare(logger))

class StoreTest extends React.Component {
  componentDidMount() {
    store.subscribe(this.forceUpdate.bind(this))
  }
  render() {
    return (
      <div>
        <span>当前的state值：{store.getState()}</span>
        <button onClick={() => store.dispatch({ type: 'add' })}>+</button>
        <button onClick={() => store.dispatch({ type: 'minus' })}>-</button>
      </div>
    )
  }
}

export default StoreTest;
```

### 实现createStore、appMiddleWare

```js
export function createStore(reducer, enhance) {
  if(enhance) {
    // 第二个参数为第二次的createStore传入的参数
    return enhance(createStore)(reducer)
  }
  let currentStore;
  let currentHandle = []

  function getState() {
    return currentStore
  }

  function dispatch(action) {
    currentStore = reducer(currentStore, action)
    currentHandle.forEach(v => v())
    return action
  }

  function subscribe(fn) {
    currentHandle.push(fn)
  }

  // 初始化dispatch
  dispatch({ type: '@IMOOC/HNY-REDUX' })

  return {
    getState, dispatch, subscribe
  }
}

export function appMiddleWare(...middleWares) {
  // 和上面调用的是一样的， 第一个是强化的createStore，第二个参数是创建createStore的参数；
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = store.dispatch
    const middleApi = {
      getState: store.getState,
      dispatch
    }
    // 将中间件执行，并返回新的函数, middleApi为中间件函数的传参
    const middleWareChain = middleWares.map(middleWare => middleWare(middleApi))

    // 将函数整合，合并成一个函数，并依次传入第一个参数dispatch
    dispatch = compose(...middleWareChain)(dispatch)

    // 返回创建的createStore的结果, 并强化dispatch
    return {
      ...store,
      dispatch
    }
  }
}

const compose = (...funcs) => {
  if(funcs.length === 0) {
    return args => args
  }
  if(funcs.length === 1) {
    return funcs[0]
  }
  // args接收的是函数执行转换完成的第二个参数
  return funcs.reduce((left, right) => (...args) => right(left(...args)))
}
```





## 十二、dva

官网：[dvajs](https://dvajs.com/)，了解即可，目前没有更新；

### 为什么需要使用dva

dva是一个基于redux和redux-saga的数据流方案，为了简化开发体验，dva还额外内置了react-router和fetch，可以理解为一个轻量级应用框架

dva不需要手动添加谷歌工具，有默认给添加；



### 使用dva

使用dva需要安装dva的脚手架；

```bash
npm install dva-cli -g
dva new dva-quickstart
cd dva-quickstart
npm start
```

基于dva创建新应用



### 创建model的参数

创建models/list.js

```js
export default {
    namespace: 'list',
    state: [],
    reducers: {
        delete(state, payload){
            // ...
            return state
        }
    },
    effects: {
        *deleteList(payload, {put, call, select}){
            const list = yield select(state => state.list)
            yield call(addTodo, payload)
            yield put({type: 'delete', payload})
        }
    },
    subscriptions: {
        // 每次触发都会走该对象中的所有函数，函数名字可以是任意的
        setup({dispatch, history}) {
            history.listen(location => {})
        }
    }
}
```

* `namespace`：模块命名
* `state`：初始值
* `reducers`：等同于redux中的reducers
* `subscriptions`：监听改变，也可以放在入口文件写；
* `effects`：异步处理方式，其中第二个对象的参数如下：
  * `put`：触发reducers，
  * `call`：异步请求，第一个参数为promise，第二个参数为要发送的参数；
  * `select`：用于从state中取数据



创建之后需要在入口文件index.js注册该模块

```js
app.model(require('./models/list').default)
```

其中的default是由于require进来的就是有一个对象，其他default对象为导出的内容；

**解决每次需要在app.js引入**

1. 创建models/index.js

   ```js
   const context = require.context('./', false, /[^index]\.js$/)
   const requireAll = context => context.keys().map(context)
   export default requireAll(context)
   ```

2. 修改入口页面index.js

   ```js
   import models from './models'
   models.forEach(model => {
       app.model(model.default)
   })
   ```



### 连接到数据库

连接没有作任何修改，和redux本身是一样的连接方式

```jsx
import {connect} from 'dva'
const Products = ({dispatch, list}) => {
	return  (<div></div>)
}
const mapStateToProps = state => ({
    list: state.list
})
export default connect(mapStateToProps)(Products)
```



### app可配置属性

```js
const app = dva({
  history, // 更改路由模式
  initialState, // 初始化model
  onError, // redux错误捕获
  onAction, // 注册中间件
  onStateChange,
  onReducer,
  onEffect,
  onHmr, // 热替换相关
  extraReducers, // 可以添加redux-persit，数据保持
  extraEnhancers,
});
```



### dva提供的路由跳转

```js
import { routerRedux } from 'dva/router';

// Inside Effects
yield put(routerRedux.push('/logout'));

// Outside Effects
dispatch(routerRedux.push('/logout'));

// With query
routerRedux.push({
  pathname: '/logout',
  query: {
    page: 2,
  },
});
```





### mock

dva内置给我们添加了mock，可以用于模拟本地数据

1. 在mock文件夹创建js文件：list.js

   ```js
   module.exports = {
       'GET /api/list': [{}],
       'GET /api/delete' (req, res) {
       	res.status(200).json([{}])
   	}
   }
   ```

2. 修改根目录下的.roadhogrc.mock.js，下面代码可以自动引入api，以后新建不需要再引入了；

   ```js
   const fs=require('fs');
   const path=require('path');
   const mockPath=path.join(__dirname+'/mock');
    
   const mock={};
   fs.readdirSync(mockPath).forEach(file=>{
       Object.assign(mock,require('./mock/'+file));
   });
    
   module.exports=mock;
   ```







## 十三、Rematch

写过vuex的都会写rematch

rematch也支持四个属性：`state`、`reducers`、`effects`

Rematch不需要脚手架安装，直接在项目中安装即可，不需要处理谷歌浏览器插件；

连接方式直接引用`react-redux`中的`connect`连接即可；

安装：`npm install react-redux @rematch/core@next`

开发文档：[https://rematch.netlify.app/](https://rematch.netlify.app/)

### 创建Rematch

1. 创建demo.js

   ```js
   export default {
       state: {
           name: 1
       },
       reducers: {
           increment(state, num1, num2) { // 从第二个变量开始为传入参数
               return {
                   ...state,
                   num: num1
               }
           }
       },
       effects: dispatch => ({
           async incrementAsync(num1, rootState, num2) { // state为当前state
               await new Promise(resolve => setTimeout(resolve, 2000))
               this.increment(num1) // 直接调用reducers
           }
       })
   }
   ```

2. 创建index.js

   ```js
   import { init } from '@rematch/core'
   import demo from './demo'
   const store = init({
       models: {
           demo
       }
   })
   export default store
   ```

3. 注册在组件中，修改入口文件

   ```jsx
   import { Provider } from 'react-redux'
   ReactDOM.render(
       <Provider store={store}></Provider>,
       window.root
   )
   ```



### 触发dispatch方法

1. 使用react-redux中的connect连接

2. 引入rematch插件里的dispatch和getState

   ```js
   import {dispatch, getState} from '@rematch/core'
   ```

dispatch的使用方法：

```js
dispatch({type: 'count/increment', payload: 1})
dispatch.count.increment(1)
```



### 在一个model的reducer触发另一个model的reducer

```js
// count模块
{
    reducers: {
        ['info/addAge'](state, payload) { // payLoad的值为addAge传入的值10
            return {
                ...state,
                num: 10
            }
        }
    }
}

// info模块
{
    reducers: {
        addAge(state, num) {
            return {
                age: state.age + num
            }
        }
    }
}
```



### 中间件配置方法

```js
import {init} from '@rematch/core';

const store = init({
    redux: {
        initialState: {example: 12},
        reducers: {
            someReducer(state, action) {
                switch (action.type) {
                    default:
                        return state
                }
           },
        },
        enhancers: [customEnhancer()],
        middlewares: [customMiddleware()],
        rootReducers: {
            RESET: (state, action) => {},
        },
        combineReducers: customCombineReducers,
        createStore: customCreateStore,
        devtoolOptions: customDevtoolOptions,
    },
})
```



### rematch插件

#### 数据持久化persist

安装`npm i @rematch/persist@next`

1. 修改store.js文件，并添加插件

```js
import createRematchPersist from '@rematch/persist'
const persistPlugin = createRematchPersist({
  key: 'list',
  // whitelist: ['list'], // 需要保留的数据;
  // blacklist: [], // 不想保留的数据;
  throttle: 5000,
  version: 1
})
const store = init({
    models,
    plugins: [ persistPlugin ]
})
```

2. 修改入口文件

```jsx
import { getPersistor } from '@rematch/persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
render(
	<Provider store={store} >
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
  </Provider>
)
```



#### 更简单的处理数据immer

让操作redux更简单，不再通过返回store状态了；

```js
// 不使用immer更新状态之前：
export default {
    state: {count: 0},
    reducers: {
        increment(state, payload) {
            // 需要返回整个store状态
            return {
                ...state,
                count: payload.count
            }
        }
    }
}

// 使用immer之后：
export default {
    state: {count: 0},
    reducers: {
        increment(state, payload) {
            // 直接修改即可
            state.count = payload.count
        }
    }
}
```



在初始化store中添加插件

```js
import immerPlugin from '@rematch/immer'
const store = init({
    plugins: [immerPlugin()]
})
```







#### 加载loading

自动处理redux中异步加载的loading状态；

安装：`yarn add @rematch/loading@next`

1. 在初始化store中添加插件

   ```js
   import loadingPlugin from '@rematch/loading'
   const store = init({
       plugins: [loadingPlugin()]
   })
   ```

2. 使用方法：

   * 通过`state.loading.global`取入全局异步加载的loading;

   * 通过`state.loading.models.list`，取入list整个模块的加载loading

   * 通过`state.loading.effects.list[异步函数名]`,取入list某个函数名的loading;.

   以上都是在组件获取state状态时，直接绑定到props上的，例如：

   ```js
   const mapStateToProps = state => ({
       loading: state.loading.global
   })
   ```

   



#### 最后更新updated

获取最后更新时间

安装：`yarn add @rematch/updated@next`

1. 在初始化store中添加插件

   ```js
   import updatedPlugin from '@rematch/updated'
   const store = init({
       plugins: [updatedPlugin()]
   })
   ```

2. 使用方法：

   * 通过`state.updated.list[异步函数名]`获取最后更新时间；

   