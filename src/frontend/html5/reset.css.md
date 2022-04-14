## normalize.css

[https://github.com/necolas/normalize.css](https://github.com/necolas/normalize.css)

比reset更兼容，reset是把默认样式替换掉，normalize仅修复一些样式bug，并保证各自浏览器的一致性；



# reset.css

网址：https://css-tricks.com/video-screencasts/174-using-local-overrides-in-devtools/
```css
@media screen and (prefers-reduced-motion:reduce) {
    * {
        -webkit-transition: 0s!important;
        transition: 0s!important
    }
}

*,::after,::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

a {
    text-decoration: none
}

article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary {
    display: block
}

audio,canvas,video {
    display: inline-block
}

audio:not([controls]) {
    display: none;
    height: 0
}

[hidden] {
    display: none
}

html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    margin: 0;
    padding: 0
}

body {
    margin: 0
}

dl,menu,ol,ul {
    margin: 0;
    list-style: none
}

dd {
    margin: 0
}

menu,ol,ul {
    padding: 0
}

nav ol,nav ul {
    list-style: none;
    list-style-image: none
}

img {
    border: 0;
    -ms-interpolation-mode: bicubic
}

figure {
    margin: 0
}

form {
    margin: 0
}

legend {
    border: 0;
    padding: 0;
    white-space: normal
}

button,input,select,textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline
}

button,input {
    line-height: normal
}

button,html input[type=button],input[type=reset],input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer
}

button[disabled],input[disabled] {
    cursor: default
}

input[type=checkbox],input[type=radio] {
    padding: 0
}

input[type=search] {
    -webkit-appearance: textfield
}

input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

button::-moz-focus-inner,input::-moz-focus-inner {
    border: 0;
    padding: 0
}

textarea {
    overflow: auto;
    vertical-align: top
}


// 自制，需要scss
@each $name,$prop in (p:padding,pt:padding-top,pr:padding-right,pb:padding-bottom,pl:padding-left){
  @for $i from 5 through 30 {
    .#{$name}#{$i}{
      #{$prop}: #{$i}px;
    }
  }
} // 更方便的使用间隔，如p10类名，padding：10px;

@each $name,$prop in (m:margin,mt:margin-top,mr:margin-right,mb:margin-bottom,ml:margin-left){
  @for $i from 5 through 30 {
    .#{$name}#{$i}{
      #{$prop}: #{$i}px;
    }
  }
}

// 居中类名
.dibvm:after {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.clearfix::after{
  display: block;
  visibility: hidden;
  clear: both;
  height: 0;
  content: '';
}

// 循环字体
.f0 {
  font-size: 0;
}

.f10 {
  transform: scale(0.8);
  transform-origin: left center;
  font-size: 12px;
}

@for $i from 12 through 24 {
  @if $i < 16 {
    .f#{$i} {
      font-size: #{$i}px; // 12. 13. 14. 15. 16px;
    }
  } @else if $i % 2 == 0 {
    .f#{$i} {
      font-size: #{$i}px;
    }
  }
}

.cp {
    cursor: pointer;
}
.usn {
    user-select: none;
}
```