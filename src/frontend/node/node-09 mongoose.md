# node-09 mongoose

文档：[https://itbilu.com/nodejs/npm/B1FfBss6X.html](https://itbilu.com/nodejs/npm/B1FfBss6X.html)

## 一、mongoose
1. 原生mongodb:

   可以安装：npm i mongodb（原生的mongodb写法）

   现在都是使用mongoose，封装的mongodb；

2. mongoose安装

   npm i mongoose；安装到项目文件夹；

3. mongoose对象：

   （1）`Schema`：约束（设计集合[表]结构的同时约束数据类型）；

   （2）`Model`：模型 | 表 | 集合，用来操作具体的数据；

   （3）`document`：一条一条的记录

4. mongoose操作mongodb的步骤

（1）开启服务
```js
   //  并引入mongoose
const mongoose = require('mongoose')；

   // 连接数据库
mongoose.connect('mongodb://localhost:27017/test,{useNewUrlParser:true})；
    //test为数据库名，27017端口可以省略，默认端口是27017；

    // 定义Schema

```
（5）根据Schema创建Model对象（创建数据库名）
```js
// 定义Schemas
let Schemas = mongoose.Schema;
//数据库名需要加s，会转变副词，自动加s；
let userModel = mongoose.model('users',new Schemas({
    uname:String,
    age:Number,
    sex:{
        type:String,
        default:'男'
    }
}))

// 通过Model对象进行CRUD操作（需要创建多个可以写入一个数组）
userModel.create({uname:'hny',age:18,sex:'男'},(err)=>{
    if(!err) return console.log('ok')；
});
```



## 二、Model.find()方法

`Model.find(conditions[,projection][,options][,callback])`;  返回一个数组；

* `conditions`：find条件，查询的条件值可以为正则；

* `projection`：要展示的字段，0为不显示，1为显示，如果不需要设置，可以写null；

  也可以使用字符串，用空格分开，不显示的用-减号；

  示例：`model.find({name:/li/i},'name -_id',()=>{})`；

* `options`：查询选项，sort(排序)，limit(限制)，skip(跳过)；

* `callback`：回调函数，查找到的结果，从回调函数中获取所以函数需要两个形参(err,docs)；

  示例：`model.find({name:'hny'},null,{skip:5},(err,dosc)=>{})`；


  如果不传递回调函数，则不会自动执行，返回一个query对象，需要调用exec()方法才能执行；

  推荐使用不传递回调函数，方便前者指定复杂的条件，可以通过链式调用；

```js
exports.findApiList = function(conditions, projection, options) {
  return new Promise(resolve => {
    Models.find(conditions, projection, options).exec()
      .then(val => resolve({code: 1, results: val}))
      .catch(err => resolve({code: 0, err}))
  })
}
```





## 三、Model.update()方法

`model.update(条件,修改的内容[,options][,callback])`；

修改多条需要加`{multi:true}`；

不建议使用update(),建议使用以下两种方法

* `model.updateOne()`；
* `model.updateMany()`；



## 四、查询条数

`model.countDocuments({条件},(err,cont)=>{})`；



## 五、Model.remove()；

* `model.remove(条件,fn)；`

* `model.deleteOne()`

* `model.deleteMany()；`



## 六、findByIdAndUpdate

`findByIdAndUpdate('条件','修改内容','限制',fn)`；

通过id修改内容



## 七、文档对象

1. 添加数据：`cur = model({})；cur.save()`；直接使用model创建数据，之后保存；

   不需要调用`model.create`就可以创建数据；

2. find查找到数据之后可以直接操作查找到的数据，之后调用save()一下；

```js
model.find({},(err,docs)=>{
    docs[0].name = 'lishi';
    docs[0].save()；
})
```
3. 可以通过`docs.toObject()`转成普通对象，之后是不等于docs的；


