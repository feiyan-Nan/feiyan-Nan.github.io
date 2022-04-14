# js-15 面向对象、this

ECMAScript有两种开发模式；

①函数式（过程化）；

②面向对象（OOP）；

面向对象三个基本特征：封装、继承、多态


## 一、对象组成
对象由属性和方法组成



## 二、对象读写

读：对象.key            或者  对象['key']

写：对象.key=新值   或者  对象['key']=新值



## 三、对象遍历
for in循环，遍历对象里面的每一个参数；



## 四、对象函数调用

obj.fn()  如果一个函数是被对象调用的，那这个函数的this是对象；
```js
var obj={ fn:function(){console.log(this)} };
obj.fn();   //obj调用的;
var f= obj.fn;
f();  //这里的this指向window 默认写法是:  window.f() window调用
```



## 五、创建普通对象

```js
//对象字面量
var o = { key: value}

// 实例化:
var var obj = new Object()
```



## 六、原生对象

原生创建好的9个对象：Number、String、Boolean、Array、Object、Function、RegExp、Date、Error；直接使用就可以了；

万物皆对象，Object就相当于人类的地球，再上面就是null，整个宇宙



## 七、instanceof

标识实例和对象是否在一个原型链上（实例是否是这个对象创建的）；

比如：arr instanceof Array（arr是由Array创建的）返回true；

也可以：this instanceof F   判断this是否指向该函数;

```js
function f(){
    console.log(this instanceof f)
}
// 如果使用new, 则this指向f;  new出来的函数指向创建他的函数;
```



## 八、工厂模式

1. 工厂模式创建对象其实就是一个封装函数；

```js
function fn(name){
    var obj = new Object();   //1. 准备原料
    obj.name = name;   //2. 加工
    obj.eat = function(){
        console.log('foot');
    }
    return obj    //3. 出厂
}
var s = fn('张三',18);   // 可以无限调用;  和调用函数是一样的；
```
这个s和fn是没有关系的，因为s是对象创建出来的，和函数是没有关系的;

s != fn;

2. 工厂模式的问题：

工厂模式解决了重复实例化的问题，但还有一个问题，那就是识别问题，因为根本无法搞清楚他们到底是哪个对象的实例；不能标识实例是由谁创建的；



## 九、构造函数
构造函数：function 类名(){};
```js
function Person(name){
    this.name=name;
    this.eat=function(){
        console.log('foot');
    }
}
new Person('康哥',3);   
// 使用new出来的始终是一个对象,所以不需要在函数内部声明一个空对象;
```
1. 构造函数的特点：
  * 构造函数名首字母大写（为了区分普通函数）
  * 构造函数方法没有显示的创建对象 (new Object())； （创建时不需要像工厂模式那样new object，就可以直接创建）；
  * 直接将属性和方法赋值给 this 对象
  * 没有return语句，不需要返回对象
  * 通过构造函数创建对象，必须使用new运算符（如果直接调用和普通函数一样）


3. 构造函数也能够批量生产，而且通过构造函数创建的对象，能区分开当前的实例是由哪个对象创建的，可以利用instanceof验证；

4. 构造函数的问题：

同一个方法，因为对象不同，所存储的位置也不同，如果有多个对象，则要分别存储多次，占用不必要的内存。

两个对象和两个数组和两个函数是不相同的，都是引用类型，引用类型的比较，比较的是地址，地址是不一样的，所以是不等；地址不同，如果大量的存储，则会导致内存空间爆满；

即使对象里面有数据也是不等的；

```js
[] === [] //false
{} === {} //false
function(){} === function(){} //false

let obj1 = {name: 'h'}
let obj2 = {name: 'h'}
console.log(obj1 === obj2)  //false
console.log(obj1.name === obj2.name) //true  可以比较对象的具体值;
```



## 十、原型对象

> 每个对象都会有自己的原型对象，是最顶层类型定义的方法和属性。如 Number 对象的原型对象中定义了很多的方法和属性，则所有的number对象都能使用这个方法和属性。

### constructor

只要创建一个对象，就会有一个原型对象（prototype），这个原型对象里面有一个constructor（构造器），指向这个构造函数，原型对象里面所有属性和方法对构造函数的实例都是可见的；

