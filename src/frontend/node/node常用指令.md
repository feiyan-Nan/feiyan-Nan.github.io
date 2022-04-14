# node常用指令

`child_process`：

```js
const c = require('child_process')
console.log('start http://localhost:3000') // 输出该条
c.exec('start http://localhost:3000') // 执行该条命令
```

取命令行参数：`process.argv`

退出当前程序：`process.exit(0)`

切换目录：`process.chdir`

当前工作根目录：`process.cwd()`；

获取用户根目录：`require('os').homedir()`

