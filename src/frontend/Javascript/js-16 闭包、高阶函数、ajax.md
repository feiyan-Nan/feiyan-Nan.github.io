# js-16 闭包、高阶函数、ajax
## 一、函数
1. 普通函数 `function fn(){}`  调用：fn();

2. 函数表达式 `var fn = function(){}`  调用：fn();

3. 事件处理函数 `div.onclick = function(){}`

4. 构造函数 `function Fun(){}  new Fun()`;

5. 对象函数：`color:function(){}`    调用：color();    括号传参；

6. 匿名函数：`(function(){})()`，不会对外界环境造成污染，传参往后面小括号传参；

   如果函数只需调用一次，就可以声明成匿名函数 , 匿名函数可以有效的保证在页面上写入 Javascript，而不会造成全局变量的污染 , 这在给一个不是很熟悉的页面增加javaScript 时非常有效，也很优美。

   匿名函数还有：

   ```js
   (function(){ /* code */ }());
   !function(){ /* code */ }();
   ~function(){ /* code */ }(); //建议写法
   -function(){ /* code */ }();
   +function(){ /* code */ }();
   void function(){ /* code */ }() //建议写法
   ```

   



## 二、闭包

闭包是在函数创建的时候，让函数打包带走的根据函数内的外部引用来过滤作用域链剩下的链。它是在函数创建的时候生成的作用域链的子集，是打包的外部环境。evel 因为没法分析内容，所以直接调用会把整个作用域打包（所以尽量不要用 eval，容易在闭包保存过多的无用变量），而不直接调用则没有闭包。

闭包文章

