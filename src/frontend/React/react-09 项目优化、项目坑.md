# React-09 项目优化、项目坑
## 一、项目优化
### 减少标签

`<></>`可以使用空标签，当输入的为空标签时，渲染的默认是`<React.Fragment></React.Fragment>`

### 严格模式

`React.StrictMode`：

严格模式只在开发模式下运行，不会与生产模式冲突，可以在任何地方使用，如同Fragment；

Strict mode有助于：

* 识别具有不安全生命周期的组件
* 有关旧式字符串ref用法的警告（使用第三方库很难确保不使用这些生命周期的方法，加上这个可以帮忙判断）
* 关于已弃用的findDOMNode用法的警告（findDOMNode是传入一个ref则可以获取真实dom元素）
* 检测意外的副作用
* 检测遗留的context API



### 重复渲染问题

1. 使用shouldComponentUpdate来解决

```jsx
shuldComponentUpdate(nextProps,nextState){
    if(nextProps.num === this.props.num){
        return false
    }
    return true
}
```
2. 使用PureComponent来解决，替换component为PureComponent，因为PureComponent会对数据进行比较

```jsx
class App extends React.PureComponent{}  // 会根据props是否变化, 来解决重复渲染
```

3. 函数组件使用memo包裹；

```jsx
function App(){}
const App2 = React.memo(App)
```





### 关于首屏加载慢

下载骨架屏：[https://github.com/danilowoz/react-content-loader#examples](https://github.com/danilowoz/react-content-loader#examples)

使用ReactDOMServer来加载首屏；



### 长列表优化

使用官方推荐的长列表：react-window；



### 错误边界处理

（1）创建一个文件ErrorBoundary.js，写入以下内容
```jsx
export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    }
    // 子元素发生错误时执行该事件
    componentDidCatch(error,errorInfo){
        this.setState({
            hasError: true,
            error,
            errorInfo
        })
    }
    render() {
        if(this.state.hasError){
            // 出错渲染render方法,render在使用该组件时定义
            return <div>{this.props.render(this.state.error,this.state.errorInfo)}</div>
        }
        // 没有出错则渲染子元素, 当子元素出错会触发compnentDidCatch
        return this.props.children
    }
}
```
（2）使用该组件
```jsx
function App(){
    return (
        <ErrorBoundary render={() => <p>出错了</p>}>
            <div>哈哈</div>
        </ErrorBoundary>
    )
}
```



### 路由按需加载

1. 安装：`react-loadable`
2. 使用
```jsx
import Loadable from 'react-loadable' // 引入按需加载
import Loading from '@/common/Loading' // 引入loading组件, 加载组件时显示
const SelectComponent = Loadable({
    loader: () => import('@/components/Select'),
    loading: Loading
})
```



## 二、项目坑

1. 在声明state时，初始化不要使用null，将null换为空字符串则不会报错；

在有使用请求数据，数据为对象时，获取对象里面的对象会报错，可以在render(){}的return前面判断一下，如果没有数据，则return

```js
if(!this.state.list) return true // 则不会执行下面的;

// 请求数组没有数据同理
if(!arr.length) return true //true必须填写 否则报错;
```

2. 不要操作innerHTML，在html代码里面填写三目运算符;

3. 在做项目时，需要状态的东西要定义state，不然每次渲染会重新声明，无法保存

4. 解决项目需要点击两次的问题（所有两次都可以通过定时器解决）

原因：是因为第一次没有拿到数据就去渲染了，所以数据不是最新的，延时一下就解决了；

![image](https://notecdn.hrhe.cn/images/react-09_项目优化、项目坑-01.png)



### ios输入框导致页面上移

将以下代码放到生命周期DidMount里面
```jsx
let timer
const inputBlur = e => {
    if(e && e.target && e.target.tagName && e.target.tagName.toLowerCase() === 'input'){
      timer.current = setTimeout(()=>{
        window.scrollTo(0,0)
      },4)
    }
}
const inputFocus = e => {
   if(e && e.target && e.target.tagName && e.target.tagName.toLowerCase() === 'input'){
      clearTimeout(timer.current)
    }
}
父元素.addEventListener('focusout',inputBlur, false)
父元素.addEventListener('focusin', inputFocus, false)
```

6. 解决 `Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method` 报红

原因：在willMount中有setState的事件，
```jsx
class Test extends React.Component {
    _isMounted = false
    componentDidMount(){
        this._isMounted = true
        this._isMounted && this.setState({...})
    }
    componentWillUnmount(){
        this._isMounted = false
    }
}
```
常发生场景：
* 定时器
* 网络请求
* 事件监听


在组件销毁前都应得到相应的处理

例子可以使用这个定时器触发
```jsx
const MyApi = {
    count: 0,
    subscribe(cb) {
        this.intervalId = setInterval(() => {
            this.count += 1;
            cb(this.count);
        }, 1000);
    },
    unSubscribe() {
        clearInterval(this.intervalId);
            this.reset();
        },
    reset() {
        this.count = 0;
    }
};
```

7. 解决链接出现callback is not defined

在window上面添加一个callback方法即可；
```jsx
window.callback = function () {}
```



## 三、ant mobile的示例

下拉刷新

```jsx
import {PullToRefresh, ListView} from 'antd-mobile'
class App extends React.Component (){
    constructor(props){
        super(props)
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.pageNo = 0 // 当前页数 放this对象不放state里面，可以进行直接修改操作
        this.isMore = true // 是否更多
        this.state = {
            dataSource,
            refreshing: true,
            isLoading: false
        }
    }
    render(){
        return (
            <div>
                <ListView
                    dataSource={this.state.dataSource}
                    onEndReachedThreshold={300} // 触发加载函数
                    renderFooter={'ReactNode节点'} // 渲染底部，可以根据判断来渲染刷新时显示的内容
                    renderRow={rowData => (<div>rowData.title</div>)} // 每行展示的节点
                    pullToRefresh={<PullToRefresh/>} // 下拉组件
                    onEndReached={this.onEndReached} // 加载时的组件, 当return则请求完毕结束
                    pageSize={5} // 每次事件函数渲染的行数

                ></ListView>
            </div>
        )
    }
}
```

