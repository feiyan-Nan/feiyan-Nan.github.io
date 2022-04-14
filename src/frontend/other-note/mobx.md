# Mobx

> Mobx支持单向数据流，也就是动作改变状态，而状态的改变会更新所有受影响的视图;

## Mobx与Redux对比

* mobx的学习成本比redux更少，使用起来比redux更方便
* redux可维护性更强，阅读好，对于大项目建议使用redux
* mobx可以说是redux的代替品，当使用redux比较麻烦时可以选择使用mobx



## Mobx要点

* 定义数据使用`observable`函数
* 更改状态使用`action`函数包装，默认不需要，当开启严格模式时需要，建议始终加上

```jsx
import React from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import App from "./App";

// 定义数据
var appState = observable({
  timer: 0
});

// 定义更改状态函数
appState.resetTimer = action(function reset() {
  appState.timer = 0;
});

setInterval(
  action(function tick() {
    appState.timer += 1;
  }),
  1000
);

render(<App appState={appState} />, window.root);
```



## 页面监测自动更新observe

> 有三种方式：observer、useObserver、Observer

**使用observer**

```jsx
import React from 'react'
import {observer} from 'mobx-react'
@observer
class App extends React.Component {
    render(){
        return (
        	<button onClick={() => {
                    this.props.resetTimer()
                }}>
                seconds: {this.props.appState.timer}
            </button>
        )
    }
}
export default App
```



**使用useObserver**

下面的例子中整个component都会被重新渲染

```jsx
import {useObserver} from 'mobx-react'
export default props => {
    return useObserver(() => (
    	<button onClick={() => props.resetTimer()}>
            seconds: {props.appState.timer}
        </button>
    ))
}
```



**使用Observer**

下面的例子只有Observer包裹的地方会被重新渲染

```jsx
//使用<Observer></Observer> 
import React from "react";
import {Observer, useLocalStore} from 'mobx-react-lite'

function App() {
  const store = useLocalStore(() => ({
    age: 18,
    setAge: action(() => {
      store.age += 1;
    })
  }));
  return (
    <div className="App">
      <Observer>{() => <h2>当前的isBooks：{store.age}</h2>}</Observer>
      <button onClick={store.setAge}>修改值</button>
    </div>
  );
}
```





## React项目注入Mobx案例

1. 安装插件
   * `yarn add mobx mobx-react mobx-react-lite -S`

2. 创建：store/books.js

```js
import { observable, action, computed, decorate } from "mobx";
class BookStore {
  list = [];
  isBook = "false";
  setIsBook = book => {
    this.isBook = book;
  };
  get book () {
      return this.isBook.toString()
  }
}
// 定义store, 或者写装饰器模式, 参考官方文档
decorate(BookStore, {
  list: observable,
  isBook: observable,
  setIsBook: action,
  book: computed
});
// 创建并返回store
const store = new BookStore();
export default store;

```

3. 创建：store/index.js

```js
import { createContext, useContext } from "react";
import { configure } from "mobx";
import books from "./books";

// 开启严格
configure({ enforceActions: "observed" }); 

// 创建store
const createMobxStore = () => ({
  books
});
const store = createMobxStore();

// 创建context上下文
const MobxContext = createContext(store);
const useMobx = () => useContext(MobxContext);

export {useMobx, store, MobxContext}
```

4. 在入口文件注入

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import {store, MobxContext} from "./store";
import App from "./App";

ReactDOM.render(
  // 用于使用inject注入
  <Provider {...store}>
    {/* 向下传递上下文, 常用于hooks组件使用 */}
    <MobxContext.Provider value={store}>
        <App />
    </MobxContext.Provider>
  </Provider>,
  document.getElementById("root")
);
```

5. 在组件中使用

```jsx
import React from 'react'
import { inject, observer } from "mobx-react";

// 函数组件操作方式雷同
class App extends React.Component {
    render(){
      const {books} = props
      return (
        <div className="App">
          <h2>当前的isBooks：{books.isBook.toString()}</h2>
          <button
            onClick={() => {
              books.setIsBook(!books.isBook);
            }}
          >
            修改值
          </button>
        </div>
      );
    }
}
export default inject("books")(observer(App));
```

6. hooks组件使用

```jsx
import React from "react";
import { useMobx } from "./store";
import { Observer } from "mobx-react-lite";

function App() {
  const { books } = useMobx();
  return (
    <div className="App">
      <Observer>
        {() => <h2>当前的isBook状态：{books.isBook.toString()}</h2>}
      </Observer>
      <button onClick={books.setIsBook}>修改值</button>
    </div>
  );
}
export default App;

```





## useLocalStore

>  函数组件本地使用状态 

```js
import React from "react";
import { action } from "mobx";
import { useLocalStore } from "mobx-react";
import { Observer } from "mobx-react-lite";

function App(props) {
  const store = useLocalStore(() => ({
    age: 18,
    setAge: action(() => {
      store.age += 1;
    })
  }));
  return (
    <div className="App">
      <Observer>{() => <h2>当前的isBooks：{store.age}</h2>}</Observer>
      <button onClick={store.setAge}>修改值</button>
    </div>
  );
}
```



## 开启严格模式

> 开户严格模式之后不允许随地更改，只能通过动作更改

```js
import {configure} from 'mobx'
configure({enforceActions: "observed"})
```

* `never` (默认): 可以在任意地方修改状态

* `observed`: 在某处观察到的所有状态都需要通过动作进行更改。在正式应用中推荐此严格模式。

* `always`: 状态始终需要通过动作来更新(实际上还包括创建)。



## 常用API

官方网站：[Mobx中文文档](https://cn.mobx.js.org/)

* `observable`：监测数据
* `action`：动作，用来修改数据
* `runInAction`：在action里面异步修改数据
* `computed`：计算值
* `autorun`：追踪observable数据变化
* `observer`：包裹高阶组件，mobx-react提供的




**异步修改observable**

```js
class Demo {
    @observable list = []
	@action fetchList = async () => {
        const res = await fetch('')
        runInAction(() => {
            this.list = res.results
        })
    }
}
```





## API定义方式

**使用装饰器定义**

```js
import {observable, action} from 'mobx';

class TaskStore {
    @observable tasks = []
    @action addTask(task) { /* ... */ }
}
```

**使用第二个参数定义**

```js
import {observable, action} from 'mobx'
const taskStore = observable({
    tasks: [],
    addTask(task) {}
}, {
    tasks: observable.shallow,
    addTask: action
})
```

**使用decorate定义**

```js
class TodoList {
    todos = {}
	get unfinishedTodoCount(){}
	addTodo(){}
}
decorate(TodoList, {
    todos: observable,
    unfinishedTodoCount: computed,
    addTodo: action
})
```



## mobx日志

```js
import { enableLogging } from 'mobx-logger';
// mobx 日志
enableLogging({
  predicate: () => true,
  action: true,
  reaction: true,
  transaction: true,
  compute: true
});
```








## 参考文章

* [mobx常用api及易混点解析](https://juejin.im/post/5ea2bf37e51d4546e951d053)