[JavaScript 的静态作用域链与“动态”闭包链](https://juejin.cn/post/6957913856488243237)

静态作用域链：可以直观的分析代码得出作用域链；

动态作用域链：和执行顺序有关，会在执行的时候动态创建不同函数，块的作用域的引用关系，没法静态分析



### 什么是闭包

闭包是指有权访问另外一个函数作用域中的变量的函数；

闭包就是函数的局部变量的集合，只是这些局部变量在函数返回后会继续存在，闭包就是函数的堆栈在函数返回后并不释放，我们也可以理解为这些函数堆栈并不在栈上分配，而是在堆上分配，当在一个函数内定义另外一个函数就会产生闭包；



一句话概括：闭包就是能够读取其他函数内部变量的函数，或者子函数在外调用，子函数所在的父函数的作用域不会被释放

### 为什么要使用闭包

匿名自执行函数：我们知道所有的变量如果不加上var关键字，则默认的会添加到全局对象的属性上去，这样的临时变量加入全局对象有很多坏处，比如：别的函数可能误用这些变量，造成全局对象过于庞大，影响访问速度（因为变量的取值是需要从原型链上遍历的）。除了每次使用变量都是用var关键字外，我们实际情况下经常遇到这样一种情况，即有的函数只需要执行一次，其内部变量无需维护，可以用闭包；

结果缓存：我们开发中会碰到很多情况，设想我们有一个处理过程很耗时的函数对象，每次调用都会花费很长时间，那么我们就需要将计算出来的值存储起来，当调用这个函数的时候，首先在缓存中查找，如果找到了，直接返回查找到的值即可；闭包正是可以做到这一点，因为它不会释放外部的引用，从而函数内部的值可以得以保留；

封装：实现类和继承等；

```js
function aa(){
    var num = 0;    //声明必须var
    return function(){
            num++;
        console.log(num);
     }
}
var f = aa();    //使用时必须var调用aa，此时f代表bb，aa只能小括号调用一次；
```
**注意**

1. 使用闭包需要手动给函数清除，给变量赋值null；（闭包函数的第一层函数声明的变量，对于第二层函数也是全局污染，变量也是一直存在的，也占内存，所以使用闭包时，需要我们在用完的时候手动给函数清除，删掉，声明的函数=null）

2. 外层函数声明变量时，必须使用var声明；（如果不使用var，就是隐式全局变量，跑到外层去了，外层函数只能调用一次，声明一个变量来调用外层的函数，再用变量调用里层的函数）；

3. 外层函数只能调用一次，再调用里层函数；（如果是aa()()，相当于调用了两次aa，外层的变量就是重复声明，里层函数使用的外层的变量是重复的，就没有闭包的作用了）



### 使用匿名函数实现闭包

使用匿名函数自调用的特性，在匿名函数里面写事件函数，也就相当于两个函数嵌套，形成闭包了，此时外层函数还可以传入一个形参，形参也相当于局部变量，供里层函数使用，就能拿到外层函数的值了，里层函数只要占用变量，局部变量就会保存下来，就不会被清除；

函数嵌套函数，里层函数没有使用外层函数的变量，就不能算是闭包；

```js
for(var i=0;i<5;i++){
    (function(i){
        div[i].click=function(){
            console.log(i);    //使用的形参；
        }
    })(i)
}
for(var i=0;i<5;i++){
    div[i].click=function(){
        console.log(i);    //拿不到外面的i；
    }
}
```
引用清除：在循环套用点击事件，在点击事件里面使用i时，没有点击，i就没有占位，就会清除，所以不能取到i，当使用闭包函数传入形参i时，点击事件再使用i，就已经占位了，就不会被清除；



### 闭包经典面试题

例 1：以下代码的执行结果是？如何处理？
```js
var arr = [];
for(var i = 0;i<10;i++){
    arr.push(function () {
        console.log(i);
    })
}
arr[6]();

//局部作用域  i为10；
```
例 2：以下代码的执行结果
```js
function fun(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return fun(m, n);
        }
    };
}
var a = fun(0); 
    a.fun(1); 
    a.fun(2); 
    a.fun(3);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1); c.fun(2); c.fun(3);
```

解析：
```js
var a = fun(0);  只传入一个参数，(0 undefined) 所以结果是undefined；
a.fun(1);    //因为闭包问题，n一直存在为0，所以这个是传了1，为1,0， 之后返回到开始传(n,o)，o是0；
a.fun(2);    //o是0；
a.fun(3);    //o是0；
var b = fun(0).fun(1).fun(2).fun(3); // 0,1,2 
    //这里前两步和上面是一样的，再fun(1)过后再次调用fun(1)，由于计算，o调用了两次为1了，后面调用为2了；
var c = fun(0).fun(1); //0
c.fun(2); //1  //分开调用了两次为1
c.fun(3); //1 
```
例 3：以下代码的执行结果
```js
for(var i = 0;i<5;i++){
    setTimeout(function () {
        console.log(i,new Date());
    },1000);
}
console.log(i,new Date());
```


### for循环泄漏

for循环完之后在外面也能得到i的值，就是循环完之后的值；



### 全局污染

声明在全局的变量或者函数，会一直在内存中存在，不好清除他，必须手动来；



### 局部变量清除方式

在局部的变量或者函数，在代码进入函数时开始声明，执行完成就被清除了，下次再进来的时候再次声明，用完再清除，在局部的变量不会经常占用内存，不会造成全局污染；

闭包与匿名函数的区别：

匿名函数是自调用，闭包是函数嵌套函数，因为使用匿名函数之后，就已经使用了一个函数，里面再写一个事件，就是两个函数嵌套了，所以经常将匿名函数称作闭包；



## 三、垃圾回收机制

1. 标记清除：声名时表示被引用，之后被使用完出了函数局部，标记清除；

当变量进行执行环境时，垃圾回收器将其标记为进入环境，当变量离开环境时，将其标记为离开环境；
2. 引用清除：使用记数的方法，如果没有这个数没有加过，就清除，如果有，就保留；

在Javascript中，如果一个对象不再被引用，那么这个对象就会被GC（垃圾回收）。如果两个对象互相引用，而不再被第3者所引用，那么这两个互相引用的对象也会被回收。


## 四、Event Loop，javascript执行机制
Event Loop即事件循环，是浏览器或Node的一种解决javaScript单线程运行时不会阻塞的一种机制，也是异步的原理；

由于JS是单线程的，一些高耗时操作就带来了进程阻塞的问题，为了解决这个问题，js有两种任务的执行模式，分为同步模式和异步模式；
在异步模式下，创建异步任务主要分为宏任务与微任务两种，宏任务是由宿主（浏览器、node）发起的，微任务由js自身发起的；
宏任务的几种创建方式
宏任务：script、setTimeout、setInterval、setImmediate、I/O操作，事件队列
微任务：Promise、Process.nextTick、MutationObserver

### 阻塞
在栈里的表现很慢的东西都叫阻塞，比如：网络请求很慢；


### webAPI（宿主环境）

DOM、ajax、setTimeout并不在v8源码里，而在webAPI，意味着，这几个不是浏览器处理的，是webAPI处理的，当webapi处理完成时，则会将它们推入task queue中，当调用栈没有内容时，则会输入task queue的内容；

![image](https://notecdn.hrhe.cn/images/js-16_闭包、高阶函数、ajax-04.png)

![image](https://notecdn.hrhe.cn/images/js-16_闭包、高阶函数、ajax-05.png)

### javascript是单线程的

主要用途是与用户交互，操作dom，因此只能是单线程，

所有同步任务都会放到栈中，回调函数都会放在任务对列，只有执行栈全部清空才会执行任务队列，回调函数比如定时器。

setTimout的最小时间是4ms，低于4毫秒自动设为4ms。同步任务和异步任务

Javascript单线程任务被分为同步任务和异步任务，

同步任务会在调用栈中按照顺序等待主线程依次执行，

异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。


任务队列Task Queue，即队列，是一种先进先出的一种数据结构。




### Event Loop

在JavaScript中，异步任务被分为两种：

宏任务(MacroTask)：script、setTimeout、setInterval、setImmediate、I/O、UI rendering；

微任务(MicroTask)：Process.nextTick、promise、mutationObserver


这里很多人会有个误区，认为微任务快于宏任务，其实是错误的。因为宏任务中包括了 script ，浏览器会先执行一个宏任务，接下来有异步代码的话才会先执行微任务。

Event Loop执行顺序如下：

* 首先执行同步代码，这属于宏任务
* 当执行完所有同步代码后，执行栈为空，查询是否有事件队列需要执行
* 执行所有微任务
* 当执行完所有微任务后， 如有必要会渲染页面
* 然后开始下一轮Event Loop，执行宏任务中的异步代码，也就是setTimeout中的回调函数

![image](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2baaf009636748c491898aafeceddb32~tplv-k3u1fbpfcp-watermark.image)



理解：
javascript按照同步执行，遇到promise则执行promise里的语句，如果有then则放到微任务队列中；

直到一圈执行完成，再开始执行微任务中的任务；

遇到setTimeout放到宏队列的最后边，直到所有的微任务执行完成，开始执行宏队列中的任务；

```js
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}

console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0)

async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');

/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
*/
```

nodejs的     

process.nextTick(不推荐使用)和setImmediate的值是一个回调函数。

process.nextTick 方法可以在当前"执行栈"的尾部之前执行。比settimeout先执行，

setImmediate方法则是在当前"任务队列"的尾部添加事件，它指定的任务总是注册到下一次Event Loop时执行，同一轮的event先执行，如同setTimeout(func, 0)

多个process.nextTick语句总是在当前"执行栈"一次执行完，多个setImmediate可能则需要多次loop才能执行完。
```js
process.nextTick(function foo() {
  process.nextTick(foo);
});
```
将会一直循环递归，不会去执行其他的代码

浏览器的主要组件包括调用堆栈，事件循环，任务队列和web API，js调用栈是先进不出的，js引擎每次从堆栈中取出一个函数，然后从上到下依次运行代码，每当它遇到一些异步代码，如setTimeout，它就把它交给webAPI，因此每当事件被触发时，callback都会被发送到任务队列；

事件循环不断的监视任务队列，并按它们排队的顺序一次处理一个回调，每当调用堆栈为空时，Event loop获取回调并将其放入堆栈中进行处理，请记住，如果调用堆栈不是空的，则事件循环不会将任何推入堆栈；




## 五、防抖函数
触发高频事件（如resize，scroll）后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

如果一直输出触发事件，则会在最后一步才执行事件；

**思路** ： 每次触发事件时都取消之前的延时调用方法；需要定制一个定时器，设定多少秒；

**理解** ：给输入框绑定oninput事件，会在输入框里按下就执行一次，这时使用防抖函数，用户按下之后，前一个字符输入完成与后一个字符输入完成时间 间隔内必须等待多少秒才能执行，如果一直输入就不会执行；

作用：

1. 搜索：在用户输完最后一个数字才调用该函数；

2. 在点击star时，希望在用户点击之后，间隔多久才能再次点击；

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
}   //调用方法时记得带小括号，执行返回的函数;
ipt.addEventListener('input',debounce());
```
简单版的缺陷：只能在最后一次调用，一般防抖会有immediate选项，表示立即调用；
```js
export function debounce(func,wait=50,immediate=true){
  let timer,context,args  // 声明三个参数,一个为定时器,一个为上下文,一个为参数;
  // 定义一个later来设置延迟定时器
  // status状态来确定是第一次触发还是第二次
  const later = (status) => setTimeout(()=>{
    timer = null;  // 延迟函数执行完毕则清除序号;
    if(!immediate || status === 2){
      func.apply(context, args)
      context = args = null   // 使用完成之后清除;
    }
  },wait)
  return function(...params){
    context = this
    args = params
    if(!timer){  // 判断timer不存在的情况;
      timer = later(1)
      if(immediate){
        func.apply(context,args)
      }
    } else {
      // 如果点击快了会触发这里,每次点击清除定时器,重新创建定时器,所以定时器只会在最后停留触发
      clearTimeout(timer)
      timer = later(2)
    }
  }
}
```



## 六、节流函数

高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

高频触发事件，会几秒内执行几次；

**思路**： 每次触发事件时都判断当前是否有等待执行的延时函数

**理解**：给输入框绑定oninput事件，会在输入框里按下就执行一次，这时使用防抖函数，用户按下之后不会一直执行，会在定时器多少秒之后再次执行；减少执行的次数；

当第二次执行的时间和第一次执行的时间没有大过我自己设定的时间，就不执行；

```js
function throttle(){
    let flag = true;   // 设定一个开关
    return function(){
        if(!flag) return;  // 判断是否有等待延时函数,如果开关为false则return不执行;
        flag = false;  // 将开头为false;
        setTimeout(()=>{
            console.log('节流中...')
            flag = true;  // 执行完定时器 开关为true;
        },500)
    }
}
// 第二种
export function throttle(fn,wait){
  var pre = Date.now();
  return function(){
      var now = Date.now();
      if( now - pre >= wait){
          fn.apply(this,arguments);
          pre = Date.now();
      }
  }
}
```


## 七、柯里化函数
**定义**：函数柯里化又叫部分求值，柯里化是一种将使用多个参数的函数转换成一系列使用一个参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术；

**理解**：只传递给函数一部分参数来调用它，让它返回一个新函数去处理剩下的参数；

bind函数也是柯里化的一种；

实现一个currying函数，判断当前参数长度够不够，参数不够返回一个新函数，参数够了立马执行；

```js
function currying(fn,length){
    // 第一次调用不需要指定length,主要是用来判断形参个数;
    length = length || fn.length;   // 保留数组长度;
    return function (...args) {  // 返回一个新函数;并使用新函数进行传参;
        if(args.length >= length){
            //递归出口,判断长度是否相等;
            fn.apply(this,args)  // 如果满足参数，则执行;
        } else {
            // 参数未满足,重新返回新函数,进行递归;
            return currying(fn.bind(this,...args),length-args.length) 
             // 因为有传入的参数,所以使用bind将参数传入一部分;  递归函数必须返回,否则没有返回值;
        }
    }
}
```

## 八、偏函数
偏函数，partial application，也叫做部分应用、局部应用、偏应用；

偏函数指的是对一个函数应用一个或多个参数，但不是全部参数，在这个过程中创建一个新函数，这个函数用于接收剩余的参数；

偏函数和柯里函数的区别：

* 柯里化：函数分解为多个函数，只有传入的参数数量与希望参数数量相同，函数才会调用；
* 偏函数：没有参数数量的限制，可以使用任意数量的参数来应用它；


简单实现：传入一个函数，将偏函数化，不限制传入的数量，即可以执行；
```js
function partial(fn,...args){
    return function(...params){
        return fn.apply(this,[...args,...params])
    }
}
```

## 九、惰性函数
原理就是解决每次调用都要进行判断的这个问题，将函数重写，第一次运行之后就会覆写这个方法，下一次再运行的时候就不会执行判断了。
```js
var foo = function() {
    var t = new Date();
    foo = function() {
        return t;
    };
    return foo();   // 需要返回;
};

function fn(a,b){
    if(a==b){
        fn = function(){}
    } else {
        fn = function(){}
    }
    return fn()
} // 如果a等于b则执行上面的函数;返回需要执行一下;


// 利用惰性函数来重写事件;
function addEvent (type, el, fn) {
    if (window.addEventListener) {
        addEvent = function (type, el, fn) {
            el.addEventListener(type, fn, false);
        }
    }
    else if(window.attachEvent){
        addEvent = function (type, el, fn) {
            el.attachEvent('on' + type, fn);
        }
    }
    return addEvent()
}

// 闭包形式
var addEvent = (function(){
    if (window.addEventListener) {
        return function (type, el, fn) {
            el.addEventListener(type, fn, false);
        }
    }
    else if(window.attachEvent){
        return function (type, el, fn) {
            el.attachEvent('on' + type, fn);
        }
    }
})();
```



## 十、字符串的函数

```js
const fn = new Function('name','console.log("hello"+name)')
fn('ming')  // hello ming
```



## 九、json

1. json支持IE8+，如果需要IE8以下支持，需要下载一个json文件，一般是json2.js；

`JSON.parse()`;   将长得像数组的字符串，转为真正的字符串；比如：'[1,2,3]'

`JSON.stringify()`; 将数组转为字符串；

json创建对象是严格模式的，必须使用双引号，单引号也是不行的；




## 高频面试题
● 什么是闭包，闭包有什么作用，说说你对闭包的理解。

● 用闭包方式完成下面代码的修改，使得属性 user，id 外界不可见
```js
User = function(){}
User.prototype = {
    Id:””,
    Name:””,
    getId:function(){return this.id},
    setId:function(){this.id = id},
    getName:function(){return this.name},
    setName:function(){this.name=name}
}
```
● 同步和异步的区别 ?

● js 哪些操作会造成内存泄露？

