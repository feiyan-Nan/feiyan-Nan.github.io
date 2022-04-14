图片记得加前缀：https://notecdn.hrhe.cn
坚果云忽略同步文件地址：C:\Users\hny\AppData\Roaming\Nutstore\db

vitepress目前中文文件名打包会出问题，可以修改下：
node_modules/vitepress/dist/client/app/utils.js
增加第12行：pagePath = decodeURIComponent(pagePath)