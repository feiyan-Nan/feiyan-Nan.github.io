# js-17 拖拽API、文件上传、下载
## 一、文件对象-FileReader读取文件

1. 回调方法：

`onload`：文件读取完成

`onabort`：中断时触发

`onerror`：出错时触发

`onloadstart`：文件上传开始

`onloadend`：读取结束时，不论成功或失败

`onprogress`：读取中

2. 读取操作：传入参数是file对象；

`readAsArrayBuffer`

`readAsDataURL`：从文件读取URL数据

`readAsBinaryString`：将文件读取为二进制码

`readAsText`：从文件读取字符串

`abort()`：终止读取操作

```js
// 读取图片并显示到页面上
files.addEventListener('change', function (e) {
    const { files } = event.target
    var fr = new FileReader()
    fr.readAsDataURL(files[0])
    fr.onload = function (e) {
        console.log(fr.result) // 拿到图片的base64
    }
}, false)

// 读取大文件并显示进度
files.addEventListener('change', function (e) {
    const { files } = event.target
    for (let file of files) {
        var fr = new FileReader()
        fr.onprogress = function (e) {
            // lengthComputable表示过程是否可以测量,需要进行判断
            if(!e.lengthComputable) return
            // 四舍五入计算百分比
            let percent = Math.round((e.loaded / e.total) * 100)
            console.log(`${file.name},progress is ${percent}%`)
        }
        fr.readAsArrayBuffer(file)
    }
}, false)
```
3. 大文件分片读取

由于file是blob的一个特例，blob上有一个slice方法，和字符串slice方法一样用法

写好hello world内容的txt文件，截取hello五个字符，代码中每个英文字母占1个字节，通过file.size可以获取到所有的字节
```js
files.onchange = function (e) {
  let {files} = e.target
  let blob = files[0].slice(0, 5);
  let fr = new FileReader();
  fr.onload = e => {
    console.log(e.target.result)
  }
  console.log(blob)
  fr.readAsText(blob)
}
```



## 二、接收input上传事件

1. 使用input标签的type类型为file；

```js
<input type='file' id='files' multiple />

// 判断兼容
if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
  throw new Error("当前浏览器对FileAPI的支持不完善");
}
```

2. 监听文件的选择，选择文件之后会触发change事件，input事件file保存在event.target.files对象里面，是一个伪数组；

```js
files.addEventListener('change', function (e) {
    const { files } = event.target
    console.log('上传的文件是', files)
}, false)
```

3. 由于没有使用form表单，上传的事件是需要创建一个formData事件，并将文件添加进去，就可以发送到后端了；
   注意：使用formdata上传后台不需要

```js
let fd = new FormData()
fd.append('files', file)
// 将fd对象发送给后端就可以了
```

4. 获取formData的值

方法一：可以直接使用`[...formdata]`可以获取到二维数组，查看formdata的值;

方法二：使用`formdata.keys()`返回一个iterator对象, 并使用for of循环遍历就可以了

使用formData里面的getAll或get方法获取, get获取的是一个，getAll获取全部

```js
let arr = fd.keys()
for(var props of arr){
    fd.getAll(props)
}
```

5. formData添加数组

直接将数组放进formData里面将会是[object ..]，需要循环添加

```js
let arr = [1,2]
let fd = new FormData()
arr.forEach(i => {
    fd.append('arr', i)
})
```



### 拖拽上传

对于input标签，监听onchange事件，存在e.target.files上面；

对于拖拽事件，fileList存放在拖拽事件的回调函数e.dataTransfer.files上面
```js
// 使得drop事件可以触发
document.ondragover = e => e.preventDefault();
// 防止新窗口打开或下载
document.ondrop = e => e.preventDefault();
// 监听指定区域文件拖拽
div.ondrop = e => {
  let {files} = e.dataTransfer
  let fr = new FileReader();
  fr.readAsDataURL(files[0])
  fr.onload = e => {
    div.style.backgroundImage = `url(${fr.result})`
  }
}
```



### 粘贴上传

```js
<input id='upload' type='text' />
upload.addEventListener('paste', function(e){
    // 需要直接取到files才能读取到
    var files = e.clipboardData.files
})
```



### 文件切片

blob对象也支持slice方法，可以使用slice方法进行切片

