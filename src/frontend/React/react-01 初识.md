# React-01 初识

> react是用于构建用户界面的javascript库

中文官网：[https://react.docschina.org](https://react.docschina.org)

英文官网：[https://reactjs.org/](https://reactjs.org/)

## 一、介绍

### 什么是react

React 是Facebook内部的一个JavaScript类库（2013年的5月进行开源）。

React 可用于创建Web用户交互界面。

React不是一个完整的MVC框架,最多可以认为是MVC中的V（View）,甚至React并不非常认可MVC开发模式。

React 使用Facebook专门为其开发的一套语法糖--JSX。



### React优缺点

优点：

* （1）组件化开发
* （2）引入虚拟DOM,性能好,响应速度快
* （3）JSX语法糖 
* （4）单向数据绑定 Data Flow
* （5）跨浏览器兼容
* （6）完善的生态圈和活跃的社区

缺点：

不是完整MVC框架,不适用于复杂的大型应用



## 二、什么是虚拟DOM结构

相当于是一个对象 当视图有更新的时候 会生成一个新的对象，并与旧的进行比较 把有区别的地方进行更新 其他的不变 这样提高了高速渲染

### react中的diff算法

当使用React的时候，在某个时间点 render() 函数创建了一棵React元素树，在下一个state或者props更新的时候，render() 函数将创建一棵新的React元素树，
React将对比这两棵树的不同之处，计算出如何高效的更新UI（只更新变化的地方）



## 语法糖JSX

>  语法糖又叫做糖衣语法。

语法糖是指计算机语言中添加的某种语法,这种语法对语言的功能并没有影响,但是更方便程序员使用。

它主要的目的是增加程序的可读性,从而减少程序代码错处的机会。

* 这个语法不能直接被浏览器所解析 必须借助于babel文件去解析，把js和html混合使用
* 当它遇见`<>`的时候 就自动解析为html标签 如果它遇见`{}`会解析成js语法



## 三、快速尝试JSX

### 官方提供的CDN地址

```html
<!-- ... 其它 HTML ... -->

<!-- 加载 React。-->
<!-- 注意: 部署时，将 "development.js" 替换为 "production.min.js"。-->
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

<!-- 生产环境中不建议使用 -->
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
```

引入顺序：引入核心库 >> dom库 >> babel库

如果是普通的js语法，我们可以省略script标签的类型定义(`type='text/javascript'`)，但是在react中，我们应用的是jsx语法糖，这个语法糖无法直接解析，必须通过babel解析，所以我们的类型不能省略`text/babel`；

```html
<script type='babel'></script>
```

### 一个jsx的html文件例子

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="container"></div>
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  <script type='text/babel'>
    const h = React.createElement
    const btn = <button>hello</button>
    ReactDOM.render(btn, document.querySelector('#container'))
  </script>
</body>
</html>
```



### 在JSX语法注意事项

因为for和class是关键字，因此需要修改；

1. 只能有一个根元素；
2. 必须有闭合标签，如果是单标签，需要自闭合（带/号）；
3. 不能使用for，需要使用`htmlFor`；
4. 不能使用class，需要使用`className`；
5. 在input框中，默认值是使用`defaultValue`；
6. 在checkbox/radio时，默认选中`defaultChecked`；



### 简单JSX语法

1. 遇见{}会解析成js，遇见<>会解析成html标签；
2. {}里面不能写复杂的语句，但是支持三元运算符；
3. 在jsx中使用字符串插值

```html
<img src={img} />
```

4. 在jsx中循环数组

```jsx
let arr = [
    {name:'ls',age:18},
    {name:'ls',age:18}
]
let ele = (<ul>
    {arr.map((item,index)=>{
        return <li key={index}>{item.name}</li>
    })}
</ul>)
```

在jsx中建议使用map方法循环数组，map返回一个新的数组渲染到页面，循环的元素必须有key值；



### 显示一个button按钮

react将createElement方法暴露出来，可以使用以下两种方法：

`React.createElement(htmlName, props, content)`

```jsx
const e = React.createElement
return e('button', {}, 'hello')

// or
return <button>hello</button>
```



## 四、React中的样式

react中的样式优先级：css文件 --> module.css文件 -->  scss文件

cssmodule文件将css样式模块化：1.module.css；

```css
.img{
   width: 100px; 
}
.img2 {
    // 引入上面的类名;
    composes: img;
    width: 100px;
}
```

下面的例子使用模块化css，渲染时的class类名将是带hash值的，与其他的隔离，具有唯一性；

```jsx
import style from './1.css'
const Div = <div className={style.img}></div>
```



全局css使用css文件或者scss文件即可；





## 五、key值

必须拿唯一值去代替，一般情况下，我们用数组返回来的id去赋值，如果实在没有，就用index索引，但是用索引有可能产生负面影响，组件有可能报错；
注意：千万不要使用`Math.Random()`去做key值，因为`Math.Random`会导致频繁更新key值，会无法缓存组件；



## 六、其他语法

### 动态Style

* 在react中使用动态style样式时，必须使用驼峰命名法，

* react会自动添加`px`后缀，其他后缀需要添加字符串组成；
* 由于使用变量需要对象包裹，style的值也是一个对象；

```jsx
<div style={{marginRigth: btnwidth}} />

<div style={{display: (index===this.state.currentIndex) ? "block" : "none"}}>...</div>

//or 
<div style={toggle ? 
  { background: 'blue', backgroundColor: 'red' } : 
  { backgroundColor: 'red' }
}>...</div>
```



### 动态class

`className` 指定css的class；

```jsx
<div className={`icon-font ${this.state.flag ? 'iconfont' : ''}`}
```



### 渲染html标签

`dangerouslySetInnerHTML`

为了防止跨站脚本（XSS）的攻击，替换innerHTML，使用变量，可以解析html标签内容

```jsx
<div dangerouslySetInnerHTML={{__html:this.state.htmlContent}}></div>
```



### 条件语句

在react中的标签部分不能直接使用if语句，但是可以使用三目运算符

```jsx
{this.state.addarflag ? <Skeleton active /> : ''}  // 三目判断放标签
style={{display: this.state.flag ? 'block' : 'none'}}  // 三目显示隐藏标签
```



