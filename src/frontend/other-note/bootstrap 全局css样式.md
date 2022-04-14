# bootstrap 全局css样式
## 一、开始引入
bootstrap是移动设备优先；
```html
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>


<!-- ie9兼容（直接将页面拖到浏览器不起作用） -->
<!--[if lt IE 9]>
<script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
<![endif]-->


<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
```

## 二、布局容器
固定宽度：container

100%宽度：container-fluid；


## 三、栅格系统
1. 原理

行(row)：必须放在容器container中，才能设置排列（aligment）和内补padding；

行的直接子元素只能放列（column）；

列间隔：设置col的padding属性；（padding需要除2，因为两边都有）；

给row设置负margin值抵消container元素的padding； 也就间接为“行（row）”所包含的“列（column）”抵消掉了padding。

栅格系统列包含12个值，三个等宽：.col-xs-4；如果大于12，多余的列会另一起行；


2. 栅格参数

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-01.png)

超小屏幕(<768px)：手机，col-xs

小屏幕(>=768px)：平板，col-sm

中等屏幕(>=992px)：桌面，col-md

大屏幕(>=1200px)：大桌面，col-lg



3. 可用的显示隐藏

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-02.png)

可用的属性：block，inline，inline-block；

打印机可用的：

visible-print-*    浏览器隐藏，打印机可见；

hidden-print      浏览器可见，打印机隐藏；


4. 列偏移

col-\*-offset-\*，向右侧偏移，可以实现居中；

实例：col-xs-offset-3     col-sm-offset-0；

因为在xs屏幕以上都是向右偏移了3格，所以需要设置sm向右偏移0；


5. 列嵌套
在col里面添加row，则里面的row的12比较最大宽度也是该col的宽；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-03.png)

6. 列排序
col-\*-push-\*：向右去多个列；

col-\*-pull-\*：向左去多个列；



## 四、排版
1. 页面主体

全局font-size为14px，line-height为1.428；所有段落元素；

p、li标签(段落)：设置了10px的底部margin；

2. 标题：

（1）可以使用.h1-h6的类，等同于h1-h6；

（2）`<small>`标签被h标签包裹，作为h标签的副标题；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-04.png)

3. 中心内容

p标签可以添加一个.lead，突出文本显示，普通的p标签和带lead的标签：

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-05.png)

4. 可以使用的标签

del、s、ins、u、small，在bootstrap可以放心使用b、i标签；

5. 文本对齐

左对齐：.text-left

居中对齐：.text-center

右对齐：.text-right

6. 改变大小写

小写：.text-lowercase

大写：.text-uppercase

首字母大写：.text-capitalize

7. 缩略语

使用abbr标签，需要写title属性；地址可以使用address标签

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-06.png)

8. 引用样式

（1）使用`<blockquote>`标签，会多一个竖线；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-07.png)

（2）引用来源，在blockquote标签内，添加footer标明引用来源，来源名包进cite标签；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-08.png)

```html
<blockquote>
    <p>标签的引用</p>
    <footer>来自于<cite>bootstrap</cite></footer>
</blockquote>
```
（3）给blockquote标签添加.blockquote-reverse类，可以右对齐；

9. 列表

（1）去掉样式：.list-unstyled；添加到ul；

（2）在一行显示：.list-inline；添加到ul，默认有左右marign:5px；

（3）给dl添加.dl-horizontal类，可以将其描述排在一行；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-09.png)


10. 内联代码

（1）使用`<code>`标签包裹代码片段，自带样式，

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-10.png)

（2）用户输入，使用`<kbd>`标签

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-11.png)

（3）代码块：`<pre>`标签；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-12.png)

（4）程序输出

使用samp标签，和普通p标签的对比：

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-13.png)


## 五、表格
1. 给表格添加类：.table；基本样式：

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-14.png)
2. 条纹状表格：.table-striped类；会给tbody添加条纹；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-15.png)
3. 带边框的表格：.table-bordered；每个单元格都增加边框；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-16.png)
4. 鼠标移动到行悬停：.table-hover；滑过每一行都会变色，不建议搭配条纹使用；
5. 紧缩表格：.table-condensed；可以更紧凑，padding会减半；
6. 状态类的行：给tr添加类名.active、.success、.info、.warning、.danger
7. 响应式表格：.table-responsive div标签命名，当在xs屏幕下，水平滚动条将在内部
8. 表格垂直居中：    水平居中可以为td、th设置text-align:center；
```css
.table tbody tr td{
    vertical-align: middle;
}
```

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-17.png)
总结：
1. .table 加上边框
2. .table-striped 加条纹
3. .table-bordered 增加边框
4. .table-hover 滑过变色
5. .table-condensed padding减半
6. .active、.success、.info、.warning、.danger 给tr添加类名，整行变色；
7. .table-responsive 响应式表格;


