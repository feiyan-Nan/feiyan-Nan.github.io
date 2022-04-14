# node插件分享

## 随机数生成

* uuid
* [nanoid](https://github.com/ai/nanoid)：比uuid速度更快





## 接收上传文件

1. 有上传文件必需修改form表头格式：`enctype='multipart/form-data'`，原生ajax或fetch的post不需要设置Content-Type；
2. 接收文件下载：formidable插件

```js
const formidable = require('formidable');
var form = new formidable.IncomingForm();
form.parse(req, function(err, fields, files) {
    // fields：普通的数据
    // files：上传的文件信息
});


// path.extname()；获取文件扩展名
// uuid()；获取唯一的id给图片命名；
// fs.renameSync(old,new)；将文件放到uploads文件夹；
```

文件上传之后是临时保存的，需要移动一下；

3. 使用form.uploadDir修改文件夹存放目录；

```js
form.uploadDir = path.resolve(__dirname, '..','target')
```

4. 下载uuid生成唯一的名字给文件命名，需要注意扩展名；
5. 如果前端发送的file文件收取不到，则可以new一个formData

```js
let formData = new FormData()
formData.append('file', file)
upload(formData) // 将formData发送给后端
```





## 解决跨域问题插件

`yarn add cors`

```js
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
    methods: 'GET, POST, HEAD, PUT, PATCH, OPTIONS, DELETE'
}))
```





## 使用session连接mongo

`yarn add express-session connect-mongo`

```js
let session = require('express-session')
let MongoStore = require('connect-mongo')(session)
app.use(session({
    secret: '', // 密钥
    resave: true, // 是否重新保存
    saveUninitialized: true, // 是否保存初始化
    store: new MongoStore({
        url: 'http://localhost:27017/hny'
    })
}))
```





## 接收body参数

`yarn add body-parser`

```js
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
```





## 打印请求日志

安装：`yarn add morgan`

```js
const logger = require('morgan')
app.use(logger('dev'))
```



## 中间件处理

```js
// 解决跨域
app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
  next()
})

//错误处理中间件
app.use((err,req,res,next)=>{
  console.log('出错了')
  res.status(500).send(err.message);
})
```







## 获取时间的第三方包(time-stamp)

1. 安装  `npm i time-stamp`
2. ‘YYYY-MM-DD HH:mm:ss’   年月日，时分秒；ms毫秒，需要加引号；
3. 直接使用方法：timestamp();   获取当前年月日；
4. timestamp.utc()；获取国际时间；



## 获取本地语言

根据本地语言不同，返回对应的语言，比如：zh-CN、en-US

安装：`yarn add os-locale@5.0.0`

```js
const osLocale = require('os-locale');
const locale = osLocale.sync();
```



## node中util包

**promisify**

将node中的回调函数方式改为promise的方式使用

```js
const fs = require('fs')
const { promisify } = require('util')
const sleep = promisify(setTimeout)
const stat = promisify(fs.stat)

void async function(){
    await sleep(1000);
    const stats = await stat('.');
    console.log(stats)
}()
```



## 将命令发送到控制台

### shelljs

> Shelljs是Node.js下的脚本语言解析器，具有丰富且强大的底层操作(Windows/Linux/OS X)权限。Shelljs本质就是基于node的一层命令封装插件，让前端开发者可以不依赖linux也不依赖类似于cmder的转换工具，而是直接在我们最熟悉不过的javascript代码中编写shell命令实现功能。

1. 安装：`npm install shelljs`
2. 官网：[https://documentup.com/shelljs/shelljs](https://documentup.com/shelljs/shelljs)

* 基本语法

```js
//引入shelljs
var shell = require('shelljs')

//检查控制台是否以运行`git `开头的命令
if (!shell.which('git')) {
  //在控制台输出内容
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

shell.rm('-rf','out/Release');//强制递归删除`out/Release目录`
shell.cp('-R','stuff/','out/Release');//将`stuff/`中所有内容拷贝至`out/Release`目录

shell.cd('lib');//进入`lib`目录
//找出所有的扩展名为js的文件，并遍历进行操作
shell.ls('*.js').forEach(function (file) {
  /* 这是第一个难点：sed流编辑器,建议专题学习，-i表示直接作用源文件 */
  //将build_version字段替换为'v0.1.2'
  shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
  //将包含`REMOVE_THIS_LINE`字符串的行删除
  shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
  //将包含`REPLACE_LINE_WITH_MACRO`字符串的行替换为`macro.js`中的内容
  shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);
});

//返回上一级目录
shell.cd('..');

//run external tool synchronously
//即同步运行外部工具
if (shell.exec('git commit -am "Auto-commit"').code !== 0){
    shell.echo('Error: Git commit failed');
    shell.exit(1);
}
```

* `which`：
* `exec`：执行一串命令，返回一个code，如果code不等于0，则执行失败了



### execa

输出内容支持颜色



## rimraf 删除

与rm -rf 不同的是，rm对window支持不友好，像cmd、powershell命令行都不支持

使用方式：`rimraf -rf ./node_modules`；



## mime模块：获取文件的扩展名

安装：`yarn add mime`

* `getType`；括号直接放文件名就可以了，不需要单独的路径；
* `getExtension`；括号放类型，给后缀名；



## 操作git库

git仓库地址：[https://github.com/steveukx/git-js](https://github.com/steveukx/git-js)

安装：`yarn add simple-git`

```js
const simpleGit = require('simple-git');
async function cloneGit(href) {
    const git = simpleGit(process.cwd());
    try {
        await git.raw(['clone', href])
    } catch(e) {}
}
```



## 与用户交互键盘输入的库

**[Inquirer](https://www.npmjs.com/package/inquirer)**

git仓库地址：[https://github.com/SBoudrias/Inquirer.js](https://github.com/SBoudrias/Inquirer.js)

安装：`yarn add inquirer`

文档：[https://blog.csdn.net/qq_26733915/article/details/80461257](https://blog.csdn.net/qq_26733915/article/details/80461257)



**[prompts](https://www.npmjs.com/package/prompts)**

地址：[prompts](https://www.npmjs.com/package/prompts)

安装：`yarn add prompts`

demo地址：[https://github.com/terkelg/prompts/blob/master/example.js](https://github.com/terkelg/prompts/blob/master/example.js)





## 添加脚手架命令

**[commander](https://www.npmjs.com/package/commander)**

可以自定义输入命令；

安装：`yarn add commander`

官方文档：[https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md)





**[minimist](https://www.npmjs.com/package/minimist)**

解析`process.argv`工具

安装：`yarn add minimist`

文档：[minimist](https://www.npmjs.com/package/minimist)

```js
var argv = require('minimist')(process.argv.slice(2));
console.log(argv);
```





## 获取文件列表路径

安装：`yarn add fast-glob` 

通过fs-extra更方便的递归复制文件夹，例子：

```js
const fs = require('fs-extra')
const glob = require('fast-glob')

function toDest(file) {
  return file.replace(/^src\//, 'dist/')
}

// 下面例子排除了.ts文件和package.json, 获取其中所有文件路径组成的数组，之后直接使用fs.copy到本地
glob.sync('template/**/!(*.ts|package.json)', {onlyFiles: false}).forEach((file) => {
  fs.copy(file, toDest(file))
})
```

或者使用`globby`



## 控制台输出颜色

* **[chalk](https://www.npmjs.com/package/chalk)**
* **[kolorist](https://www.npmjs.com/package/kolorist)**

不依赖插件也可以自己手动写

```js
const colors = {
  black: '30',
  red: '31',
  green: '32',
  yellow: '33',
  blue: '34',
  magenta: '35',
  cyan: '36',
  white: '37',
  default: '36',
}
function log(str, color){
    const n = colors[color] || colors.default;
    return `\x1b[${n}m${str}\x1b[0m`;
}
console.log(log('hello', 'yello'), log('yes', 'red'))
```



## 控制台输出进度

* [ora](https://github.com/sindresorhus/ora)
* [progress](https://www.npmjs.com/package/progress)
* [listr](https://npm.im/listr)  更友好的promise任务列表进度展示



## 控制台输出盒子

* [boxen](https://github.com/sindresorhus/boxen)



## 模板工具

* [nunjucks](https://mozilla.github.io/nunjucks/)
* [ejs](https://ejs.bootcss.com/)



## 监听文件变更

* [chokidar](https://github.com/paulmillr/chokidar)



## 文字转拼音

* [pinyin](https://npm.im/pinyin)



## 设置别名

* [module-alias](https://www.npmjs.com/package/module-alias)



## 版本号管理工具

* [semver](https://npm.im/semver)



## 页面进度条插件

* [nprogress](https://github.com/rstacruz/nprogress)









