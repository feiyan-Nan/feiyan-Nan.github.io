# TS-07 装饰器、Mixins

## 装饰器

如果需要使用装饰器，需要在`tsconfig.json`文件打开`experimentalDecorators`为`true`；

装饰器使用`@`符加一个名字定义，这个名字必须是一个函数或者求值后是一个函数，这个函数会在执行时被调用，被装饰的声明作为参数自动传入，必须紧挨着要修饰的内容的前面，而且所有的装饰不能用在声明文件和`.d.ts`文件中，比如`declare`修饰；

* 装饰器工厂

装饰器工厂为一个函数里面返回一个函数，在使用装饰器时，则需要调用一下，得到求值之后的装饰器；

```ts
function setProps(){
    return function(target) {
        // ...
    }
}
@setProps() // 括号里面可以填写参数，传入到第一个函数, 如果不传入参数, 则不需要加小括号; 
```

* 多个装饰器同时使用

当使用多个装饰器时，需要注意顺序，如果包含装饰器工厂，则是先从上往下求值，得到装饰器，之后再从下往上执行执行器，挨个调用；

```ts
@setProps()
@setName
target
```



### 类装饰器

使用类装饰器可以修改一个类里面的原有属性；

```ts
function classDecorator<T extends new(...args: any[]) => {}>(target: T) {
  // 如果不继承target, 则最后结果将只有该类的所有属性
  return class Person extends target {
    public name = 'hello'
    public age = 18
  }
}
@classDecorator
class ClassD {
  public size = 20
  public name: string
  constructor(name: string) {
    this.name = name
  }
}
console.log(new ClassD('hello')) // 结果将是Person类
```



### 方法装饰器

方法装饰器用来处理类中的方法，方法装饰器包含三个参数：

* 第一个参数分为两种情况：
  * 如果装饰的是静态成员，这个参数代表的是类的构造函数
  * 如果装饰的是实例成员，是类的原型对象
* 第二个参数是成员的名字
* 第三个参数是成员的属性描述符（configruable、writeable、enumerable）

```ts
function enumrable(bool: boolean){
    return (target: any, propName: string, descriptor: PropertyDescriptor) => {
        descriptor.enumrable = bool
    }
}
class ClassD {
    constructor(public name: string) {}
    @enumrable(false)
    public getName(){
        return this.name
    }
}
let clas = new ClassD('heny') 
// 当遍历该实例对象时，是无法遍历到getName的;
```

使用方法装饰器不仅可以修改属性描述符的值，还可以替换它的实现，返回一个值，就相当于是方法的属性描述符，直接修改value函数即可：

```ts
function enumrable(bool: boolean): any{
    return (target: any, propName: string, descriptor: PropertyDescriptor) => {
        return {
            value(){
                return 'not value'
            },
            enumerable: bool
        }
    }
}
let clas = new ClassD('heny')
clas.getName() // 'not value'
```

注意：如果`es`小于`es5`的话，`es3`是没有`Object.defineProperty`属性的；



### 访问器装饰器

用来装饰`set`和`get`方法，访问装饰器不能同时使用，只需要在`set`和`get`前面使用一个装饰器即可；

访问器装饰器和方法装饰器的参数是一样的；

```ts
function enumrable(bool: boolean) {
    return (target: any, propName: string, descriptor: PropertyDescriptor){
        descriptor.enumrable = bool
    }
}
class ClassD {
    private _name: string
    constructor(name: string) {
        this._name = name
    }
    @enumrable(false) // 只能使用一个，不能在set函数也添加一次
    get name () {
        return this._name
    }
    set name (name: string) {
        this._name = name
    }
}
```



### 属性装饰器

声明在属性的声明之前，它有两个参数，和方法装饰器的前两个参数是一样的，属性装饰器没法修改属性描述符，只能用来判断某个类中是否声明了某个名字的属性；

```ts
function print(target: any, propertyName: string){
    console.log(propertyName)
}
class ClassD {
    @print
    private name: string
}
```



### 参数装饰器

参数装饰器有三个参数，前两个和方法装饰器是一样的，第三个参数是函数在参数列表中的索引；参数装饰器的返回值会被忽略；

```ts
function required(target: any,propertyName: string, index: number){
    console.log(`修饰的是第${index + 1}个参数`)
}
class ClassD {
    public name: string = 'hhh'
    // 直接在参数前面使用参数装饰器即可;
    getInfo(prefix: string,@required infoType: string): any {
        
    }
}
```



## Mixin

`js`中实现`Mixin`的方法

```js
class A {
    getA(){}
}
class B {
    getB(){}
}
const mixin = (target, from) => {
    Object.getOwnPropertyNames(from).forEach(key => {
        target[key] = from[key]
    })
}
mixin(A.prototype, B.prototype)
let a = new A()
console.log(a)
```

`ts`中的`Mixin`，需要使用A和B的类型，使用`implement`而不是使用`extends`，这意味着需要在类里面实现A和B；

```ts
class A {
    public isA: boolean
    public getA(){}
}
class B {
    public isB: boolean
    public getB(){}
}
// 实现两个类使用逗号隔开
class ClassAB implements A, B {
    // 需要手动实现里面的方法
    public isA:boolean = false
    public isB:boolean = false
    public getA: () => void
    public getB: () => void
    constructor(){}
}
function mixins(base: any, from: any[]){
    from.forEach(item => {
        Object.getOwnPropertyNames(item.prototype).forEach(key => {
            base.prototype[key] = item.prototype[key]
        })
    })
}
mixins(ClassAB, [A, B])
const ab = new ClassAB()
```