## 六、表单
1. 内联表单：form-inline，水平表单：form-horizontal（需要栅格布局）

1. 表单组：`<div class='form-group'>`

2. 表单需要给input添加类名：.form-control；设置了这个类名，宽度就是100%；

3. 表单布局：将表单组放在form里，表单组第一个子元素是label标签，需要和input的id绑定；
```html
<form>
    <div class="form-group">
        <label for="users">Username</label>
        <input type="text" name="" id="users" class="form-control">
    </div>
</form>
```
4. 内联表单

（1）将表单在一行显示，需要给form标签添加.form-inline类；如果是屏幕小于xs，会自动变为一行；

（2）内联表单的宽度是auto；内联表单必须添加label标签；如果不设置，屏幕阅读器无法识别；
```html
<div class='form-inline'>
    <label>Id:
    <input type='text' class='form-control'>
    </label>
    <label>姓名:
    <input type='text' class='form-control'>
    </label>
</div>
```

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-18.png)



（3）水平排列表单：

       给form添加.form-horizontal类，并联合使用栅格布局，label标签设置col-sm-2类，需要再添加control-label类，可以省略row，input需要再来一个div包裹，添加col-sm-10；

checked添加了列偏移；checked需要包裹一个div类名为checked的标签；

```html
<form action="" class="form-horizontal">
    <div class="form-group">  //普通文本框
        <label for="textIn" class="col-xs-2 control-label">姓名：</label>
        <div class="col-xs-10">
            <input type="text" id="textIn" class="form-control">
        </div>
    </div>
    <div class="form-group">   //复选框需要偏移;
        <div class="col-xs-offset-2 col-xs-10">
            <div class="checkbox">
                <label>
                    <input type="checkbox">Remember me
                </label>
            </div>
        </div>
    </div>
</form>
```
![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-19.png)


（4）button添加类btn和样式，添加type='submit'，需要对齐就得被form-group组包裹；
```html
<button type='submit' class='btn btn-default'>
<textarea class='form-control' rows='3'></textarea>
```

5. 输入框组控件

（1）为.input-group赋予.input-group-addon或.input-group-btn类，可以给.form-control的前面或后面添加额外的元素；

注：仅支持input，不支持select和textarea；
```html
<div class="form-group">
    <div class="input-group">
        <label for="cash" class="sr-only"></label>
        <span class="input-group-addon">$</span>
        <input type="text" name="" id="cash" class="form-control" placeholder="money">
        <span class="input-group-addon">.00</span>
    </div>
</div>
```
![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-20.png)

（2）控制大小，给input-group再添加相应的类名，input-group-lg/sm；输入框会自动变大；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-21.png)

（3）添加额外元素多选和单选

将多选单选输入框添加到input-group-addon类名标签里，给多选和文本框同时添加aria-label='...'，多选单选不需要添加form-control类；
```html
<div class="input-group">
    <span class="input-group-addon">
        <input type="checkbox" aria-label='...'>
    </span>
    <input type="text" aria-label='...' class="form-control">
</div>
```
![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-22.png)

（4）作为额外元素的按钮
```html
<div class="input-group">
    <input type="text" class="form-control">
    <span class="input-group-btn">
        <button class="btn btn-default" type="button">GO!</button>
    </span>
</div>
```
![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-23.png)

（5）作为额外元素的按钮式下拉菜单
```html
<div class="input-group">
      <div class="input-group-btn">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action <span class="caret"></span></button>
        <ul class="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </div><!-- /btn-group -->
      <input type="text" class="form-control" aria-label="...">
</div><!-- /input-group -->
```
![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-24.png)

（6）分裂式的按钮
```html
<div class="input-group">
    <div class="input-group-btn">
        <button type="button" class="btn btn-default">Action</button>
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <span class="caret"></span>
            <span class="sr-only">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
        </ul>
    </div>
    <input type="text" class="form-control" aria-label="Text input with segmented button dropdown">
</div>
```
![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-25.png)

6. 选择框

（1）多选和单选，需要给父元素的div标签添加checkbox、radio；如果是禁用的，也需要给父元素添加disabled；如果没有div父级元素，会导致布局出错；
```html
<div class="checkbox disabled">
    <label for="">
        <input type="checkbox" name="" id="" disabled>
    </label>
</div>
```
![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-26.png)

