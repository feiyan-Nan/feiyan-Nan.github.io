# node-08 mongodb
## 一、mongodb
1. 为什么要使用数据库

    把数据进行持久化，之前学习的文件数据持久化不安全，而且操作数据不方便；


### Mongodb简介

* MongoDB是一个NoSQL的数据库；
* MongoDB是一款文档型数据库；
* 数据库指的就是一个存储数据的仓库，数据库可以使我们完成对数据的持久化的操作
* MongoDB数据库中存储的数据的基本单位就是文档，所谓文档其实就是一个json；
* MongoDB中的“json” 我们称为BSON，比普通的JSON的功能要更加的强大；
* MongoDB数据库使用的是JavaScript进行操作的，其实就是提供了一个javascript的运行环境，可以使用javascript的代码，在MongoDB含有一个对ES标准实现的引擎，在MongoDB中所有ES中的语法中都可以使用；
* nodejs和mongodb数据库是标配；



### 传统的数据库

先安装数据库软件---数据库--数据表--数据表才是真正的数据（记录）

Nosql当中

先安装数据库软件--数据库--集合--文档

比如淘宝用的Mysql数据库

安装mysql--taobao--user|product.....小明（人|对象|文档|纪录）；



### 安装MongoDB

官网：[https://www.mongodb.com](https://www.mongodb.com)

下载：[https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community)

安装时，有一个东西不能勾选，否则会一直卡住；

![image](https://notecdn.hrhe.cn/images/node-08_mongodb-01.png)

安装之后添加环境；

图形化工具：Studio 3T

无限试用： [https://www.lanzous.com/i4jycdc](https://www.lanzous.com/i4jycdc)



### 使用MongoDB数据库

1. 启动数据库服务

2. 在C盘根目录下创建data文件夹，在data下创建db文件夹

3. 进入安装的mongoDB目录，在bin文件夹下打开cmd，输入：`mongod`

   注：默认保存的数据目录在c:/data/db文件；

   默认命令端口是27017；

   开启之后命令窗口不能关闭；之后再开一个cmd窗口，输入mongo即可使用了

4. 指定路径或端口的启动：

   `mongod --dbpath 数据库路径[--port端口号]`

   语法：mongod --dbpath=c:/data/db

   一般不需要指定路径；



### 数据库的概念

**数据库（database）**：

---在MongoDB中，数据库和集合会在创建文档时会自动创建；

**集合（collections）**：

---集合就是一组文档，也就是集合是用来存放文档的；

---集合中存储的文档可以是各种各样的，没有格式要求

**文档（document）对象**；

---类似于JS中的对象，在MongoDB中每一条数据都是一个文档；

多个文档组成集合，多个集合组成数据库；



## 一、数据库基本操作
1. 连接`mongodb`：

   启动mongodb：mongod；启动之后不能关闭

   连接mongodb：mongo；

2. mongodb基本语法：

   `show dbs`：查看所有数据库；

   `use demo`：使用数据库，没有则创建

   `db`：当前使用的数据库；

   `show collections`：显示当前数据库中的集合



## 二、插入db数据

`db.collections.insert()`

括号可以写数组、对象；

如果添加的对象里的键名在前面没有，也不影响；



示例：`db.shops.insert([{gid:1,gname:'张三'},{gid:2,gname:'李四'}])`

* `insert()`可以添加一个或多个文档，可以是一个对象或一个数组；

* 可以是对象或数组中的对象；

* 添加时如果集合或数据库不存在，会自动创建；

* 插入的文档对象会默认添加_id属性，是文档的唯一标识，不同于其它数据库；

* id生成的原理：机器码+时间戳



## 三、查找find()

`db.collections.find({查询条件},{要显示的属性[1:显示,0:隐藏]})`

`mongodb`底层不会隐式转换数据类型，如果数字加引号，则查询时也必须加引号；

`mongodb`就是提供了一个JavaScript运行环境



* 不填写参数时，默认显示全部的数据(表)；

`db.user.find({gname:'张三'},{gid:1,_id:0})`;  显示gname是张三的，只显示gid；

`ObjectId()`；是mongodb新增的一种类型；直接运行会生成一个新的id；

如果是使用`_id`查询，需要使用`_id:ObjectId('id')`；



### 查询的关键词

`$lt`(小于)、`$lte`(小于等于)、`$gt`、`$gte`、`$ne`(不等于)、`$in`(包含)、`$nin`(not)、`$or`(或)



### 使用查询关键词

* 小于：`db.collections.find({age:{$lt:8}})` 

* 包含：`db.collections.find({age:{$in:[18,20]}})`  $in必须有中括号;

* 或者：`db.collections.find({$or:[{age:18},{age:20}]})`   等价于$in;

* 并且：`db.collections.find({name:'张三',age:18})`；

* 查询类别为11的商品价格大于4000或商品名称为小米手机的商品信息

  `db.goods.find({cateid:11,$or:[{price:{$gt:4000}},{gname:'小米手机'}]})`

  查询出来是一个数组，可以加[0]显示第一条信息；



### 限制条数limit

`db.goods.find().limit(5)`



### 跳过skip

`db.goods.find().limit(5).skip(5)`

分页规则：skip中的值=(页数-1)*条数；



### 排序sort

有两个值：1：升序，-1：倒序

sort值可以是多个条件，下面示例当价格相当则按照gid排序；

`db.goods.find({cateId:{$in:[11,12]}}).sort({price:-1,gid:1})`



### 返回记录条数count

`db.goods.find().count()`





## 四、修改update()

`db.goods.update({find条件},{对象})`

如果直接这样写，会把满足条件的记录修改成一个新对象；



**修改$set**

`db.goods.update({},{$set:{}},{multi:true})`；

如果修改多个需要加`{multi:true}`；



**移除$unset**

`db.goods.update({},{$unset:{}})` 

属性值不能省略；

注意：update()默认只修改满足条件的一条记录，修改多个需要加`{multi:true}`;

`updateOne()`；只修改满足条件的一条记录；

`updateMany()`；更新多个；

也可以直接使用`{multi:true}`；





## 五、删除remove()

**物理删除**

`db.<collection>.remove({find条件},是否删除一条)`；默认删除多条；

直接使用`remove()`叫物理删除，不安全



**逻辑删除**

开发中使用的是逻辑删除，一般都是用逻辑删除的；

逻辑删除需要定义一个id，并自定义值，例：1：删除，0：修改；

需要删除的时候使用`update`修改定义的id值；实在不需要可以使用`remove`删除；



## 六、其他方法

1. `db.<collection>.drop()`；删除集合(表)；

`remove`只会清空集合里面的数据，不会删除集合；

2. 优化mongodb：

循环添加
```js
for(let i=0;i<30000;i++){
    db.goods.insert(i);
}
```

优化
```js
let arr=[];
for(let x=0;x<30000;x++){
    arr.push({x});
}
db.goods.insert(arr);
```



## 七、数据库备份

注意：使用命令导出必须退出mongo环境

### 导出mongodump备份

`mongodump -d 数据库 -o 文件路径`；

（2）常用：`mongodump -d myblog -o c:/data/dbs`

（3）-d省略导出所有数据库



### 还原数据库

`mongorestore -d 数据库 --drop 文件路径`；

--drop：先删除所有的记录，然后恢复；

（2）常用：`mongorestore c:/data/dbs`；还原所有；

dump和还原格式是json和bson，无法指定表



### 导出表

mongoexport导出表，或者表中部分字段；

`mongoexport -d 数据库 -c 表名 -f 字段 -q 条件导出 --csv -o 文件名`


示例：`mongoexport -d demo -c users --csv -f name,age,city -q "{uid:{$gt:1}}" -o c:data/demo.csv`;

--csv  导出的文件格式为csv的，大部分关系型数据库都是支持csv的；（比较有用）

-q 需要是双引号；

（2）常用：`mongoexport -d demo -c users -o c:/data/mydemo.dat`；导出整张表；   

格式可以是dat、csv、json都行



### 导入表
* 还原非csv文件整张表；

```bash
mogoimport -d 数据库 -c 表名 --upsert --drop文件名；
# 示例：
mongoimport -d demo -c users --upsert c:/data/users.dat;
```
--upsert：插入或者更新现有的数据；

* 还原部分字段的导出文件

```bash
mogoimport -d 数据库 -c 表名 --upsertFields 字段 --drop 文件名；
# 示例：
mongoimport -d demo -c users --upsertFields uid,name /data/users.json;
```
`--upsertFields`和`--upsert`一样；

* 还原导出的csv文件

```bash
mongoimport -d 数据库 -c 表名 --type 类型 --headerline --upsert --drop 文件名；
# 示例：
mongoimport -d demo -c users --type csv --headerline --file /data/users.csv;
```



## 六、其他数据库

1. 将数据放在json文件的缺陷：检索、查询、更新、删除比较麻烦；

2. 数据库分为两类：

   （1）sql数据库（关系型数据库）：SQLserver、Mysql、Orcale、Mongodb；

   （2）NoSql数据库（非关系型数据库）：不仅仅是sql。Mongodb；

3. 数据库主要分成两种

   关系型数据库：关系数据库中全部是表；

   数据库<表<记录：传统的数据库存放的是表，表里的数据叫记录(信息|数据)；

   非关系型数据库：Nosql 是以json的键值对存储数据，存放的是集合，集合里面的是对象；

4. 其他sql语言用法（了解）：

   * 查询：select * from 文件名 where uname='admin'；

   * 修改：update 文件名 set pwd='33',tel='123' where uname='admin'；

   * 删除：delete from 文件名 where uname='admin'；

   * 添加：insert into 文件名 (uname,upwd)values('zs','123')；

5. 一般情况下：一个项目对应一个数据库；

   一个数据库就是一个文件夹，

   无论什么数据库都要安装在电脑上，具体的数据存储在数据库文件中，其实也是文件，数据库需要特殊形式打开；

6. mongodb：非关系型数据库

   数据库<集合<对象(文档|记录)；