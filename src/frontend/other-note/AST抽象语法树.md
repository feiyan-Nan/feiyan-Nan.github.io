# AST抽象语法树
官方文档查看链接：[AST对象文档](https://developer.mozilla.org/zh-CN/docs/Mozilla/Projects/SpiderMonkey/Parser_API)
文档参考链接：[AST抽象语法树](https://segmentfault.com/a/1190000016231512)
插件：`npm i recast`;
## 常用方法
* 解析代码：`recast.parse(code)`
* 输出代码：`recast.print(ast).code`
* 输出美化代码：`recast.prettyPrint(ast, { tabWidth: 2 }).code`
* 读取文件：`recast.run(function(ast, printSource) {})`
* 节点遍历：`recast.visit(ast, {visitExpressionStatement:function(path){}})`



## 解析代码

```js
const code = `
function add(a, b) {
  return a + b;
}
`
const ast = recast.parse(code)
```



## recast.types.builders 制作模具

用来修改代码，里面包含所有的AST工具，AST可以去[AST对象文档](https://developer.mozilla.org/zh-CN/docs/Mozilla/Projects/SpiderMonkey/Parser_API)查看
```js
const {
  variableDeclaration,
  variableDeclarator,
  functionExpression 
} = recast.types.builders;
ast.program.body[0] = variableDeclaration('const', [
  variableDeclarator(add.id, functionExpression(null, add.params, add.body))
])
const output = recast.print(ast).code;
// 输出美化格式的代码
// const output = recast.prettyPrint(ast, { tabWidth: 2 }).code;
console.log(output)
```



## 命令行文件读取 recast.run

创建read.js
```js
const recast = require('recast')
recast.run(function(ast, printSource) {
  printSource(ast)
})
```
命令行输入
```js
node read demo.js
```



## 节点遍历 recast.visit

```js
recast.run(function(ast, printSource) {
  recast.visit(ast, {
    visitExpressionStatement: function(path) {
      const node = path.node;
      return false;
    }
  })
})
```
注意：
* 想遍历什么就在前面加`visit`
* 每个节点遍历必须`return false`，或者 `this.traverse(path)`，否则报错；
* 遍历中想输出ast对象，就使用`console.log(node)`，想输出ast对象对应的源码，可以`printSource(node)`
* `#!/usr/bin/env node`   在所有使用`recast.run()`的文件顶部都需要加入这一行



## 判断AST对象类型

TNT，recast.types.namedTypes
* `TNT.Node.assert(node)` 判断node不为Node时，正确不输出，错误全局报错  
* `TNT.Node.check(node)`  判断node是否与Node一致，Node为AST对象，比如ExpressionStatement



## 实战操作替换

可以使用在线ast语法树，输入想要转换的结构，获取对应的节点类型，之后进行替换

```js
#!/usr/bin/env node
const recast = require("recast");
const {
  identifier: id,
  expressionStatement,
  memberExpression,
  assignmentExpression,
  arrowFunctionExpression
} = recast.types.builders

const fs = require('fs')
const path = require('path')
// 截取参数
const options = process.argv.slice(2)

//如果没有参数，或提供了-h 或--help选项，则打印帮助
if(options.length===0 || options.includes('-h') || options.includes('--help')){
  console.log(`
    采用commonjs规则，将.js文件内所有函数修改为导出形式。

    选项： -r  或 --rewrite 可直接覆盖原有文件
    `)
  process.exit(0)
}

// 只要有-r 或--rewrite参数，则rewriteMode为true
let rewriteMode = options.includes('-r') || options.includes('--rewrite')

// 获取文件名
const clearFileArg = options.filter((item)=>{
  return !['-r','--rewrite','-h','--help'].includes(item)
})

// 只处理一个文件
let filename = clearFileArg[0]

const writeASTFile = function(ast, filename, rewriteMode){
  const newCode = recast.print(ast).code
  if(!rewriteMode){
    // 非覆盖模式下，将新文件写入*.export.js下
    filename = filename.split('.').slice(0,-1).concat(['export','js']).join('.')
  }
  // 将新代码写入文件
  fs.writeFileSync(path.join(process.cwd(),filename),newCode)
}


recast.run(function (ast, printSource) {
  let funcIds = []
  recast.types.visit(ast, {
    visitFunctionDeclaration(path) {
      //获取遍历到的函数名、参数、块级域
      const node = path.node
      const funcName = node.id
      const params = node.params
      const body = node.body

      funcIds.push(funcName.name)
      const rep = expressionStatement(assignmentExpression('=', memberExpression(id('exports'), funcName),
        arrowFunctionExpression(params, body)))
      path.replace(rep)
      return false
    }
  })


  recast.types.visit(ast, {
    visitCallExpression(path){
      const node = path.node;
      if (funcIds.includes(node.callee.name)) {
        node.callee = memberExpression(id('exports'), node.callee)
      }
      return false
    }
  })

  writeASTFile(ast,filename,rewriteMode)
})
```



## 类型示例

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0870a372ff146a2b6298b25dedef1e2~tplv-k3u1fbpfcp-zoom-1.image)



## AST文章推荐

* [像玩 jQuery 一样玩 AST](https://juejin.cn/post/6923936548027105293)
* [阿里妈妈出的新工具，给批量修改项目代码减轻了痛苦](https://juejin.cn/post/6938601548192677918)