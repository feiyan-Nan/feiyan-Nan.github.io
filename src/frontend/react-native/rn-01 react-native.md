# RN-01 react-native
## 一、react-native开始工作
1. 在vscode里面进入设置，开启exspanion，使用时，输入单词，之后再按一下tab键，该方法支持所有html支持的方法；比如：view*3；
2. 在vscode里安装Babel ES6/ES7

## 二、在react-native中使用标签需要引入

```jsx
import React from 'react'
import {View,Text} from 'react-native'
export default class App extends React.Component{
    render(){
        return(<View></View>)
    }
}
```
在模板中导出有三种模式

（1）`export default class`  直接导出一个类

（2）`export default App`；

（3）`modules.exports = App`；




## 三、react-native中的行间样式

1. 引入：
```js
import {StyleSheet} from 'react-native'
```
2. 创建一个变量
```jsx
const styles = StyleSheet.create({
    colors:{color:'red',width:100}
})
// 使用时: 
<Text style={styles.colors}></Text>
```
3. 多个第行间样式，使用数组的形式；
```jsx
<View style={[styles.box,styles.box1]}></View>
```
4. 在react-native中，默认是flex布局，默认方向是纵向的，可以直接使用flex布局；

给元素设置flex:1，则默认占满剩余空间，如果是根节点，则是整个屏幕，可以给根节点设置flex:1，之后设置背景，则是整个屏幕的背景；

5. 在命名时组件使用大驼峰命名（首字母大写），变量命名小驼峰命名，在使用css样式时，不能使用中划线，需要使用驼峰命名

7. text有一个属性：numberOfLines={1}，指定显示多少行，超出则变点状；



## 四、注意事项

1. 字符串内容必须放在text组件里，不能写在view里，flex不建议放在text组件上面；
3. 如果给子元素设置flex属性时，那么它的父元素必须设置固定高度或者flex属性；
```jsx
import Header from './header'
return (<Header />)   //内容不要包裹view标签,否则header标签里面即使设置flex:1也没有高度;
```



## 五、事件

1. 传值；
```jsx
<Header data={arr} />
```
2. 点击事件
```jsx
<Header onPress={()=>alert('哈哈')}/>
```
3. 在react-native中，想查看数据有没有传送过来可以使用console.warn，没有log；



## 六、react-native中的css样式

在react-native中使用行间样式；

1. padding

paddingHorizontal：同时设置paddingleft/right

paddingVertical：同时设置paddingtop/bottom;

2. 设置样式不需要添加px；

3. 在给文字设置样式时，必须设置在text元素上；

4. 使用图片：引入Image组件，src变成了soure，需要填写require；
（1）加载本地：
```html
<Image soure={require(./img/1.png)}>
```
（2）加载网络：，必须设置宽高；
```js
soure={{uri:图片地址}}
````

5. 背景图组件：ImageBackground，设置图片地址和image组件一样，可以在组件里面填写Text组件；

6. ScrollView组件，滚动区域组件；内容是多高，则滚动区域有多高；

注意：react-native中，内容超过屏幕宽度是不能滚动的，需要加入该组件；



## 七、在运行react native下载慢时，添加以下代码

```json
maven{ url "http://maven.aliyun.com/nexus/content/groups/public/" }
```
![image](https://notecdn.hrhe.cn/images/rn-01_react-native-01.png)

![image](https://notecdn.hrhe.cn/images/rn-01_react-native-02.png)

![image](https://notecdn.hrhe.cn/images/rn-01_react-native-03.png)