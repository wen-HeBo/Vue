import Vue from 'vue'

import App from './App.vue'

Vue.directive('color',{
    // 通过 binding 来接受指令传递过来的数据
    // 传递过来的参数是 binding.value 属性
    bind(el,binding){
        el.style.color = binding.value
    }
})

const vm = new Vue({
    el: '#app',
    render: h => h(App)
})