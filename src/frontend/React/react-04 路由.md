# React-04 路由
## 一、使用
1. 安装：`yarn add react-router-dom`


## 二、路由标签
### 路由器
Router： 路由器，需要单独引入以下组件

* `BrowserRouter`     使用html5的pushState和replaceState和popState事件匹配路由
* `HashRouter`       使用hash匹配路由
* `MemoryRouter`    将url保存在内存中，不读写地址栏，在React native中非常有用
* `NativeRouter`     使用React Native构建路由
* `StaticRouter`    从不改变位置的路由器，服务端渲染最有效；



### 路由标签
Switch   

（1）当Route标签不添加path只存在component时，所有的路由都会匹配上该Route，因此添加Switch可以解决这个问题

（2）Switch是唯一的，只呈现一条路由，确保该标签下面的路由标签始终渲染一个路由

（3）Switch的所有子元素只能是`<Route>`或`<Redirect>`

```jsx
<Switch>
    <Route component={Home} path='/home'/>
    <Route component={NotFound} />
</Switch>
```
#### Route

属性：

* path：指定路径
* component：渲染的组件


```jsx
const Comp = props => <div>{props.match.params.name}</div>
<Route path='path' component={Comp} />
```
* render：用于渲染组件，可以将props直接传递给组件，方便写内联组件，render也接受路由对象作为参数，常用于使用判断渲染对应组件


```jsx
<Route render={() => <div>这是一个内联组件写法</div>} />
// 当Component是传下来的时候使用回调方式方便
<Route render={routeProps => <Component {...routeProps} />} />

// 使用render判断渲染组件, 之后将重定向的地址传入过去;
<Route render={props => 
        isLogin ? <Component {...props} /> : <RedirectBridge location={props.location}/>}/>


// 二级路由写法：
<Switch>
    <Route path='/' component={Home} />
    // 在main的组件里面写Switch才能生效, 里面的'/'路由代表的是Main组件;
    <Route render={props => <Main {...props}/>} />
</Switch>
```
* children：一个函数，当Route有children时，不管当前的路径是否与route匹配，该函数都会执行，也接受所有的route传入的参数


```jsx
<Route children={props => {
    <div className={props.match ? 'active' : ''}>
        <Link to='path' />
    </div>
}} />
```
* 404页面：当Route组件不写path时，会跳转404页面；
* element   v6版本新增属性，省去添加animate属性；


```jsx
import Profile from './Profile';

// v5
<Route path=":userId" component={Profile} />
<Route
  path=":userId"
  render={routeProps => (
    <Profile routeProps={routeProps} animate={true} />
  )}
/>

// v6
<Route path=":userId" element={<Profile />} />
<Route path=":userId" element={<Profile animate={true} />} />
```
* sensitive：是否区分大小写
* exact：严格匹配，路由相同时才会匹配，路由有斜杠也会被匹配，如果在父路由中加了exact，是不能匹配子路由的，建议在子路由添加exact，如果没有子路由，建议添加上exact
* strict：严格匹配（一般使用exact就足够了），如果路由url中有斜杠，而url中没有，则是不匹配的，如：/about/，当输入 /about 是不能匹配上的，strict一定是跟exact一起使用的，strict不能单独使用


优先级：component > render > children

当然，Route也可以直接包裹组件
```jsx
<Route path='/home'>
    <Home/>
</Route>
```
建议项目中使用时，创建一个PrivateRoute组件，用来判断权限，一个RedirectBridge，用来跳转
```jsx
// RedirectBridge
import React from 'react'
function RedirectBridge(props){
    useEffect(()=>{
        setTimeout(()=>window.location.href = props.location, 1500)
    },[])
    return (<div>登录跳转中</div>)
}

// PrivateRoute 根据token判断路由
import React from 'react'
import {Route} from 'react-router'
class PrivateRoute extends React.Component {
    render(){
        const {component: Component, ...rest} = this.props
        const token = sessionStorage.getItem('access_token')
        return (
            <Route {...rest} render={ props =>
                token ? (<Component {...props} />) : (<RedirectBridge location={} />)
            } />
        )
    }
}
```

#### Redirect
> 重定向到路由

属性：

* push：将推入到历史中，不是替换
* to：跳转到地址，可以使用字符串，也可以使用对象形式
* from：从哪个地址访问时，才to到指定的地址，没有则是所有地址都可以重定向
* exact：完全匹配没有路由的地址，即可将Redirect放到Route之上都没事


```jsx
<Redirect to={{
        pathname: '/login',
        search: '?num=1',
        state: {form: props.location} // 传送其他状态
    }}
/>
<Route path={} />
```

#### Link   
> 访问路由

属性：

* replace：布尔值，是否替换链接
* to：可以是字符串，也可以是对象，也可以是函数


