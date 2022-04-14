# ts实践例子

## 封装自己的map函数

原代码

```js
const arrayMap = (arr, callback) => {
    let i = -1
    let len = arr.length
    let arr2 = []
    while(++i < len) {
        arr2.push(callback(arr[i], i, arr))
    }
    return arr2
}
```



错误案例

```ts
const arrMap = (arr: any[], callback: (item: any, index?:number, arr: any[]) => any): any[] => {
      let i: number = 0
  const len = arr.length
  const arr2 = []
  while(i < len ){
    arr2.push(callback(arr[i], i, arr))
    i++
  }
  return arr2
}

// 使用
arrMap([1,2], (item) => {
    return item++
}).forEach(item => {
    console.log(item.length) // 数字没有length属性，但是由于any并不报错；
})
```



正确示例

```ts
// 首先传入的第一个泛型变量T
// 第一个参数为T构成的数组
// callback的第一个参数为T, 第二个和第三个参数都为可选的，第三个参数应该是只读的，callback返回的类型应该和整个函数返回的类型是有关联的，因此使用第二个泛型变量
const arrayMap = <T, U>(arr: T[], callback: (item: T, index?: number, array?: Readonly<T[]>) => U): U[] => {

}
```



## 为第三方库填写声明文件

如果安装了库，没有填写声明文件，是没有类型提示的；

### 查找是否需要编写声明文件

1. 首先查找`node_modules`下面安装的模块的根目录，有没有`.d.ts`文件，如果有则不需要写声明文件了；
2. 查找社区有没有为该库安装声明文件
   1. 使用`npm install @types/库名 -D` 如果安装成功，查找`node_modules`文件夹下面的`@types`文件夹下，安装的模块文件夹
   2. 如果安装报错，说明没有社区编写声明文件；
   3. 如果模块文件夹为空，说明没有声明文件；

### 编写声明文件

1. 到`tsconfig.json`文件夹下面，打开以下选项

   ```json
   "baseUrl": ".",
   "paths": {
       "*": ["./node_modules/@types", "./typings/*"]
   }
   // 上面填写的paths代表首先到node_modules下面的@types查找，如果没有就查找本地typings文件夹
   ```

2. 编写声明文件

   1. 首先填写同名模块的文件夹，再在文件夹下面填写`index.d.ts`文件；
   
      ```ts
      // 编写声明文件
      declare function indexof(arr: any[], obj: [any]): number;
      export = indexof
      ```
   



## node使用ts开发

1. 全局安装express：`npm i express-generator -g`

2. 运行`express --view=jade server-side`创建一个项目, 最后为项目名

3. 创建相关文件夹

   ```bash
   config # 放置全局
   controller # 放置控制器
   model # 连接数据库
   utils # 放置工具函数
   types # 放置ts的声明文件
   ```

4. 使用`npm install`安装依赖

5. 安装typescript：`npm i typescript`

6. 安装typescript的声明文件：`npm i @types/express @types/node -D`

7. 修改文件：

   1. bin目录下面www移动到项目根目录，并修改为`server.ts`文件，并修改server.ts文件里面引入app的路径为`./`；
   2. 将app.js修改为`app.ts`
   3. 将routes文件夹下面的js修改为ts文件

8. 使用`tsc --init`生成`tsconfig.json`文件

9. 修改tsconfig.json文件，下面有的都打开：

   ```json
   "outDir": "./dist",
   "noImplicitAny": false,
   "moduleResolution": "node",
   "baseUrl": ".",
   "paths": {
     "*": ["node_modules/*", "./types/*"]
   },
   "esModuleInterop": true,
   ```

10. 由于public和views下面的静态文件不会被build，需要手动处理一下，在项目根目录创建`handle-public.js`文件，用来处理打包：

    1. 安装shelljs：`npm i shelljs`

    2. 输入以下代码：

       ```js
       const shell = require('shelljs')
       shell.cp('-R', './views/', './dist/')
       shell.cp('-R', './public/', './dist/')
       ```

11. 安装cross-env传递环境：`npm i cross-env` ，js中使用`process.env.NODE_ENV`取值;

12. 安装nodemon用来热更新：`npm i nodemon -D`

13. 由于nodemon仅支持js文件，再安装ts-node支持热更新ts文件：`npm i ts-node -D`

14. 修改package.json

    ```json
    "scripts": {
        "start": "npm run serve",
        "serve": "node ./dist/server.js",
        "build": "tsc && node handle-public.js",
        "watch-dev": "cross-env NODE_ENV=development nodemon -e ts,tsx --exec 'ts-node' ./server.ts"
    }
    ```

    watch-dev：

    * `-e`：表示指定热更新后缀文件
    * `exec`：执行后面的文件

    之后使用watch-dev启动项目即可；

15. 编译之后可以将dist文件夹放置到服务器上面即可；

