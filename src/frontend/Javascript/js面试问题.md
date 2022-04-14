# js面试问题

## （`a==1 && a==2 && a==3`）可能为true吗；
解法一：对象类型转换：（因为object与number比较时，会尝试调用toString、valueOf方法，如果不是toString或valueOf函数，则为false）
```js
var a = {i: 1,toString(){return a.i++}}
```
解法二：数组类型转换：（数组调用toString会隐式调用Array.join）
```js
var a = [1,2,3];
a.join = a.shift
```
解法三：定义get方法（获取值则会调用get方法）
```js
var val = 0;
Object.defineProperty(window,'a',{
    get(){return +=val};
})
```



## 找出字符串中连续出现最多的字符和个数;

```js
'abcaakjbb' => {'a':2,'b':2}
'acccbbajk' => {'c':3}
const arr = str.match(/(\w)\1*/g);
const maxLen = Math.max(...arr.map(s => s.length));
const result = arr.reduce((pre, curr) => {
  if (curr.length === maxLen) {
    pre[curr[0]] = curr.length;
  }
  return pre;  //最后返回;
}, {});


// 或者：
arr.forEach(item=>{
    obj[item] = obj[item] ? obj[item]+1 : 1
})   // 可以拆分成对象数组; 
```



## ['1','2','3'].map(parseInt)    //值是什么，为什么

parseInt()   传递两个参数，第一个为要转换的整数，第二个参数：一个介于2和36之间的整数，表示上述字符串的基数，默认为10，返回值是一个整数或NaN；
上题转换之后，实际上是：
```js
['1','2','3'].map((item,index)=>{
    return parseInt(item,index)
})
parseInt('1',0) //1  // 以0开头默认为10进制;
parseInt('2',1) //NaN  //没有1进制;  没有的进制都是NaN,0返回本身;
parseInt('3',2) //NaN  3不是二进制;
进制中,逢三进一，parseInt(10,3)  // 以3进制来解析，就是10了，如果第一位数是3，就超出0，1，2了，就为NaN；

['10', '10', '10','10'].map(parseInt)
parseInt('10',0)  //0为10进制,返回10
parseInt('10',1) // 1进制 只允许解析0,因此NaN
parseInt('10',2) // 2,满足条件,返回2
parseInt('10',3) // 3,满足条件,返回3
```



## 用js实现一个无限累加的函数add

add(1) //1

add(1)(2)(3) // 6

add(1)(2)(4)(5) //12

因为打印函数时会自动调用toString()方法，因此实现方法如下：

```js
function add(a){
    function sum(b){
        return add(a + b)
    }
    sum.valueOf = sum.toString = function() {
        return a;
    }
    return sum;
}
```



## 写一个函数，输入一个数组a，找到里面是否存在三个不同的元素，使得a[i]+a[j]==a[k]，如果能找到输出true，找不到输出false

举例：

输入：var a1 = [1,5,10,25,9,17,100]   输出false

输入：var a2 = [2,99,3,5]  可以找到2+3=5，输出true

输入：var a3 = [1,50,0,5]    输出false；

```js
function fn(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr.findIndex(item=>arr[i]+arr[j]===item) > j) return true
        }
        return false
    }
}
```
第二种实现方法：
```js
function fn (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let s = arr.indexOf(arr[i] + arr[j]);
      console.log(s)
      if (s > j) return true;
    }
  }
  return false;
}
```



## 由 input 转换成 output

```js
let input = [
    { "id": "17", "caption": "颜色", "types": ["黑", "棕"] },
    { "id": "23", "caption": "材质", "types": ["牛皮"] },
    { "id": "24", "caption": "尺码", "types": ["40", "41", "42"] }
]
let output = [
    { "17": "黑", "23": "牛皮", "24": "40" },
    { "17": "黑", "23": "牛皮", "24": "41" },
    { "17": "黑", "23": "牛皮", "24": "42" },
    { "17": "棕", "23": "牛皮", "24": "40" },
    { "17": "棕", "23": "牛皮", "24": "41" },
    { "17": "棕", "23": "牛皮", "24": "42" }
]
```



```js
function t(input){
    return input.reduce((ret,outterItem)=>{
        // 当第一次的时候，循环出：[{'17':'黑'}, {'17': '棕'}]
        if(!ret.length){
            return outterItem.types.map(type => ({[outterItem.id]: type}))
        }
        let results = []
        // 循环修改每个types, 并合并
        outterItem.types.forEach(type => {
            results = results.concat(ret.map(innerItem => {
                return {
                    ...innerItem,
                    [outterItem.id]: type
                }
            }))
        })
        return results
    },[])
}
```



## {1:222,2:333,5:444}放进一个12月份的数组里，没有的写null；

```js
let obj = {1:222,2:333,5:444}
function fn(obj){
    return Array.from({length:12},(item,index)=>{
        return obj[index+1] || null
    })
}  // [222,333,null,null,444,null....]
```



## 深拷贝原理：（数组，对象都可用）

```js
function deepCopy( obj ){
    if( Object.prototype.toString.call( obj ) === '[object Object]' ){
        var result = {}
    }else if( Object.prototype.toString.call( obj ) === '[object Array]' ){
        var result = []
    }  //判断数据类型类型  如果是数组则初始一个  []  如果是一个Object则初始一个 {}

    //浅拷贝，但是+ 递归思想，就实现了深拷贝
    for( var attr in obj ){
        if( typeof obj[attr] == 'object'){      //判断传入的键值是否是数组或对象
            result[attr] = deepCopy( obj[attr] )  //如果是对象则再调用一次函数; 实现递归;
        }else{
            result[attr] = obj[attr]  //将每一天数据输入进对象或数组;
        }
    }
    return result
}
```






## 对象遍历方法
（1）使用for...in方法遍历

（2）使用Object.keys、Object.values方法遍历

（3）使用Object.entries、Object.fromEntries方法遍历

```js
let obj={
    tom: 18,
    jack: 20,
    xiaoh: 19,
    xiaof: 21,
    xiaom: 14
}
let arr = Object.entries(obj).filter(([name,age])=>age>19)
console.log(Object.fromEntries(arr)) //过滤之后的结果
```


