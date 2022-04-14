# es6-07 proxy、Reflect
## 一、proxy

### 代理

> 可以修改对象的原操作；

proxy的两个参数，都是对象，第一个是要代理的对象，第二个是对象的所属操作

```js
var proxy = new Proxy(target, handler)
```



#### 代理对象

`target`为代理的对象，`key`为获取的属性，`receiver`指向创建的这个proxy，如果输出`receiver`会进行取值操作，会造成死循环；

```js
var proxy = new Proxy({},{
    get: function(target,key, receiver){
        // 调用Reflect的get方法完成默认行为
        return Reflect.get(target, key, receiver)
    },
    set: function(target, key, value, receiver){
        return Reflect.set(target, key, value, receiver)
    }
})
```



#### 代理函数

```js
var handler = {
  get: function(target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function(target, thisBinding, args) {
    // args为数组, 需要取0
    return args[0];
  },

  construct: function(target, args) {
    return {value: args[1]};
  }
};

var fproxy = new Proxy(function(x, y) {
  return x + y;
}, 
  handler
);

fproxy(1, 2) // 1
new fproxy(1, 2)   // {value: 2}
fproxy.prototype === Object.prototype // true
fproxy.foo === "Hello, foo" // true
```



### proxy支持的所有操作

* `get(target,key,receiver)`：拦截对象属性的读取，比如：proxy.foo和proxy['foo']
* `set(target,key,receiver)`：拦截对象属性的设置，比如：proxy.foo=v或proxy['foo'] = v，返回一个布尔值
* `has(target,key)`：拦截key in proxy的操作，返回一个布尔值
* `deleteProperty(target,key)`：拦截delete proxy[key]操作，返回一个布尔值
* `ownKeys(target)`：拦截Object.getOwnpropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组，该方法返回目标对象所有自身的属性的属性名，而Object.keys()返回结果仅包括目标对象自身的可遍历属性
* `getOwnPropertyDescriptor(target,key)`：拦截Object.getOwnPropertyDescriptor(proxy,key)：返回属性的描述对象
* `defineProperty(target,key,desc)`：拦截Object.defineProperty(proxy,key,desc)、Object.defineProperties(proxy,desc)，返回一个布尔值
* `preventExtensions(target)`：拦截Object.preventExtensions(proxy)，返回一个布尔值
* `getPrototypeOf(target)`：拦截Object.getPrototypeOf(proxy)，返回一个对象
* `isExtensible(target)`：拦截Object.isExtensible(proxy)，返回一个布尔值
* `setPropotypeOf(target,proto)`：拦截Object.setPrototypeOf(proxy,proto)，返回一个布尔值，如果目标对象是函数，那么还有两种额外操作可以拦截
* `apply(target, object,args)`：拦截proxy实例作为函数调用的操作，比如：proxy(...args)、proxy.call(object,...args)、proxy.apply(...)
* `construct(target,args)`：拦截Proxy实例作为构造函数调用的操作，比如new proxy(...args)；



### Proxy实例的方法
1. `get()`

     get方法可以继承，不需要再递归代理了

   ```js
   let proxy = new Proxy({},{
       get(target,key,receiver){
           console.log('GET' + key)
           return target[key]
       }
   })
   let obj = Object.create(proxy)
   obj.foo  // 'GET foo'
   ```

   

2. `set()`，拦截对象的设置，接受四个参数，依次为目标对象，属性名，属性值和proxy实例本身，最后一个参数可选

   例子：不能设置大于200的age；

   ```js
   let validator = {
       set: function(obj,prop,value,receiver){
           if(prop === 'age'){
               if(value > 200){
                   throw new RangeError('The age seems invalid')
               }
           }
           obj[prop] = value
       }
   }
   let person = new Proxy({}, validator)
   ```

   

3. `apply()`

   apply方法拦截函数的调用、`call`和`apply`的操作

   apply接收三个参数，分别是目标对象，目标对象的上下文对象(this)和目标对象的参数数组

   ```js
   var handler = {
       apply(target, ctx, args){
           return Reflect.apply(...arguments)
       }
   }
   ```

   例子1：

   ```js
   var twice = {
     apply (target, ctx, args) {
       // Reflect.apply执行了sum函数的结果并*2返回;
       return Reflect.apply(...arguments) * 2;
     }
   };
   function sum (left, right) {
     return left + right;
   };
   var proxy = new Proxy(sum, twice);
   proxy(1, 2)   // 6
   proxy.call(null, 5, 6)   // 22
   proxy.apply(null, [7, 8])   // 30
   直接调用Reflect.apply方法也会被拦截
   
   Reflect.apply(proxy, null, [9,10])
   ```

   

4. `has()`

   用来拦截hasProperty操作，判断对象是否具有某个属性时，典型的操作就是in运算符

   例子：隐藏'_'开头的属性不被检测到

   ```js
   var handler = {
       get:(target,key,receiver){
           if(key[0] === '_'){
               return false
           }
           return key in target
       }
   }
   let proxy = new Proxy({foo:'foo',_prop:'foo'}, handler)
   ```

   

