# js-02 javascript数据类型篇
ECMAScript中有5种基本数据类型：Undefined、Null、Boolean、Number、String

三种基本包装数据类型：String、Number、Boolean

有一种复杂数据类型：Object；

**弱类型语言：**
javascript是弱类型语言，在声明时是不需要定义类型的，变量的类型就是其值的类型；

缺点：在不确定的地方就会发生类型转换，无法确定类型，必须要掌握类型转换的原理；


## 一、typeof操作符(检测数据类型)

1. 对一值使用了typeof操作符，会返回以下某个字符串；

'undefined' //如果这个值未定义

'boolean'  // 如果是布尔值

'string'   // 如果是字符串

'number'   // 如果是数值

'object'   // 如果值是对象或null

'function' // 如果是函数;


例子:
```js
var message = 'hello'
console.log(typeof message) // 'string'
console.log(typeof 95) // 'number'
```
2. typeof操作符的操作数可以是变量，也可以是字面量
3. typeof不能准确判断变量是什么类型，null会返回object，因为null的定义是空对象指针；

常使用的环境：

判断函数是否有传值：typeof val == 'undefined'；val是形参；

判断函数传值的类型：typeof val == 'number'；

因为检测数据类型时，输入的结果是字符串，所以需要加引号；typeof (typeof a) 检测传入的a的类型的类型；



## 二、Undefined类型
1. Undefined类型只有一个值，即特殊的undefined，
2. 在使用var声明变量时，没有赋值，就是undefined；
3. 函数没有明确返回值，如果接受了，结果是undefined；


注意：即使不声明，使用typeof也会返回'undefined'；
```js
var name;
console.log(typeof name) // 'undefined'
console.log(typeof age)  // 'undefined'
```

## 三、Null类型
1. Null类型是第二个只有一个值的数据类型，这个特殊的值是null；
2. null表示一个空对象指针，因此检测null的数据类型时，会返回object；
3. 如果需要保存的值类型为对象，建议赋值为null；

注意：判断undefined == null时，结果为true，因为undefined值是派生自null值的，无论在什么情况下都没有必要把一个变量的值显式地设置为undefined；

面试题：

（1）undefined和null的区别：

null表示值为空，但是是object对象，

undefined表示变量没有初始化，值为空缺；

null ==undefined   // 因为都为空，不对比类型；

null === undefined  //false  类型不同

（2）null 是对象吗？

null的返回值是object，但是null不是对象，而是基本数据类型的一种；



## 四、Boolean类型
1. boolean类型是使用最多的类型，只有两个值：true(真)和false(假)，在ECMAScript中是区分大小写的，True和False都不是boolean类型，只是标识符；
2. boolean类型的转换规则

数据类型             转换true的值              转换false的值

Boolean                true                            false

String                   任何非空字符串            ''(空字符串)

Number               任何非零数值               0和NaN

Object                  任何对象                      null

Undefined           不适用转换true            undefined



## 五、Number类型
1. 最基本的数值字面量格式是十进制整数，

八进制字面值第一位必须是0且后面的值必须小于8，否则还是十进制；

十六进制以0x开头，十六进制一般用在表示颜色上；

### 浮点数值

在表示0.1时，通常可以直接.1，去掉0，浮点数值的最高精度是17位小数，0.1加0.2的结果不是0.3，而是0.300000000000000004，这是使用基于IEEE754数值的浮点计算的通病，所有语言如此，永远不要测试某个特点的浮点数值；



### 数值范围

`Number.MIN_VALUE`   最小值，这个值是5e-324，

```
Number.MAX_VALUE   最大值，这个值是1.7976931348623157e+308
```
   `Infinity`  无穷大    `-Infinity`  无穷小，`isFinite()` 判断是还是无穷数；
    

e的表示法：3.125e7 == 31250000，实际是3.125乘以10的7次幂；0.0000003表示3e-7；
      
### NaN

（1）即非数值，是一个特殊值，任何数值除以非数值会返回NaN，不会影响其他代码的执行；

（2）NaN与任何值都不相等，NaN不等于NaN；