```jsx
// 当为对象时
<Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true } // 隐形属性, 路径没有展示
  }}
/>

// 当为函数时
<Link to={location => ({ ...location, pathname: "/courses" })} />
<Link to={location => `${location.pathname}?sort=name`} />
```
#### NavLink   
> 特殊的Link标签，可以添加样式

* to：跳转到地址
* activeClassName：选中的类名
* activeStyle：选中的样式
* exact
* isActive：一个函数，判断是否是激活状态


```jsx
<NavLink isActive={(match, location)=>{
        if(!match) return false
        return true
    }}
/>
```
#### Outlet  
> v6新增标签

```jsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />}>
          <Route path=":id" element={<MyProfile />} />
          <Route path="me" element={<OthersProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Profile() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>
        {/*
       将直接根据上面定义的不同路由参数，渲染<MyProfile />或<OthersProfile />
        */}
      <Outlet />
    </div>
  )
}
```


## 三、hooks API

1. useHistory   用于访问路由
```jsx
import {useHistory} from 'react-router-dom'
function HomeButton(){
    let history = useHistory()
    function handleClick(){
        history.push('/home')
    }
    return (
        <button onClick={handleClick}>Go Home</button>
    )
}
```
（2）v6版本使用useNavigate代替了useHistory
```jsx
// v5
import { useHistory } from 'react-router-dom';
function MyButton() {
  let history = useHistory();
  function handleClick() {
    history.push('/home');
  };
  return <button onClick={handleClick}>Submit</button>;
};

// v6
import { useNavigate } from 'react-router-dom';
function MyButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/home');
  };
  return <button onClick={handleClick}>Submit</button>;
};

//用法
// v5
history.push('/home');
history.replace('/home');

// v6
navigate('/home');
navigate('/home', {replace: true});
```

2. useLocation：访问location对象，每当路由改变都会返回一个新的location对象
```jsx
import {useLocation} from 'react-router-dom'
function usePageViews(){
    let location = useLocation()
    React.useEffect(()=>{
        ga.send(['pageview', location.pathname])
    }, [location])
}
```
3. useParams   返回URL参数的键值对象
4. useRouteMatch   当匹配到地址再渲染组件，不需要再写一个Route路由了了
```jsx
function About(){
    const match = useRouteMatch('/about')
    return match && <div>About组件</div>
}
```



## 四、路由显示

1. 页面显示，直接放到入口文件
```jsx
<BrowserRouter>
    <Switch>
        <Route />
        <Redirect />
    </Switch>
</BrowserRouter>
```
2. 组件中显示路由，在需要展示路由的位置放Route，记得在Home组件里面放props.children
```jsx
<Home>
    <Switch>
        <Route to={} />
        <Redirect to={} />
    </Switch>
</Home>
整体结构

<Switch>
    <Route to=''/>
    <Home>
        <Route to='' />
    </Home>
</Switch>

// home.js
function Home (props){
    return (
        <div>
            Home: 
            {props.children}
        </div>
    )    
}
```

## 五、demo使用例子
1. 在src下面创建一个router文件夹，创建一个index.js文件

可以使用函数，也可以使用类的方式，因为不需要使用生命周期，则使用函数即可；

Switch用于确保平级下面的Route对象只能查找一个路由
```jsx
import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'  //按需引入路由文件;
import Home from '../component/Home/Home'

const Router = ()=>{
    return (
        <Switch>
            <Route path='/home' component={Home} />
            <Redirect to='/home' /> //重定向到home下
        </Switch>
    )
}
export default Router
```
2. 在index.js入口文件中引入浏览器路由插件

路由必须包裹在BrowserRouter下面
```jsx
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>)
```
3. 在App中引入显示的路由
```jsx
import Router from './router/index'
在div显示内容中放入：<Router />;
```

Route的用法
```jsx
<Route component={Home} />
<Route render={routeProps=>(<div {...routeProps}></div>)}
// routeProps是路由对象
```



## 六、路由封装

1. 创建路由文件

   ```js
   import Home from './Home'
   import About from './About'
   import My from 'My'
   const routes = [
       {
           path: '/',
           component: Home,
           exact: true,
           meta: {
               title: '首页'
           }
       },
       {
           path: '/about',
           component: About,
           children: [
               {
                   path: '/about/my',
                   component: My
               },
               {
                   redirect: '/about/me'
               }
           ]
       }
   ]
   ```

   

2. 创建Root.js

   ```jsx
   import React from 'react'
   import { Switch, Redirect } from 'react-router-dom'
   import WrapRouter from './WrapRouter'
   import routes from 'routes'
   
   class App extends React.Component {
     constructor(props) {
       super(props)
       this.renderRoutes = null
     }
   
     // 循环引入路由
     renderRoute = (routes) => {
       return (
         routes.map(({ children, ...route }) => {
           let routeView = null
           if(children) {
             routeView = (
               <Switch>
                 {this.renderRoute(children)}
               </Switch>
             )
           }
   
           if(route.redirect) {
             return (
               <Redirect key={route.redirect} to={route.redirect} />
             )
           } else {
             return (
               <WrapRouter
                 {...route}
                 routeView={routeView}
                 key={route.path}
               />
             )
           }
         })
       )
     }
   
     render() {
       // 避免重复循环渲染, 加入判断
       if(!this.renderRoutes) {
         this.renderRoutes = this.renderRoute(routes)
       }
       return (
         <Switch>
           {this.renderRoutes}
           <Redirect to='/' />
         </Switch>
       )
     }
   }
   
   export default App
   ```

