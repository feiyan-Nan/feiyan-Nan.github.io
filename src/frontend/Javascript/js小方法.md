# js小方法

## 小技巧

1. `if(value)`    直接value表示判断是否有内容，默认为有；

2. `元素.checked=true`；复选框被选中

3. 在函数里面递归调用必须`return`  ，否则不走后面

4. `trim()`；常用于value；干掉左右空格；

  判断value输入为空时，不让提交，如果value输入空格，也能提交，此时，需要

  `input.value.trim()`；使用trim方法可以清除value里面的空格并弹窗；，ie8不支持；

5. value写完后可以在按钮后面加一行代码：input.value = ''；清空内容方便用户下次输入；

6. 数组去重可以创建一个空的数组，`indexOf`查询没有的往里面放；

7. 调用一个方法，如果这个方法没有前缀，则`this`指向`window`；有前缀指向调用的，所以谁调用的函数，这个this就指向谁

8. `document.onkeydown`；document页面直接执行按键输入；

10. 点的形式都可以使用中括号的形式

    ```js
    let obj = {name: 'hny'}
    console.log(obj.name)
    // or
    console.log(obj['name'])
    
    // 一般中括号都是用来放变量的, 如下
    var s = 'name'
    console.log(obj[s])
    ```

11. 当输出对象遇到[object object]时，使用JSON.stringify转字符串输出；

12. 当在不使用模板字符换行时，可以使用折行转义字符 `\`

    ```js
    var htmlSTring = "<div>\ 
        This is a string.\ 
    </div>";
    ```

19. 一个页面不能有两个window.onscroll，可以使用绑定事件来做两个

    ```js
    window.addEventListener('scroll',()=>{});
    // 如果使用两个window.onscroll, 后一个则会覆盖前一个
    ```

20. 给代码添加debugger可以测试bug；

    `debugger`可以查看我写的浏览器技巧   断点内容；

14. `Object.prototype.hasOwnProperty.call(obj,i)`相当于以下

    ```js
    obj.hasOwnProperty(i)
    ```

15. 数组删除假值

    ```js
    var arr = [1, '', null, undefined, true, false, '2']
    arr.filter(Boolean) // => [1, true, '2']
    ```

16. 利用es6默认赋值语法，判断参数是否为空值

    ```js
    const isRequired = () => throw new Error('param is required')
    const print = (num = isRequired()) => {
        console.log('print: ', num)
    }
    ```



## 判断语句省略写法

```js
//判断；真就真
if(count === otherche.length){   //判断是否等于长度
    allche.checked = true;
}else{
    allche.checked = false;
}    //因为就给allche.checked赋一个值,true或false；
//省略写法
allche.checked = (count === otherche.length);   //将后面两个值赋给前面一个；



//判断真假 为真就为假
if(check[0].checked){    如果为真，就为假
    check[i].checked = false;
}else{   如果为假，就为真
    check[i].checked = true;
}
//省略写法：
check[i].checked = !check[0].checked;    //取返
// 如果第二个为真，就变假给第一个，如果第二个为假，就变真给第一个；
// 只要是true或false的，都可以利用感叹号取非;


//按钮事件 真就真
if(allche.checked){    //如果被选中就全部选中
    che[i].checked = true;
}else{
    che[i].checked = false;
}
//省略写法
che[i].checked = allche.checked;   //全部等于这个；

if(fn){
    fn()
}
//省略写法
fn && fn();    前面为真，才看后面的；
```



## js基础技巧

**计数器**

js最基础的使用技巧

实例：多个复选框全选可以创建一个计数器，选中一个计数器+1，判断计数器是否和复选框的个数一样，如果一样，则让全选按钮被选中；

**保存this指向**

函数里面再创建一个函数时，这时的this指向就变了，可以创建一个变量，保存this指向，里面就可以随便使用该变量，也不用担心this的指向问题， 也可以使用箭头函数避免这个问题
```js
// vue示例
methods: {
    // 一种写法
    msg () {
        var that = this
        function fn(){
            console.log(that) // 该that指向vue实例, this指向调用他的this
        }
    },
    // 另一种写法
    msg () {
        cont fn = () => {
            console.log(this) // 该this指向vue实例
        }
    }
}
```



## 取名字技巧

设置的都用：`set`开头

获取的都用：`get`开头

卸载都用: `un`

函数：`handle`

创建块：`demo`(演示),`wrap`(包装),`box`(盒子),`panel`（面版）



## 定时器使用函数需要传参时    

```js
// 禁止写法
setInterval(timer(1), 1000) // 因为这种写法的函数直接执行了

