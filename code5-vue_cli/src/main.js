import Vue from 'vue'
import App from './App'
import router from './router'
// 导入 axios
import axios from 'axios'
// 导入 UI 组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 安装组件库
Vue.use(ElementUI)

// 全局配置根路径
axios.defaults.baseURL = 'https://api-hmugo-web.itheima.net/api/public/v1'
// 把 axios 挂载到 Vue.prototype 上
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 下面这一行是 ESLint 中的语法注释
// 作用：如果 new 了一个构造函数但是没有接受它的返回值，也不会报语法警告
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