```js
/**
* file 需要切片的文件
* chunkSize 每个切片大小
*/
function createFileChunk(file, chunkSize = 10 * 1024 * 1024) {
  // 创建数组保留切片数组
  const fileChunkList = []
  let cur = 0 // 切片当前数据
  let i = 0 // 下标
  while (cur < file.size) {
    fileChunkList.push({
      chunk: file.slice(cur, cur + chunkSize),
      hash: file.name + '-' + i,
      index: i,
      percentage: 0
    })
    cur += chunkSize
    i++
  }
  // 返回最后切片的数组
  return fileChunkList
}
```



### 切片上传

```js
async function uploadChunks(file, fileChunkList) {
  // 创建Promise数组进行切片上传
  const requestList = fileChunkList
    .map(({ chunk, hash, fileHash }) => {
      const formData = new FormData()
      formData.append('chunk', chunk)
      formData.append('hash', hash)
      formData.append('filename', file.name)
      formData.append('fileHash', fileHash)
      return { formData }
    })
  	// request封装的请求方法
    .map(async ({ formData }, index) => request({
      url: `${baseURL}msg/upload`,
      data: formData,
      // 显示进度函数
      onProgress: createProgressHandler(fileChunkList[index], file, fileChunkList)
    })
    )
  // 上传
  await Promise.all(requestList)
  // 上传完成发送合并请求
  await mergeRequest(file.name, setIsSelectFile, socket)
}
```



### 断点续传

断点续传的原理在于前端/服务端需要`记住`已上传的切片，这样下次上传就可以跳过之前已上传的部分，有两种方案实现记忆的功能

- 前端使用 localStorage 记录已上传的切片 hash
- 服务端保存已上传的切片 hash，前端每次上传前向服务端获取已上传的切片

第一种是前端的解决方案，第二种是服务端，而前端方案有一个缺陷，如果换了个浏览器就失去了记忆的效果，所以这里选取后者



### 通过blob获取url地址

URL.createObjectURL   传入blob

```js
// 第一种
var obj_url = window.URL.createObjectURL(blob)
// 使用createObjectURL之后建议使用revokeObjectURL方法释放生成的文件url，解除浪费性能
window.URL.revokeObjectURL(obj_url)

// 第二种
let fr = new FileReader();
fr.readAsDataURL(files[0])
fr.onload = e => {
    let url = fr.result
}
```





### 文章地址

