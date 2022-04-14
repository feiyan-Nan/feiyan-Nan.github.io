# React-07 hooks
## 一、useState代替state状态机
不使用类的方式，仅使用函数的方式，也可以定义state状态机以及生命周期

1. 使用数组解构的方式，取count和setCount，一个是值，一个是设置值
2. 在useState后面，括号里面填写默认值，可以是任意类型；
3. 如果useState设置初始值需要经过复杂计算获得，可以使用一个函数；
```jsx
import React, {useState} from 'react'
export default () => {
    const [count, setCount] = useState(0)
    // const [count, setCount] = useState(()=>props.count)  // 通过函数返回值,可以处理一些逻辑;
    return (
        <div>
            <p>这是定义的变量{count}</p>
            <button onClick={_=>setCount(count+1)}>增加</button>
        </div>
    )
}
```
4. 当定义的hooks是引用数据类型时的修改方法
```jsx
const [item, setItem] = useState([
    {id: 1, name: 'zs'},
    ...
])
// 删除
setItem(items=>   //使用函数式修改引用类型的状态机,第一个参数是items
    items.filter(item=>item.id!==id)
)
// 添加
setItem(items=>[
    ...items,
    {id: 2, name: 'ww'}
])
```
注意事项：

（1）hooks中，声明useState没有对应的key值，是通过useState出现的顺序来定的，因此，不能通过if...else语句调用，这样出现的顺序会发生变化的；

（2）hooks在class声明中是没有

（3）当useState的值是调用函数得到的话，需要使用函数式

```jsx
const [rows, setRows] = useState(() => createRows(props.count))
```

## 二、useEffect代替常用生命周期函数
1. useEffect函数代替了两个生命周期：componentDidMount、componentDidupdate、componentWillUnmount

当在函数返回一个值时，会在组件注销时调用，比如可以在组件注销时清楚定时器
```jsx
import React, {useEffect} from 'react'
export default ()=>{
    useEffect(()=>{
        console.log('这是生命周期使用方法')
    })
}

// useEffect需要使用async时;
useEffect(()=>{
    async function fetch(){}
    fetch()
},[])
```
2. useEffect的第二个参数

（1）第二个为依赖值，当传入是空数组时，告诉useEffect只在挂载时渲染一次，之后不在执行（因为空数组不存在依赖值）；

（2）当传入的是具体的值时，则在依赖的值发生改变时才会执行useEffect；
```jsx
useEffect(()=>{},[])  // 只调用一次,里面的state或props改变不会再次执行;
useEffect(()=>{},[count]) // 当count值发生改变时会执行useEffect里面的代码;
```

3. useEffect可以返回一个函数，相当于componentWillUnmount，与componentWillUnmount不同的是，它会在调用一个新的effect之前对前一个effect进行清理；因此当状态改变时，首先执行effect返回的函数，再执行effect函数；
```jsx
function counter(){
    const [list, setList] = React.useState([])
    React.useEffect(()=>{
        let ignore = true
        async function fetch(){
            const response = await fetch('https://wyy.heny.vip/banner')
            const json = await response.json()
            // 处理无序的响应
            ignore && setList(json)
        }
        fetch()
        return () => { ignore = false}
    })
}
// 当组件被卸载时，不设置state;
```

4. useEffect和componentDidUpdate的区别

在componentDidUpdate中，当状态改变时，每次获取的都是最新的值，并没有过程
```jsx
useEffect(()=>{
    setTimeout(()=>{
        console.log(count)  // 1,2,3,4,5
    },2000)
})
// 因为useEffect通过闭包的方式,可以拿到过程;

componentDidUpdate(){
    setTimeout(()=>{
        console.log(this.state.count) // 5,5,5,5,5
    },2000)
}
```
解决问题：useRef可以用来存储任何会改变的值，解决了在函数组件上不能通过实例去存储数据的问题，另外你还可以通过useRef来访问到改变之前的数据；
```jsx
function Counter(){
    const [count, setCount] = React.useState(0)
    const ref = React.useRef(count) // 赋值0,之后一直是0
    React.useEffect(()=>{
        // 可以在重新赋值之前判断先前存储的数据和当前数据的区别;
        ref.current = count  // 必须有重新赋值的一步;
        setTimeout(()=>{
            console.log(ref.current)  //一直是最新值了;
        },2000)
    })
}
```


