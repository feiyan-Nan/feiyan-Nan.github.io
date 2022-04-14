# Immutable.js

## 一、介绍

### 什么是Immutable.js

Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable实现的原理是持久化的数据结构；

### 优缺点

优点：

* 降低 Mutable 带来的复杂度
* 节省内存空间
* Undo/Redo，Copy/Paste，随意穿越！
* 拥抱函数式编程

缺点：

* 容易与原生对象混用；（建议使用fromJS创建，建议所有的immutable的变量都以$$开头）
* 每次返回新对象，容易忘记赋值
* 学习成本高
* 需要额外引入资源文件



## 二、Immutable.js 的几种数据类型

* `List`: 有序索引集，类似JavaScript中的Array。
* `Map`: 无序索引集，类似JavaScript中的Object。
* `ArraySet`：无序且不可重复的列表；
* `OrderedMap`: 有序的Map，根据数据的set()进行排序。
* `Set`: 没有重复值的集合。
* `OrderedSet`: 有序的Set，根据数据的add进行排序。
* `Stack`: 有序集合，支持使用unshift()和shift()添加和删除。
* `Record`: 一个用于生成Record实例的类。类似于JavaScript的Object，但是只接收特定字符串为key，具有默认值。
* `Seq`: 序列，但是可能不能由具体的数据结构支持。
* `Collection`: 是构建所有数据结构的基类，不可以直接构建。

最多使用List和Map；



## 三、Immutable常用API

### fromJS

作用：将一个js数据转换为Immutable类型的数据
用法：`fromJS(value, converter)`



### toJS()

作用：将一个Immutable数据转换为JS类型的数据
用法：`value.toJS()`



### is()

作用：对两个对象进行比较
用法：`Immutable.is(map1,map2)`



### List() 和 Map()

作用：用来创建一个新的List/Map对象

```js
Immutable.List([1,2])
Immutable.Map({a: '1', b: '2'})
```



### List.isList() 和 Map.isMap()

作用：判断一个数据结构是不是List/Map类型

```js
Immutable.List.isList(List())
Immutable.Map.isMap(Map())
```



### size

作用：属性，获取List/Map的长度，等同于`ImmutableData.count()`;



### get() 、 getIn()

作用：获取数据结构中的数据

```js
ImmutableData.get(0) //获取List索引的元素
ImmutableData.get('a') // 获取Map对应key的value
ImmutableData.getIn([1,2]) // 获取嵌套数组中的数据
ImmutableData.getIn(['a', 'b']) // 获取嵌套map的数据 比如：a下面的b
```



### has() 、 hasIn()

作用：判断是否存在某一个key

```js
Immutable.fromJS([1,2,3,{a:4,b:5}]).has('0'); //true
Immutable.fromJS([1,2,3,{a:4,b:5}]).has('0'); //true
Immutable.fromJS([1,2,3,{a:4,b:5}]).hasIn([3,'b']) //true
```



### includes()

作用：判断是否存在某一个value

```js
Immutable.fromJS([1,2,3,{a:4,b:5}]).includes(2); //true
Immutable.fromJS([1,2,3,{a:4,b:5}]).includes('2'); //false 不包含字符2
Immutable.fromJS([1,2,3,{a:4,b:5}]).includes(5); //false 
Immutable.fromJS([1,2,3,{a:4,b:5}]).includes({a:4,b:5}) //false
Immutable.fromJS([1,2,3,{a:4,b:5}]).includes(Immutable.fromJS({a:4,b:5})) //true
```



### first() 、 last()

作用：用来获取第一个元素或者最后一个元素，若没有则返回undefined

```js
Immutable.fromJS([1,2,3,{a:4,b:5}]).first()//1
Immutable.fromJS([1,2,3,{a:4,b:5}]).last()//{a:4,b:5}

Immutable.fromJS({a:1,b:2,c:{d:3,e:4}}).first() //1
Immutable.fromJS({a:1,b:2,c:{d:3,e:4}}).first() //{d:3,e:4}
```



## Immutable数据修改

这里对于数据的修改，是对原数据进行操作后的值赋值给一个新的数据，并不会对原数据进行修改，因为Immutable是不可变的数据类型。

### 设置 set()

作用：设置第一层key、index的值

```js
const originaList = List([0]) // List [0]
originaList.set(1, 1); // List [0, 1]
originaList.set(0, 'overwrittten') // List ['overwritten']
originaList.set(2, 2); // List [0, undefined, 2]

List().set(50000, 'value').size; // 50001

const originMap = Map() // Map {}
const newerMap = originMap.set('key', 'value') // Map {key: 'value'}
const newestMap = newerMap.set('key', 'newer value') // Map {key: 'newer value'}
```

### setIn()

作用：设置深层结构中某属性的值

