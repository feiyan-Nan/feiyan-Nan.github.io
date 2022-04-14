# react hooks 实现原理

## useState原理

1. ##### 核心思想：定义一个变量 当渲染组件的时候拿到上个状态

   ```js
   let lastState //上一个状态
   function useState(initialState){
       lastState = lastState || initialState
       function setState (newState){
           lastState = newState
           render()//每次调用setState就会重新刷新渲染组件
       }
       return [lastState,setState]
   }
   ```

2. ##### 当使用多个state的时候 可以用数组储存变量

   ```js
   let hookStates = [] //保存状态的数组
   let hookIndex = 0 //状态索引
   function useState (initialState){
       hookStates[hookIndex] = hookStates[hookIndex] || initialState
       // 利用闭包特性 setState执行 不会改变currentIndex
       let currentIndex = hookIndex 
       function setState(newState){
           hookStates[currentIndex] = newState
           render()
       }
       return [hookStates[hookIndex++],setState]
   }
   function render(){
       //必须重置为0 否则hookIndex的状态会一直累加 找不到索引项
       hookIndex =0 
       //渲染react dom
       ReactDom.render(<App>,document.getElmentById('root'))
   }
   render()
   ```



## useCallback (减少渲染次数)

```js
let hookStates = [] //保存状态的数组
let hookIndex = 0 //状态索引
function useCallback (callback,dependencies){
    //说明不是第一次  
    if(hookStates[hookIndex]){
        let [lastCallback,lastDependencies] = hookStates[hookIndex]
        let same = dependencies.every((item,index)=>item===lastDependencies[index])
        if(same){
            hookIndex++
               return lastCallback
        }else{//只要有一个变量依赖变化
            hookStates[hookIndex++] = [callback,dependencies]
            return callback
        }
    }else{//说明是第一次渲染
        hookStates[hookIndex++] = [callback,dependencies]
        return callback
    }
}
function render(){
    //必须重置为0 否则hookIndex的状态会一直累加 找不到索引项
    hookIndex =0 
    //渲染react dom
    ReactDom.render(<App>,document.getElmentById('root'))
}
render()
```



## useMemo (减少渲染次数)

```js
let hookStates = [] //保存状态的数组
let hookIndex = 0 //状态索引
function useCallback (factory,dependencies){
    //说明不是第一次  
    if(hookStates[hookIndex]){
        let [lastMemo,lastDependencies] = hookStates[hookIndex]
        let same = dependencies.every((item,index)=>item===lastDependencies[index])
        if(same){
            hookIndex++
               return lastMemo
        }else{//只要有一个变量依赖变化
            //接受一个函数执行 获得新的memo值
            let newMemo = factory()
            hookStates[hookIndex++] = [newMemo,dependencies]
            return newMemo
        }
    }else{//说明是第一次渲染
        let newMemo = factory()
        hookStates[hookIndex++] = [newMemo,dependencies]
        return newMemo
    }
}
function render(){
    //必须重置为0 否则hookIndex的状态会一直累加 找不到索引项
    hookIndex =0 
    //渲染react dom
    ReactDom.render(<App>,document.getElmentById('root'))
}
render()
```

## useEffect

```js
let hookStates = [] //保存状态的数组
let hookIndex = 0 //状态索引
function useEffect (callback,dependencies){
    //说明不是第一次  
    if(hookStates[hookIndex]){
        let lastDependencies = hookStates[hookIndex]
        let same = dependencies.every((item,index)=>item===lastDependencies[index])
        if(same){
            hookIndex++
        }else{//只要有一个变量依赖变化
            //添加一个宏任务，在本次渲染之后执行
            hookStates[hookIndex++] = dependencies
            setTimeout(callback)
        }
    }else{//说明是第一次渲染
        hookStates[hookIndex++] = dependencies
        setTimeout(callback)
    }
}


// useEffect 销毁生命周期的写法
function useEffect (callback,dependencies){
    //说明不是第一次  
    if(hookStates[hookIndex]){
        let [oldDestroy ,lastDependencies ] = hookStates[hookIndex]
        let same = dependencies.every((item,index)=>item===lastDependencies[index])
        if(same){
            hookIndex++
        }else{//只要有一个变量依赖变化
            oldDestroy()
            //添加一个宏任务，在本次渲染之后执行
            let destroy = callback()
            hookStates[hookIndex++] = [destroy,dependencies]
        }
    }else{//说明是第一次渲染
        let destroy = callback()
        hookStates[hookIndex++] = [destroy,dependencies]
    }
}
function render(){
    //必须重置为0 否则hookIndex的状态会一直累加 找不到索引项
    hookIndex =0 
    //渲染react dom
    ReactDom.render(<App>,document.getElmentById('root'))
}
render()
```



## useLayoutEffect

```js
let hookStates = [] //保存状态的数组
let hookIndex = 0 //状态索引
function useLayoutEffect (callback,dependencies){
    //说明不是第一次  
    if(hookStates[hookIndex]){
        let lastDependencies = hookStates[hookIndex]
        let same = dependencies.every((item,index)=>item===lastDependencies[index])
        if(same){
            hookIndex++
        }else{//只要有一个变量依赖变化
            hookStates[hookIndex++] = dependencies
            //添加一个微任务，在本次渲染之前执行
            queueMicrotask(callback)
        }
    }else{//说明是第一次渲染
        hookStates[hookIndex++] = dependencies
        queueMicrotask(callback)
    }
}
function render(){
    //必须重置为0 否则hookIndex的状态会一直累加 找不到索引项
    hookIndex =0 
    //渲染react dom
    ReactDom.render(<App>,document.getElmentById('root'))
}
render()
```

![img](https://app.yinxiang.com/FileSharing.action?hash=1/4dc0611c1216575e2c734795ef3ddd7a-283887)



## useContext

```js
let counterContext = React.createContext()
function useContext (context){
    return context._currentValue
}
//eg:
let [state,setState] = useContext(counterContext)
<CounterContext.Provider value={{state,setState}}>
    <Counter/>
</CounterContext.Provider>
```



## useReducer

```js
let hookStates = [] //保存状态的数组
let hookIndex = 0 //状态索引
function useReducer (reducer,initialState){
    hookStates[hookIndex] = hookStates[hookIndex] || initialState

    let currentIndex = hookIndex 
    function dispatch(action){
        hookStates[currentIndex] = reducer?reducer(hookStates[currentIndex],action):action
        render()
    }
    return [hookStates[hookIndex++],dispatch]
}
```

