# CSS常用布局

## h5首页布局

头部，内容，尾部

```html
<div class='parent'>
    <div class='header'></div>
    <div class='content'></div>
    <div class='footer'></div>
</div>
```

```css
.parent {
    padding-top: 50px;
    padding-bottom: 50px;
    overflow: hidden;
    height: 100vh;
    display: flex;
}
.header {
    position: fixed;
    top: 0;
}
.footer {
    position: fixed;
    bottom: 0;
}
.content {
    width: 100%;
    overflow-y: scroll;
}
```



## 三栏布局，中间自适应

### flex方案

```html
<div class='father'>
    <div class='left'></div>
    <div class='center'></div>
    <div class='right'></div>
</div>
```

```css
.father {
    display: flex;
}
.left, .right {
    flex-shrink: 0;
}
.center {
    flex: 1;
    overflow: hidden;
}
```



## 两栏等高布局


```html
<div class="demo">
  <div class="son son1">111</div>
  <div class="son son2">222</div>
</div>
```

```css
.son {
  float: left;
}
.demo {
  overflow: hidden;
}
.son1 {
  margin-bottom: -9999px;
  padding-bottom: 9999px;
  background: red;
  width: 200px;
  word-break: break-all;
}
.son2 {
  margin-bottom: -9999px;
  padding-bottom: 9999px;
  background: blue;
  width: 200px;
  word-break: break-all;
}
```