（2）内联单选和多选框；

给label标签添加类，.checkbox-inline或.radio-inline；可以在一行显示；
```html
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
</label>
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
</label>
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
</label>
```
![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-27.png)


7. 下拉列表：给select添加.form-control；
```html
<select class="form-control">
  <option>1</option>
  <option>2</option>
</select>
```
![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-28.png)

8. 静态控件：将input标签替换p标签，添加.form-control-static类
```html
<div class="form-group">
    <label class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <p class="form-control-static">email@example.com</p>
    </div>
</div>
```
![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-29.png)

9. 帮助文本，可以对照帮助文本输入内容；

给input标签添加属性aria-describedby='helpBlock'，这个helpBlock任意取名，在提示文本标签添加id名=这个属性，并添加类名help-block；
```html
<label for="inputHelpBlock">Input with help text</label>
<input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock">
<span id="helpBlock" class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
```

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-30.png)

10. 校验状态

（1）.has-warning、.has-error、.has-success类添加到父元素，任何包含在此元素之内的.control-label、.form-control、.help-block元素都会变色；

（2）添加校验的图标；图标只能添加到input上；

添加.has-feedback到父元素，给input同级元素的span添加类：glyphicon glyphicon-ok form-control-feedback；

成功：ok；

警告：warning-sign

清除：remove；

```html
<div class="form-group has-warning has-feedback">
    <label class="control-label" for="inputWarning2">Input with warning</label>
    <input type="text" class="form-control" id="inputWarning2">
    <span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
</div>
```
label标签的类：如果不填写会没有文字颜色，如果没有label标签，布局不完美；

input标签：aria-describedby是为了屏幕阅读器绑定提示；和最后面的span标签是一对的；

span标签：glyphicon（字体文件）    glyphicon-warning-sign警告图标    form-control-feedback排版 如不填写，会掉下来；

建议：强烈建议使用input需要添加label标签，如果不想label标签显示，可以添加sr-only类，不添加label标签需要额外调整图标的位置；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-31.png)


11. 输入框尺寸

给input框添加类：input-lg、input-sm；

给水平排列的表单组：添加form-group-lg或sm类，给表单组添加；

设置宽度可以包裹一个父元素；




## 七、按钮
1. 可使用的标签：a、button、submit；

注意：

（1）导航和导航条只支持button；

（2）a标签被作为按钮使用：如果不是跳转网页，而是触发功能，需要设置 role='button'；

（3）如果是屏幕阅读器的用户来说需要使用sr-only类隐藏的额外文本来表达；

2. 带有预定义样式的类：

使用按钮必须有btn类，另外一个是图标类：btn-default；btn-info

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-32.png)

3. 尺寸

可用的类：.btn-lg、.btn-sm、.btn-xs可以获得不同的尺寸；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-33.png)

.btn-block可以拉伸父元素的100%宽度；

4. 激活状态

button是用:active实现的，a标签是用.active实现的；也可以给button加类；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-34.png)

5. 禁用状态

button按钮直接设置disabled='disabled'，

a标签添加disabled类；



## 八、图片
1. 响应式图片

给图片添加类：.img-responsive，

图片水平居中：.center-block；

2. 图片形状：也可以直接给a标签添加类，在a标签添加img，会增加一个带链接的图片；

.img-rounded、.img-circle、.img-thumbnail

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-35.png)



## 九、辅助类
1. 文本颜色

.text-muted、.text-primary、.text-success、.text-info、.text-warning、.text-danger；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-36.png)

2. 情景背景

和文本颜色类一样，将text改为bg：bg-success；

3. 关闭按钮

```html
<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
```
4. 三角符号：添加类.caret；

![image](https://notecdn.hrhe.cn/images/bootstrap_全局css样式-37.png)

5. 快速浮动

左浮动：pull-left；

右浮动：pull-right；

注：不能用于导航条，导航条使用.navbar-left 或.navbar-right


6. 内容块居中：.center-block；
7. 清除浮动：.clearfix；
8. 显示或隐藏内容：.show、.hidden；隐藏还占位：.invisible；

9. 屏幕阅读器和键盘导航

（1）.sr-only可以对屏幕阅读器以外的设备隐藏内容，

（2）.sr-only和.sr-only-focusable联合使用的话可以在元素有焦点时显示出来；



## 十、使用插件
1. vscode下载插件：bootstrap 3 snippets
2. 使用插件中所有代码补齐都带前缀 bs3，可以输入bs3查看所有可用的快捷方式；
3. bs3-template：自动引入bootstrap和js文件；
