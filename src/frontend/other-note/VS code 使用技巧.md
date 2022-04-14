# VS code 使用技巧
vscode快捷键
1. alt+shift+↓/↑ 快速向下/向上复制一行。
2. alt+鼠标左键 点击需要修改的地方，可以同时修改
3. ctrl+shift+L 选中所有被搜索的内容。
4. ctrl+shift+K 删除当前行。
5. ctrl+[ / ] 缩进/增进。
6. ctrl+enter  快速下一行
7. ctrl+shift+enter 快速上一行
8. shift+alt+a 多行注释
9. ctrl+d 快速选中下一个
10. alt+shift+f  快速格式化上下文
11. alt+z 格式化文字
12. 按住鼠标滚轮可以选中
13. ctrl+k+0 快速折叠
14. ctrl+k+j 全部展开
15. ctrl+shift+{/} 当前折叠/展开
16. ctrl+,   打开setting
17. ctrl+j   打开控制台
18. ctrl+p  搜索文件
19. ctrl+shift+p  使用功能
20. tr\*5>td\*3 出来五个tr，每个tr里面包含3个td
21. .box直接class名box。
22. #box直接id名box。
23. div*9{$}  出来9个div包含数字1-9;

网页截图：ctrl+shift+p capture full size screenshot

切换屏幕：alt+ctrl+方向键



## vscode常用插件

* 浏览器打开：view in browser

* 打开浏览器：open in browser

* 修改前缀自动补齐：auto rename tag

* 更明显的颜色对齐：bracket rair colorizer

* 简体中文：chinese(Simplified)   

* 所见即所得：live html previewer   

* 创建svg画布：SVG

* 浏览器画布：svg viewer

* 颜色高亮：vs color picker

* 跳转到css类名样式：css peek 

* 模拟服务器：Live Server 

* vue文件自动补齐：vetur

* bootstrap自动完成类名：bootstrap 3 Snippets

* vue自动完成：vue 2 snippets

* javascript自动完成：Atom javascript snippet

* 第三方cdn：cdnjs

* cdn自动完成：cdnSnippets

* es6自动完成：javascript(es6) code snippets

* 路径自动完成：path intellisense

* 图标美化：material icon theme

* 快捷console：javascript console utils

* autoprefixer： 在使用css文件编写样式时，按shift+ctrl+p，找到autoprefixer回车自动加兼容ie前缀；

* 自动完成：aiXcoder.com    会自动提示补全功能（带星），需要在官网下载

* TabNine： 代码自动补全，

* gitlens：管理git插件，可以随时查看到git版本修改信息（超好用）

* 选中函数添加注释：Add jsdoc comments

* 正则预览插件（写正则很方便）： Regex Previewer

* 注释醒目插件（多种注释带颜色，区分不同程度注释）：Better Comments

* 自动引入import：npm Intellisense

* sass转换：live sass compiler（需要使用shift+ctrl+p 打开搜索sass找到编译）

* less转换：easy less （保存自动编译）

* 图标主题：atom one dark theme（atom系列的都好看）

* 同步vscode配置：settings sync（出问题就重置一下设置，重新登录授权就可以了）

* REST Client：请求接口常用

  创建test.http

  ```js
  @host = https://example.com
  GET {{host}}/banner HTTP/1.1
  content-type: application/json
  
  {
      "name": "sample"
  }
  ```

* Browser Preview：vscode嵌套浏览器，方便debugger使用



## 自动补齐node代码：

npm install -g typings

typings install dt~node --global --save

typings install dt~express --global

typings install dt~lodash --global

创建jsconfig.json空文件





## 自定义代码补齐snippets
1. 打开方法

（1）首选项==>用户代码片段

（2）ctrl+shift+p 打开命令面板，输入snippets后回车

2. 使用方法
```json
"html template": {
    "prefix": "vh",  //vh是使用时输入的代码
    "body": [  //body里面填写需要自动完成的代码
    "console.log('${1:content}');",
    "${2:label}"
    ],
    "description": "htmls template"  //为提示内容;
}
```
3. 符号介绍
	* ${1:content}，代表第一个占位符，也可以直接$1；
	* ${2:label}，代表第二个占位符，使用tab进行切换，以此类推
	* $0，tab切换最后的位置；
	* 使用$1content光标会到第一个去


4. 填写body内容规范

（1）字符串间如果值里包含特殊字符需要 \ 进行转义

（2）换行：\r或者\n

（3）tab键制表符：\t

（4）如果换行，需要加逗号；




## 添加右键vscode打开