（3）判断是不是NaN，使用isNaN，在判断时会尝试将这个值转换为数值再进行判断；isNaN在对对象调用时，会首先调用对象的valueOf方法，然后再确定该方法返回的值是否可以转换为数值，如果不能，则基于这个返回值再调用toString()方法；
```js
isNaN(NaN)  //true
isNaN(10)  //false
isNaN('10')  //false
isNaN('blue')  //true
isNaN(true)  // false  (true被转换为1)
```


### 数值的转换

1. Number()、`parseInt()`、`parseFloat()`，第一个函数可以用于任何数据类型，另外两个函数则专门用于把字符串转换成数值；

2. **Number转换规则**

* 如果是boolean值，true为1，false为0
* 如果是数字，直接返回传入的数值；
* 如果是null，返回0
* 如果是undefined，返回NaN，特殊值
* 如果是字符串,遵循以下规则

	* 如果字符串只包含数字，'1'转换1，'011'转换为11；
	* 如果包含有效浮点格式，如：'1.1'，则将转换对应的浮点数值；
	* 如果字符串包含有效十六进制，则将其转换相同大小的十进制
	* 如果字符串是空的，转换为0
	* 如果字符串除以上规则，转换为NaN；
* 如果是对象，则调用对象的valueOf方法，如果转换结果是NaN，则调用对象的toString方法；


```js
Number('hello') // NaN
Number('') // 0
Number('00011') //11
Number(true) // 1
```
注意：空的数组转换为0，空的对象转换为NaN；   一般在需要转换的值前面带上+符，可以直接转换，+[]，转换为0；

3. **parseInt转换规则**

由于Number()函数在转换字符串时比较复杂而且不够合理，因此在处理整数的时候更常用的是parseInt函数；

* parseInt会忽略空格，直到找到第一个非空格字符，如果第一个不是数字或者负号，则返回NaN；
* parseInt在转换查找时，如果第一个是数字，则会继续解析第二个字符，直到后续字符遇到一个非数字字符，如：'12px'转换为12；
* 在遇到小数点时，也不会解析，需要使用parseFloat；
* parseInt转换空字符串时，返回NaN，Number转换空字符串返回0；
* parseInt有第二个参数，以什么进制来转换；

	* 如：由于16进制是以0x开头的,如果没有0x，'af'转换为NaN，如果是parseInt('af',16)，则转换是175；
	* '070'是以0开头，转换是以8进制，则是56，如果是parseInt('070',10)，则是70；

4. **parseFloat转换规则**

* 主要是解决parseInt不能识别小数点而诞生的；
* parseFloat只解析10进制，如果是0xA，则解析是0；



### 额外的方法

* `toFxied(n)`，小数点后保留多少位；

* `toExponential(n)`，返回指数表示法（也称e表示法）；

* `toPrecision(n)`，根据要处理的数值决定使用toFxied还是toExponential；

```js
var num = 99;
alert(num.toPrecision(1));  //"1e+2"
alert(num.toPrecision(2));  //"99"
alert(num.toPrecision(3));  //"99.0"
```
``|0` ` 可以直接取整，比如：12.3|0   结果是12；


## 六、String类型
1. String类型用于表示由零或多个16位Unicode字符组成的字符序列，字符串可以由双引号("")，或单引号('')表示；
2. 字符串的长度可以使用length属性来读取；
3. 转换为字符串：

（1）使用toString()方法转换，可以传入的参数有2-36之间，一般传入2. 8. 10. 16；

（2）String()转换规则

* 如果值有toString()方法，则调用该方法并返回相应的结果；
* 如果值是null或undefined，则返回'null'或'undefined'；


注意：`null`和`undefined`值没有`toString()`这个方法，需要使用`String()`来转换；

整数直接`.toString()`会报错，可以添加小括号转换；    (1)`.toString()`；

如果是对象`.toString()`，转换成`[object Object]`；




## 七、复杂数据类型（引用类型）
Object（对象）、Array（数组）、function（函数）

引用类型任何数据类型都可以储存；

引用类型的地址存储在堆里面，当别的值修改了原始值之后，都会被修改；

