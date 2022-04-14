# Reach/router

官网：[https://reach.tech/router/](https://reach.tech/router/)

>  是`react-router-dom`的同作者写的，比`react-router-dom`更加好用

安装：`yarn add @reach/router`

ts安装：`yarn add @reach/router @types/reach__router`

## 基本例子

```jsx
import { Router, Link } from "@reach/router";
const App = props => (
  <div>
    <Logo />
    <nav>
      <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
    </nav>
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
    </Router>
  </div>
);
const Home = () => <h2>Welcome</h2>
const Dashboard = () => <h2>Dashboard</h2>
```

### 获取路由参数

```jsx
// path路径
<User path='/users/:userId' />

// 创建组件 直接通过props取path路径参数
const User = props => <h2>{props.userId}</h2>

// 定义链接
<Link to='users/123'>123</Link>
<Link to='users/abc'></Link>
```

### 路由嵌套

```jsx
import { Router } from "@reach/router";
import Home from "./Home";
import About from "./About";
import Support from "./Support";
import Dash from "./Dash";
import DashHome from "./DashHome";
import Invoices from "./Invoices";
import Team from "./Team";
const App = () => {
    return (
      <div>
        <Logo />
        <Router>
          <Home path="/">
            <About path="about" />
            <Support path="support" />
            <Dash path="dashboard">
              <DashHome path="/" />
              <Invoices path="invoices" />
              <Team path="team" />
            </Dash>
          </Home>
        </Router>
      </div>
    )
}
// Home以及Dash下面放props.children为展示子路由的地方
```

### 当前激活的链接

```jsx
import { Link } from "@reach/router";


// partial 是否是默认展示路由
const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "red" : "blue"
        }
      };
    }}
  />
)

<NavLink to="/">Home</NavLink>
```

### 导航式跳转路由

```jsx
import {navigate} from '@reach/router'

navigate(to, {state={}, replace={false}})
navigate(-1)

<button onClick={() => navigate('/dashed')}>Dashed</button>
```



### 支持匹配

```jsx
<Router>
    <Admin path='admin/*' />
    <Invoice path='invoice/:invoiceId' />
    <NotFound default />
</Router>
```