![image](https://notecdn.hrhe.cn/images/VScode使用技巧-01.png)

1. 新建1.reg（一样要是reg后缀）
2. 找到VsCode安装目录，替换即可
```bash
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\VSCode]
@="Open with Code"
"Icon"="D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\*\shell\VSCode\command]
@="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\" \"%1\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\shell\VSCode]
@="Open with Code"
"Icon"="D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
@="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\" \"%V\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
@="Open with Code"
"Icon"="D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
@="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\" \"%V\""
```
Cmder添加右键： 

打开Cmder，使用管理员执行此代码：`Cmder.exe /REGISTER ALL`



## vscode 使用bash终端

将下面代码加入到vscode设置json里面，找到自己的git地址；

```json
"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe", // 添加默认终端工具
```





## Vs code格式化处理方案

1. 安装插件

（1）`ESlint`：javascript代码检测工具，可以配置每次保存时格式化

（2）`vetur`：可以格式化html、标准css，标准js（有分号、双引号那种）、vue文件

（3）`Prettier-code formatter`：只关注格式化，没有eslint检查语法能力

（4）`Manta's Stylus Supremacy`：格式化stylus插件（不用就不装），因为vetur会把css格式化有分号、大括号那种，此插件可以格式化成stylus风格

2. 配置vscode，在文件 -> 首选项 -> 设置，点击右上角的打开json
```json
{
     // vscode默认启用了根据文件类型自动设置tabsize的选项
    "editor.detectIndentation": false,
    // 重新设定tabsize
    "editor.tabSize": 2,
    // 每次保存的时候自动格式化
    "editor.formatOnSave": true,
    // #每次保存的时候将代码按eslint格式进行修复
    "eslint.autoFixOnSave": true,
    // tslint保存修复
    "tslint.autoFixOnSave": true,
    // 让prettier使用eslint的代码格式进行校验
    "prettier.eslintIntegration": true,
    // 去掉代码结尾的分号
    "prettier.semi": false,
    // 使用带引号替代双引号
    "prettier.singleQuote": true,
    // 让函数(名)和后面的括号之间加个空格
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    // 这个按用户自身习惯选择
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    // 让vue中的js按编辑器自带的ts格式进行格式化
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_attributes": "force-aligned"
            // vue组件中html代码格式化样式
        }
    },
    // 格式化stylus, 需安装Manta's Stylus Supremacy插件
    "stylusSupremacy.insertColons": false, // 是否插入冒号
    "stylusSupremacy.insertSemicolons": false, // 是否插入分号
    "stylusSupremacy.insertBraces": false, // 是否插入大括号
    "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
    "stylusSupremacy.insertNewLineAroundBlocks": false // 两个选择器中是否换行
}
```



## 解决'-'分隔符不能双击选中

添加到setting中；

```json
"editor.wordSeparators": "`~!@#$%^&*()=+[{]}\\|;:'\",.<>/?"
```



## CRLF 转 LF方便处理

1、vscode安装[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
2、项目根目录下创建`.editorconfig`，并写入内容如下：

```bash
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```
3、之后文件打开按ctrl+s即可



## 配置path autocomplete插件

配置该插件必须安装插件：path autocomplete

可以自动补齐引入目录，当使用项目别名引入文件时，也可以自动补齐了，也可以专门针对项目设置，添加到项目.vscode/setting.json文件里
```json
"path-autocomplete.pathMappings": {
    "@": "${folder}/src",
},
```



## VsCode直接使用debugger

1. 场景：在浏览器debugger时，当查看到某个文件的错误时，需要修改文件，就得到编辑器里面找到该文件，比较鸡肋，现在使用vscode的debugger时，则是直接往文件里面跳转，可以直接方便的进行修改

2. 好处：在编辑器里面直接调试，也可以明显的显示每个变量当前值，更方便操作

3. 安装软件：Debugger for Chrome插件

4. 配置vscode  debugger
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome", // 使用chrome进行调试,会打开浏览器,操作到断点位置会跳转到断点文件
      "request": "launch",
      "name": "Chrome项目调试", // 会直接出现在第二步里提供选择
      "url": "http://localhost:3006", // 打开的网址,端口和要调试的项目端口一致
      "webRoot": "${workspaceFolder}/src", // chrome插件带的,指定根目录或者执行文件
      "skipFiles": ["node_modules"] // 跳过node_modules文件不进入源码断点
    },
    {
      "type": "node", // 调试js文件,不需要打开浏览器直接进行调试
      "request": "launch",
      "name": "node脚本调试",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${file}", // 打开当前的js文件进行调试
    }
  ]
}
```

![image](https://notecdn.hrhe.cn/images/VScode使用技巧-02.png)



**launch.json会用到的预定变量：**

* ${workspaceRoot}：VSCode中打开文件夹的路径
* ${workspaceRootFolderName}：VSCode中打开文件夹的路径, 但不包含"/"
* ${file} ：当前打开的文件
* ${relativeFile}：当前打开的文件,相对于workspaceRoot
* ${fileBasename} ：当前打开文件的文件名, 不含扩展名
* ${fileDirname} ：当前打开文件的目录名
* ${fileExtname}：当前打开文件的扩展名
* ${cwd} ：当前启动时的工作目录



5. 项目断点

可以直接在文件右侧点击红色小点，也可以直接填写debugger，打完断点就可以按f5开始了，操作和chrome的断点操作是一样的；

![image](https://notecdn.hrhe.cn/images/VScode使用技巧-03.png)



## 命令行操作

安装之后可以在cmd终端使用code命令，常用命令如下：

code ./   以当前目录在vscode中打开

code      文件名   快速开始当前该文件编辑，如果是新文件按ctrl+s自动保存在目录上；