基本类型存储的是值，引用类型存储的是地址（指针）



### object（对象）

1. 以花括号的形式为对象；

2. 万物皆对象，页面中的任何一个元素都是对象，包括document,window,对象就相当于地球

3. 创建对象的两个方式：

   a. 实例化方式：var 变量=new Object()；输出是一个空的花括号，表示对象；

   b. 字面量：var 变量 = {}；

   c.  Object.create(null)  也可以创建一个新对象；

4. 对象中以键值对表示存储值，键名：键值；也可以叫属性名：属性值；多个键名之间用逗号隔开；
5. 设置对象的元素值：对象名.键名 = 键值；  一般称作键值对；
6. 获取值的方法：①变量名.键名；②变量名[""]





### Array（数组）
1. 创建方式：

   a. 实例化：var 变量 = new Array()；以中括号形式为数组，一个值表示数组的长度，多个值表示数组的数据；

   如果是一个引号引起来的，则是单个数组；

   b. 字面量：var 变量 = [  ]

2. 数组的长度是下标加一；

3. 数组的长度可读可写，可以删除数组的数据；

4. 数组不能用typeof来判断是不是数组，判断的是object，判断是不是数组可以用Array.isArray(参数)来判断，返回结果是布尔型；IE9以上支持判断；

5. 数组可以储存所有类型，也可以存储数组和对象；

6. 设置数组：数组名[索引] = 值

7. 获取数据：数组名[索引]；

面试题：
```js
var ary = [], ary[0]=1, ary[5]=5
```
数组的长度是6，没有声明的为`undefined`；



### function函数
`function ()`; 事件处理函数；空格后面可以设置函数名；

调用函数：函数名()；加小括号是直接执行，事件不需要加小括号；

**总结:**

基本数据类型：Number，String，Boolean，Undefined，Null

引用数据类型：Object，Array，Function，RegExp，Date，Error

全局数据类型：Math



### 关于Javascript中数字的部分知识总结： 

1. Javascript中，由于其变量内容不同，变量被分为基本数据类型变量和引用数据类型变量。基本类型变量用八字节内存，存储基本数据类型(数值、布尔值、null和未定义)的值，引用类型变量则只保存对对象、数组和函数等引用类型的值的引用(即内存地址)。
2. JS中的数字是不分类型的，也就是没有byte/int/float/double等的差异。 
3. 基本类型：null，undefined，number，boolean；string比较特殊！！！ 引用类型 Obeject,function，array；

计算机最小的计量单位是bit,翻译为位

8bit = 1byte,byte翻译为字节

所以32bit = 4 byte

八字节为64位




## 三、检测数据类型：

### instanceof 检测数据类

（1）检测前面的变量是不是某个类型，是的话返回true，不是返回false    如果是new 出来的函数，可以使用这个判断。

（2）检测类型时类型首字母需要大写；

（3）检测基本数据类型时需要new实例化，复杂数据类型不需要new实例化；必须要new Number()

（4）数组看是不是Object对象时，返回值是true，但是Array大类的；

示例：`console.log(obj instanceof Object)`；
```js
console.log(123 instanceof Number) // false 必须new实例化
console.log([] instanceof Array) // true
```

### toString.call
```js
'[object 类型]' === Object.prototype.toString.call(形参)

const types = type => Object.prototype.toString.call(type).slice(8,-1).toLowerCase()

//或者：
toString.call(Math)  ==> [object Math]
const type = type => toString.call(type).slice(8,-1).toLowerCase()

// 转换的函数
const types = Function.prototype.call.bind(Object.prototype.toString)
// 这个方法始终将Object.prototype.toString作为函数传递给call,等价于:Object.prototype.toString.call();
```
**理解:**

1. Object.prototype.toString.call, call前面的代码就是this指向;
2. 因为bind是返回绑定的函数, 因此将toString函数放进去作为第一个参数;
3. 由于call需要一个方法来调用, 因此将Function.prototype作为前缀;



改造:
```js
types('')  // [object String];    直接使用types来判断;
const t = type => Function.prototype.call.bind(Object.prototype.toString)(type).slice(8, -1)
```

