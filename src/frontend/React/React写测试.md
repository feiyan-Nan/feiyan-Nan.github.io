# React写测试用例

在package.json文件里，查看react-script 脚本，在3.3之前的版本都需要手动安装测试库，下面是手动安装

```bash
npm install --save-dev @testing-library/react
```



jest官网：[https://jestjs.io/docs/zh-Hans/api](https://jestjs.io/docs/zh-Hans/api)

react测试库：[https://testing-library.com/docs/react-testing-library/intro](https://testing-library.com/docs/react-testing-library/intro)



## Example

```jsx
import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import Button from './Button'

const defualtProps = {
    onClick: jest.fn() // 假的事件
}

// describe代表一组测试用例
describe('test Button component', () => {
    // it是test的简写，一个it表示一个用例
    it('should render the correct default button', () => {
    	const wrapper = render(<Button {...defaultProps}>Nice</Button>)
        // 通过查找Nice找到节点
        const element = wrapper.getByText('Nice')
        // 验证是否在文档中
        expect(element).toBeInTheDocument()
        // 验证是否是button标签
        expect(element.tagName).toEqual('BUTTON')
        // 测试是否包含类名
        expect(element).toHaveClass('btn btn-default')
        // 点击该节点
        fireEvent.click(element)
        // 确保函数被调用
        expect(defaultProps.onClick).toHaveBeenCalled();
    })
})

```



## 常用API

### render函数返回的api

* `getByText`   通过内容查找节点
* `queryByText` 与get不同的是可能返回undefined
* `getByTestId`  通过节点绑定的data-testid查找对应的节点

### expect API

* `toBeInTheDocument` 验证是否在文档中
* `toHaveClass` 是否包含类名
* `toBeVisible`  是否存在
* `toHaveBeenCalled` 事件是否被调用
* `toHaveBeenCalledWith` 验证调用时传入的参数
* `not` 将后面的链式调用修改为与之相反



## testing-library/react库常用的方法

* `fireEvent` 模拟事件
* `render` 渲染节点
* `cleanup` 清除前面的节点