5. useEffect函数分离，如果fetch不使用useCallback包裹的话,useEffect会无限执行,因为每次函数创建都会执行,useEffect会认为是在更新
```jsx
const fetch = useCallback(async ()=>{
    /*.....*/
},[])  

React.useEffect(()=>{
    fetch()
},[fetch])  //必须传入使用到的变量作为依赖项
```

6. useLayoutEffect 同步执行副作用

useLayoutEffect会在render，DOM更新之后同步触发函数，会优于useEffect异步触发函数，对DOM的操作建议使用useLayoutEffect，

官方建议在useEffect不能实现功能的情况使用useLayoutEffect
```jsx
function App() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const title = document.querySelector("#title");
    const titleWidth = title.getBoundingClientRect().width;
    console.log("useLayoutEffect");
    if (width !== titleWidth) {
      setWidth(titleWidth);
    }
  });
  useEffect(() => {
    console.log("useEffect");
  });
  return (
    <div>
      <h1 id="title">hello</h1>
      <h2>{width}</h2>
    </div>
  );}
```

## 四、useCallback

当传入的依赖项发生改变时，才触发里面的函数，返回的是一个函数；

```jsx
const memoizedCallback = useCallback(()=>{console.log(a,b)},[a,b])

// 建议填写函数时都使用useCallback包裹一下
// useCallback里的小括号可以接收形参, 小括号前面可以直接放async;
const handleClick = useCallback(()=>{
    /*...*/
},[])
```

## 五、useMemo性能优化
可以处理复杂逻辑，避免每次渲染时都进行高开销的计算，相当于computed，可以在第二个参数中传入数组，只在依赖项发生变化时才改变，返回的是一个值
```jsx
const memoValue = useMemo(()=>computeCangeValue(a,b),[a,b])
```
如果没有提供依赖项数组，则每次渲染都会计算新的值


## 六、useRef
1. 在函数式声明组件当中，是不能给标签绑定ref来获取元素的，可以通过定义useRef来给标签绑定ref，通过访问定义的.current可以访问到值
```jsx
import React,{useRef} from 'react'
export default function(){
    const inputEl = useRef(null)

    const change = () => {
        console.log(inputEl.current.focus())        
    }

    return (
        <>
            <input ref={inputEl} />
            <button onClick={change}>获取焦点</button>
        </>
    )
}
```
2. 也可以useRef也可以保存任何可变值，
```jsx
const cur = useRef(count) //count是定义的数值;
cur.current //取值是count的值;
```
当count被改变时,cur始终是之前的count的初始值（state变更不会触发useRef变更），如果需要cur也被改变，需要给cur.current = count，重新赋值，这样可以始终取count的最新值；

绑定定时器setTimeout、setInterval时，建议使用useRef，而不是useState；

4. 如果需要逻辑复杂的运算：
```jsx
// 每次渲染都会被执行一次
const ref = useRef(new IntersectionObserver(onIntersect))

// 自己创建惰性函数，只执行一次
function getObserver(){
    if(ref.current === null){
        ref.current = new IntersectionObserver(onIntersect)
    }
    return ref.current
}
// 在需要的时候调用getObserver();
```

## 七、useImperativeHandle
1. useImperativeHandle应该与forwardRef一起使用，使用方法如下，在createHandler函数里面返回一个对象，父组件就可以使用该对象了

