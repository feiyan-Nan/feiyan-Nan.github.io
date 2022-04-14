# tsconfig配置

* `compilerOptions`
  * `outDir`  输入的文件夹
  * `module`  输入的文件引入方式
  * `target`   输入的es版本
  * `declaration`   是否输入对应d.ts文件
  * `jsx`    jsx的版本
  * `moduleResolution`   模块引入处理方式，可选node或classic
  * `allowSyntheticDefaultImports`   是否需要开启默认引入，否则引入必须使用 * as React方式，不能直接引入import  React；
  * `experimentalDecorators` 是否支持装饰器
  * `downlevelIteration`   是否更准确的在旧版js上面运行迭代器，如for/of循环
  * `noEmit`   是否禁止编译器生成文件，如果开启则不能使用tsc直接生成编译好的文件
  * `paths`   告诉ts该如何解析import/require
* `include`   ts包含的文件
* `exclude`  不需要转换js的文件

官方文档：[https://www.typescriptlang.org/zh/tsconfig](https://www.typescriptlang.org/zh/tsconfig)