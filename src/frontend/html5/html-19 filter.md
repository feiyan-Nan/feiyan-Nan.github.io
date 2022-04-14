# html-19 filter

## 一、filter

>  filter属性定义了元素的可视效果，比如：模糊与饱和度，通常给img标签设置

### css 语法

```css
filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();
```



### 参数介绍

* `none`：没有效果

* `blur(px)`：设置高斯模糊

* `brightness(%)`：让图像更明亮或更暗淡

* `drop-shadow()`：图片设置阴影效果

  ```css
  img {
      -webkit-filter: drop-shadow(8px 8px 10px red); /* Chrome, Safari, Opera */
      filter: drop-shadow(8px 8px 10px red);
  }
  ```

* `contrast(%)`：对比度，0的话图像全黑，1的话图像不变

* `grayscale(%)`：灰度图像，1为完全转换灰度图像，0为无变化；

* `hue-rotate(deg)`：改变图像的整体色调，0deg为图像无变化，超过360deg绕一圈；

* `invert(%)`：反转输入图像，1为完全反转，默认为0

* `opacity(%)`：转化图像的透明程度

* `saturate(%)`：饱和度，0为完全不饱和，1无变化

* `sepia(%)`：转换为深褐色，1为深褐色，0无变化

* `url()`：接受一个xml文件，该文件设置svg滤镜，且包含一个具体的滤镜元素

  ```css
  filter: url(svg-url#element-id)
  ```

* `initial`：默认值

* `inherit`：继承



### 复合函数

使用多个滤镜，每个滤镜使用空格分隔

**注意:** 顺序是非常重要的 (例如使用 grayscale() 后再使用 sepia()将产生一个完整的灰度图片)。

```css
img {
    -webkit-filter: contrast(200%) brightness(150%);  /* Chrome, Safari, Opera */
    filter: contrast(200%) brightness(150%);
}
```



### 使用场景

* 一般在图片鼠标划过之后增加亮度，使用`brightness`函数
* 将页面整体置灰，使用`grayscale`函数；



### backdrop-filter

> 可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。 因为它适用于元素*背后*的所有元素，为了看到效果，必须使元素或其背景至少部分透明。

用法同filter；