```js
const originalMap = Map({
  subObject: Map({
    subKey: 'subvalue',
    subSubObject: Map({
      subSubKey: 'subSubValue'
    })
  })
})
const newMap = originalMap.setIn(['subObject', 'subKey'], 'ha ha!')
// Map {
//   "subObject": Map {
//     "subKey": "ha ha!",
//     "subSubObject": Map { "subSubKey": "subSubValue" }
//   }
// }
const newerMap = originalMap.setIn(
  ['subObject', 'subSubObject', 'subSubKey'],
  'ha ha ha!'
)
// Map {
//   "subObject": Map {
//     "subKey": "subvalue",
//     "subSubObject": Map { "subSubKey": "ha ha ha!" }
//   }
// }
```

用法与set()一样，只是第一个参数是一个数组，代表要设置的属性所在的位置



### 删除 delete

作用：用来删除第一层结构中的属性

```js
List([ 0, 1, 2, 3, 4 ]).delete(0); // List [ 1, 2, 3, 4 ]
const originalMap = Map({
  key: 'value',
  otherKey: 'other value'
})
originalMap.delete('otherKey') // Map { "key": "value" }
```



### deleteIn()

用来删除深层数据，用法参考setIn



### deleteAll() (Map独有，List没有)

作用：用来删除Map中的多个key

```js
const names = Map({ a: "Aaron", b: "Barry", c: "Connor" })
names.deleteAll([ 'a', 'c' ])
// Map { "b": "Barry" }
```



### 更新 update()

作用：对 对象中的某个属性进行更新，可对原数据进行相关操作

```js
const list = List([ 'a', 'b', 'c' ])
const result = list.update(2, val => val.toUpperCase())

const aMap = Map({ key: 'value' })
const newMap = aMap.update('key', value => value + value)
```



### updateIn()

同setIn；



### 清除 clear()

作用：清除所有数据

```js
Map({ key: 'value' }).clear()  //Map
List([ 1, 2, 3, 4 ]).clear()   // List
```



List中的`push`、`pop`、`unshift`、`shift`、`insert`

```js
List([ 0, 1, 2, 3, 4 ]).insert(6, 5) 
//List [ 0, 1, 2, 3, 4, 5 ]
List([ 1, 2, 3, 4 ]).push(5)
// List [ 1, 2, 3, 4, 5 ]
List([ 1, 2, 3, 4 ]).pop()
// List[ 1, 2, 3 ]
List([ 2, 3, 4]).unshift(1);
// List [ 1, 2, 3, 4 ]
List([ 0, 1, 2, 3, 4 ]).shift();
// List [ 1, 2, 3, 4 ]
```



### merge

* `merge`：浅合并，新数据与旧数据对比，旧数据中不存在的属性直接添加，旧数据中已存在的属性用新数据中的覆盖

* `mergrWith`：自定义浅合并，可自行设置某些属性的值
* `mergeIn`：对深层数据进行浅合并
* `mergeDeep`：深合并，新旧数据中同时存在的的属性为新旧数据合并之后的数据
* `mergeDeepIn`：对深层数据进行深合并
* `mergrDeepWith`：自定义深合并，可自行设置某些属性的值

```js
 const Map1 = Immutable.fromJS({a:111,b:222,c:{d:333,e:444}});
 const Map2 = Immutable.fromJS({a:111,b:222,c:{e:444,f:555}});

 const Map3 = Map1.merge(Map2);
  //Map {a:111,b:222,c:{e:444,f:555}}
 const Map4 = Map1.mergeDeep(Map2);
  //Map {a:111,b:222,c:{d:333,e:444,f:555}}
 const Map5 = Map1.mergeWith((oldData,newData,key)=>{
      if(key === 'a'){
        return 666;
      }else{
        return newData
      }
    },Map2);
  //Map {a:666,b:222,c:{e:444,f:555}}
```



### concat()

对象的拼接，用法与js数组中的concat()相同，返回一个新的对象。

```js
const List = list1.concat(list2)
```



### map()

作用：遍历整个对象，对Map/List元素进行操作，返回一个新的对象。

```js
Map({a:1,b:2}).map(val=>10*val)
//Map{a:10,b:20}
```



### mapKey()

作用：Map特有的mapKey，遍历整个对象，对Map元素的key进行操作，返回一个新的对象。

```js
Map({a:1,b:2}).mapKey(val=>val+'l')
//Map{al:10,bl:20}
```



### mapEntries()

作用：Map特有的mapEntries()，遍历整个对象，对Map元素的key和value同时进行操作，返回一个新的对象。Map的map()也可实现此功能。

```js
Map({a:1,b:2}).map((key,val)=>{
  return [key+'l',val*10]
})
//Map{al:10,bl:20}
```



### 过滤 filter

