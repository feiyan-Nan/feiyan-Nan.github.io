# es6-04 promise、async
## 一、Promise

### 介绍

1. Promise对象实际上是一个许诺器，里面放将来要发生的事，这些事之间有依赖关系，且通常是异步；
               ajax、定时器、I/O操作都是阻塞的，需要时间；
           2. Promise对象主要是解决“回调地狱”问题的，实际上是以同 步流程来解决异步回调问题的；
3. promise是一个构造函数，用来生成promise实例；



### 计算机工作原理（了解）

I/O操作：I(input)  O(output)   输入输出；

计算机主要是由三部分组成：CPU、内存、硬盘；

在输入的时候，内存开始工作，之后解析到cpu，如果内存小了，输入的东西多了，就会开始变卡，所以可以适当的加大内存，当然cpu也需要支持才行；当输出保存之后就会存入到硬盘，所以如果没保存则数据就会丢
失；

![image](https://notecdn.hrhe.cn/images/es6-04%20解决异步问题-01.png)



### Promise的三种状态

* `pendding`：初始化状态（刚刚许诺的状态）；

* `fullfilled` || `resolved`：完成的状态

* `rejected`：失败的状态（拒绝）；



### 创建Promise实例

使用new关键字创建Promise实例，Promise接受一个回调函数，该回调函数两个形参，一个成功的回调函数和一个失败的回调函数；

两个形参分别对应then方法的两个回调函数，通过调用对应的形参执行对应的回调函数，通过括号可以发送参数；

```js
new Promise(function(resolved,rejected){
    if(true) {
        resolved()
    }
})
```


### Promise的实例方法

1. `then`：接收Promise的状态，包含两个方法，一个成功的回调函数和一个可选的失败回调函数；支持链式调用

   then方法传参：在第一个then方法中return，第二个then方法需要一个形参来接收；

   ```js
   var prom = new Promise((resolved,rejected)=>{
       resolved(1);
   })
   prom.then((data)=>{
       console.log(222);
       return data
   },()=>{}).then((data)=>{
       console.log(data);
   })
   ```

2. `catch`：用来捕获错误使用，如果不使用then方法的第二个回调函数，即使用catch来捕获

3. ```js
   promise.then(e=>{}).catch(err=>{})
   ```

4. `finally`：指定不管promise对象最后状态如何，都会执行的操作，在执行完then方法和catch方法之后，则执行finally方法，finally方法不接受任何参数，与状态无关，主要是用于执行完成后的回调；

   ```js
   promise.then().catch().finally(()=>{})
   ```

5. `all`：用于将多个Promise实例，包装成一个新的Promise实例，all方法接收一个数组，里面填写实例，（all方法可以不是数组，但必须具有Iterator接口）

   ```js
   const p = Promise.all([p1,p2,p3])
   ```

   p是promise实例，p的状态由p1,p2,p3决定，如果后面三者都是fulfilled，则p的状态是fullfilled，此时三者的结果组成一个数组返回给p，如果有一个是rejected，则p是rejected，返回值是第一个reject的实例返回值，会调用p的catch来捕获；

6. `race`：与all相反，同样是包装多个promise实例，只要有一个实例率先改变状态，p的状态就跟着改变；
    利用race()可以实现请求超时处理：

```js
const ajaxWithTime = (url,ms) => Promise.race([
    fetch(url),
    new Promise((resolve,reject)=>{
        setTimeout(()=>reject(new Error('request timeout')),ms)
    })
])
```



### 静态方法

* `Promise.resolve()`，主要是为了将现有的对象转为promise对象，括号里面传入需要转换的对象；
* `Promise.reject()`
* `Promise.all()` 全部为true则为true，否则为false
* `Promise.race()` 相当于赛跑，只要一个成功或失败即可
* `Promise.any()` 一个成功就成功，所有拒绝才拒绝
* `Promise.try()`

静态方法使用:
```js
const p = Promise.reject('出错了')
// 等同于
const p = new Promise((resolve,reject)=>reject('出错了'))
```



**解决控制台烦人的Promise.reject报错**

建议在全局增加一个对unhandledrejection的监听，用来监听Promise error的；

```js
window.addEventListener("unhandledrejection", function(e){
    e.preventDefault()
    console.log('捕获到异常：', e);
    return true;
});
```



**可取消的Promise**

```js
function timeout(delay) {
  let cancel;
  const wait = new Promise(resolve => {
    const timer = setTimeout(() => resolve(false), delay);
    cancel = () => {
      clearTimeout(timer);
      resolve(true);
    };
  });
  wait.cancel = cancel;
  return wait;
}
```





## 二、async

1. 不需要像Generator去调用next方法，遇到await等待当前的异步操作完成才往下执行
2. async执行之后返回一个Promise对象，可以使用then方法进行下一步操作
3. async取代Generator函数的星号*，await取代Generator的yield
4. 语意上更为明确，使用简单
5. 通常结合Promise一起使用,
6. resolved小括号传参到await，作为await的返回值；

7. 优雅处理await的错误问题
```js
const to = promise => promise.then(data => [null, data], err => [err, null])
// 使用时：
async function fetchData(){
    let [err, data] = await to(getData())
    if(err) return
    ....
}
```
应用案例：
1.指定时间后返回数据
```js
function timeout(ms){
    return new Promise(resolve=>{
        setTimeout(resolve)
    }, ms)
}
async function asyncPrint(value,ms){
    await timeout(ms)
    console.log(value)
}
```

注意：
* 如果Promise里面没有需要执行的函数，则可以不需要new，直接使用Promise.resolve()；括号里面可以传参，需要awite来接收，否则返回的将是Promise的resolved状态，而不是响应结果；
* await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中
* 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发
* async函数不能使用.then方法捕获错误，可以使用try....catch捕获


```js
let [a, b] = await Promise.all([a(),b()])
```

7. `for await of`，解决多个await
```js
function Gen (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time)
    }, time)
  })
}

async function test () {
  let arr = [Gen(2000), Gen(100), Gen(3000)]
  for await (let item of arr) { // 这个await等待的是每个项
    console.log(Date.now(), item)
  }
}

test()
// 1575536194608 2000
// 1575536194608 100
// 1575536195608 3000
```

注意：forEach循环是不会等待await结果的

```js
function fn(){
    let arr = [1, 2, 3]
    arr.forEach(async item => {
        await item // await是不会等待的，需要使用老式的for循环才管用
    })
}
```



链式调用Promise

```js
Array.from({length: 3}).reduce(async (promise, i, index) => {
  // 等待上一个promise
  await promise
  // 返回一个新的promise,每次循环都是promise
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(index)
      resolve(index)
    }, 1000)
  })
}, Promise.resolve())

[...promise].reduce((promise, next) => promise.then(() => {
    // here start fetch
}), Promise.resolve())
```




## 三、Generator（状态遍历器）

> ES6提供的解决异步编程的方案之一

generator函数中间用一个*隔开：`function * fn(){};`

### Generator函数的特点:

* function 与函数名之间有一个星号

* 调用generator函数返回一个对象指针，不会执行函数里面的逻辑代码；

* 内部用yield表达式来定义不同的状态

* 声明函数并用函数调用next方法，开始执行函数内部的代码，遇到yield停止，next执行完返回一个对象：{value:yield后面的表达式结果,done:false/true}；

  value：如果yield后面是函数，函数没有return则为undefined；当generator函数没有yield之后，done就为true；（可以利用done为true来判断函数不执行）；

* 再次调用next方法会从上一次停止时的yield处开始，直到最后；

* next传参会返回到上一个yield暂停的地方；


generator函数可以使用for..of来遍历，也有iterator接口，调用的next()方法，其实就是iterator的方法；遍历对象是声明的函数；
```js
function * generator(){
    console.log('开始执行');
    yield 'hellow';
    console.log('正在执行----');
    yield 'hellow form my world'
    console.log('结束');
}
var sur = generator();
console.log(sur.next());
console.log(sur.next());
console.log(sur.next());
```
yield表达式只能generator函数使用，yield*函数名，可以遍历另外一个generator函数；


注意：当调用next方法时传参内容会作为启动时yield语句的返回值。



2. ajax的原理

![image](https://notecdn.hrhe.cn/images/es6-04%20解决异步问题-02.png)


generator结合ajax

![image](https://notecdn.hrhe.cn/images/es6-04%20解决异步问题-03.png)

