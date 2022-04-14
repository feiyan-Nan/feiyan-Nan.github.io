# JS设计模式

参考地址：[https://www.cnblogs.com/imwtr/p/9451129.html#o1](https://www.cnblogs.com/imwtr/p/9451129.html#o1)

## 设计原则

**单一职责原则（SRP）**

一个对象或方法只做一件事情。如果一个方法承担了过多的职责，那么在需求的变迁过程中，需要改写这个方法的可能性就越大。

应该把对象或方法划分成较小的粒度

**最少知识原则（LKP）**

一个软件实体应当 尽可能少地与其他实体发生相互作用 

应当尽量减少对象之间的交互。如果两个对象之间不必彼此直接通信，那么这两个对象就不要发生直接的 相互联系，可以转交给第三方进行处理

**开放-封闭原则（OCP）**

软件实体（类、模块、函数）等应该是可以 扩展的，但是不可修改

当需要改变一个程序的功能或者给这个程序增加新功能的时候，可以使用增加代码的方式，尽量避免改动程序的源代码，防止影响原系统的稳定



## 什么是设计模式

> 假设有一个空房间，我们要日复一日地往里 面放一些东西。最简单的办法当然是把这些东西 直接扔进去，但是时间久了，就会发现很难从这 个房子里找到自己想要的东西，要调整某几样东 西的位置也不容易。所以在房间里做一些柜子也 许是个更好的选择，虽然柜子会增加我们的成 本，但它可以在维护阶段为我们带来好处。使用 这些柜子存放东西的规则，或许就是一种模式

学习设计模式，有助于写出可复用和可维护性高的程序

设计模式的原则是“找出 程序中变化的地方，并将变化封装起来”，它的关键是意图，而不是结构。

不过要注意，使用不当的话，可能会事倍功半。



## 单例模式

定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点

```js
function SetManager(name) {
    this.name = name;
}
SetManager.prototype.getName = function() {
    return this.name;
}
function getSingleton(fn) {
    var instance = null;
    return function(){
        if(!instance) {
            instance = fn.apply(this, arguments)
        }
        return instance
    }
}
var single = getSingleton(function (name) {
    var manager = new SetManager(name)
    return manager;
})
```



## 策略模式

定义：定义一系列的算法，把它们封装起来，并且使他们可以相互替换

策略模式可以用于组合一系列算法，也可用于组合一系列业务规则

策略模式的程序至少由两个部分组成

第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程

第二部分是环境类，接受客户的请求，随后把请求委托给某一个策略类

```js
// 加权映射关系
var levelMap = {
    S: 10,
    A: 8,
    B: 6
}
// 组策略
var scoreLevel = {
    basicScore: 80,
    S: function () {
        return this.basicScore + levelMap['S']
    },
    A: function () {
        return this.basicScore + levelMap['A']
    },
    B: function () {
        return this.basicScore + levelMap['A']
    }
}
// 调用
function getScore(level) {
    return scoreLevel[level] ? scoreLevel[level]() : 0;
}
console.log(
	getScore('S'), // 90
    getScore('A'), // 88
    getScore('B'), // 86
)
```



## 代理模式

定义：为一个对象提供一个代用品或点位符，以便控制对它的访问

代理模式主要有三种：保护代理、虚拟代理、缓存代理

保护代理主要实现访问主体的限制

```js
function sendMsg(msg) {
    console.log(msg)
}
function proxyMsg(msg) {
    if(typeof msg === 'undefined') {
        return console.log('deny')
    }
    // 有消息，进行过滤
    msg = msg.replace(/泥\s*煤/g, '')
    sendMsg(msg)
}
```

虚拟代理在控制对主体的访问时，加入了一些额外的操作，比如为了避免频繁触发滚动事件，函数防抖是一种虚拟代理的实现

```js
function debounce(func,wait=500){
    let timer = null;   // 通过闭包定义一个空的定时器;
    return function(...args){  // 必须返回一个函数，否则不成功;
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this,args)
            console.log('防抖成功')   // 可以传入一个函数执行
        },wait)
    }
}

var count = 0;

// 主体
function scrollHandle(e) {
    console.log(e.type, ++count); // scroll
}

// 代理
var proxyScrollHandle = debounce(scrollHandle, 500);
window.onscroll = proxyScrollHandle;
```

缓存代理可以为一些开销大的运算结果提供暂时的缓存，提升效率

```js

```







## Object.defineProperty实现深度监听 （观察者模式）

```js
function update(){
    console.log("更新视图")
}
let obj={
    name:{n:200}
}
let oldProto=Array.prototype
//获取原有的数组方法
let proto = Objeact.create(oldProto) //proto继承原生方法 防止篡改原生方法
//重写数组里的变异方法
["push","shift"].forEach(()=>{
    proto[item]=function(){
        update() //加了自己的逻辑
        oldProto[item].apply(this,arguments) //调用了原来的逻辑
    }
})
function observer(value){ //观察者 观察obj 使obj重写defineProperty的形式
    //变异方法 push pop shift unshift reverse sort splice
    if(Array.isArray(value)){
        return value.__proto__=proto //value的原型链指向自己定义好的proto
    }
    if( typeof value!=="object"){return value} //不是对象就返回
    //循环obj 把属性和对象重新定义
    for(let key in value){
        defineReactive(value ,key ,value[key]) //定义响应式
    }
}
function defineReactive(obj ,key ,value){
    // obj要定义属性的对象。
    //  prop  要定义或修改的属性的名称或 Symbol 。 
    // descriptor   要定义或修改的属性描述符。

    //如果是对象，继续增加 setter和getter 递归
    observer(value)
    Object.defineProperty(obj,key,{
        get(){
            return value
        }, 
        set(newValue){
            
            if (value !== newValue){
                observer(newValue) //深度监控
                value=newValue
                update()
            }
            
        }
    })
}
observer(obj)
//obj.name.n=500 //数据变了需要更新视图
obj.name={n:200} //数据变了需要更新视图 因为这个对象没有getter和setter
obj.name.n=100
```



## 简易的观察者模式

```js
class Subject {
  observers = []

  addObserver(observer) {
    this.observers.push(observer)
  }
  removeObserver(observer) {
    let index = this.observers.indexOf(observer)
    if(index > -1){
      this.observers.splice(index, 1)
    }
  }
  notify() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
}


class Observer{
  update() {}
  subscribeTo(subject) {
    subject.addObserver(this)
  }
} 
let subject = new Subject()
let observer = new Observer()
observer.update = function() {
  console.log('observer update')
}
observer.subscribeTo(subject)  //观察者订阅主题

subject.notify()
```



## 发布订阅模式

```js
function Even(){
  // 声明一个空对象，用于存储值;
  this.eventBus = {}
}
// on用来监听一个事件，并传入两个参数，一个是事件名，一个是回调函数;
Even.prototype.on = function(eventname,callback){
  // 判断该函数里的事件名是否存在
  if(this.eventBus[eventname]){
    // 如果存在则新增一个方法;
    this.eventBus[eventname].push(callback)
  } else {
    // 如果不存在则使用数组方式存入一个事件;
    this.eventBus[eventname] = [callback]
  }
}
// emit用来触发一个事件,一个是触发的事件名,第二个是传入的参数;
Even.prototype.emit = function(eventname,...args){
  // emit用来监听一个事件的触发
  if(this.eventBus[eventname]){
    // 如果有该事件，则循环该事件并执行该事件
    this.eventBus[eventname].map(item=>item(...args))
  }
}
```

