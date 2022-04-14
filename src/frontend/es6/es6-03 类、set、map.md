# es6-03 类、set、map
## 一、类

使用类定义面向对象不需要function，直接 `方法名(){}`；

### 什么是类

类是具有相同属性和方法(行为)的一类事务的集合

对象：类实例化后的某个具体的个体，使用类创建对象必须new

属性通过constructor构造器来定义属性,构造器在类实例化时会被自动调用



### 类的三大特性

* 封装、

* 继承：在对原有类的属性及方法保留同时进行功能扩展

* 多态：根据不同的上下文环境表现出不同的形态



### 类的基本语法

1. 通过class定义类

2. 在类中通过constructor定义构造方法

3. 通过new来创建类的实例

4. 通过extends来实现类的继承

5. 通过super调用父类的构造方法



### 类的定义方法

```js
class People{
    static className = 'hello'   // 静态属性，实例对象通过__proto__来访问，内部使用people来调用；
    constructor(names,ages){   //使用constructor来定义属性；
        this.name = names;
        this.ages = ages;
    };
    eat(){};  //方法直接定义；
    static setRandom(){}   //通过People来调用这个方法；
}
```

静态属性是使用类名去访问的，而类里面的是使用this去访问的，创建`static`的区别在于不需要使用this，这样this不会乱；

静态属性不需要实例化就可以直接调用，可以直接通过点静态的属性去调用；



### 类的继承

* 当子类中定义了constructor构造器时，则要在构造器中调用super()方法，通过super()方法给父类中的属性设置属性值，如果不需要修改或新增属性，则不需要写constructor；

* 方法重构:当父类中的方法在子类满足不了需求时，则要在子类中定义和父类同名的方法；

* 同一个类可以被多次继承；

```js
class Student extends People{
    constructor(names,ages){
        super(names,ages);     //必须调用此方法，括号接收属性；
    };
}
```

`prototype` 是原型   这是在构造函数上的

`__proto__` 是原型链  实例对象访问的

`super`作为函数，指向父类的constructor，因此super需要调用对应的参数；

super作为对象时
* 在普通方法中使用：指向父类的原型对象
* 在静态方法中：指向父类






## 二、set数组

>  类似于数组，里面的每一项都是唯一的，没有重复的值；

1. 使用Set必须new，返回一个对象，只能用for..of取值；

2. Set这种数据结构经常和一维数组搭配使用，如果数组里面有重复的项，则会自动删除；

`let sets = new Set([1,2,3,2,1])`;

可以使用：`Array.from(new Set([1,2,1]))`   转换为可以遍历的数组；

或：`[...new Set([1,2,1])]`；...将数组展开，之后添加数组；



### Set原型上的方法

* `add`(value)：增加；
* `delete`(value)：删除；
* `has`(value)：是否有；
* `clear`：清空
* `size`：同length一样；



### 集合数组方法

* 声明：`const a = new Set(arr1)`
* 并集：`new Set([...a,...b])`
* 交集：`new Set([...a].filter(v=>b.has(v)))`
* 差集：`new Set([...a].filter(v=>!b.has(v)))`



## 三、WeakSet
1. WeakSet结构与Set类似，里面的值都是弱引用；
2. WeakSet的成员只能是对象，而不能是其他类型的值；
```js
let arr = [3,4]
let ws = new WeakSet(arr) // 由于arr数组成员都是数字,因此会报错;

let arr = [[1,2],[3,4]]
let ws = new WeakSet(arr) // 由于arr数组成员都是对象,因此可以;
```

3. WeakSet结构下面的三个方法：`add`()、`delete`()、`has`()



## 四、map对象

1. 类似于对象，键名不局限于字符串，各种类型值(包括对象)都可以当作键；

map的方法：`Map`()、`Map`(array)、`set`(key, value)、`get`(key)、`delete`(key)、`has`(key)、`clear`()、`size`；

使用需要new实例化，也需要套二维数组；里面写键名和键值；



2. 创建一个map对象
```js
const curmap = new Map([['name','lishi'],['age','18']]);
```

3. map对象与普通对象的转换;

   将map转换为对象形式：`Object.fromEntries(map)`

   将对象转换map形式：`Object.entries(obj)`

4. 使用for..of遍历对象，并使用数组解构；

```js
let map2 = [['name','张三'],['age',18]]
for(let [key,value] of map2){
    console.log(key,value)
}
// 使用Object.entries可以将对象转换成该结构
```



### map实用技巧

