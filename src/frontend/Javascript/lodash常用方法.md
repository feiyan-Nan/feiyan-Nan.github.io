# lodash常用方法
## Array
### 去除所有的非假值元素

`compact`(arr)   去除所有的非假值元素

```js
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

### 过滤数组值

`difference` 过滤数组值，返回新数组

```js
_.difference([3,2,1], [4,2]) 
// => [3,1]
```

### 转对象

`map`转对象：`_.fromPairs(pairs)`

```js
_.fromPairs([['fred', 30], ['barney', 40]]);
// => { 'fred': 30, 'barney': 40 }
```

4. map转对象：.`zipObject`
```js
_.zipObject(['a','b'],[1,2])
// => {'a':1,'b':2}
```

5. _.`zipObjectDeep`()
```js
_.zipObjectDeep(['a.b[0].c','a.b[1].d'],[1,2])
// => {'a':{'b':[{'c':1},{'d': 2}]}}
```

### 扁平化

flattenDeep(arr)   扁平化

```js
_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```

## 集合

可以使用`_.iteratee`结合使用

1. `find`、`every`、`filter`、`findLast`、`some`

以上函数用法雷同
```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
_.find(users, 'active')    // { 'user': 'barney',  'age': 36, 'active': true }
_.find(users, ['active', false])   // { 'user': 'fred',    'age': 40, 'active': false }
_.find(users, {age: 1})     // { 'user': 'pebbles', 'age': 1,  'active': true }
_.find(users, o => o.age < 40)    // { 'user': 'barney',  'age': 36, 'active': true }
```

2. each(obj,(value,key|index,obj))、eachRight；forEach的别名，可以循环对象

3. includes(obj,value,[fromIndex=0])    可以查找对象，使用的是全等，不会类型转换；
```js
_.includes([1,2,3], 1) // true
_.includes([1,2,3], 1,2) // false
_.includes('pebbles','eb') // true
_.includes({'user':'fred','age':40}, 'fred') // true
```

4. map
```js
let obj = [
    {name: 'hh', age: 18},
    {name: 'hen', age: 20}
]
_.map(obj,'name') // ['hh','hen']
```

5. forEach or each

   each是forEach的别名

   ```js
   _.forEach([1, 2], function(value) {
     console.log(value);
   });
   // => Logs `1` then `2`.
    
   _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     console.log(key);
   });
   // => Logs 'a' then 'b' (iteration order is not guaranteed).
   ```

   

6. orderBy
```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
// 以 `user` 升序排序 再  `age` 以降序排序。
_.orderBy(users, ['user', 'age'], ['asc', 'desc'])  // asc为升序,desc为降序
 // 结果
[{"user":"barney","age":36},
 {"user":"barney","age":34},
 {"user":"fred","age":48},
 {"user":"fred","age":40}]
```

6. partition

相当于filter，返回一个分成两组的数组，第一组为查找到为true的所有项，第二组为false的所有项
```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];
_.partition(users, function(o) { return o.active; });
// => objects for [['fred'], ['barney', 'pebbles']]

_.partition(users, { 'age': 1, 'active': false });
// => objects for [['pebbles'], ['barney', 'fred']]

_.partition(users, ['active', false]);
// => objects for [['barney', 'pebbles'], ['fred']]

_.partition(users, 'active');
// => objects for [['fred'], ['barney', 'pebbles']]
```



## 比较

### 深比较

_.`isEqual`  执行深比较确定两者值是否相等，不支持函数和DOM节点比较

```js
let obj = {a:'1'}
let obj2 = {a: '1'}
_.isEqual(obj, obj2) // true
```

2. isEqualWith(value,other,[customizer])  接收定制检测方法
```js
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

// 定制检测方法

function customizer(objValue, othValue) {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true;
  }
}

var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];
_.isEqualWith(array, other, customizer);
// => true
```



## 常用is方法

* `isFunction`  判断是还是函数



## Lang方法

1. clone 浅拷贝

2. cloneDeep 深拷贝



## 工具函数

1. flow

传入一个数组，数组里面放其他函数，会依次以前一个函数结果传入到下一个去执行，this会绑定到创建函数，每个连续调用，传入的参数都是前一个函数的结果
```js
const square = n => {
    console.log(n) // 3
    return n * n
}
const addSquare = _.flow([_.add, square])
addSquare(1,2) // 9
```



## Object

### _.at 根据path获取值

```js
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 
_.at(object, ['a[0].b.c', 'a[1]']);
// => [3, 4]
```

### _get  根据path获取值

```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.get(object, 'a[0].b.c');
// => 3
 
_.get(object, ['a', '0', 'b', 'c']);
// => 3
 
_.get(object, 'a.b.c', 'default');
// => 'default'
```

### _.set  设置一个值

```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// => 4
 
_.set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);
// => 5
```

### _.omit 剔除不要的键值

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']);
// => { 'b': '2' }
```

### _.pick 保留只要的键值

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
```

### _.merge 合并值

```js
var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
_.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
```

