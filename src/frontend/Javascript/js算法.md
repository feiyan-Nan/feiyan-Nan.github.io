# js算法
## 数组去重

1. 两个循环判断

判断问题：拿第一个和每一个去做比较，所以需要用到两个循环；

（1）写两个循环，第一个循环数组第一个数据，第二个循环让每一个和第一个做比较。

（2）第二循环j=i+1，再判断第二个循环的下标是否和第一个循环的下标的字符相同，如果是相同的，则删除一个

（3）删除之后数组变短，让j减一，重新做比较。

```js
for(var i=0;i<ary.length;i++){
    for(var k=i+1;k<ary.length;k++){ 
        if(ary[i] === ary[k]){
            if(i == k){  //如果k等于0，则需要这一步
                continue;
            }
            ary.splice(k,1);
            k--; 
            //前面删除一个之后数组的长度会进1，此时的k会直接跳到循环去加1，让k减1；
        }
    }
}
```
2. 使用set去重
```js
Array.from(new Set([1,2,2,3])
```
3. 使用reduce去重
```js
let arr = [1,2,3,4,4,1]
let newArr = arr.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
      return pre.concat(cur)
    }else{
      return pre
    }
},[])
```
4. 使用filter去重；
```js
function unique (array) {
  var str = '';
  return array.filter(item=>{
    //利用filter过滤返回true的情况;
      // 判断字符串中有没有，如果有，则return;
    if (str.includes(typeof item + item)) return  
    return str += (typeof item + item)  // 如果没有，则存入，返回true;
  })
}
```




## 数组乱序

1. 原地洗牌，不需要声明额外的数组从而更加节约内存占用率，

原理：依次遍历数组的元素，将当前元素和之后的所有元素中随机选取一个，进行交换
```js
function shuffle(arr){
    for(let i=0;i<arr.length;i++){
        // 由于下标从0开始，length从1开始因此使用floor向下取整;
        let index= i + Math.floor(Math.random()*arr.length);
        [arr[i],arr[index]] = [arr[index],arr[i]]； // 这里使用了es6的交换位置方法
    }
    return arr
}   // 传入一个数组则乱序
```
2. 非原地洗牌
```js
function sort2(arr){
  let arr2 = []
  while(arr.length){
    // arr的长度会越来越少; 实现随机生成的乱序;
    let index = Math.floor(Math.random()*arr.length)
    arr2.push(arr.splice(index,1)[0])
  }
  return arr2
}
```
3. 使用sort进行乱序
```js
let sort2 = arr => arr.sort(()=>Math.random() - 0.5)
```



## 数组排序

1. 选择数组排序

判断问题：拿第一个和每一个去做比较，如果大于第二个，则让第一个到第二个位置去；

（1）写两个循环，第二个循环j=i+1;，不比较本身。

（2）判断数组的第一个字符i是否大于数组的第二个j字符，如果大于第一个字符，则调换位置。

2. 冒泡数组排序
```js
for(var i=0;i<ary.length;i++){
    for(var k=0;k<ary.length;k++){
        if(ary[k] > ary[k+1]){ //2k > 1n 1n 2k
            var n=ary[k];
            ary[k]=ary[k+1];
            ary[k+1]=n;
        } //自身和紧挨着的后一个比较;
    }
}
```
3. sort()排序
```js
arr.sort();
从大到小==>  arr.sort((a,b)=>b-a)
```



## 对象拷贝方法

浅拷贝：...扩展运算符浅拷贝；
```js
var obj = {a:'haha',b:{c:'haha'}}
var obj2 = {...obj}
obj.b.c = 'lalala'
console.log(obj2.b.c)   // 'lalala'
```
深拷贝：
1. JSON方法
```js
let obj = {name: 'zs',age:18}
let obj2 = JSON.parse(JSON.stringify(obj))
obj2.name = 'ww'
```
2. jquery深拷贝
```js
var obj2 = $.extend(true,{},obj3)
```
3. 浅拷贝+递归
```js
// 第二个参数可传可不传;
function deepClone(origin,target={}){
    for(let prop in origin){
        // 不拷贝原型上的内容;
        if(origin.hasOwnProperty(prop){
            // 判断该值还是不是一个对象;
            if(typeof origin[prop] === 'object'){
                // 判断一下类型,并进行拷贝;
                target[prop] = Array.isArray(origin[prop]) ? [] : {}
                deepClone(origin[prop],target[prop])
            } else {
                target[prop] = origin[prop]
            }
        }
    }
    return target
}
```



## 对象合并

1. jquery
```js
var obj2 = $.extend({},obj1,obj3,obj4)
```
2. vue中
```js
vm.userPro = Object.assign({},obj1,obj2)
```



## 扁平化数组

1. `reduce`
```js
let arr = [1,2,[3,4,[5,6]]]
function fn(arr){
    return arr.reduce((p,c)=>{
        return p.concat(Array.isArray(c)?fn(c):c)
    },[])
}
fn(arr) // [1,2,3,4,5,6]
```
2. `toString`和`split`方法，仅对数字有效
```js
let arr = [1,2,[3,4,[5,6]]]
let arr2 = JSON.parse(`[${arr.toString()}]`)
```
3. 使用递归遍历
```js
let arr = [1,2,[3,4,[5,6]]]
function fn(arr){
    let res = []
    arr.map(item=>{
        if(Array.isArray(item){
            res = res.concat(fn(item))  // 将调用的结果合并
        }
        res.push(item)
    })
    return res
}
```
4. `flat`()
括号里面传入数字，表示扁平化几个，当传入Infinity时，会扁平所有的数组；
```js
var arr = [1[,2,3,[4,5,6]]]
arr.flat(Infinity)
```
5. 使用...扩展运算符，最实用的一个方法
```js
let arr = [1,2,[{name:'h'},[{age:18}]]]
while(arr.some(Array.isArray)){
    arr = [].concat(...arr)
}
console.log(arr)
```