// 正确写法
setInterval(function(){
    timer(1)
}, 1000)



// 错误写法
div.onclick = change()

// 正确写法
div.onclick = function(){
    change()
}
```



## 随机id

```js
Math.random().toString(36).substr(3,6)   //得到6位随机id
```

查看随机6位数；

```js
Array.from({length:20}, i => Math.ceil(Math.random() * 6))
```



## 随机16进制颜色

```js
const RandomColor = ()=> '#' + Math.floor(Math.random()*0xffffff).toString(16).padEnd(6,'0'); // 由于会出现5位数, 因此加上padEnd保险
```



## 合并多个对象

```js
const o = {
    name: 'hny'
}
const e = {
    eat: 'banana'
}
const obj = {...o, ...e} // => {name: 'hny', eat: 'banana'}
const obj2 = Object.assign(o, e) // => {name: 'hny', eat: 'banana'}
```





## 模板标签替换

```js
let text = '大家好,我的{{name}},今年{{age}}岁'
let obj = {name:'zs',age:18}
let result = text.replace(/{{(.*?)}}/g,e=>{
    return obj[e.replace(/{|}/g,'')
})  // 大花括号也可以没有转义符;
```



## 交换数组指定位置

`[1,2,3,4,5] ===> [5,2,3,4,1]`

```js
function arrIndexExchange(array,x,y){
    return array.splice(x-1,1,...array.splice(y-1,1,array[x-1]))
}
```



## 生成uuid

uuid的格式为：8-4-4-4-12
```js
function S4(){
    return (((1+Math.random())*0x10000|0)).toString(16).substr(0,4)
}
function uuid(){
    return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
}
```



## 鼠标禁止右键

```html
<body oncontentmenu='return false'>
    <div></div>
</body>
```



## 复制功能

```js
const copyFun = cont => {
    const textArea = document.createElement('textarea')
    textArea.value = cont
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')    //开启复制;
    document.body.removeChild(textArea)
}
```





## 将Unicode码转回英文

`String.fromCharCode()`   //括号填写数字，

例子：取随机26个小写英文字母，

在ASCII码中，26个小写英文字母在97-122之间
```js
String.fromCharCode(97+Math.ceil(Math.random()*25))  //返回一个小写字母
```



## 将url转换成对象形式取值

* 使用while循环+正则

```js
function formatSearch(search, o={}){
    let reg = /(\w+)=(\w+)/ig
    while(reg.exec(search)){
        o[RegExp.$1] = RegExp.$2
    }
    return o;
}
// 将match传入即可;
```
* 使用api

```js
let str = '?name=hny&age=18&sex=1'
Object.fromEntries(new URLSearchParams(str)) // {name:'hny',age:18,sex:1}
```
* 使用正则

```js
function formatUrl(search, o={}){
    search.replace(/([^?&=]+)=([^&]+)/g,(_,k,v)=>o[k]=v)
    return o
}
// 传入match即可
```



## 实现图片的异步加载

img文档： [https://www.w3school.com.cn/jsref/dom_obj_image.asp](https://www.w3school.com.cn/jsref/dom_obj_image.asp)
```js
// data-*  是html5的新特性
<img data-src='' src='' alt='' />  // 通过img.dataset.src可以获取到data-src的数据;

// 可以通过循环获取img对象来修改对象的src;
function loadImg(obj, url){
    var img = new Image()
    img.src = url
    // 当图片加载完成时的事件
    img.onload = function(){
        obj.src = img.src  // 当图片加载完成时,渲染页面的src;
    }
    // 当图片加载失败时的事件
    img.onerror = function(){}
}
```



## 清除缓存技巧

数据不更新，本地有缓存，可以在网址后面加个时间戳

```js
var t = Date.now()
var url = `?t=${t}`
```



## 临时使用$获取元素

当一个函数里面需要获取多个节点时，可以使用下面方法

```js
;(function($){
    $('div').scrollTop = $('.center').clientHeight
})(document.querySelector.bind(document))
```



## 检测移动端

```js
isMobile () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
```



## 解决谷歌翻译代码块的问题

> 将以下代码添加到一个新的书签，网址写以下代码

```js
javascript:(function(){
    // 不需要翻译的单词
    var wordArr = ['options','node','postcss','gulp','grunt']
    var reg = eval(`/${wordArr.join('|')}/ig`)
    // 不需要翻译的标签名
    var labelArr = ['pre','code']
    var reg2 = eval(`/<${labelArr.join('>|<')}>/ig`)
    document.documentElement.innerHTML = document.documentElement.innerHTML.replace(reg,val=>`<span class='notranslate'>${val}</span>`)
    document.documentElement.innerHTML = document.documentElement.innerHTML.replace(reg2,val=>`<${val.slice(1,-1)} class='notranslate'>`)
})()
```



## 总数格式化
例如：1000，转换为1k

```js
function formatStatistics (num) {
  if (!num) {
    return 0
  } else if (num > 999) {
    // 取小数点前后
    let [dotBefore, dotAfter] = (num / 1000).toFixed(2).split('.')
    // 解决1300出现1.30的情况
    let dotAfterNum = dotAfter % 10 > 0 ? dotAfter : dotAfter[0]
    return `${dotBefore}${dotAfter > 0 ? '.' + dotAfterNum : ''}k`
  } else {
    return num
  }
}
```



## 对接url传输加密

`encodeURIComponent`对链接加密，将url上面的符号添加%转码

`decodeURIComponent`对加密的url进行解密

`escape`：加密汉字

`unescape`：解密



## 解决toFixed四舍五入的问题

```js
export function toFixed(value, precision) {
  if (typeof value === 'undefined') return ''

  return new Intl.NumberFormat(undefined, {
    useGrouping: false,
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  }).format(value)
}
```





## arguments.callee

属性包含当前正在执行的函数

主要用途是由于函数内部需要调用自己，可以直接使用arguments.callee调用，如果直接写当前函数名，该函数就会紧紧耦合在一起，由于函数名只是一个包含指针的变量，因此将另一个函数名也指向同一个函数，则不可用了，因为调用自己的名字不一样了

调用`arguments.callee.toString()`返回这个匿名函数；

`arguments.callee`可以直接调用当前函数；

`arguments.callee.caller` 这个属性中保存着调用当前函数的函数的引用(可以查看红宝书的详细介绍115页)



## 常用对象的方法
### 判断对象的数据类型

```js
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)
const isArray = isType('Array')
console.log(isArray([])) // true