5. `construct()`

   construct方法用于拦截new命令，接受三个参数，依次为目标对象，构造函数的参数对象，创造实例对象时，new命令作用的构造函数；

   ```js
   var handler = {
       construct(target,args,newTarget){
           return new target(...args)
       }
   }
   ```

   construct必须返回一个对象，否则会报错



代理一个函数，支持点的调用方式

```js
var proxy = new Proxy(function(){}, {
    get(target, property, reciver) {
        let _this = this
        return function(msg) {
            // property为获取的属性, msg为调用时传入的函数
            _this.apply(target, _this, [msg, property])
        }
    },
    apply(target, thisbing, arg){
        // 这里处理逻辑
        return arg
    }
})
proxy('111') // ['111']
proxy.success('111') // [111, 'success']
```





## 二、Reflect

### 概述

（1）Object上的明显属性语言内部的方法都放到了Reflect对象上，未来的新方法将只部署在Reflect对象上

（2）修改了某些Object方法的返回结果，让其变得合理，Object在无法定义属性时，会抛出一个错误，而Reflect只会返回false
```js
// 老写法
try {
  Object.defineProperty(target, property, attributes);
  // success
} catch (e) {
  // failure
}
// 新写法
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```
（3）让Object操作都变成函数行为
```js
// 老写法
'assign' in Object // true
// 新写法
Reflect.has(Object, 'assign') // true
```
（4）Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法都能在Reflect对象上找到对应的方法，这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为,可以在Reflect上获取默认行为
```js
Proxy(target, {
  set: function(target, name, value, receiver) {
    var success = Reflect.set(target, name, value, receiver);
    if (success) {
      console.log('property ' + name + ' on ' + target + ' set to ' + value);
    }
    return success;
  }
});
```
上面例子中，proxy方法拦截target对象的属性赋值行为，采用Reflect.set方法将值赋值给对象的属性，确保完成原有的行为，然后再部署额外的功能

### Reflect的静态方法

* `apply(target,thisArg,args)`
* `construct(target,args)`
* `get(target,name,receiver)`
* `set(target,name,value,receiver)`
* `defineProperty(target,name,desc)`
* `deleteProperty(target,name)`
* `has(target,name)`
* `ownKeys(target)`
* `isExtensible(target)`
* `preventExtensions(target)`
* `getOwnPropertyDescriptor(target,name)`
* `getPrototypeOf(target)`
* `setPrototypeOf(target,prototype)`



### get(target,name,receiver)

查找target对象的name属性，如果没有该属性返回undefined
```js
var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  }
}

Reflect.get(myObject, 'foo') // 1
Reflect.get(myObject, 'bar') // 2
Reflect.get(myObject, 'baz') // 3
```
如果name属性部署了读取函数(getter)，则读取函数this绑定到receiver
```js
var myReceiver = {foo:4, bar: 4}
Reflect.get(myObject, 'baz', myReceiver)  // 8
```


### set(target,name,value,receiver)

```js
var myObject = {
    foo: 1,
    set bar(value){
        return this.foo = value
    }
}
Reflect.set(myObject,'foo', 2)
```
如果set传入receiver，则会触发Proxy.defineProperty拦截，如果不传入就不会拦截
```js
let p = {
  a: 'a'
};

let handler = {
  set(target, key, value, receiver) {
    console.log('set');
    Reflect.set(target, key, value, receiver)
  },
  defineProperty(target, key, attribute) {
    console.log('defineProperty');
    Reflect.defineProperty(target, key, attribute);
  }
};

let obj = new Proxy(p, handler);
obj.a = 'A';
// set
// defineProperty
```


### construct(target,args)
Reflect.construct方法等同于new target(...args), 这提供了一种不使用new, 来调用构造函数的方法

```js
function Greeting(name){
    this.name = name
}
const instance = new Greeting('张三')
const instance = Reflect.construct(Greeting, ['张三']);
```
如果第一个参数不是函数，则报错



### apply(func,thisArg,args)

方法等同于`Function.prototype.apply.call(func,thisArg,args)`,用于绑定this对象后执行给定函数，

一般来说，如果要绑定一个函数的this对象，可以这样写`fn.apply(obj, args)`，但是如果函数定义了自己的apply方法，就只能写成`Function.prototype.apply.call(fn, obj, args)`，采用Reflect对象可以简
化这种操作。

```js
const ages = [11, 33, 12, 54, 18, 96];
// 旧写法
const youngest = Math.min.apply(Math, ages);
const oldest = Math.max.apply(Math, ages);
const type = Object.prototype.toString.call(youngest);
// 新写法
const youngest = Reflect.apply(Math.min, Math, ages);
const oldest = Reflect.apply(Math.max, Math, ages);
const type = Reflect.apply(Object.prototype.toString, youngest, []);
```


### ownKeys(target)

方法用于返回对象的所有属性，等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和，可以返回Symbol
```js
var obj = {name: 'hhh', age:18}
Reflect.ownKeys(obj) // ['name','age']
Reflect.ownKeys(Function) // ['length','name','prototype']
Object.keys(Function) // []
```
