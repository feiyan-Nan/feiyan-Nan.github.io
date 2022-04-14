# ts-react

安装：`yarn create react-app demo --template typescript`

传值方式：

```tsx
// Prent.tsx
import React from 'react'
import Button from './Button'
type StateProps = {
    count: number
}
interface Parent {
    state: StateProps
}
class Paren extends React.Component {
    constructor(props: any){
        super(props)
        this.state = {
            count: 0
        }
    }
    handleClick(){
        this.setState({count: this.state.count+1})
    }
    public render(){
        return (
        	<div>
            	<h1>{this.state.count}</h1>
                <Button onClick={this.handleClick.bind(this)}>+</Button>
            </div>
        )
    }
}

// Button.tsx
import React from 'react'
interface Props {
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}
const Button: React.FC<Props> = (props) => {
    return (
    	<button onClick={props.onClick}>{props.children}</button>
    )
}

```



## React类型声名

使用ts的react常见的类型声名：

```tsx
// 组件声名
const App: React.FunctionComponent<AppProps>;
// or
const App: React.FC<AppProps>;

// css声名
interface Constom {
    style?: React.CSSProperty; // 样式
    children: React.ReactNode; // 组件
}

// 原始标签类型
type AppProps = AppProps & React.ButtonHTMLAttributes<HTMLElement>;
```