//分解
function isType(type){
    return function(target){
        `[object ${type}]` === Object.prototype.toString.call(target)
    }
}
```

**精准判断类型**：（类型需要大写）

```js
'[object 类型]' === Object.prototype.toString.call(形参)
```



### 动态属性名

 声明一个变量；使用中括号代替，也可以是对象变量属性；

```js
// 动态属性名
let dys = 'email'
let user = {name:'join',[dys]:'john@qq.com'}

let flag = true
let user = {name: 'join',[flag?'c':'d']:2}
```

例子2

```js
let obj = [{name:'lis',flag:'no'},{name:'zs',flag:'yes'}]
Array.from(obj,({name,flag})=>{
    return { [name]:visi }
    // 名字需要是引号的，所以需要中括号；
})
// [{lis:no},{zs:yes}]
```



### 有条件的象征对象 

在对象里面使用...去使用布尔值；

```js
function obj(flag){
    return {
        name: 'limin',
        ...flag && {age: 18}
    }
}
obj(true) // {name:'',age:''}
obj(false)  // {name: ''}   // 如果不传入也是一个值;
// 解析：如果flag成立,则...{}将对象解构, 如果不成功则不解构

// 延伸 动态添加数组值;
let arr = [
    {name: 'hh'},
    ...[...true ? [{name: 'ls'}] : ''],
    {name: 'op'}
]
```

### 解构原始对象   

提取两部分，分为两个对象；

```js
let obj = {name:'lishi',age:18,city:'北京'}
let user = {},userOther={};
({name: user.name,...userOther} = obj)
```



## 设置REM

```js
export const setRem = () => {
  const minWidth = 320
  const maxWidth = 640
  let W = document.documentElement.clientWidth
  W = W > maxWidth ? maxWidth : W < minWidth ? minWidth : W
  document.documentElement.style.fontSize = W / 3.75 + 'px'

  window.onresize = function () {
    let W = document.documentElement.clientWidth
    W = W > maxWidth ? maxWidth : W < minWidth ? minWidth : W
    document.documentElement.style.fontSize = W / 3.75 + 'px'
  }
}
```



## 判断touch事件滑动的方向

**根据移动的值正负来判断**

```js
//滑动处理
var startX, startY, moveEndX, moveEndY, X, Y;   
mybody.addEventListener('touchstart', function(e) {
   e.preventDefault();
   startX = e.touches[0].pageX;
   startY = e.touches[0].pageY;
}, false);
mybody.addEventListener('touchmove', function(e) {
   e.preventDefault();
   moveEndX = e.changedTouches[0].pageX;
   moveEndY = e.changedTouches[0].pageY;
   X = moveEndX - startX;
   Y = moveEndY - startY;
   if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
       alert("向右");
   } else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
       alert("向左");
  } else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
       alert("向下");
  }else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
       alert("向上");
  } else{
       alert("没滑动");
  }
});
```



## 判断两个对象是否相等

```js
function isEqual(x, y) {
  // 处理没有传入参数的情况
  if(typeof x === 'undefined' || typeof y === 'undefined') return false
  
  // 处理不是对象的情况, 如果两个基本类型则直接判断
  if (x === y) return true

  // 处理不是对象的情况
  if (!(x instanceof Object) || !(y instanceof Object)) return false


  // 必须是同一原型链
  if(x.constructor !== y.constructor) return false

  // 如果是数组进行比较
  if(Array.isArray(x) && Array.isArray(y)) {
    // 如果长度不同，则false
    if(x.length !== y.length) return false
    
    for(var i=0;i<x.length;i++){
      // 如果相等则跳出
      if(x[i] === y[i]) continue

      // 判断不是对象的跳出
      if(typeof x[i] !== 'object') return false

      // 递归重新调用
      if(!isEqual(x[i], y[i])) return false
    }
    return true
  }

  for (var p in x) {
    if(x.hasOwnProperty(p)){
      // 如果y里面没有p则false
      if(!y.hasOwnProperty(p)) return false

      // 如果基础类型相等, 则跳出该循环, 不相等的情况肯定又是对象
      if(x[p] === y[p]) continue

      // 数字、字符串、函数必须严格相等;
      if(typeof x[p] !== 'object') return false

      // 递归调用
      if(!isEqual(x[p], y[p])) return false
    }
  }

  for(p in y){
    if(y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false
  }
  return true
}
```



## 10秒内不重新请求接口

场景：解决接口数据返回慢的问题

```js
let fetchData = JSON.parse(sessionStorage.getItem('fetchData')) || {
    lastUpdate: -1,
    valid: false
}
if(+new Date() - lastUpdate > 10000 || !fetchData.valid) {
    // 重新请求接口, 接口返回之后设置数据;
    sessionStorage.setItem('fetchData', {
        lastUpdate: +new Date(),
        valid: true
    })
}
```



## 执行字符串的语句

1. eval
2. new Function
3. setTimeout



## 计算百分比

参数1:是要计算百分比的数组
参数2：是数组的下标
参数3:要保留几位小数

```js
export function getPercentValue (valueList, idx, precision) {
    // 判断是否为空
    if (!valueList[idx]) {
        return 0;
    }
    // 求和
    var sum = valueList.reduce(function (acc, val) {
        return acc + (isNaN(val) ? 0 : val);
    }, 0)
    if (sum === 0) {
        return 0;
    }
    // 10的2次幂是100，用于计算精度。
    var digits = Math.pow(10, precision);
    // 扩大比例100，
    var votesPerQuota = valueList.map(function (val) {
        return (isNaN(val) ? 0 : val) / sum * digits * 100;
    })
    // 总数，扩大比例意味的总数要扩大
    var targetSeats = digits * 100;
    // 再向下取值，组成数组
    var seats = votesPerQuota.map(function (votes) {
        return Math.floor(votes);
    })
    // 再新计算合计，用于判断与总数量是否相同，相同则占比会100%
    var currentSum = seats.reduce(function (acc, val) {
        return acc + val;
    }, 0)
    // 余数部分的数组：原先数组减去向下取值的数组，得到余数部分的数组
    var remainder = votesPerQuota.map(function (votes, idx) {
        return votes - seats[idx];
    })
    // 给最大最大的余额加1，凑个占比100%；
    while (currentSum < targetSeats) {
        //  找到下一个最大的余额，给其加1
        var max = Number.NEGATIVE_INFINITY;
        var maxId = null;
        for (var i = 0, len = remainder.length; i < len; ++i) {
            if (remainder[i] > max) {
                max = remainder[i];
                maxId = i;
            }
        }
        // 对最大项余额加1
        ++seats[maxId];
        // 已经增加最大余数加1，则下次判断就可以不需要再判断这个余额数。
        remainder[maxId] = 0;
        // 总的也要加1，为了判断是否总数是否相同，跳出循环。
        ++currentSum;
    }
    // 这时候的seats就会总数占比会100%
    return seats[idx] / digits
}
```



## 根据路径找对应值

```js
function getPropByPath (obj, path, strict) {
  if(!obj || !path) return undefined;
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  const keyArr = path.split('.')
  let i = 0
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break
    const key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  }
};
```