作用：返回一个新的对象，包括所有满足过滤条件的元素

```js
Map({a:1,b:2}).filter((key,val)=>{
  return val == 2
})
//Map{b:2}
```



### 反转 reverse

作用：将数据的结构进行反转

```js
Immutable.fromJS([1, 2, 3, 4, 5]).reverse();
// List [5,4,3,2,1]
Immutable.fromJS({a:1,b:{c:2,d:3},e:4}).recerse();
//Map {e:4,b:{c:2,d:3},a:1}
```



### 排序 sort & sortBy

作用：对数据结构进行排序

```js
Immutable.fromJS([4,3,5,2,6,1]).sort() // List [1,2,3,4,5,6]

Immutable.fromJS([4,3,5,2,6,1]).sort((a,b)=>{
  if (a < b) { return -1; }
  if (a > b) { return 1; }
  if (a === b) { return 0; }
})  // List [1,2,3,4,5,6]

Immutable.fromJS([{a:3},{a:2},{a:4},{a:1}]).sortBy((val,index,obj)=>{
  return val.get('a')
},(a,b)=>{
  if (a < b) { return -1; }
  if (a > b) { return 1; }
  if (a === b) { return 0; }
})// List  [ {a:3}, {a:2}, {a:4}, {a:1} ]

//Map
Immutable.fromJS( {b:1, a: 3, c: 2, d:5} ).sort()
//Map {b: 1, c: 2, a: 3, d: 5}
Immutable.fromJS( {b:1, a: 3, c: 2, d:5} ).sort((a,b)=>{
  if (a < b) { return -1; }
  if (a > b) { return 1; }
  if (a === b) { return 0; }
})
//Map {b: 1, c: 2, a: 3, d: 5}
Immutable.fromJS( {b:1, a: 3, c: 2, d:5} ).sortBy((value, key, obj)=> {
  return value
})
//Map {b: 1, c: 2, a: 3, d: 5}
```



### 分组 groupBy

作用：对数据进行分组

```js
const listOfMaps = List([
  Map({ v: 0 }),
  Map({ v: 1 }),
  Map({ v: 1 }),
  Map({ v: 0 }),
  Map({ v: 2 })
])
const groupsOfMaps = listOfMaps.groupBy(x => x.get('v'))
// Map {
//   0: List [ Map{ "v": 0 }, Map { "v": 0 } ],
//   1: List [ Map{ "v": 1 }, Map { "v": 1 } ],
//   2: List [ Map{ "v": 2 } ],
// }
```



### 查找数据 indexOf() 、 lastIndexOf

 Map不存在此方法
作用：和js数组中的方法相同，查找第一个或者最后一个value的index值，找不到则返回-1

```js
Immutable.fromJS([1,2,3,4]).indexof(3) //2
Immutable.fromJS([1,2,3,4]).lastIndexof(3) //2
```



### findIndex() 、 findLastIndex()

作用：Map不存在此方法，查找满足要求的元素的index值

```js
Immutable.fromJS([1,2,3,4]).findIndex((value,index,array)=>{
  return value%2 === 0;
})   // 1
Immutable.fromJS([1,2,3,4]).findLastIndex((value,index,array)=>{
  return index%2 === 0;
})  // 3
```



### find() 、 findLast()

作用：查找满足条件的元素的value值

```js
Immutable.fromJS([1,2,3,4]).find((value,index,array)=>{
  return value%2 === 0;
})  // 2

Immutable.fromJS([1,2,3,4]).findLast((value,index,array)=>{
  return value%2 === 0;
})  // 4
```



### findKey() 、 findLastKey()

作用：查找满足条件的元素的key值

```js
Immutable.fromJS([1,2,3,4]).findKey((value,index,array)=>{
  return value%2 === 0;
})  // 1

Immutable.fromJS([1,2,3,4]).findLastKey((value,index,array)=>{
  return value%2 === 0;
})  // 3
```



### findEntry() 、 findLastEntry()

作用：查找满足条件的元素的键值对 key:value

```js
Immutable.fromJS([1,2,3,4]).findEntry((value,index,array)=>{
  return value%2 === 0;
})  // [1,2]

Immutable.fromJS([1,2,3,4]).findLastEntry((value,index,array)=>{
  return value%2 === 0;
})  // [3,4]
```



### keyOf() lastKeyOf()

作用：查找某一个value对应的key值

```js
Immutable.fromJS([1,2,3,4]).keyOf(2) //1
Immutable.fromJS([1,2,3,4]).lastKeyOf(2) //1
```



### max() 、 maxBy()

作用：查找最大值

```js
Immutable.fromJS([1, 2, 3, 4]).max() //4

Immutable.fromJS([{a;1},{a:2},{a: 3},{a:4}]).maxBy((value,index,array)=>{
  return value.get('a')
})  //{a:4}
```



