# React-02 脚手架、JSX

## 一、脚手架

安装

```bash
yarn global add create-react-app
```

生成项目

```bash
yarn create react-app demo(项目名称)  # 创建一个脚手架（带hook依赖检测）
yarn create react-app demo --typescript # 创建一个typescript的react脚手架
```

2020新写法：`yarn create react-app demo --template typescript`



### 创建src文件夹

1. 创建index.jsx入口文件

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

function App(){
    return <div>hello world</div>
}

ReactDOM.render(<App/>,document.getElementById('root'))
```



### 组件的创建方式

1. 函数的创建方式

```jsx
import React from 'react'
frunction App(){
    // 在return之前声明变量数据
    return (<div></div>)
}
// or
const App = ()=>{
    return (<div></div>)
}
export default App
```

2. 使用类创建组件

```jsx
//需要按需引入component；
import React,{Component} from 'react'
class App extends component{
    constructor(){
        super()
        this.pageNo = 0
        this.state = {msg: '哈哈'}
    }
    render(){return (<div>{this.state.msg}</div>)}
}
export default App
```

**创建类组件注意事项**

* 使用类创建的组件，定义变量时，需要使用constructor定义，定义了constructor必须调用super()；
* 定义变量时必须使用this，this指的是当前组件；
* 使用this.state定义状态值；state是JSX定制的变量，当state里面的变量改变时，会自动重新render；
* 在使用变量时，必须使用this.state调用变量；
* state也可以写在外面，直接state={}即可；调用时也需要加this；



### 组件注意事项

* （1）创建组件必须调用核心库，react；
* （2）在组件里，每使用一个图片，都需要import一个变量，src={这个变量}；
* （3）在应用组件时，标签名 首字母必须大写；



### 类创建与函数创建的区别

* （1）类有state状态机；
* （2）类有生命周期函数；
* （3）在传值时，接收参数需要加this；





## 二、react中修改state值

在react中，想要改变state的值，必须调用`this.setState`这个方法；

setState接收两个参数，第一个是修改state的updater函数，也可以是一个对象，第二个是回调函数

需要将setState视为请求，而不是立即更新，因此不能立即使用this.state，setState是异步的，如果后续操作需要同步，可以将事件写在第二个回调函数

```jsx
// 对象形式修改
this.setState({name: 'hhh'})

// 函数形式修改
// 函数将保证state和props永远是最新的；
this.setState((state, props)=>{
    return {count: state.count + 1}
})
```

实现一个同步修改state函数

```js
const setStateAsync = state => 
	new Promise(resolve => this.setState(state, resolve))

// 使用
(async () => {
    await setStateAsync({name: 'hhh'})
})()
```



**多次setState只有一次会生效**

```js
state = {count: 1}
this.setState({ count: this.state.count + 1 }, () => {
  console.log(this.state.count)
})
this.setState({ count: this.state.count + 1 }, () => {
  console.log(this.state.count)
})
```

上面的代码最终结果为2，原因是React会批处理机制中存储多个setState进行合并，如果需要多次setState，可以让setState接收一个函数，而不是一个对象，因为函数会用上一个state作为第一个参数；相当于：

```js
Object.assign(
	previousState,
    {count: state.count + 1},
    {count: state.count + 1},
    ...
)
```



**获取最新的state**

setState本生不是异步的，由于React批处理机制给人一种异步的假象，当使用**原生事件**处理时，不会触发React的批处理机制，可获取最新的值；

```jsx
// 第一种：使用函数，函数永远保留最新状态；
this.setState(nextState => ({count: state.count}), () => {
    console.log('最新值')
})

// 第二种：使用定时器，定时器在v8会放到最后执行；
componentDidMount() {
    setTimeout(() => {
        this.setState({count: this.state.count + 1}, () => {
            console.log(this.state.count, '获取最新值')
        })
        console.log(this.state.count, '获取值')
    }, 0)
}

// 使用原生事件
class Me extends React.Component {
  constructor(props) {
    super(props)
    this.btnRef = React.createRef(null)
    this.state = {count: 0 }
  }
  componentDidMount() {
    // 使用addEventListener改变值，也能获取最新值；
    this.btnRef.current.addEventListener('click', this.changeCount)
  }
  changeCount = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count, '获取最新值')
    })
    console.log(this.state.count, '获取值')
  }
  render() {
      return <button>修改值</button>
  }
}
```





## 三、react中的事件

在react中，定义方法建议使用箭头函数形式，防止this改变

```js
class App {
    handler = () => {
        // ...
    }
}
```

或者在constructor绑定也可：

```js
class App {
    constructor(){
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){}
}
```





在react中，点击事件需要使用onClick驼峰命名法，赋值一个变量；

* 第一种方法：直接调用方法名，比如

this可能指向undefined

```jsx
<button onClick={this.change}>
```

* 第二种传参方式：使用bind传参；

```jsx
<button onClick={this.change.bind(this,'参数')} //在事件中使用形参接收;
```

影响性能，建议在constructor中定义

```jsx
class App extends Component {
    constructor(prop) {
        super()
        this.change = this.change.bind(this)
    }
    change () {}
    render() {
        return (
        	<button onClick={this.change}>按钮</button>
        )
    }
}
```

* 第三种传参方式，封装一个函数，使用函数调用事件；

```jsx
<button onClick={()=>this.change('传参')}
```

第三种方式因为里面包了一个函数，导致里面的this指向可能有问题，因此在定义方法里面需要修改为箭头函数形式，如果不需要传参，则不需要修改箭头函数形式；

```js
change = () => {}
```

第三种方法render每次都会创建一个函数，性能差一点





## 四、深入JSX语法

### 使用点的语法来引用一个组件

```jsx
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

```



### JSX子元素

React 组件也能够返回存储在数组中的一组元素：这也是为什么使用map来循环数组的原因

```jsx
render() {
  // 不需要用额外的元素包裹列表元素！
  return [
    // 不要忘记设置 key :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>,
  ];
}

```



### 函数作为子元素

这种用法一般不常用，但是可以扩展JSX

```jsx
// 调用子元素回调 numTimes 次，来重复生成组件
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
```



### 布尔类型、Null 以及 Undefined 将会忽略

有利于判断渲染组件

```jsx
<div>
  {showHeader && <Header />}
  <Content />
</div>
```

当遇到数组length判断时，0会被渲染，因此建议判断大于0，或者使用!!强制转换布尔值

```jsx
<div>
  {!!props.messages.length &&
    <MessageList messages={props.messages} />
  }
</div>
```

