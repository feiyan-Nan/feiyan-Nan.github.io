import DefaultTheme from 'vitepress/dist/client/theme-default'
import Comment from './components/Comment.vue'
import Test from './components/Test.vue'

import './styles/index.css'
import './styles/code.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 注册组件
    app.component('Comment', Comment)
    app.component('Test', Test)
    // console.log(app, 'app');
  },
}
