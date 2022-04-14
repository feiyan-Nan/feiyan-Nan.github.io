# 总结typescript

## 定义类型

```ts
let bool:boolean = true
let num:number = 1
let str:string = 'str'
let u:undefined = undefined; // 即是值也是类型

// 数组类型
let arr1:number[] = [1,2,3]
let arr2:Array<number> = [1,2]
let arr3:(string | number)[] = [1,'2',3]
let arr4:{name: string}[] = [{name: 'hny'}]
// 元组类型
let tulp: [string,number,boolean] = ['fd',1,true]

//any类型
let arr:any[] = [1,{}, []]

// void 空类型 函数无返回值写void
const test = (text:string):void => {}

// object类型
const getObj = (obj:object):void => {}

// unknow类型 顶级类型
let value:unknown;
```



## 类型断言

```js
// 第一种：<string>target.length
// 第二种：(target as string).length
// window：(window as any).foo = 1
```



## interface接口

```ts
interface Vegetable {
    name: string;
    age?: number;
    readonly type: string;
    (num: number): number
    [prop: string]: any;
}

// 接口继承 继承的接口需要包含所有属性;
interface Tomato extends Vegetable {
    radius: number
}
```



## 函数类型

```ts
let add:(x:number, y:number) => number = (arg: number, arg2: number): number => {
    return arg1 + arg2
}
// 类型别名
type add = (name:number, city = 3, age?:number) => number;
type add = (arg1: number, ...args:number[])

// 函数重载
function reverse(x: number): number[]
function reverse(x: string): string[]
function reverse(x: any): any {
    if(typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map(item => Number(item))
    }
}
```



## 泛型

```ts
const getArray = <T, U>(value: T, params: U): Array<[T, U]> => {}

interface getArr<T> {
    (arg1: T, times: number): [];
	array: T[]
}

// 泛型约束
interface ValueL {
    a: 'a';
    b: 'b'
}
const getArr = <T, K extends keyof T>(object: T, params: K): T[K] => {}

// 泛型默认值
function createArr<T = string>(params: T): Array<T> {}
```



## 类

```ts
class Parent {
    public age?: number
    public readonly name: string
    public static age2: number = 18
    private _info: string
    constructor(name: string, age?: number, public city: string) {
        this.name = name
        this.age = age
        this.city = city
    }
    public static getAge(){
        return Parent.age
    }
    get infoStr(): string {} // get有返回值, set不能有;
    set infoStr(val) {this._info = val}
}

// 抽象类 abstract
abstract class People {
    constructor(public name: string){}
    public abstract printName(): void;
}
class Man extends People {
    constructor(name: string) {}
    public printName() {} // 需要实现抽象方法;
}

// 泛型使用类类型
const create = <T>(c: new() => T): T => {
    return new c();
}
```



## 枚举

```ts
enum Result {
    Faild = 0,
    success = 'success'
}
interface Status {
    type: Result.success
}
const status: Status = {
    type: Result.success
}
```



## 高级类型

```ts
// 交叉类型
const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {}

// 类型保护
function isString(value: string | number): value is string {
    return typeof value === 'string'
}

// 索引访问类型
interface Info {name: string}
type str = Info[name] // 返回string;

// 条件类型
type Type1<T> = T extends string ? string : number;
```



## keyof  | in | typeof

```ts
// keyof 将接口的属性名组合成联合类型
interface Info {
    name: string;
    age: number;
    size: number
}
let info: keyof Info; // ('name' | 'age' | 'size') 类型
let info: Info[keyof Info] // (string | number) 联合类型;会去除undefined类型

// in 循环类型T;
type ReadInfo<T> = {
    readonly [P in keyof T]: T[P]
}

// typeof  访问一组值的类型
let obj = {name: 'hhh', age: 18}
type Obj = typeof obj; // {name: string, age: number}

```

常用的映射类型：`Readonly`、`Partial`、`Pick`、`Record`、`ReturnType`



## 常量对象

```ts
const obj = <const>{ name: 'hny' };
// or
const obj = {name: 'hny'} as const;

// 这样定义之后类型为常量
const arr = ['uat', 'pre'] as const;
```





## 值转类型

### 数组转联合类型

```ts
const arr = <const>['uat', 'pre', 'prod'];
type Keys = typeof arr[number]; // 'uat' | 'pre' | 'prod'
```



### 数组对象键转联合

```ts
const obj = [
  { name: 'uat' },
  { name: 'sit' },
] as const;

type Obj = typeof obj[number]['name']; // 'uat' | 'sit'
```



### 对象键转联合

```ts
const obj = {
    env: 'uat',
    build: 'sit'
}

type Obj = keyof typeof obj; // 'env' | 'build'
```



### 对象键值转联合

```ts
const obj = {
  env: 'uat',
  build: 'sit'
} as const;

type Obj = typeof obj[keyof typeof obj]; // 'uat' | 'sit'
```



## 安全的Omit

解决掉omit没有其他属性的问题

```ts
declare type Convert<T> = {
  [K in keyof T]: string extends K
    ? never
    : number extends K
    ? never
    : symbol extends K
    ? never
    : K;
};

/**
 * @description 消除 [x:string]:any
 */
declare type Keys<T extends { [x: string]: any; [x: number]: any }> = Convert<T> extends {
  [_ in keyof T]: infer U;
}
  ? U
  : never;

declare type SafeOmit<T, K extends string | number | symbol> = Exclude<Keys<T>, K> extends keyof T
  ? Pick<T, Exclude<Keys<T>, K>>
  : {};
```



