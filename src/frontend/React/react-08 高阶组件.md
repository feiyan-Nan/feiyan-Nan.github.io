# React-08 高阶组件
## 一、高阶组件
1. 高阶函数的概念：函数的执行会返回另一个函数

高阶组件：一个组件返回另一个组件

高阶组件的三个重点：

* 必须是一个函数
* 参数是一个组件
* 返回值也是一个组件


```jsx
// 定义高阶组件, 作用是在使用组件之前做其他操作, 高阶组件是可以return多层的
const withComponent = (HighComponent) => {
    return class extends React.Component {
        render () {
            return <HighComponent {...this.props} />
        }
    }
}

class MyData extends React.Component {
    render(){
        return <div>{this.props.data}</div>
    }
}
const HighComponent = withComponent(MyData)

export default class Parent extends React.Component {
    render () {
        return <HighComponent data='hello' />
    }
}
```
2. 高阶组件相当于mixin混合，可以把公共的逻辑提取到高阶组件中（也就是包装了一层父组件），然后把逻辑中获取到的数据以props的方式传递给原组件；

在另一个组件中就可以直接调用local方法，减少公共逻辑的编写

3. 请求接口的高阶组件demo

（1）定义高阶组件
```jsx
const withFetch = url => View => {
    return class extends React.Component {
        state = {
            data: null
        }
        async componentDidMount(){
            let res = await fetch(url)
            let data = await res.json()
            this.setState({data})
        }
        render () {
            if(!data){
                return <div>loading...</div>
            }
            return <View data={this.state.data} {...this.props} />
        }
    }
}
```
（2）使用定义好的高阶组件
```jsx
class Banner extends React.Component {
    componentDidMount(){
        console.log(this.props.data) // 可以直接拿到数据了
    }
    render(){
        return <div></div>
    }
}
export default withFetch('https://wyy.heny.vip/banner')(Banner)
```