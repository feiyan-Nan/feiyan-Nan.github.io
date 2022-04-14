# React-05 其他Api
## 一、React.memo
1. 当一个父组件放了多个子组件时，这个父组件发生改变时，无论子组件数据有没有变化，都会重新渲染所有的子组件，导致重复渲染的问题出现；
2. 使用React.memo可以包裹函数或类组件之后导出，会根据内部组件的props变化，来实现是否重新渲染组件，
```jsx
class App extends React.Comopnent{}
export default React.memo(App)
```
3. React.memo支持两个参数，第一个参数是纯函数，第二个参数跟shouldComponentUpdate一样

```jsx
import React from 'react'
function App(){}
function areEqual(prevProps, nextProps){
    if(prevProps.seconds === nextProps.seconds){
        return true
    } else {
        return false
    }
}
export default React.memo(App, areEqual)
```
4. 当使用Redux时
```jsx
const mapStateToProps = state => ({
    state: ''
})
export default connect(mapStateToProps)(React.memo(App))
```

## 二、React.PureComponent
1. 同memo一样，是解决重复渲染的问题，使用PureComponent直接代替Component，会进行props对比，来更新组件的数据；
```jsx
class App extends React.PureComopnent{}
```
2. 使用PureComponent时，在传入的props数据不能太深，因为作的是浅比较，如果比较的是对象，使用PureComponent即不生效了

   ```jsx
   // 之前  传入的是整个对象
   <Comment data={c} />
   
   // 之后（将数据展开）, 传入的是每个属性了
   <Comment {...c} />
   ```

   

3. 函数组件实现PureComponent
```jsx
const shouldComponentUpdate = arePropsEqual => BaseComponent => {
    class ShouldComponentUpdate extends React.Component{
        shouldComponentUpdate(nextProps) {
            return areaPropsEqual(this.props.nextProps)
        }
        render () {
            return <BaseComponent {...this.props} />
        }
    }

    ShouldComponentUpdate.displayName = `Pure(${BaseComponent.displayName})`
    return ShouldComponentUpdate
}

const Pure = BaseComponent => {
    const hoc = shouldComponentUpdate(
        (props, nextProps) => !shallowEqual(props, nextProps)
    )
    return hoc(BaseComponent)
}
```
（3）使用方法
```jsx
import React from 'react'
const Child = props => <div>{props.name}</div>
export default Pure(Child)
```

## 三、lazy、Suspense懒加载组件
```jsx
import React,{lazy, Suspense} from 'react'

const About = lazy(()=>import('./pages/About'))

function App(){
    return (
        <>
            <Suspense fallback={<div>加载中</div>}>
                <About />
            </Suspense>
        </>
    )
}
```
1. lazy和Suspense必须搭配使用，lazy懒加载组件，返回一个组件，Suspense包裹懒加载的组件；
2. Suspense必须有一个fallback属性，并且属性值必须是一个实例，不能是`fallback={Loading}`，而必须是`fallback={<Loading/>}`
3. 由于本地代码加载比较快，可以自己实现一个函数，另加载延迟，能够看出来
```jsx
function slowImport(value, ms=1000){
    return new Promise(resolve => {
        setTimeout(() => resolve(value), ms)
    })
}
const About = React.lazy(()=>slowImport(import('./pages/About'), 1000))
```
4. 优化Network

下图2.chunk.js是通过lazy懒加载的组件展示的，可以修改名称

![image](https://notecdn.hrhe.cn/images/react-04_其他Api，动画-01.png)

```jsx
const About = lazy(()=>import(/*webpackChunkName:"about"*/))
```

![image](https://notecdn.hrhe.cn/images/react-04_其他Api，动画-02.png)

5. Suspense无法捕获组件加载错误，可以使用componentDidCatch捕获，也可以使用静态方法getDerivedStateFromError捕获错误
```jsx
class App extends Component {
    state = {
        hasError: false
    }
    // 使用componentDidCatch捕获
    componentDidCatch(){
        this.setState({hasError: true})
    }

    // 使用getDerivedStateFromError
    static getDerivedStateFromError(){
        // 通过返回一个state数据, 系统会自动合并组件的state数据
        return {
            hasError: true
        }
    }
}
```

## 四、React.createPortal
**将元素添加到root之外**

一般使用 React 的组件都是挂到父组件的 this.props.children 上面，总是被最近的父组件所捕获，最终到 React 根组件上。

而 Protals 则提供了一种将组件直接挂载到直接父组件 DOM 层次之外的一类方式。

react-dom 提供的具体方法是 `ReactDOM.createPortals(child, container)`

这个方法需要两个参数，第一个参数是需要挂载的组件实例，而第二个参数则是要挂载到的DOM节点。一般来说第一个参数可能传递的是需要挂载的 this.props.children

```jsx
import {createPortal} from 'react-dom' // 关于渲染的api都在react-dom里面
class App extends React.Component(){
    constructor(){
            this.el = document.createElement('div');
            this.el.setAttribute('class', 'tjb-mask');
    }
    componentDidMount(){
        document.body.appendChild(this.el)
    }
    componentWillUnmount(){
        document.body.removeChild(this.el)
    }
    render(){
        return createPortal(<>{this.props.children}</>, this.el)
    }
}
```
建议可以在html模板文件中，添加一个多余的div块，用来单独添加其余的模块；

教程地址： [http://www.ptbird.cn/react-portal-createPortal.html](http://www.ptbird.cn/react-portal-createPortal.html)



## 五、React DOM操作

**React.Children**

React提供用于操作this.props.children的工具函数，一般children是只读的，需要使用React提供的工具函数才能操作；

React.Children有5个方法：

* `React.Children.map()` 类似Array.prototype.map

```jsx
function Father({children}) {
    return (
    	<div>
        	{React.Children.map(children, (child, index) => {
                ...
            })}
        </div>
    )
}
```

* `React.Children.forEach(children, fn)`：  和map一样，无返回；
* `React.Children.count(children)` ： 用来计数，返回child的个数，使用children.length则会报错；
* `React.Children.only(children)`：验证children里只有唯一的孩子并返回他，否则这个方法抛出一个错误
* `React.Children.toArray(children)`：将children转换成Array，对children排序时使用

```jsx
function Father({children}) {
    let c = React.Children.toArray()
    return (
    	<div>
        	{c.sort().join(' ')}
        </div>
    )
}
<Father>
	{"ccc"}
    {'aaa'}
    {'bbb'}
</Father>

// aaa bbb ccc
```



循环给输入框修改属性，在React中修改children时需要使用`React.cloneElement`先进行克隆

```jsx
{
    React.Children.map(props.children, node => {
        React.cloneElement(node, {
            value: '',
            onChange: this.changeHandle
        })
    })
}
```