### min() 、 minBy()

参考max用法；



### 创建子集 slice()

作用：和原生js中数组的slice数组一样，包含两个参数，start和end，

```js
Immutable.fromJS([1, 2, 3, 4]).slice(0); //[1,2,3,4]
Immutable.fromJS([1, 2, 3, 4]).slice(0,2); //[1,2]
Immutable.fromJS([1, 2, 3, 4]).slice(-2); //[3,4]
Immutable.fromJS([1, 2, 3, 4]).slice(0,-2); //[1,2]
```



### rest()

作用：返回除第一个元素之外的所有元素

```js
Immutable.fromJS([1, 2, 3, 4]).rest()//[2,3,4]
```



### butLast()

作用：返回除最后一个元素之外的所有元素

```js
Immutable.fromJS([1, 2, 3, 4]).rest()//[1,2,3]
```



### skip()

作用：有一个参数n, 返回截掉前n个元素之后剩下的所有元素

```js
Immutable.fromJS([1, 2, 3, 4]).skip(1)//[2,3,4]
```



### skipLast()

作用：有一个参数n, 返回截掉最后n个元素之后剩下的所有元素

```js
Immutable.fromJS([1, 2, 3, 4]).skip(1)//[1,2,3]
```



### skipWhile()

作用：返回从第一次返回false之后的所有元素

```js
Immutable.fromJS([1, 2, 3, 4]).skipWhile(list.skipWhile((value,index,list)=>{
  return value > 2;
}))// [1,2,3,4]
```



### skipUntil()

作用：返回从第一次返回true之后的所有元素

```js
Immutable.fromJS([1, 2, 3, 4]).skipUntil(list.skipWhile((value,index,list)=>{
  return value > 2;
}))// [3,4]
```



### take()

作用：有一个参数n, 返回前n个元素

```js
Immutable.fromJS([1, 2, 3, 4]).take(2)//[1,2]
```



### takeLast()

作用：有一个参数n, 返回最后n个元素

```js
Immutable.fromJS([1, 2, 3, 4]).takeLast(2)//[3,4]
```



### takeWhile()

作用：返回从第一次返回false之前的所有元素

```js
Immutable.fromJS([1, 2, 3, 4]).skipWhile(list.takeWhile((value,index,list)=>{
  return value > 2;
})) // []
```



### takeUntil()

作用：返回从第一次返回true之前的所有元素

```js
Immutable.fromJS([1, 2, 3, 4]).skipUntil(list.takeUntil((value,index,list)=>{
  return value > 2;
}))// [1,2]
```



### 处理数据 reduce()

作用：和js中数组中的reduce相同,按索引升序的顺序处理元素

```js
Immutable.fromJS([1,2,3,4]).reduce((pre,next,index,arr)=>{
  console.log(pre+next)
  return pre+next; 
})
// 3 6 10
```



### reduceRight()

作用：和js中数组中的reduce相同,按索引降序的顺序处理元素

```js
Immutable.fromJS([1,2,3,4]).reduceRight((pre,next,index,arr)=>{
  console.log(pre+next)
  return pre+next; 
})
// 7 9 10
```



### every()

作用：判断整个对象总中所有的元素是不是都满足某一个条件，都满足返回true，反之返回false。

```js
Immutable.fromJS([1,2,3,4]).every((value,index,arr)=>{
  return value > 2
}) // false
```



### some()

作用：判断整个对象总中所有的元素是不是存在满足某一个条件的元素，若存在返回true，反之返回false。

```js
Immutable.fromJS([1,2,3,4]).some((value,index,arr)=>{
  return value > 2
}) // true
```



### join()

作用：同js中数组的join方法。把准换为字符串

```js
Immutable.fromJS([1,2,3,4]).join(',') //1,2,3,4
```



### isEmpty()

作用：判断是否为空

```js
Immutable.fromJS([]).isEmpty(); // true
Immutable.fromJS({}).isEmpty(); // true
```



### count()

作用：返回元素个数，可自定义条件，返回满足条件的个数

```js
const list = Immutable.fromJS([1,2,3,4]);
const map = Immutable.fromJS({a:1,b:2,c:3,d:4});

list.count((value,index,list)=>{
  return value > 2;
})    //2

map.count((value,index,list)=>{
  return value > 2;
})    //2
```



### countBy()

作用：与count不同的是，countBy返回一个对象

```js
const list = Immutable.fromJS([1,2,3,4]);
const map = Immutable.fromJS({a:1,b:2,c:3,d:4});

list.countBy((value,index,list)=>{
  return value > 2;
} //{false: 2, true: 2}

map.countBy((value,index,list)=>{
  return value > 2;
} //{false: 2, true: 2}
```

