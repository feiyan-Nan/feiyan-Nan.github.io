# js源码实现

## 简单实现Promise

```js
// 未添加异步处理等其他边界情况
// ①自动执行函数，②三个状态，③then
class Promise2{
  constructor(fn){
    this.state = 'pendding'   // 设置一个状态;
    this.value = undefined    // 这个用来接收参数;
    let resolve = value =>{
      this.state = 'resolve'   // 给state赋值,改变状态,用来then方法判断使用;
      this.value = value
    }
    let reject = value =>{
      this.state = 'reject'
      this.value = value
    }
    try{
      fn(resolve,reject)   //给传参的函数来两个形参,分别调用两个函数;
    }catch(e){
      reject(e)
    }
  }
  then(resolve,reject){
    if(this.state === 'resolve'){
      resolve(this.value)
    } else if(this.state === 'reject') {
      reject(this.value)
    }
  }
}
```





## 实现一个call

改变this指针的call和apply的本质就是，将调用的函数放到传入的对象身上，此时this自动就变成对象本身了，之后执行完成将结果返回，删除放到对象身上的函数；
```js
Function.prototype.myCall = function(context){
    context = Object(context) || window  //原生的this会自动用object()转换,不传参数或者null指向window;
    context.fn = this  //设定一个fn到传入的对象身上; this取的是函数;
    let args = [...arguments].slice(1)  //第一个是this对象,得隔离,这里是用来传参;
    let result = context.fn(...args)  //调用call时会执行; 这里将所有代码执行,并保存结果;
    delete context.fn  //执行完成就手动删除该函数;
    return result  //将执行结果返回;
}
```





## 实现一个apply

```js
// apply就是传参问题,是数组
Function.prototype.myApply = function(context,args){
    context = Object(context) || window
    context.fn = this
        //解决没有传参情况;
    let result = args ? context.fn(...args) : context.fn() 
    delete context.fn
    return result
}
```



## 实现一个bind

bind返回的绑定函数也能使用new操作符创建对象，这种行为就像把原函数当成构造器，bind与call/apply最大的不同就是前者返回一个绑定上下文的函数，而后两者是直接执行了函数

bind可以指定this，返回一个函数，可以传入参数，并且可以柯里化

定时器可以直接改变this指向：
```js
setTimeout(function(){}.bind(this),500)  //将this指向上文


Function.prototype.myBind = function(context){
     //判断不是函数的传入情况;
  if(typeof this !== 'function') throw new Error('error')
  var that = this  //保留this指向函数;
  var args = [...arguments].slice(1)  //获取传入的参数;
  return function F(){
      //因为返回的函数可以进行new,因此需要判断一下;判断this是否是指向F
    if(this instanceof F) return new that(...args,...arguments)
      // 返回调用的函数;
    return that.apply(context,args.concat(...arguments))
  }
}
```





## 实现async/await

```js
function asyncToGenerator(generatorFunc) {
    return function() {
      const gen = generatorFunc.apply(this, arguments)
      return new Promise((resolve, reject) => {
        function step(key, arg) {
          let generatorResult
          try {
            generatorResult = gen[key](arg)
          } catch (error) {
            return reject(error)
          }
          const { value, done } = generatorResult
          if (done) {
            return resolve(value)
          } else {
            return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
          }
        }
        step("next")
      })
    }
}
```

来源：[手写async await的最简实现（20行）](https://juejin.im/post/5e79e841f265da5726612b6e)

