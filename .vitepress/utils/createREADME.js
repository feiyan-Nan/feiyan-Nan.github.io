const path = require('path')
const fs = require('fs')
const globalConfig = require('../../scripts/globalConfig');

const resolve = (...arg) => {
  return path.resolve(__dirname, ...arg)
}

// 获取当前的所有路径
function createREADME(dirname, name){
  let curDir = fs.readdirSync(resolve(globalConfig.rootDir, name, dirname))
  curDir = curDir.filter(file => file.search(/(?<!index)\.md$/) !== -1)
  // 将空格统一替换成20%, 并作为地址

  // 获取地址名字, 由于多个空格会多个20%, 因此先替换一下
  let hrefNameArr = curDir.map(item => item.replace(/^\w+-\d+\s+/, ''))
  let hrefArr = curDir.map(item => item.replace(/\s/g, '%20'))

  // 标题项
  const arr = ['一、', '二、', '三、', '四、', '五、', '六、', '七、', '八、', '九、', '十、', '十一、', '十二、', '十三、', '十四、', '十五、', '十六、', '十七、', '十八、', '十九、', '二十、', '二十一、', '二十二、', '二十三、', '二十四、', '二十五、', '二十六、', '二十七、', '二十八、']

  // 添加官方文档
  const website = {
    'mini-programe': '[微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)',
    'es6': '[ES6 入门教程](https://es6.ruanyifeng.com/)',
    'jquery': '[jQuery API](http://jquery.cuishifeng.cn/index.html)',
    'node': '[node API文档](http://nodejs.cn/api/)',
    'react': '[React中文文档](https://zh-hans.reactjs.org/)',
    'vue': '[Vue官方文档](https://cn.vuejs.org/v2/guide/)',
    'react-native': '[React-Native中文文档](https://reactnative.cn/)',
    'typescript': '[TypeScript中文网](https://www.tslang.cn/)',
    'webpack': '[webpack中文文档](https://www.webpackjs.com/)'
  }

  let word  = website[dirname.toLowerCase()]
  let str = '## 目录\r\r' + (word ? `官方文档：${word}\r\r` : '')

  // 添加目录
  hrefArr.forEach((_, index) => {
    str+= `[${arr[index] + path.basename(hrefNameArr[index], '.md')}](${hrefArr[index]})\r\r`
  })

  // // 添加评论区域
  // str+= `<Vssue title="${dirname}" />\r`

  // 写入文件
  fs.writeFileSync(resolve(globalConfig.rootDir, name, dirname, 'index.md'), str)
}


module.exports = function (name) {
  // 获取文件夹并创建README.md文件
  const webArr = fs.readdirSync(resolve(globalConfig.rootDir, name))
  webArr.forEach(item => createREADME(item, name))
}