```js
function f(){}
var obj = new f()
obj.constructor  //function f(){}
```
原型的作用：实现数据共享，继承，都是为了节省内存空间； 如果属性和方法都需要共享，就把他们都添加到原型当中；



### \__proto__

是隐式原型，指向创建他的函数的原型，原型对象需要用类型名调用，如Number.prototype。

```js
function F(){}
var obj = new F()
obj.__proto__ === F.prototype   //true

// 给原型添加新的属性和方法
obj.__proto__.age = 18   //使用创建出来的对象添加;
F.prototype.age = 18   //使用原型添加;
```
当我们修改了原型对象的方法以后，所有这类对象再调用这个方法时都是修改之后的。因为原型对象中的内容是共享的。
```js
String.prototype.charAt = function (index){
    console.log('原型'+index);
};
var str = 'web';
str.charAt(1);    // 原型 1 不再是获取的操作
```

### 判断原型与实例的关系

```js
function F(){}
let obj = new F()
```
* `obj.constructor === F`   //true 使用构造器判断;
* `obj.__proto__ === F.prototype`   //true 使用原型对比;
* `F.prototype.isPropertyOf(obj)` // true 使用isPropertyOf；
* `Object.getPropertyOf(obj) === F.prototype` // 使用getPropertyOf
* `obj instanceof F`   //使用instanceof来判断;



### 原型链

```js
function Student(){}   //创建构造函数之后就有一个原型对象；
Student.prototype.constructor = Student
var p1 = new Student();   //实例之后p1就可以访问到原型对象的属性和方法

//p1实例化Student之后是一个空对象，空对象里面没有，就找构造函数constructor，构造函数找不到就找原型对象prototype，如果原型对象也没有，就undefined；
```
理论：相当于儿子(p1)没有钱，就找爸(Student.prototype)要;