### constructor判断（扩展）
```js
console.log({}.constructor === Array)  // true
通过constructor判断的，Math.constructor === Math       //false，在javascript中，没有Math的构造函数，Math的构造函数在Object上，可以使用toString.call来判断；
```

不推荐此方法，因为
```js
var a = [1,2,3]
a.constructor === Array; //true
```
如果a=null，则报错;

### 使用原型链判断是否是类型的原型；
```js
reg.__proto__ === RegExp.prototype;
```

## 八、基本包装数据类型
1. javascript中有三个基本包装数据类型：String、Number、Boolean；

每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而让我们能够调用一些方法来操作这些数据，其实String、Number、Boolean三种类型的值在读取的时候由于是基本包装类型（也可以称是引用类型），因此有属性和方法，可以使用点操作符，读取不到的属性返回undefined，而undefind和null两种类型会直接报错；

具体了解查看：高程118页；

2. 基本包装数据类型的特征：
* 可以使用new 操作符，当使用new操作符之后的类型使用typeof检测之后是object，但是可以使用instanceof来检测；



3. 使用new和不使用new的特点
引用类型与基本包装类型的主要区别就是对象的生存期。使用 new 操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。




## 九、堆和栈
1. 基本数据类型，储存在栈里面，两个基本数据类型是相等的
2. 引用数据类型，地址存储在栈里面，数据存在堆里面，调用时先从栈里获取地址，再从堆中获取数据，两个复杂数据类型是不相等的；堆里面反复存数据会导致内存占满；




## 十、new操作符
1. new操作符创建出来的一定是一个空对象；

2. 如果在构造函数里面，显式写了一个返回值，会发生的情况？

如果返回的不是一个对象，相当于没写，会被忽略，也就是说如果在构造函数中显式的返回了一个不是对象的数据类型，最后得到的还是对象，如果是对象，会把设置的对象返回出来
```js
function Car(name,age){
    this.name = name
    return {age:age}
}
let car = new Car('lishi',18)
car.name  //undefined  因为返回没有name;
car   // {age:18} 并且不能标识具体谁创建的;

// 第二种情况,返回不是对象;
function Car(name,age){
    this.name = name
    return age
}
let car = new Car('lishi',18)
car  // Car {name: 'lishi'}   return 没有起作用;
```
3. 使用new操作符执行了哪些过程
   * 创建一个空对象
   * 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
   * 执行构造函数中的代码（为这个新对象添加属性）；
   * 返回新对象；

```js
function create(){
    var obj = new Object()
    var fn = [].shift.call(arguments)  //将第一个函数截取;
    obj.__proto__ = fn.prototype
    var result = fn.apply(obj,arguments)
    return result instanceof Object ? result : obj
    //一般new一个函数,函数可以填写return,如果return了就得将函数返回值保存并返回,函数必须是对象,上面第2点已经讲过;
}

// 实例
function fn(age){this.age = age}
let obj1 = create(fn,18)  // fn{age:18}
let obj2 = new fn(18)  //fn{age:18}
console.log(obj1.__proto__ === obj2.__proto__) //true
```

增进问题

在使用new操作符时，如果没有参数，括号是可以省略的。




## 十一、运算符
js赋值运算符是从右往左的，var a = 1，把1的值赋给a；   '.'是优先级最高的运算符；

### 数字运算符：
\+ \- \* \/ \%(取余) ++(自增)   --(自减)

\+ 号遇到字符串变成拼接；

++(--) 在前，先运算，后赋值；

++(--) 在后，先赋值，后运算；

```js
var i=1;
j=i++ + i++;
j=1 + 2++;
j=3;


var a=1;
b=++a + ++a;
b=2 + ++2;
b= 5;
```

### 赋值运算符：
=     +=     -=    \*=     /=    %=

a+=2 为 a=a+2;

一个等号为赋值，

赋值运算表达式：由赋值运算符链接起来的叫赋值表达式；


### 比较运算符：
\>  \>=  <  <=  !=(不等于)     !==(绝对不等于)   ==(等于)  ===(绝对等于)

