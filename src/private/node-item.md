# node项目实例
博客项目简介：基于Node.js+Express+Mongodb+Mongoose开发

## 一、创建文件夹：

项目目录：my_blog

app.js入口文件

views：视图模板

static：存放静态资源

controller：控制路由

models：使用db的模板

libs：后端使用

uploads：接收上传的图片文件夹

## 二、下载模板
[http://www.cssmoban.com/cssthemes/8138.shtml](http://www.cssmoban.com/cssthemes/8138.shtml)


## 三、下载第三方包
1. 根据项目需求，下载所需的第三方包；

express、mongoose、ejs、formidable(表单)、uuid(图名)


## 四、设计路由
1. 根据需求设计路由，并将html模板中相同的部分使用ejs模板引入；

（可以先设计登录页面，之后判断是否登录，才能发表文章）





## 六、添加数据库

1. 连接：

（1）在libs文件夹创建一个专门连接的js文件

（2）里面只引入mongoose和连接，

（3）之后在app.js头部引入；
```js
require('./libs/connectdb.js')
```
2. 创建db

（1）在models创建一个文章db；

（2）定义Schema约束

（3）定义一个添加文章的函数，两个形参（传入的值，回调函数）；

（4）如果添加出错return callback(err)，如果成功return callback(null);
```js
// 添加时间：
addtime:{
    type:Date,
    default:Date.now
}

function addArticle(data,callback){
    models.create(data,(err)=>{
        if(err){  //添加成功
            return callback(err);
        }else{  //添加失败   返回null方便判断
            return callback(null);
        }
    })
}
```
3. 处理数据

（1）处理拿到的数据，引入数据文件；

（2）在添加文章路由文件引入设计的db模块；

（3）将图片的路径添加到fields对象中，再添加一个用户id，获取哪个用户上传的；

（4）将fields对象作为实参调用添加文章的函数

（5）处理添加成功或者失败；

（5）使用ejs模板往前台传入数据；
```js
fields.uname = uname;  //设计一个用户名，方便后期渲染
fields.pic = picName;  //往fields里面添加属性;
articleDB.addArticle(fields,result=>{
    if(result){  //处理添加失败
        res.render('msg.html',{curtitle:'上传失败',curUrl:'/user/publish'})
    }else{  //处理添加成功
        res.render('msg.html',{curtitle:'上传成功',curUrl:'/user/publish'})
    }
})
```

数据库结构：创建models文件
```js
const mongoose = require('mongoose');

//约束规则
let Schemas = new mongoose.Schema({
    uname:String,
    title:String,
    desc:String,
    contents:String,
    pic:String,
    del:{
        type:Number,
        default:1   //1为显示  0为删除;
    },
    addtime:{
        type:Date,
        default:Date.now
    }
})

//定义模型
let models = mongoose.model('article',Schemas);


//定义添加文章
function addArticle(data,callback){
    models.create(data,(err)=>{
        if(err){  //添加成功
            return callback(err);
        }else{  //添加失败
            return callback(null);
        }
    })
}

//定义查询文章并渲染
function findArticle(conditions,projection,options,callback){
    models.find(conditions,projection,options,(err,docs)=>{
        if(err){  //查询失败;
            return callback(err,[])
        }else{   //查询成功
            return callback(null,docs);
        }
    })
}

//查询条数
function findCount(data,callback){
    models.countDocuments(data,(err,cond)=>{
        if(err){   //查询失败
            return callback(err,0);
        }else{
            return callback(null,cond);
        }
    })
}

function updateArticle(id,update,ccc,callback){
    models.findByIdAndUpdate(id,update,ccc,err=>{
        if(err){
            return callback(err);
        }else{
            return callback(null);
        }
    })
}

//将文章暴露出去;
module.exports = {addArticle,findArticle,findCount,updateArticle}
```
路由结构：创建ArticleRouter.js,之后在app.js引入
```js
const express = require('express')
let router = express.Router();
const Articledb = require('../models/Articledb.js');

//博客首页
router.get('/',(req,res)=>{
    Articledb.findArticle({del:1},{},{limit:9,sort:{addtime:-1}},(err,docs)=>{
        if(err){  //查询失败
           return res.send('Not Found：'+err);
        }   //查询成功..
        res.render('index-index.html',{docs})
    })
})

//博客列表页
router.get('/lists/:pid',(req,res)=>{
    //定义每页显示的条数
    let limits = 2;

    //定义每页跳过多少条
    let skips = (req.params.pid-1)*limits;

    //查询条数
    let pagenum = 0;
    Articledb.findCount({del:1},(err,total)=>{
        //定义总共的页数
        pagenum = Math.ceil(total/limits);
    })

    //渲染列表
    Articledb.findArticle({del:1},{},{limit:limits,skip:skips,sort:{addtime:-1}},(err,docs)=>{
        if(err){  //查询失败
           return res.send('Not Found：'+err);
        }   //查询成功..
        res.render('index-blog.html',{docs,pagenum});
    })
})

//博客详情
router.get('/detail',(req,res)=>{
    res.render('index-blog-detail.html');
})

//联系我们
router.get('/contact',(req,res)=>{
    res.render('index-contact.html');
})

//关于我们
router.get('/about',(req,res)=>{
    res.render('index-about.html');
})

module.exports = router;
app引入ArticleRouter.js

let articleRouter = require('./ArticleRouter.js')
app.use('/blog', articleRouter)   // articleRouter的每个路由都得添加一个blog
```

## 七、渲染页面
（1）定义查询数据库
```js
function findArticle(conditions,projection,options,callback){
    models.find(conditions,projection,options,(err,docs)=>{
        if(err){  //查询失败;
            return callback(err,[])
        }else{   //查询成功
            return callback(null,docs);
        }
    })
}
```
（2）渲染到页面
```js
Articledb.findArticle({del:1},{},{limit:9,sort:{addtime:-1}},(err,docs)=>{
    if(err){  //查询失败
       return res.send('Not Found：'+err);
    }   //查询成功..
    res.render('index-index.html',{docs})
})
```
通过ejs模板引擎来循环，将数据发送过去；


## 八、设计列表页
1. 计算出数据库总的页数，之后设计path路径或查询字符串；

使用model.countDcuments(data,callback);

2. 通过limit和skip定义每页显示的条数，并计算出总的页数；

方法：(页数-1)*条数；

3. 在前端页面通过for循环渲染页数；


## 九、登录页面
1. 将输入的用户名调用到后台数据库查询，判断传入的数据的长度是否为0；
2. 当账号正确之后验证密码是否正确，正确之后开始设置session；
3. 渲染页面msg提示信息页面；


## 十、用户首页
1. 判断sessionid是否存在，如果不存在，则跳转到提示页面，让用户登录；
2. 利用session获取当前的用户，并使用查询数据库；
3. 将当前用户发表的文章渲染到当前用户的首页；

技巧：渲染页面时可以做一个表格，给每一行添加一个修改和删除的按钮；



## 十一、修改文章
1. 点击修改用path路径给后台传入一个_id，后台利用_id查询数据；
2. 设计两个路由和添加修改文章的页面；
3. 将获取到的_id的数据渲染到页面（先显示，后修改），并添加一个隐藏域_id，添加一个图片显示的标签；
4. 将发表文章的js内容复制到修改文章，将创建文章改成findByIdAndUpdate()；
5. 修改失败回到修改页面，需要将id传到path路径；


## 十二、删除文章
1. 设计一个调用ajax的函数，将点击的_id传到后台；
2. 在后台将收到的_id的值改为逻辑删除；


## 十三、文章详情页面
1. 点击之后将_id通过ajax传到后台，将内容显示出来；
