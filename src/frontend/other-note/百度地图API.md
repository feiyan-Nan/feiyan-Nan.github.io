# 百度地图API
> 地址： [http://lbsyun.baidu.com/](http://lbsyun.baidu.com/);

## 基本使用
1. 设置meta

   可以在meta标签添加user-scalable=no

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">;
   ```

2. 引入script

   ```html
   <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=您的密钥"></script>
   ```

3. 创建container容器，需要起id名；并设置相应的宽高；

   ```html
   <div id="container"></div>
   ```

4. 基本配置;

   1. 创建map实例： `new BMap.Map('container'[,option]);`

      * 第一个参数为id名，获取显示元素
      * 第二个参数为对象：
         * 设置级别：`minZoom`:最小级别，`maxZoom`:最大级别；（设置之后将不允许用户缩放到最小最大的比例）；等级为3-19级；

    2. 初始化地图中心点：map.centerAndZoom(坐标|城市,等级)；

       * 如果是以坐标来设置中心点：需要实例化Point：`new BMap.Point(东经lng,北纬lat)`
       *  如果是以字符串表示的，不需要写等级，坐标表示必须写等级；

   3. 初始化地图;

      ```js
      var map = new BMap.Map("container");
      //配置地图显示中心点和缩放等级;   //以坐标显示;
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
      ```



## 鼠标放大

默认双击放大，默认是不支持鼠标滚轮放大的，
开启鼠标滚轮放大：map.enableScrollWheelZoom(true)；



## 添加多个控件

1. 添加控件使用map.addControl()；

   ```js
   map.addControl(new BMap.NavigationControl());  //平移缩放(左上)
   map.addControl(new BMap.ScaleControl());    //比例尺(左下)
   map.addControl(new BMap.OverviewMapControl());  //缩略地图(右下方，需要点击)
   map.addControl(new BMap.MapTypeControl({
           mapTypes:[
               BMAP_NORMAL_MAP,
               BMAP_HYBRID_MAP
           ]}));    //地图类型(有卫星地图支持)
   map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用，必须添加；
   ```

2. 移动地图控件的位置：

   初始化地图控件时，在小括号里添加一个对象，并设置anchor:值；

   ```js
   BMAP_ANCHOR_TOP_LEFT：左上角
   BMAP_ANCHOR_TOP_RIGHT：右上角
   BMAP_ANCHOR_BOTTOM_LEFT：左下角
   BMAP_ANCHOR_BOTTOM_RIGHT：右下角
   地图偏移：offset: new BMap.Size(x,y)
   ```

   

3. NavigationControl控件的控制： [http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/widget](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/widget)



## 隐藏一部分

如果想要隐藏地图中的某一部分，可以通过f12查询到，之后设置display:none;隐藏；



## 移动地图

```js
map.panTo(new BMap.Point(113.262232,23.154345));
```
可以加到定时器里面，规定什么时候开始移动；



## 缩放地图

```js
map.setZoom(14);   
```



## 地图的拖动：

```js
map.disableDragging();  // 禁止拖拽
map.enableDragging(); // 开启拖拽
```



## 自定义一个控件

1. 获取地图容器：map.getContainer();
2. 调用map.addControl()方法时，会调用该对象的initialize方法，所以自定义控件需要添加该方法；
3. 创建的自定义控件必须返回元素；
```js
function ZoomControl(){
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;  //设置默认停靠位置
    this.defaultOffset = new BMap.Size(10, 10);  //默认偏移量
}
ZoomControl.prototype = new BMap.Control();  //父类的实例赋值给子类的原型;

//创建initialize方法，并返回
ZoomControl.prototype.initialize = function(map){    
    var div = document.createElement("div");    
    div.innerHTML = '放大两级';    // 添加文字说明
    div.style = 'cursor:pointer;border:1px solid gray;background:red';  //设置元素样式；
    div.onclick = function(e){ //添加事件;
        map.zoomTo(map.getZoom() + 2); //+2表示点击一次放大两级; 
    }    
    map.getContainer().appendChild(div);   // 添加DOM元素到地图中  
    // 将DOM元素返回  
    return div;    
}

//添加控件
map.addControl(new ZoomControl());
```



## 使用编辑的样式

```js
map.setMapStyleV2({     
  styleId: '3d71dc5a4ce6222d3396801dee06622d'
});
```



## 自定义标注点

1. 标注点自定义图标：new BMap.Icon(url,size,[,option])：地址，大小创建图标对象；

options：anchor : size；左上角偏移值；

imageOffset : size；可视区域的偏移值；等同于background-position；

imageSize : size；图片的大小，等同于background-size；

```js
var marker = new BMap.Marker(point, {
    icon: new BMap.Icon('./2.png', new BMap.Size(86, 72), {
        imageSize: new BMap.Size(25, 25)
        })
    });
map.addOverlay(marker);
```

2. new BMap.Size(w,h)：没有单位，像素表示矩形区域的大小；



## 添加定位相关控件

1. 初始化NavigationControl控件，并添加`enableGeolocation: true`

   `map.addControl(new BMap.NavigationControl({enableGeolocation:true}))`

2. 添加定位事件

```js
var geolocationControl = new BMap.GeolocationControl();
geolocationControl.addEventListener("locationSuccess", function(e){
// 定位成功事件
var address = '';
address += e.addressComponent.province;
address += e.addressComponent.city;
address += e.addressComponent.district;
address += e.addressComponent.street;
address += e.addressComponent.streetNumber;
alert("当前定位地址为：" + address);
});
geolocationControl.addEventListener("locationError",function(e){
// 定位失败事件
alert(e.message);
});
map.addControl(geolocationControl);
```



## 获取定位



### 浏览器定位

```js
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(async function(r){
  if(this.getStatus() == BMAP_STATUS_SUCCESS){
    // 请求逆地理编码的全球接口, 获取cityCode和具体的位置, 需要下载ajax, 因为会跨域
    let url = `http://api.map.baidu.com/reverse_geocoding/v3/?ak=iYWapWxjHLXaLTCXcpRrGTCGpnhkvEuI&output=json&coordtype=wgs84ll&location=${r.point.lat},${r.point.lng}`
    $.ajax({
      dataType: 'jsonp',
      url,
      success(res){
        // 将地地图的中心点跳转到获取的经纬度
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        
        console.log(res, 'result')
        alert(res.result.formatted_address)
      }
    })
  }
  else {
    alert('failed'+this.getStatus());
  }        
});
```



### ip定位

```js
new BMap.LocalCity().get(result => {
    console.log(result)
})
```