```jsx
useImperativeHandle(ref, createHandler, [deps])
```
2. demo例子
```jsx
// 子组件需要接收ref
function Child(props,ref){
    // useImperativeHandle函数返回一个对象, 对象里面填写需要发送给父组件的方法或属性
    React.useImperativeHandle(ref, ()=>({}), [])
    return (<div></div>)
}
const ChildRef = React.forwardRef(Child)

// 父组件
function Parent(){
    const ref = React.useRef(null)
    React.useEffect(()=>{
        // current里面是子组件返回的方法
        console.log(ref.current)
    },[])
    return (<div>
        <ChildRef ref={ref} />
    </div>)
}
```

## 八、useReducer

 useReducer适用于useState过于复杂时使用，用法和redux是一样的；

```jsx
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```
dispatch建议在context中，向下传递更方便



## 九、useContext

为了用来传值

在父组件中创建createContext()，之后使用.Provider嵌套组件，通过value进行传值；

```jsx
import React from 'react'
const AppContext = React.createContext()
class Paren extends React.Component{
    render(){
        return(
            <AppContext.Provider value={{test:'hhh'}}>
                <div />
            </AppContext.Provider>
        )
    }
}


// 子组件：class使用
import React from 'react'
import {AppContext} from './parent'
class Child extends React.Component {
    render() {
        return (
            <AppContext.Consumer>
                { context => (
                    <div>{context.text}</div>
                ) }
            </AppContext.Consumer>
        )
    }
}


// 子组件：使用useContext方法
import React,{useContext} from 'react'
import {AppContext} from './parent'
export default function(){
    const text = useContext(AppContext)   //取到value值;
    return(
        
    )
}
```
**总结：**
`useState`：传入我们所需的初始状态，返回一个常量状态以及改变状态的函数；

`useEffect`：第一个参数接受一个callback，每次组件更新都会执行这个callback，并且callback可以返回一个函数，该函数会在组件销毁前执行。如果useEffect内部有依赖外部的属性，并且希望依赖属性不改变就不重复执行useEffect的话，可以传入一个依赖数组作为第二个参数；

`useRef`：如果你需要有一个地方来存储变化的数据；

`useCallback`：如果你需要一个不会随着组件更新而重新创建的callback；

## 十、自定义Hook
通过自定义hook，可以将组件逻辑提取到可重用的函数中；

自定义hook是一个函数，以use开头，函数内部可以调用其他的hook

自定义hook返回的不再是组件了，而是值，值可以是所有类型的值；

官方例子：
```jsx
import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}

// 使用自定义的hook

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

自定义获取元素的位置信息hook
```jsx
function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}

// 使用方法
function App(){
    const [rect, ref] = useClientRect()
    return (
        <>
            <h1 ref={ref}>哈哈</h1>
            <button onClick={()=>{console.log(rect.height)}}>获取高度</button>
        </>
    )
}
```


自定义定时器hook例子：
```jsx
import { useRef, useEffect } from 'react';

export default function useInterval(callback, delay) {
    const latestCallback = useRef(() => {});

    useEffect(() => {
        latestCallback.current = callback;
    });

    useEffect(() => {
        if (delay !== null) {
            const interval = setInterval(() => latestCallback.current(), delay || 0);
            return () => clearInterval(interval);
        }
        return undefined;
    }, [delay]);
}
// 使用：

import { useInterval } from 'utils'
const test = props => {
    const [count, setCount] = useState(5);
    useInterval(() => {
        setCount(count - 1);
    }, 1000);
    return (
        <View>
            {count < 1 ? (
                <Button {...resendBtn} press={() => setCount(5)} />
            ) : (
                <Text style={{ margin: 5, color: 'gray', fontSize: 12 }}>{count}s后重新发送</Text>
            )}
        </View>
    );
};
```
当自定义hooks导出对象的情况，由于都是多次使用的，解构出来会重名，可以使用解构重命名来解决这个问题
```jsx
// 受控组件使用
function useInputValue(initialValue){
    const [value, setValue] = React.useState(initialValue)
    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: e => setValue('')
    }
}