![image](https://notecdn.hrhe.cn/images/js-15_面向对象、this-01.png)

![image](https://notecdn.hrhe.cn/images/js-15_面向对象、this-02.png)




5. 通过原型创建的对象，对象的方法和属性是共享的，只会存储一次，因此能够解决内存浪费的问题，但是会出现一个新的问题，原型创建的对象的属性不能传参，都是固定的值。这样的话就不能创建不同的对象了。

6. 构造函数的优点：两个不同的变量使用同一个原型链，他们的地址都是相同的，大量储存不会占用内存空间；


原型链：

![image](https://notecdn.hrhe.cn/images/js-15_面向对象、this-03.png)

原型链：自己的实例化---自己的构造函数---自己的原型---父类的构造函数----父类的原型---Object的原型---null；





### 更简单的原型语法

```js
function Person() {}
Person.prototype = {
    name: 'hny',
    sayName: function(){
        alert(this.name)
    }
}
// 通过defineProperty写入constructor, 禁止in遍历;
Object.defineProperty(Person, 'constructor', {
    enumerable: false,
    value: Person // 将constructor指定;
})
```

 



### 原型的动态性

由于原型中查找值是搜索，因此对原型对象所做的任何修改都能够立即从实例上反映出来

```js
function Person(){}
var friend = new Person()
Person.prototype.sayHi = function(){
    alert('hi')
}
friend.sayHi() // hi
```

如果是重写原型对象，则不一样，由于调用构造函数时会为实例添加一个指向最初原型的[[Prototype]]指针，而把原型修改为另一个对象等于切断了构造函数与最初原型之间的联系了；

```js
function Person(){}
var friend = new Person()
Person.prototype = {
    consturctor: Person,
    name: 'hny',
    sayName: function(){
        alert(this.name)
    }
}
friend.sayName() // error
```



### 原生对象的原型

所有的原生引用类型（Object、Array、String）都在其构造函数的原型上定义了方法，我们也可以直接扩展原生对象的原型，供在当前环境下使用；（不建议在产品化的程序中修改原生对象的原型）

扩展String:  如果string里面没有trim这个方法，则创建一个trim方法

```js
if(!String.prototype.trim){
    String.prototype.trim = function(){
        //这个this表示，谁调用的这个函数谁就谁
        return this.replace(/^\s+|\s+$/,'')
    }
}  

// 扩展Array:  如果array存在则不添加方法;
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (value, index) {
     //判断是否传入2个值
    index = typeof index == 'undefiend' ? 0 : index;
    for(var i=index;i<this.length;i++){
      if(this[i] === value) return i
    }
    return -1;
  }
}
```

String、Array可以不通过原型调用，因为后台会调用其基本包装函数创建；





### 原型对象的问题

在包含引用类型值的属性来说，就会出现很大的问题了；

```js
function Person(){}
Person.prototype = {
    constructor: Person,
    friends: ['Shelby', 'Court']
}
var person1 = new Person()
var Person2 = new Person()
person1.friends.push('Van')
person1.friends // 
person2.friends // ['Shelby', 'Court', 'Van']
person1.friends === person2.friends // 指针相同;
```







## 十一、混合模式

创建自定义类型的最常见的方式，就是组合使用构造函数模式与原型模式。构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。结果，每个实例都会有自己的一份实例属性的副本，但同时又共享着对方法的引用，最大限度地节省了内存；

```js
function Person(name) {
    this.name = name
    this.friends = ['Shelby', 'Court']
}
Person.prototype = {
    constructor: Person,
    sayName: function(){
        alert(this.name)
    }
}
var person1 = new Person('hny')
var person2 = new Person('heny')
person1.friends.push('Van')
person2.friends // ['Shelby', 'Court']
```





## 十二、动态原型模式

1. 一般创建对象用混合模式就够了，但是严格来说这种方式破坏了封装性，所以还可以使用动态混合模式创建，将原型方法也写到构造函数当中。
2. 动态混合创建每创建一个对象就会执行一次原型，所以动态原型模式需要做判断，判断是还存在这个原型，如果存在则不添加；
3. 判断只会在初次调用构造函数时才会执行；

```js
function Student(name) {
    this.name = name;
     // 判断是否存在，不存在则添加
    if (!(typeof this.eat == 'function')) {
        Student.prototype.eat = function () {
            console.log('rice');
        }
    }
}
// 实例对象
var s1 = new Student('lishi');
var s2 = new Student('zhangsan');
console.log(s1.name, s2.name); // lishi zhangsan
console.log(s1.eat,s2.eat)  //rice
```



## 十三、寄生构造函数模式

寄生构造函数就是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后再返回新创建的对象；

构造函数返回的对象与构造函数外部创建的对象没有什么不同，不能依赖instanceof确定对象的类型，可以使用其他模式时不建议使用寄生构造函数模式；

```js
function Person(name) {
    var o = new Object()
    o.name = name
    o.sayName = function(){
        alert(this.name)
    }
    return o
}
var person1 = new Person('hny')
person1.sayName() // hny
```







## 十四、稳妥构造函数模式

稳妥对象指没有公共属性，而且其方法也不引用this对象。稳妥对象最适合在一些安全的环境中，或者在防止数据被其他应用程序改动时使用；

```js
function Person(name) {
    var o = new Object()
    o.sayName = function(){
        alert(name)
    }
    return o
}
var person1 = new Person('hny')
person1.sayName() // hny
```

上面的例子中，除了调用sayName没有其他方法访问其数据成员。即使有其他代码会给这个对象添加方法或数据成员，但也不可能有别的办法访问传入到构造函数的原始数据；使得它非常适合在某些安全执行环境下使用；如：ADsafe、Caja ；





## 十五、命名空间

一般名字都是见名知意的，但是如果代码足够复杂，或者使用了很多的第三方框架和插件，变量名不够用了，我们可以使用命名空间即把同一类方法包在一起。
```js
var fnObj = {}
fnObj.common = {}  //公共的函数;
fnObj.common.getUser = function(){return 'lishi'}
// 将方法写进对象里面;
```





## 十六、继承

### 原型链继承

>  将子的原型指向父的实例化 

```js
B.prototype = new A();
```
缺点：子类不能传参。（父类还是可以传参的，通过new时）



### 构造函数式继承

> 又叫对象冒充继承

在B当中把A的所有代码实现
```js
function B(){ A.apply(this,arguments); }
```
缺点：不能继承父类原型上的属性和方法，只能继承构造函数的属性和方法。



### 组合式继承

组合继承也叫伪经典继承，用得最多的是组合式继承；

```js
function B(){ A.apply(this,arguments) }
B.prototype = new A();
B.prototype.constructor = B
  //自己没有constructor,因此重写constructor
```
缺点：创建的实例和原型上，存在两份相同的属性；因为在apply时复制了构造函数的属性和方法，在new 时又实例化了属性和方法，主要是为了复制原型的方法；

如果单独调用apply进行复制构造函数的，是不会存在两种方法和属性的；

![image](https://notecdn.hrhe.cn/images/js-15_面向对象、this-04.png)



### 原型式继承

ES5可以直接使用`Object.create()`；

```js
function Create(obj){
    function F(){}
    F.prototype = obj  //后面调用相当于F.prototype.name直接取obj.name
    return new F()
}
var obj = {name:'haha'}
var obj2 = Create(obj)
obj2.name   // 'haha'
```



### 寄生式继承

在主要考虑对象而不是自定义类型和构造函数的情况下，寄生式继承也是一种有用的模式，通过一个函数，传入一个对象，之后创建一个新对象继承该对象，在给该对象新增属性和方法，最后返回该对象，称为寄生式继承；

```js
function copyObj(obj){
    var clone = Object.create(obj)  //通过create继承
       //以某种方式来增强对象,这里添加了一个新方法;
    clone.say = function(){console.log('hahaha')} 
    return clone   //返回这个对象
}
```



### 寄生组合式继承

寄生组合式继承强化的部分就是在组合继承的基础上减少一次多余的调用父类的构造函数：

寄生组合继承是引用类型最理想的继承范式；

```js
function Dog(){ Animal.apply(this, arguments); }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;    
// 因为拷贝后被重写了,等于了Animal的,所以需要修复;

// object.create相当于
function F(){}
F.prototype = obj
b = new F()
```
![image](https://notecdn.hrhe.cn/images/js-15_面向对象、this-05.png)

寄生式组合式继承没有两份父类构造函数的方法；



### extends

在ES6当中，使用`extends`直接继承；





## 十七、call apply bind（修改this指向）

### call

`fn.call(this,参数1,参数2)`   直接传递参数;

### apply

`fn.apply(this,[参数1,参数2])`   使用数组形式传参，第二个参数也可以是arguments对象

第一个填写要修改的this对象，第二个填写参数；

```js
var obj = {name:'lishi'}
function fn(a,b){
    console.log(a,b,this.name)
}
fn.call(obj,1,2)
fn.apply(obj,[1,2])
```

### bind  IE9+

1. `函数.bind(this，传参)`，bind返回一个函数，方便后续传递参数；

   比较灵活，还可以以下调用；

   `fn.bind(this);`    改变this的同时返回一个函数，这个函数再进行传参；

   `fn.bind(obj,3)(4);`    改变完之后直接执行；

2. bind可以直接写在花括号后面，仅对匿名函数和函数表达式起作用；

定时器的this始终指向window，可以通过bind直接修改定时器的this；

```js
function Person(){
    this.age = 18
    setInterval(function(){
        console.log(this.age)
    }.bind(this),100)
}
```

函数表达式: var fn = function(){}.bind();



**call、apply和bind的区别**

call、apply调用即直接执行；

bind函数本身实际使用了柯里化，调用bind会返回一个新的函数，本身不会执行，需要两个小括号才会执行；

可以根据实际情况选择需要使用哪个方法来调用；





## 高频面试题

● new 操作符具体干了什么呢 ?

● 用过哪些设计模式？

● call() 和 apply() 的区别和作用？

● JavaScript 对象的几种创建方式？

● JavaScript 对象的几种继承方式？

● JavaScript 原型，原型链 ？

● 如何判断一个对象是否属于某个类？

● 小贤有一条可爱的狗 (Dog), 它的叫声很好听 (wow), 每次看到主人的时候就会乖
乖叫一声 (yelp), 从这段描述可以得到以下对象：
```js
function Dog(){
    this.wow = function(){
        alert(‘wow’);
    }
    this.yelp = function(){
        this.wow();
    }
}
```
小芒和小贤一样原来也有一条可爱的狗，可是突然有一点疯了 (MadDog), 一看到人就会每隔半秒叫一声(wow)地不停叫唤(yelp)。请根据描述，按示例形式用代码来实现。(继承，原型，setInterval)

