import Vue from 'vue'

// 导入 App 根组件
import App from './App.vue'


const vm = new Vue({
    el: '#app',
    render: h => h(App)
})