* [字节跳动面试官：请你实现一个大文件上传和断点续传](https://juejin.im/post/5dff8a26e51d4558105420ed)

* MDN：[在web应用程序中使用文件](https://developer.mozilla.org/zh-CN/docs/Web/API/File/Using_files_from_web_applications#Example.3A_Using_object_URLs_to_display_images)



## 三、好玩的blob对象

手工创建blob对象：

```js
var obj = {name: 'hhh'}
var blob = new Blob([JSON.stringify(obj)], {type: 'application/json'})
```

如果将blob放到HTTP请求发送给服务端，相当于向服务器发送了一个json文件



下面例子相当于创建了一个script标签，放到页面上

```js
const jsCode = 'console.log("hello")'
const blob = new Blob([jsCode], {type: 'text/javascript'})
const script = document.createElement('script')
script.src = URL.createObjectURL(blob)
document.body.appendChild(script)
```



动态引入模块

```html
<script type='module'>
	function importCode(code) {
        const blob = new Blob([code], {type: 'text/javascript'})
        return import(URL.createObjectURL(blob))
    }
    const code = `
		export default {
			foo: 'bar'
		}
	`
    importCode(code).then(m => {
        console.log(m.default)
    })
</script>
```

参考文章：[https://github.com/akira-cn/FE_You_dont_know/issues/12](https://github.com/akira-cn/FE_You_dont_know/issues/12)



## 四、拖拽API

1. 属性

`draggable`  将div设置为 draggable=true 可以被拖拽，img和a标签不加这个属性就可以拖拉，一般可以给这两个标签设置false；

```js
<div draggable='true'>此区域可拖拉</div>
```
2. 拖拽事件

（1）被拖动的元素事件

`dragstart`   开始拖动时触发

`drag`   拖动过程中持续触发

`dragend`  拖动结束触发

（2）目标元素事件

`dragenter`   进入目标时触发，该事件会冒泡，必须阻止冒泡和默认行为；

`dragover`   在目标区域拖拽持续触发，若想被拖拉的节点放进来，必须阻止默认动作 event.preventDefault()，防止拖拉效果被重置；

`dragleave`  离开目标时触发

`drop`   释放目标时触发，在该节点阻止默认行为event.preventDefault()，比如：打开其他链接；


3. `dataTransfer`对象

（1）主要用来读写需要传递的数据

`e.dataTransfer.setData('传输名',传输对象)` 用于提交传输对象，可以在dragstart事件上面添加

`e.dataTransfer.getData('传输名')` 用于获取传输对象，可以在目标上面的ondrop事件添加

`e.dataTransfer.files` 获取被drop的外部文件



拖拽组件库：`react-dnd`



## 五、下载

1. 创建a标签，之后给a标签添加download属性；
```js
<a href='./1.docs' download='文件.docs' >下载</a>
```
注意：

如果是txt文件和img文件，则谷歌浏览器会直接打开，而不是下载

如果是服务器方式运行网页，文件在项目文件夹中，则无论是img还是txt都会直接进行下载操作

2. 配合后端下载也可以让后端给响应头添加：

   ```js
   header('Content-type: image/jpeg'); 
   header("Content-Disposition: attachment; filename='download.jpg'"); 
   ```

   

3. 后端下载链接如果提示非法下载office，需要修改content-type，

[https://blog.csdn.net/topc2000/article/details/79793057](https://blog.csdn.net/topc2000/article/details/79793057)



4. 前后端分离下载，前端自己处理下载

   * 流的形式：

     ```js
     function downLoad(blob) {
         let a = document.createElement('a')
         a.href = URL.createObjectURL(blob)
         a.download = true
         a.click()
         a = null;
     }
     ```

   * url 形式

     ```js
     function urlToBase64(url) {
         return new Promise(resolve => {
             let canvas = document.createElement('canvas')
             let ctx = canvas.getContext('2d')
             let img = new Image()
             img.setAttribute('crossOrigin', 'Anonymous')
             img.onload = () => {
                 ctx.width = img.width
                 ctx.height = img.height
                 ctx.drawImage(img, 0, 0)
                 let base64 = canvas.toDataURL('image/png')
                 resolve(base64)
                 canvas = null;
             }
             img.src = url;
         })
     }
     function base64ToFile(base64, fileName) {
         let arr = base64.split(',')
         let mime = arr[0].match(/:(.*?);/)[1]
         let bstr = atob(arr[1])
         let n = bstr.length
         let u8arr = new Uint8Array(n)
         while(n--) {
             u8arr[n] = bstr.charCodeAt(n)
         }
         return new File([u8arr], fileName, {type: mime})
     }
     ```

     

5. 解决浏览器直接打开下载问题（兼容IE）

```js
function doSave(value, name, type) {
  var blob
  name = name || ''
  if (typeof window.Blob == "function") {
    blob = new Blob([value], { type: type })
  } else {
    var BlobBuilder =
      window.BlobBuilder ||
      window.MozBlobBuilder ||
      window.WebKitBlobBuilder ||
      window.MSBlobBuilder
    var bb = new BlobBuilder()
    bb.append(value)
    blob = bb.getBlob(type)
  }
  var URL = window.URL || window.webkitURL
  var bloburl = URL.createObjectURL(blob)
  var anchor = document.createElement("a")
  if ("download" in anchor) {
    anchor.style.visibility = "hidden"
    anchor.href = bloburl
    anchor.download = name
    document.body.appendChild(anchor)
    var evt = document.createEvent("MouseEvents")
    evt.initEvent("click", true, true)
    anchor.dispatchEvent(evt)
    document.body.removeChild(anchor)
  } else if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, name)
  } else {
    window.location.href = bloburl
  }
}
```



6. 使用插件下载

   1. 安装`npm i -g file-saver`
   2. 引入下载

   ```js
   import { saveAs } from 'file-saver'
   saveAs(url, fileName)
   ```

   



## 六、复制

### 使用原生

```js
function copyText(text) {
  let textArea = document.createElement('textarea')
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
  // 复制成功
}
```



### 另一种方法

[https://github.com/feross/clipboard-copy](https://github.com/feross/clipboard-copy)

```js
function copyText(text) {
    var span = document.createElement('span')
    span.textContent = text
    document.body.appendChild(span)
    
    var selection = window.document.getSelection()
    var range = window.document.createRange()
    range.selectNode(span)
    
    selection.removeAllRanges()
    selection.addRange(range)
    window.document.execCommand('copy')
    
    document.body.removeChild(span)
}
```





### 使用插件

官网： [https://github.com/zenorocha/clipboard.js](https://github.com/zenorocha/clipboard.js)

安装：`npm i clipboard`

1. 使用方法
   （1）复制input标签里面的内容

```js
<input id='foo' value='hhhhhhh'/>
<button class='btn' data-clipboard-target='#foo'>点击复制</button>

//当创建实例时自动给绑定元素添加点击事件
new Clipboard('.btn')
```
（2）react例子，直接复制传入的内容，创建实例会绑定click事件，获取data-clipboard-text属性的值；
```js
import Clipboard from 'clipboard'
let clipboard = Clipboard('.li')

<li data-clipboard-text='这是复制的内容' className='li'>
```
（3）配置data-clipboard-action可以选择是剪切还是复制，copy是复制，cut为剪切，不写默认copy，仅对input和textarea起作用
```js
<input data-clipboard-action='cut' value='hhhhhhh' />
```
3. 事件，复制之后的回调函数
```js
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action); // 目标操作
    console.info('Text:', e.text); // 目标文本
    console.info('Trigger:', e.trigger); // 目标元素

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
```

4. 修改默认方法
```js
new ClipboardJS('.btn', {
    target: function(trigger) {
        return trigger.nextElementSibling; // 需要返回node
    },
    text: function(trigger) {
        return trigger.getAttribute('aria-label') // 需要返回string
    }
});
```
5. 如果是单页面应用，需要清理创建的事件，单页面需要写在生命周期触发
```js
var clipboard = new ClipboardJS('.btn');
clipboard.destroy();
```



## 七、图片压缩

一种方案：安装：npm install exif-js；
```js
// 图像压缩
import EXIF from 'exif-js'

// 获取图片信息
function getImageInfo(img, callback) {
  let Orientation = 1
  EXIF.getData(img, function () {
    Orientation = EXIF.getTag(this, 'Orientation');
    callback(Orientation)
  });
}

// 旋转画布
function rotate(ctx,Orientation){
  switch(Orientation){
    case 3:
      //旋转180度
      ctx.rotate(Math.PI)
      break;
    case 6:
      //旋转90度
      ctx.rotate(Math.PI/2)
      break;
    case 8:
      //旋转270度
      ctx.rotate(Math.PI*1.5)
      break;
    default:;
  }
}

// canvas 绘制图片
function drawImage(img, quality, Orientation, callback) {
  const { width, height } = img
  //生成canvas
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  
  if(Orientation===3||Orientation===6){
    canvas.width = height
    canvas.height = width
  } else{
    canvas.width = width
    canvas.height = height  
  }
  if(Orientation!==1){
    ctx.translate(canvas.width/2,canvas.width/2);
    rotate(ctx, Orientation)
    ctx.translate(-canvas.width/2,-canvas.width/2);
  }
  
  ctx.drawImage(img, 0, 0);
  // 图像质量
  if (!(quality && quality <= 1 && quality > 0)) {
    quality = 0.7
  }
  // quality值越小，所绘制出的图像越模糊
  canvas.toBlob(callback, "image/jpeg", quality);
}

// 图片渲染
function canvasDataURL(file, quality = 0.7, callback) {
  var img = new Image();
  img.src = window.URL.createObjectURL(file);


  img.onload = function () {
    getImageInfo(img, Orientation => {
      drawImage(img, quality, Orientation, callback)
    })
  };
}

function compressionImg(file, callback) {
  let newFile = null
  canvasDataURL(file, 0.7, blob => {
    // 处理后的file
    newFile = new File([blob], file.name, { type: blob.type })
    if (!newFile || newFile.size > file.size) {
      newFile = file
    }
    callback(newFile)
  });
}

export default compressionImg;
```
2. 二种方案

github地址： [https://github.com/WangYuLue/image-conversion](https://github.com/WangYuLue/image-conversion)（支持按照指定kb来压缩，也支持按照质量压缩）



## 八、图片预览插件

教程： [https://www.cnblogs.com/Jimc/p/10132177.html](https://www.cnblogs.com/Jimc/p/10132177.html)

官网： [https://github.com/fengyuanchen/viewerjs](https://github.com/fengyuanchen/viewerjs)



## 九、h5唤起客户端

地址：[https://github.com/suanmei/callapp-lib](https://github.com/suanmei/callapp-lib)