3. 创建WrapRouter，用于拦截路由

   ```jsx
   import React, { useEffect } from 'react'
   import { Route } from 'react-router-dom'
   
   const WrapRouter = ({ component: Component, routeView, ...rest }) => {
     useEffect(() => {
       // 父组件也会使用, 仅仅对比最后的路由即可;
       if(rest.path === window.location.pathname && rest.meta.title) {
         document.title = rest.meta.title
       }
     }, [ rest ])
   
     return (
       <Route
         {...rest}
         exact
         render={routerProps =>
           <Component {...routerProps} routeView={routeView} />
         }
       />
     )
   }
   
   export default WrapRouter
   ```

4. 修改入口文件index.js

   ```jsx
   import React from 'react'
   import ReactDOM from 'react-dom'
   import { BrowserRouter as Router } from 'react-router-dom'
   import Root from './Root'
   ReactDOM.render(<Router><Root/></Router>, window.root)
   ```

   

## 七、路由嵌套

1. 例子
```jsx
import {BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom'
function App(){
    return (
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

function Profile() {
  let {path, url} = useRouteMatch()
  return (
    <div>
      <nav>
        <Link to={`${url}/me`}>My Profile</Link>
      </nav>
      <Switch>
        <Route path={`${path}/me`}>
          <MyProfile />
        </Route>
        <Route path={`${path}/:id`}>
          <OthersProfile />
        </Route>
      </Switch>
    </div>
  )
}
```
2. v6路由嵌套
```jsx
// v6
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/*" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

function Profile() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path="me" element={<MyProfile />} />
        <Route path=":id" element={<OthersProfile />} />
      </Routes>
    </div>
  );
}
```
## 七、编程式导航
1. 跳转方法
    `props.history.push() ` 跳转链接
    
      `props.history.replace()`  替换当前链接，不能返回
    
      `props.history.go(-1) `  返回
    
2. `withRouter`
    当组件不是路由的直接子元素，而是孙子辈的，是没有路由对象的，因此可以使用withRouter解决这个问题。

`withRouter`是一个高阶组件，作用将一个组件包裹进Route里面，然后router对象的history,location,match就会被放进这个组件的props属性中

```jsx
import React from 'react'
import {withRouter} from 'react-router-dom'
function App(){}
export default withRouter(App)
```



## 八、路由传参

1. 动态路由

（1）传值：需要配置对应的路由；
```jsx
path: '/detail/:id'   // 
<NavLink to={'/detail'+item.id}>
```
（2）取值：props.match.params.id

当没有传入时会访问到404页面，可以在id后面加个?，如：/detail/:id?，就代表可有可无了，多个也可以，:id?/:name?
2. query
（1）传值：传入一个对象；
```jsx
<NavLink to={{pathname:'/detail',query:{id:1}}} >
```
（2）取值：props.location.query.id；

（3）当以问号传值方式时
```jsx
<NavLink to='/home?name=hny&age=18' />
```
取值方式：props.location.search

当读取不到时的解决方法
```jsx
// 第一种方式
const params = new URLSearchParams(props.location.search)
console.log(params.get('name'))

// 第二种方式
import querystring from 'querystring'
const params = querystring.parse(props.location.search)
console.log(params.name)
```
3. state

（1）传值：同query传值

（2）取值：props.location.state.id；

4. 编程式导航：

写法和以上一致，因为要传参，需要用函数包裹一下；
```jsx
<button onClick={()=>this.props.history.push('/detail'+item.id)}
```



## 路由404

在webpack  devServer配置

```js
historyApiFallback: true // 解决404问题
```





## 路由其他API

### Prompt
1. 当用户修改未保存离开时，提示用户保存
```jsx
import {Prompt} from 'react-router-dom'
render(){
    return <Prompt message='Are you sure leave?' />
}
```
2. 可用属性

when:Boolean    是否触发message

message: Func    当每次路由变化都会触发，return false可阻止

message: String   提示是否离开



## 其他路由插件

### reach/router

是`react-router-dom`的同作者写的，比`react-router-dom`更加好用

安装：`yarn add @reach/router`

ts安装：`yarn add @reach/router @types/reach__router`

简单例子：

```js
import React from 'react'
import Counter from './pages/Counter'
import { Router } from '@reach/router'
const App: React.FC = () => {
  return (
    <Router>
      <Counter path='/count' />
    </Router>
  )
}
export default App
```