利用map来改写if判断语句
```js
if(status === 1){}
else if(status === 2){}
else if(status === 3){}


// 改写
let map = new Map([
    [1, ()=>{}],
    [2, ()=>{}]
])
map.get(status)() // 执行时记得使用call绑定this指向


// 二元判断改写
let map = new Map([
    [{identity:'guest',status:1},()=>{}],
    [{identity:'master',status:2},()=>{}]
])
let action = [...map].filter(([key,value])=>(key.identity === 'guest' && key.status === 1))
action.forEach(([key,value])=>value()) // 因为里面是二维数组


// 如果函数一样, 可以使用记忆函数
const actions = () => {
    let actionA = function(){}
    let actionB = function(){}
    return new Map([
        [{identity:'guest',status:1},actionA],
        [{identity:'master',status:2},actionA],
        [{identity:'guest',status:2},actionB]
    ])
}
let action = [...actions()].filter(([key,value])=>(key.identity == identity && key.status == status))
action.forEach([key,value]=>value.call(this))


// 使用正则判断,将状态码以字符串形式判断
let actions = ()=>{
    let functionA = function(){}
    let functionB = function(){}
    return new Map([
        [/^guest_[1-4]$/, functionA],
        [/^guest_.*$/, functionB]
    ])
}
let action = [...actions()].filter(([key,value])=>(key.test(`${identity}_${status}`))) action.forEach(([key,value])=>value.call(this))
```

摘抄： https://juejin.im/post/5bdfef86e51d453bf8051bf8#heading-1



## 四、WeakMap对象

1. 结构与Map类似，也是用于生成键值对的集合，
2. Map与WeakMap的区别

（1）WeakMap只接受对象作为键名（null除外），不接受其他类型的值，如果放入其他类型会报错
```js
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
wm1.get(key) // 2

// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
wm2.get(k2) // "bar"
```

（2）WeakMap的键名所指向的对象，不计入垃圾回收机制

3. WeakMap的作用：当在对象上面存放一些数据，当我们在这个对象上面存放了数据之后，就会形成对这个对象的引用，因此该对象不再计入垃圾回收机制，如果不再需要，必须手动删除，否则会造成内存泄露，    WeakMap就是为了解决此类问题而诞生的
```js
const e1 = document.querySelector('.box')
const e2 = document.querySelector('.demo')
let arr = [[e1,'box 元素'],[e2,'demo 元素']]
arr = null; // 必须手动删除
```

4. WeakMap的存放的键名是弱引用，垃圾回收机制不考虑该对象，只有所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存，不需要手动删除；

5. 应用场景：如果想要往对象上面添加数据，又不想干扰垃圾回收机制，就可以使用WeakMap，它所引用的对象，会在将来消失；
```js
const map = new WeakMap()
const el = document.getElementById('example')
map.set(el,'some information')
map.get(el) // someinformation
// 一旦el被清除，WeakMap的记录会自动被移除;
```

注意：WeakMap弱引用的只是键名，而不是键值，键值依然是正常引用
```js
const map = new WeakMap()
let key = {}
let obj = {foo:1}
map.set(key,obj)
obj = null // 即使被删除了,key仍可用;
map.get(key) // {foo:1}
```

6. WeakMap可用方法：get()、set()、has()、delete()；



### WeakMap内存实例

在cmd打开之后执行以下操作

如果引用所指向的值占用特别多的内存时，可以使用process.memoryUsage查看，执行--expose-gc可以开启手机执行垃圾回收机制；
```bash
node --expose-gc   # --expose-gc表示允许手机执行垃圾回收机制;
> global.gc()
undefined
> process.memoryUsage()
{ rss: 21667840,
  heapTotal: 8110080,
  heapUsed: 5061480,# 内存占用5m  5061480/1024KB*1024Byte
  external: 8710 }

# 先使用普通声明方式, 指向一个5*1024*1024的数组
> let key = new Array(5 * 1024 * 1024);
undefined
> let arr = [[key,1]]
undefined
> process.memoryUsage()
{ rss: 65339392,
  heapTotal: 52162560,
  heapUsed: 47268584, #内存占用47m
  external: 8712 }
> key = null
null
> process.memoryUsage()
{ rss: 65339392,
  heapTotal: 52162560,
  heapUsed: 47268584, #引用的key被清楚了,内存还是占用47m
  external: 8712 }
> arr = null  #经常容易被删除
null
> process.memoryUsage()
{ rss: 23592960,
  heapTotal: 10207232,
  heapUsed: 5301656, #当所有的引用删除之后,内存还原了;
  external: 8710 }


# 自行测试使用WeakMap声明, 由于WeakMap声明是弱引用, 因此删除引用对象之后WeakMap对象的引用会自动清除;
```

7. WeakMap的用途：典型的场合就是DOM节点作为键名，下面的例子
```js
let el = document.getElementById('logo')
let wk = new WeakMap()
wk.set(el,{timesClick: 0})
el.addEventListener('click',function(){
    let logoData = wk.get(el)
    logoData.timesClick++
},false)
```
当DOM节点被删除时，该状态就会自动消失，不存在内存泄露的风险；



