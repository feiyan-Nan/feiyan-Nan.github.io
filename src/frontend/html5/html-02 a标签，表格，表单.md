# html-02 a标签，表格，表单
## 一、a标签

1. a标签表示链接，是内联标签(行内标签)。

2. 默认有下划线，未访问的时候文字颜色是蓝色，访问以后是蓝紫色

3. href属性里面放具体路径,可以放绝对路径,可以放相对路径。

4. target=“_blank”在新建标签中打开页面。

5. `<base target="_blank" />`
ba se标签，是一个单标签，直接在head头部填写，当前html文件所有a标签新窗口打开。

6. target="_self" 在当前标签中打开页面。

5. 跳转到当前页面的指定位置：在指定位置设置id名，href属性里面设置#id名。

6. 跳转到另一个页面的指定位置：在另一个页面指定位置设置id名，当前页面href设置另一个页面的路径#id名。

7. 下载文件：在href属性直接写入文件路径；






## 二、表格
1. table标签表示表格，tr标签表示行，td标签表示单元格，

th标签表示单元格标题，th标签默认居中加粗。

2. 设置表格的边框，在table标签的开始标签里面设置border="1";（不写的话表格无边框）

在css里给每个单元格设置边框

border：1px solid black; 1边框宽度，实线的，黑色边框

3. 单元格与单元格之间的距离：在table的开始标签里设置`cellspacing="0"`;

单元格的边框与内容之间的距离：在table开始标签设置`cellpadding="0"`;

4. 给表格设置宽高：在css里面给table设置width和height。

表格边框合并一条线：css里面加：`border-collapse:collapse`;

5. 改变其中一个单元格的宽度，可以改变一列的宽度。合并列：`colspan="2"`;

改变其中一个单元格的高度，可以改变一行的高度。合并行：`rowspan="3"`;

6. 表格的标题用caption，是table标签的子元素，写在table下面。

7. thead标签，表格的头部，tbody标签，表格的主体，tfoot标签，表格的脚注。

加上可以让表格的语义化更强。





## 三、表单

表单的目的是收集用户信息。

表单一般由三部分组成：

1. 表单控件(表单元素)，
2. 提示信息，
3. 表单域(form)，


1. form标签定义表单

`<form action="" method="POST/GET">`

action=""，表单提交到什么位置，里面写相对路径和绝对路径。

method="POST/GET"，表单提交方式，

GET相对不安全，有长度限制，POST相对安全，长度不受限制。



2. input标签，内联块标签(行内块标签)。


| 属性 | 属性值 | 描述 |
| --- | --- | --- |
| type | text | 单行文本输入框 |
| | password | 密码输入框 |
| | radio | 单选按钮 |
| | checkbox | 复选框 |
| | button | 普通按钮（启动js程序） |
| | submit | 提交按钮 |
| | reset | 重置按钮 |
| | image | 图像形式提交按钮 |
| | file | 上传文件 |
| name | 由用户自定义 | 控件的名称 |
| value | 由用户自定义 | input控件中的默认文本值 |
| size | 正整数 | input控件在页面中显示的宽度 |
| checked | checked | 定义选择控件默认被选中的项 |
| maxlength | 正整数 | 控件允许输入最多字符数 |


2. label标签：label标签为input元素定义标注。

   作用：点击文字也能选中对应的表单。

   绑定方法：for属性对应表单id。

```html
<label for="male">Male</label>
<input type="radio" name="sex" id="male" value="male">
```

简单的写法： //直接label标签包裹input标签，也能选中文字选择对应的选框。
```html
<label>
    用户名：<input type="text" name="sex" value="male"> 
</label>
```

3. value属性，默认值，改变名字。

4. placeholder，属性 输入框提示内容（h5新增属性）；用在input属性里面。

   需要修改placeholder的颜色，可以用::双冒号选中placeholder；

5. checked，属性，用在单选框和复选框里，默认选中值，

   checked="checked" 成对直接写一个单词

6. readonly，属性，只读，用户不可以编辑，用于文本框，可以提交数据

   disabled ，属性，禁用，用户不可以编辑，用于文本框，也不可以提交数据，默认背景灰色。

7. select标签和option标签配合使用。select是父元素，option是子元素。

   下拉框默认选中，selected，，，size="" 下拉框默认显示几项

   增加：hidden 隐藏表单，在提交到后台时，也能够提交，

8. textarea标签(不加在input里,是单独的标签)，文本域。是内联块标签(行内标签)，可以输入多行文字。

   想要给文本域设置宽高，在css中设置，

   默认用户可以自行缩放，禁止缩放在css中设置resize:none;

   `<textarea name="" id=""></textarea>`

   textarea痛点：不能自适应高度，如果需要自适应高度可以创建一个div标签，并设置contenteditable属性；


注意事项：

使用form表单时必须填写form标签，action和method也填写，当填写了之后输入栏就有值了，text文本框时需要输入提交name名字，否则无法提交数据；

使用小方法：

一般表单用dl、dt、dd用来布局，

dt表示项目，dd表示输入框




## 面试题
● 如何合并表格单元格？

● thead、tbody、tfoot有什么作用？

● 常见表单元素有哪些？


