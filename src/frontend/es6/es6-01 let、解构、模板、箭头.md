#  es6-01 let、解构、模板、箭头

## es6大纲

![image-20200602224917632](https://notecdn.hrhe.cn/images/image-20200602224917632.png)

## 一、严格模式：

1. 开启严格模式：'use strict'

2. 开启严格模式的作用：
   * 变量必须先声明才能使用
   * 禁止自定义的函数中的this指向window
   * 创建eval作用域

`eval`：将字符串的表达式进行运算；

严格模式下的eval声明的变量，只能在该字符串里面使用，外面不能使用；

`xml`：可扩展标记语言，标记的标签自定义，必须成对，最外层必须根标签；

​	需要设置xml头部：`<? xml version='1.0' encoding='utf-8' ?>`

`html`：标记的标签是预定义的；



## 二、json对象

>  JSON(JavaScript Object Notation, JS 对象节点)，主要用来在不同语言之间交换数据

### json基本语法

json只有两种数据格式：json对象 、json对象数组

* 属性名必须用双引号，属性值如果不是数字，则必须用引号；
* 属性值可以是字符串、数字、布尔型、数组、对象，但不能是函数或dom对象
* 属性名与属性值用冒号:分隔，不同的属性名与属性值之间用逗号分隔



### JSON对象方法

* `JSON.parse():`将普通的json字符串转换成json对象
* `JSON.stringify():`将json对象转换成json字符串
* 

### JSON.stringify的特性

1. 对于 undefined、任意的函数以及 symbol 三个特殊的值分别作为对象属性的值、数组元素、单独的值时的不同返回结果。

   * undefined、任意的函数以及 symbol 作为对象属性值时 JSON.stringify() 跳过（忽略）对它们进行序列化

   * undefined、任意的函数以及 symbol 作为数组元素值时，JSON.stringify() 将会将它们序列化为 null
   * undefined、任意的函数以及 symbol 被 JSON.stringify() 作为单独的值进行序列化时都会返回 undefined

2. 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。

3. 转换值如果有 toJSON() 函数，该函数返回什么值，序列化结果就是什么值，并且忽略其他属性的值。

4. JSON.stringify() 将会正常序列化 Date 的值。

5. NaN 和 Infinity 格式的数值及 null 都会被当做 null。

6. 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。

7. 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。

8. 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。

9. 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。



### JSON.stringify的参数

1. 第二个参数
   * 作为函数时，它有两个参数，键（key）和值（value），函数类似就是数组方法 map、filter 等方法的回调函数，对每一个属性值都会执行一次该函数（期间我们还简单实现过一个 map 函数）。
   * 如果 replacer 是一个数组，数组的值代表将被序列化成 JSON 字符串的属性名。

2. 第三个参数
   * 如果是一个数字, 则在字符串化时每一级别会比上一级别缩进多这个数字值的空格（最多10个空格）；
   * 如果是一个字符串，则每一级别会比上一级别多缩进该字符串（或该字符串的前10个字符）。


利用第二个参数排序对象属性

```js
let obj = {name: 'hhh', age: 18}
JSON.stringify(obj, Object.keys(obj).sort())
```



## 三、Object扩展

### defineProperty

> 修改或添加一个属性；并返回这个对象，如果不指定参数，则默认为false，

`Object.defineProperty(obj,attr,descriptor)；`

* `obj`: 需要被操作的目标对象

* `attr`: 需要被操作或设置的属性名，有则修改，没有则添加；

* `descriptor`: 将被定义或修改的属性的描述，是一个对象；

  descriptor可设定的选项：（可以设定的属性默认都为true;）

  * `value`：值；
  * `writable`：属性值是否可以修改；
  * `configurable`：属性值是否可以被删除；
  * `enumerable`：是否可以枚举，通过for-in等方法遍历；
  * `get` ：函数必须返回，返回设定的值；
  * `set` ：当修改当前值时，触发set函数；set的第一个参数是设置的值；

数据劫持：调用set之后，get的值不会修改，而是将设置的值放到set的第一个参数里面；

get和set是一个函数，如果有了get和set就不能有value和writable了；

```js
Object.defineProperty(obj1,'age',{
    configurable:true,
    enumerable:true,
    get(){return ...},
    set(){}
})
```



### defineProperties

> 添加或修改多个新属性，并返回该对象；

`Object.defineProperties(obj, props)；`

* `obj`：需要添加或修改属性的对象；

* `props`：一个对象，添加或修改的配置，如果写原有的属性名就是修改；

如果需要修改现有的，就不能使用get和set属性；



### create

> 使用一个新对象继承现有的对象的原型并添加自己的属性，可以使用现有对象的属性

`Object.create(prototype, [descriptors])`

```js
let obj = {age:18}
let obj2 = Object.create(obj)  //obj2返回一个空对象,但可以使用obj的属性;

object.create相当于：
function Create(obj){
    function F(){}
    F.prototype = obj
    return new F()
}
```
创建一个新的对象，带着指定原型对象的属性，也可以说是继承了另一个对象，

descriptors可选参数，添加新的方法，可以指定属性是否可以修改删除和遍历；
```js
obj2 = Object.create(obj,{
    sex:{value:'男'}
})
```
注意：创建的对象都在obj2的原型上，返回还是一个空对象，但可以访问；


1. getter和setter可以不同时使用,但在严格模式下只其中一个,会抛出错误
2. 数据描述符与存取描述符不可混用,会抛出错误



### getOwnPropertyDescriptor

> 返回指定对象上一个自有属性对应的属性值描述符

`Object.getOwnPropertyDescriptor(obj, prop)`（一个）

* obj是一个对象，

* prop属性名称；



### getOwnPropertyDescriptors

 `Object.getOwnPropertyDescriptors(obj)`（所有）

返回指定对象所有的属性描述符；返回一个对象：{name: {…}, age: {…}, funll: {…}}



## 四、es6简述
1. ECMAscript 与 Javascript的关系：

   ECMAscript是规范，而Javascript是规范的具体实现，两者不能相提并论。

2. ECMA的几个重要版本：

    ECMA这个组织在2015年之前，使用的都是ECMAscript 5这个版本；

    ECMA在2015年6月份正式颁布ES6，而之后的版本变化不大，以后每年6月份颁布新

    版本(这个组织提的一些新规定)；

    ECMA在2016年颁布的版本称之ES7



## 五、let和const
>  使用var声明，也可以不使用var直接声明，var声明的能够变量提升

### let声明变量，区别

1. 没有变量提升,报错referenceError；
2. 必须先声明后使用
3. 只能声明一次，重复声明会报错；
4. 块级作用域。

在`{}`里面声明的`let`，在外面拿不到值，会报错；

常用于for循环，i只在for循环里面能拿到，不会泄漏；

用法：在使用循环时，事件里面也能拿到外面的i了；

不考虑IE的情况下，或者在我们的Node或者使用前端框架去写东西，就不要用var了



### const 声明常量

1. const声明必须赋初始值，let不需要；

2. 声明之后不能修改值， 其它和let特性是一样的

3. 常量名一般都使用大写

4. 同一个常量只能声明一次，多次报错；

```js
var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
如果函数形参再使用let声明，则会报错；`has already been declared`；



## 六、解构赋值
### 数组解构

```js
let [a,b,c] = [1,2,3]   // 完全解构
let [a,b,c,d] = [1,2,3]  // 不完全解构
```

当少了变量或者少了值，就是不完全解构，没有的是`undefined`；
```js
// 变量交换
var a = 1, b = 2;
[a,b] = [b,a]
// a 2
// b 1
```



### 对象解构赋值

```js
let obj = {name: 'zs', age: 18}
// 完全解构
let {name, age} = obj
// 实际上是：{name: name, age: age}

// 默认赋值
let {name = '未定义'} = obj

// 解构并重命名 下面例子将component重命名了
let {component: Component} = obj
```

**注意：** 解构对象时，键名必须一 一对应，当变量名不一样时，为undefined;

如果填写的键名没有，可以赋默认值，以等号赋值，如果对象有的话赋的默认值不起作用；



### 函数的使用

1. 函数传参时，如果是一个对象可以`function fn({name,age})`；

   解构函数时，可以直接将形参写成对象解构来接收；

2. 传参解构方式  

   * 重新命名法

     ```js
     function fn({component:Component})   // 因为component是保留字,所以需要重新改名
     ```
     
   * 默认赋值

     ```js
      // 默认赋值
      function fn(user={name:'hhh'}){
          console.log(name) // name is not defined
          console.log(user) // {name: 'hhh'}
      }
     
      // 默认赋值并解构
      function fn({name='未定义'}={}){
          console.log(name) // 未定义
      }
     ```




## 七、模板字符串

>  如果只是单纯的声明字符串和单引号、双引号一样的。并且模板字符串里面可以解析变量和运行一些表达式。 模板字符串思想来源于后端

1. 模板字符串使用``；
2. 变化的部分使用`${xxx}`定义，可以写函数以及运算表达式；
3. 模板字符串可以换行不报错；



## 八、对象的简写

### 对象的简写形式

如果属性值是变量的，对象里面直接写变量名就可以了；

```js
var name = 'hny'
var age = 18

var obj = {name, age}
// 等于
var obj = {name: name, age: age}
```



### 对象函数的简写

直接写`函数名(){}`，去掉冒号和function，一般用在表单里面需要给后台传数据时使用；

```js
let obj = {
    name: 'hh',
    create(){}
}
```



### 对象访问super

对象里面可以直接访问super原型，super后面必须跟属性，super关键字为原型对象，只能用在对象的方法之中，**只有对象的简写方法才能使用**，才能让JavaScript引擎确认

```js
let obj = {name: 'hhh'}
let fired = {
    /*getName:function(){
        return super.name // 语法错误
    }*/
    getName(){
        return super.name
    }
}
Object.setPrototypeOf(fired, obj)

console.log(fired.getName()) // 'hhh'

super.name
等同于：
Object.getPrototypeOf(this).foo
// or
Object.getPrototypeOf(this).foo.call(this)
```



### 对象使用get和set

```js
let obj = {
    _wheels: 4,
    get wheels(){
        return this._wheels
    }
    set wheels(value){
        if(value < this._wheels){
            throw new Error('数值太小了')
        }
        this._wheels = value
    }
}
```



### 对象属性的遍历
1. `for...in`
   for..in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性），如果不需要遍历继承的属性，可以加入判断

   ```js
   for(let prop in obj){
       if(obj.hasOwnProperty(prop)){
           // 在里面写的内容不包含继承的
       }
   }
   ```

2. `for...of`

   使用es6的数组解构，可以使用进行遍历

   ```js
   for(let [key,value] of Object.entries(obj)){
       console.log(key,value)
   }
   ```

3. `Object.keys(obj)`

   Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性的键名）

4. `Object.getOwnPropertyNames(obj)`

   返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）的键名

5. `Object.getOwnPropertySymbols(obj)`

   返回一个数组，包含对象自身的所有Symbol属性的键名

6. `Reflect.ownKeys(obj)`

   返回一个数组，包含对象自身的所有键名，不管键名是Symbol或字符串，也不管是否可枚举



以上遍历对象键名，都遵守同样的属性遍历的次序规则：

* 首先遍历所有的数值键，按照数值升序排列
* 其次遍历所有的字符串键，按照加入时间升序排列
* 最后遍历所有Symbol键，按照加入时间升序排列


```js
Reflect.ownKeys({[Symbol()]:0,b:0,10:0,2:0,a:0})
// ['2','10','b','a',Symbol()]
```



## 九、箭头函数

匿名函数使用的；

1. 箭头函数要先定义后调用，调用时不能放到箭头函数的前面；

    `fn = () =>{console.log(1)}`

2. 箭头函数不能new实例化，会报错：fn is not constractor;

3. 箭头函数中的形参只有一个时，不需要小括号；

    `fn=x=>{console.log(x)}；`

4. 箭头函数体只有一句代码时，可以不写{}，但要注意这一句代码的结果会作为返回值返回出去,

    `fn = x => x`;    默认被使用return返回；需要console.log打印；

5. 如果箭头函数体有多条语句，则要写`{}`，若有返回值时，则要使用return 明确返回出去

6. 箭头函数的this指向外层函数；



### 函数默认值

es6提供了函数默认值的设置语法；

设置参数默认值，可以直接在传参时，后面写上等于；

`function fn(x,y,c=10){}`



### 箭头函数和普通函数的区别

箭头函数没有arguments、this指向的问题





## 十、this指向

普通函数内部的this分两种情况，严格模式和非严格模式；

非严格模式下，this默认指向全局对象window；

而严格模式下，this为undefined；



对象中的this：

对象内部方法的this指向调用这些方法的对象；

1. 函数的定义位置不影响其this指向，this指向只和调用函数的对象有关；
2. 多层嵌套的对象，内部方法的this指向离被调用函数最近的对象（window也是对象，其内部对象调用方法的this指向内部对象，而非window）；
```js
//1
var o = {
    prop: 37,
    f: function () {
        return this.prop;
    }
};
console.log(o.f());
var a = o.f;
console.log(a());

var o = { prop: 37 };

function independent() {
    return this.prop;
}

o.f = independent;

console.log(o.f());

//2
o.b = {
    g: independent,
    prop: 42
};
console.log(o.b.g());
```

原型链中this

原型链中的方法的this仍然指向调用它的对象；



构造函数中的this

构造函数中的this与被创建的新对象绑定

注意：当构造器返回的默认值是一个this引用的对象时，可以手动设置返回其他的对象；如果值不是一个对象，返回this；
```js
function C2() {
    this.a = 37;
    return { a: 38 };
}
var b = new C2();
console.log(b.a); // logs 38
```


call和apply

当函数通过function对象中继承的方法call()和apply()方法调用时，this指向修改的地方；



bind方法

bind方法在es5引入，



dom事件处理函数中的this

当函数被当做监听事件处理函数时，this指向触发该事件的元素（针对于addEventListener）；



内联事件：

1. 当代码被内联处理函数调用时，它的this指向监听器所在的dom元素；

2. 当代码被包括在函数内部的执行时，其this指向等同于函数直接被调用；



定时器的this

对于延时函数内部的回调函数的this指向全局对象window（当然我们可以通过bind方法改变其内部函数的this指向）
```js
//通过bind绑定;
function Person(){
    this.a = 1;
    setInterval(function(){
        console.log(this.a);  //1;
    }.bind(this),1000)
}
new Person();
bind返回的是一个函数，需要被调用的，bind可以直接在花括号后面进行点；
var p = new Person();//3秒后返回构造函数新生成的对象 Person{...}
```


箭头函数中的this

由于箭头函数不绑定this，它会捕获其所在（定义的位置） 上下文的this值，作为自己的this值；

1. 所以call()/apply()/bind()/方法对于箭头函数来说只是传入参数，对它的this毫无影响；
2. 考虑到this是词层面上的，严格模式中与this相关的规则都将被忽略；（可以忽略是否在严格模式下的影响）；
```js
function Stud(){
    this.a = 1;
    setInterval(()=>{
        console.log(this.a);    //1,因为箭头函数会捕获其所在上下文的this值作为自己的this值;
    },1000)
}
new Stud();
```

