# es6-02 扩展、Symbol、iterator



## 一、扩展运算符： ...

> 使用arguments无法进行forEach遍历，...参数可以进行遍历，是真正的数组

`...变量名`，类似于`arguments`，是真正的数组

* ...作为形参使用：，必须写到形参末尾，形参前面没传的参数全部追加到...参数中；

```js
function fn(a,...args){
    console.log(args);     //args为[2,3,4];
    console.log(...args) // 2,3,4
}
fn(1,2,3,4);
//原生实现方法
function fn(a,b){
    const ext = Array.prototype.slice.call(arguments,2)
    console.log(a,b,ext) //a:1,b:2,ext:[3,4]
}
```



### 数组的使用

* 数组的展开：函数传参数的时候（实参）等同于apply；
* 复制数组   arr2=[...arr1]  修改arr2不影响arr1。
* 拼接数组   arr=[...arr1,...arr2]
* 将字符串转数组  arr=[...str]

2. 将一个字符串转换为数组的方法：

   * `str.split('')`
   * `[...str]`
   * `Array.from(str)`

3. 数组的展开应用场景

   ```js
   function fn3(...arr) {
   
       fn(...arr) //输入和下行一样；
       fn.apply(null,arr)   //调用fn函数,null为不改变fn函数中的this
   }
   function fn(a, b, c) {
       console.log(a, b, c, '----');
   }
   fn3(11, 22, 33)
   ```



### 对象的使用

1. 解构赋值

   ```js
   let {x,y,...z} = {x:1,y:2,a:3,b:4};
   x // 1
   y // 2
   z // { a: 3, b: 4 }
   
   // 解构赋值要求等号右边是一个对象，如果是undefined或null会报错，因为它们无法转为对象;
   let {...z} = null // 出错
   let {...z} = undefined //出错
   
   // 解构赋值是浅拷贝, 不能复制对象的原型属性
   let o = Object.create({x:1,y:2})
   o.z = 3
   let {x, ...newObj} = o
   let {y, z} = newObj
   x // 1
   y // undefined
   z // 3
   ```

   解构赋值...必须在最后面，否则报错；

2. 拷贝对象

   ```js
   let z = {a:3,b:4}
   let n = { ...z }
   // 等同于
   let n = Object.assign({},z)
   n //{a:3,b:4}
   
   // 如果是空对象, 没有任何效果
   {...{}, a:1}
   // {a:1}
   
   {...1} //{}    等同于: { ...Object(1) }
   {...true} // {}
   {...undefined} // {}
   {...null} // {}
   ```

3. 扩展运算符只是复制了对象的实例属性，没有原型属性，如果需要原型属性可以使用下面的方法

   ```js
   // 写法一
   const clone1 = {
       __proto__: Object.getPrototypeOf(obj),
       ...obj
   }
   // 写法二
   const clone2 = Object.assign(
       Object.create(Object.getPrototypeOf(obj)),
       obj
   )
   // 写法三
   const clone3 = Object.create(
       Object.getPrototypeOf(obj),
       Object.getOwnPropertyDescriptors(obj)
   )
   // __proto__属性在非浏览器的环境不一定部署，推荐使用二和三
   
   ```

4. 扩展运算符放置的位置

   ```js
   // 如果自定义属性, 放在扩展运算符后面, 则扩展运算符内部的同名属性会被覆盖
   let ao = {...a, x:1,y:2}
   // 如果放在前面, 就相当于是默认赋值了
   let ao = {x:1,y:2,...a}
   ```

5. 深拷贝

   ```js
   let obj = {name:'',age:18,list:['hh','mm']}
   let obj2 = {...obj,list:[...obj.list]} 引用类型需要继续扩展
   ```

6. 合并对象

   ```js
   let obj1 = {name:''}
   let obj2 = {age: 18}
   let obj3 = {...obj1,...obj2}
   // 等同于
   let ab = Object.assign({}, obj1, obj2)
   ```

7. 扩展运算符后面跟表达式

   ```js
   const obj = {
       ...(x > 1 ? {a: 1} : {}),
       b:2
   }
   // 数组放表达式
   const arr = [
       ...(x > 1 ? ['a'] : []),
       'b'
   ]
   [...[],1] // [1]
   ```

   

## 三、symbol（符号、代号、象征）

>  主要解决命名冲突问题，主要目的是作为对象属性的标识符

(已有的原始数据类型：String, Number, boolean, null, undefined, 对象)

### Symbol特点

