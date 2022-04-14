# es6-06 module
## 一、Module 模块
模块功能主要由两个命令构成：export和import，export命令用于规定模块的对外接口，Import命令用于输入其他模块提供的功能；

### export

> 规定模块对外接口

如果希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量

* 默认导出：`export default Person`（导入时可指定模块任意名称，无需知晓内部真实名称）
* 单独导出：`export const name = 'bruce'`
* 按需导出：`export {age, name, sex}`
* 改名导出：`export {name as newName}`
* 从文件导出：`export { default as User } from './user'`（常用于index.js导入其他的文件并导出，不能默认导出,需要加{}）



### import

> 导入模块内部功能

使用export命令定义了模块的对外接口后，其他js文件就可以通过import命令加载这个模块，import命令具有提升效果，会提升到整个模块的头部，首先执行。是因为import命令是编译阶段执行的，在代码运行之前，如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次；

* 默认导入：`import Person from './Person'`
* 整体导入：`import * as Person from './Person'`
* 按需导入：`import {age, name, sex} from './Person'`
* 改名导入：`import {name as newName} from './Person'`
* 自执导入：`import 'reset.css'`
* 复合导入：`import Person, {name} from './Person'`



### 动态引入

动态加载import，返回Promise，可以调用then方法；

```js
component: () => import('./views/about.vue')
```


### import与require的区别

* require是commjs的规范，import是es6的规范；

* require是同步加载，import是异步加载；

require加载方式：

```js
// 导出
// 单个暴露
exports.fn = function(){}
// 一起暴露
moudle.exports = {}

//导入
require('')
```



## 二、require.context

如果require参数含有表达式，比如：`require('./template/'+name+'.ejs')`，就可以使用`require.context`；

1. `require.context(dir,deep,reg)`

* dir：要搜索的文件夹目录
* deep：是否还应该搜索它的子目录
* reg：匹配文件的正则表达式；


```js
require.context('./test',false,/\.vue$/) //匹配test目录以.vue结尾的文件名, 不深度匹配;
```
2. `require.context`模块导出返回一个require函数，这个函数可以接收一个参数，将context.keys()组成的数组随便一个传入进去就会返回一个模块；

   导出的方法有3个属性：

   * `resolve(req)`：将路径传入获取当前文件的绝对路径；
   * `keys()`：返回一个数组，数组里面是所有的文件名
   * `id`：返回当前路径


```js
let context = require.context('./components',false,/\.vue$/)
let requireAll = context => context.keys().map(context) // map之后就是模块了;
let all = requireAll(context)
// 返回的是一个数组对象, 里面是导出的Module, 有一个default对象, 该对象就是一个模块;
console.log(all) 

// 传入之后会返回导出的该文件;就是requireAll的单个对象
context(context.keys()[0]) 
```
![image](https://notecdn.hrhe.cn/images/es6-06%20module-01.png)

3. Vue全局组件注册

（1）创建：./components/global/index.js，并写入以下代码，之后在main.js引入：import './components/global'即可；
```js
const requireAll = context => context.keys().map(context)
let context = require.context('./',false,/\.vue$/)
requireAll(context).forEach(({ default: item }) => {
  // 第一个小括号匹配文件夹名 第二个小括号匹配文件名
  let reg = /\/(\w+)\/(\w+).vue$/
  item.__file.match(reg)
  // 引入组件时, 默认取组件里面的name属性, 如果没有name属性则取文件名, 如果文件名是index则取文件夹名, 注册的全局组件以my-[name]使用;
  let name = item.name || (RegExp.$2 === 'index' ? RegExp.$1 : RegExp.$2)
  Vue.component(`my-${name}`, item)
})
```
（2）之后在global文件夹下面创建文件即可；



## 三、import.meta.globEager

在使用vite搭建的项目时，不要使用require.context，而是使用该方法

```js
const files = import.meta.globEager('../views/**/*.vue')
console.log(files) // {[path]: module}
```