'!='   不等于只看值是否相同，不看类型

'!=='  绝对不等于除了看值不同，还看类型是否不同；

比较运算符的输出结果是boolear类型

"two"＞"three"//结果为true    "tw"在字母表中的索引大于"th"



### 逻辑运算符
&&(与--并且)    ||(或---或者)    !(非--取反或取非)

&& 只要有一个为假，就为假；

|| 只要有一个为真，就为真；


!表达式：  表达式1的结果是true，整个结果为false

                表达式1的结果是false，整个结果为true；

(!"")为true  空字符串为假，取非就为真

## 十二、位运算

位运算适用于32位整数，所以精度可能会丢失

### 用'|'取整
```js
let num = 1.5
num = num|0  // 1
```

### 用>>取半
```js
let num = 4
num = num>>1 //2
```

### 用<<加倍
```js
let num = 2
num = num<<2  //4
```

### 用'^'两值交换
```js
let a = 1,b=2;
a ^= b;
b ^= a
a ^= b
console.log(a,b)  // 2 1;
```

### 用&判断奇数
```js
let n = 3
let m = 4
n & (1 === 1)  // true 奇数
m & (1 === 1)   //false 偶数
```

### 用'~'判断项是否存在
> ~的特性是：操作数的负值-1；~12为-13；
```js
let firstname = 'ma'
let fullname = 'jack ma'
~fullname.indexOf(firstname)  // true
```
由于负数-1，找不到是-1，-1就是0了

### 用'+'快速转换数字类型；
```js
console.log(typeof (+'11')) //number
```
如果+号前面有数字则会成拼接符;

### 用 ** 表示平方

```js
let n = 4 ** 4 // 256
```






## 十三、隐式转换
1. 在进行计算时，会隐式转换；10+true    为11；，10-true为9；
2. 当+号遇到字符串的时候，+变成拼接符，将前后拼接起来，多个相加时，碰到引号开始拼接；
3. 隐式转换会首先调用toString方法，如果没有则调用valueOf方法；
4. undefined和谁进行运算都是NaN
5. 两个+会是NaN：  'a'+ + 'b'   aNaN 后面这一个b转`换为NaN

上题相当于 'a'+(+'b')

理解：由于+是一元正号，计算操作数的数值时，会进行Number转换：Number('b')   转换为NaN，剩下的就是字符串和其他类型相加，都会被转化为字符串；

例子：
```js
let date = new Date()
+date   // 将进行Number(date)转换,转换成时间戳
```

6. {}空对象和谁进行运算都自动转换toString，为[object Object]；
```js
function sum(x){
    console.log("两个数的和为"+x);
}
function sum(x,y){
    console.log("两个数的和为"+(x+y));  //NaN;
}
sum(10);
//y没有传值，10+undefined; 为NaN undefined是字符串类型,+号遇到字符串时隐式转换了;
// 如果没有(x+y)的小括号,则会是10undefined,成拼接符;
```

### 连等运算符

`a=b=c`    为b=c是a=b；永远取等号右边的表达式结果赋值到等号的左侧；
```js
var a = {n:1}
var b = a
a.x = a = {n:2}
console.log(a.x)   // undefined;
```
理解:

var a = {n:1}

var b = a

a = {n:2}     // 这里a指向了新的地址,b还是指向原来的地址,b没有重新被赋值;

上题中点的优先级最高,首先a.x = a,赋值了,a又被重新赋值,因此b.x有值;a.x为新对象为undefined;



## 十四、json
json 是一种数据交换格式，从后台请求下来的数据基本上都是 json 类型，

json 数据用｛｝括起来，里面的数据以 key：value 存储。



## 高频面试题：
● js 数据类型？

● null 和 undefined 的区别？

● 运算符的种类？

● var a = 10;var b = a++; a、b 最后的结果是？

● “==”与“===”的区别？

● console.log(0.1+0.2 == 0.3)。

● NaN 会在什么样的情况下出现呢？列举出现这种情况的代码。

● 列举三种强制类型转换和 2 种隐式类型转换；