* Symbol属性值是唯一的，两个symbol是不相等的，主要是解决命名冲突问题

* 直接创建两个相同值的symbol在比较时是不相等的，如果需要相等可以使用symbol.for(key)创建

  原理是使用给定的key进行搜索，并返回对应的key，如果没有则创建

* Symbol值不能与其他数据进行计算，包括同字符串拼串

* Symbol不支持for in, for of遍历；
* Symbol值作为对象属性名时，不能用点运算符，需要用中括号包起来；
* symbol不能使用new，否则会报错，symbol是一个原始类型的值，不是对象；
* Symbol函数可以接受一个字符串作为参数；
* Symbol可以使用es6提供的Reflect.ownKeys()来获取到一个对象中的Symbol属性名

```js
let s1 = Symbol('name')
let obj = {
    [s1]: 'hhh'
}
obj[s1] = 'hehe'
obj[Symbol()] = 'xixi' // 这样是获取不到的;
console.log(obj[s1])
```


Symbol作为对象属性的好处：只能使用Symbol变量来访问，不能通过Symbol来访问



### Symbol的实例方法

1. `Symbol.for()`

使用Symbol.for创建symbol值时，会先在全局搜索是否有创建过传入的字符串，如果有则直接返回，如果没有，则创建新的；

全局包括：当前页面、iframe、service worker；
```js
const s1 = Symbol('haha')
const s2 = Symbol('haha')
s1 === s2 // false

const s3 = Symbol.for('xixi')
const s4 = Symbol.for('xixi')
s3 === s4 // true
```

2. `Symbol.keyFor()`

传入symbol变量返回创建时的标识，只能是使用Symbol.for创建的才可以返回，使用Symbol直接创建的是无法返回的；
```js
const s5 = Symbol('lison')
const s6 = Symbol.for('hh')
Symbol.keyFor(s5) // undefined
Symbol.keyFor(s6) // hh
```



### 11个内部的Symbol值

1. `Symbol.hasInstance`  调用instanceof时触发

    ```js
    let obj = {
      [Symbol.hasInstance] (other) {
        console.log(other)
      }
    }
    console.log({a:'a'} instanceof <any>obj) // 当使用instanceof时会首先调用Symbol.hasInstance方法
    ```

2. `Symbol.isConcatSpreadable`    concat不扁平化
    
    ```js
    let arr = [1,2]
    [].concat(arr, [1,2]) // [1,2,3,4]
    arr[Symbol.isConcatSpreadable] = false
    [].concat(arr, [1,2]) // [[1,2],1,2] 
    // 使用了该属性就不会被扁平化了
    ```
    
3. `Symbol.species`   创建延伸实例

4. `Symbol.match` 调用match时会调用该方法

5. `Symbol.replace` 

6. `Symbol.search`

7. `Symbol.split`

8. `Symbol.iterator`

9. `Symbol.toPromitive`

10. `Symbol.toStringTag`

11. `Symbol.unscopables`

es6官网地址：[https://es6.ruanyifeng.com/#docs/symbol]( https://es6.ruanyifeng.com/#docs/symbol)



## 四、iterator（遍历器）    

概念：是一种接口机制，为各种不同的数据结构提供统一的访问机制；

作用：为各种数据结构，提供一个统一的、简便的访问接口，使得数据结构的成员能够按某种次序排列

ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of使用，使用方法和for...in一样；

支持iterator接口的数据：

Array、arguments、String、set容器、map容器；



遍历对象可以将对象转数组

```js
for (const [key, value] of Object.entries(me)) { 
    console.log(`${key}: ${value}`);
}
```



工作原理[了解]:

①创建一个指针对象，指向数据结构的起始位置。

②第一次调用next方法，指针自动指向数据结构的第一个成员

③接下来不断调用next方法，指针会一直往后移动，直到指向最后一个成员

④每调用next方法返回的是一个包含value和done的对象，{value: 当前成员的值,done: 布尔值}

⑤value表示当前成员的值，done对应的布尔值表示当前的数据的结构是否遍历结束。

⑥当遍历结束的时候返回的value值是undefined，done值为true

```js
var arr = [11, 2, 44, 6]
function init(ary) {
    var i = 0;
    return {
        next: () => {
            return i > ary.length ? {value:ary[i++],done:false} : {value:ary[i++],done:true}
        }
    }
}
var nexts = init(arr);
console.log(nexts.next());
console.log(nexts.next());
console.log(nexts.next());
console.log(nexts.next());
console.log(nexts.next());
```