// 使用hooks
function Forms(){
    // 解决命名重复问题
    const {resetValue: resetText, ...text} = useInputValue('')
    const {resetValue: resetPasd, ...pasd} = useInputValue('')
    return (
        <>
            <input type='text' {...text} />
            <input type='password' {...pasd} />
        </>
    )
}
```

## 十一、redux-react-hook
react-redux 7.1以下的版本使用，7.1之后的版本，自己暴露了useSelector和useDispatch方法；
1. 地址：[https://www.jianshu.com/p/a9809958133d](https://www.jianshu.com/p/a9809958133d)
2. 安装
```jsx
npm i redux-react-hook
```
3. 修改入口文件，绑定store
```jsx
import {StoreContext} from 'redux-react-hook'
ReactDOM.render(
    <StoreContext.Provider value={store}>
        <App />
    </StoreContext.Provider>,
    window.root
)
```
也可以直接使用StoreContext来直接访问存储
```jsx
import {useContext} from 'react'
import {StoreContext} from 'redux-react-hook'
function App(){
    const store = useContext(StoreContext)
    console.log(store.getState())
}
```
4. useMappedState函数

必须使用useCallback函数包裹，因为每次传入一个新的mapState函数，将无限递归，useMappedState接收第二个参数，进行对比是否重新渲染
```jsx
import {useMappedState} from 'redux-react-hook'
import shallowEqual from 'shallowequal' // 对比插件, 浅比较,两个对象可以相等
function App(){
    const mapState = useCallback(state => ({name: state.name}), [])
    const  {name} = useMappedState(mapState, shallowEqual)
}
```
5. useDispatch函数
```jsx
import {useDispatch} from 'redux-react-hook'
function App(){
    const dispatch = useDispatch()
    const changeValue = useCallback(()=>dispatch({type: '', payload}))
}
```

## hooks常见问题
1. 声明hooks函数时，声明的函数组件名必须首字母大写
```jsx
function Person(){}
export default Person
```
2. 依赖项的设置注意事项

（1）props、import的变量、创建的变量在依赖项函数中使用了就必须设置；

（2）useState需要设置依赖项

3. 使用 [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation)插件来控制Eslint可以方便的为我们检测数组依赖

4. 当添加依赖被频繁调用时，在useEffect中设置值时，可以使用函数形式来设置，当然，在useEffect中还是访问不到值；
```jsx
useEffect(()=>{
    setCount(preCount => preCount + 1)
},[])
```
一个页面可以写多个useEffect，可以放多个useEffect；

5. 在依赖列表中不能省略函数
```jsx
function Example({someProp}){
    function doSomething(){
        console.log(someProp)
    }
    useEffect(() => {
        doSomething() 
    }, []) // 不安全, 因为调用doSomething依赖了someProp
}

// 正确写法一：
function Example({someProp}){
    useEffect(() => {
        function doSomething(){
            console.log(someProp)
        }
        doSomething()
    }, [someProp])
}

// 正确写法二：
function Example({someProp}){
    const doSomething = useCallback(()=>{
        console.log(someProp)
    },[someProp])
    useEffect(()=>{
        doSomething()
    },[doSomething])
}
```
6. 如果state值依赖state值，又频繁执行useEffect的情况，不能添加依赖
* 尝试用useReducer Hook把state更新逻辑移到effect之外，useReducer的dispatch的身份永远是稳定的，即使reducer函数是定义在组件内部并且依赖props；


```jsx
function reducer(state, [type,payload]){
    switch(type){
        case '' : return {}
    }
}
const initialState = {padding: 0}
function App(){
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        dispatch([type, action])
    },[])
}
```
参考： [https://adamrackis.dev/state-and-use-reducer/](https://adamrackis.dev/state-and-use-reducer/)
* 万不得已的情况下，可以使用ref保存一个可变的变量；仅当你实在找不到更好的办法的时候才这么做，因为依赖于变更会使得组件更难以预测；


```jsx
function Example(props){
    // 把最新的props保存在一个ref中
    const latestProps = useRef(props)
    useEffect(() => {
        latestProps.current = props;
    })
    useEffect(()=>{
        function tick(){
            console.log(latestProps.current)
        }
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    },[]) // 这个effect从不会重新执行;
}
```

