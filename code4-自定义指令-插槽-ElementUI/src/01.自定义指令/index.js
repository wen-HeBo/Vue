import Vue from 'vue'

import App from './App.vue'

// 自定义指令名称前无需添加 v- 前缀
Vue.directive('red',{
    // 只要指令被解析，就会优先调用 bind 方法
    bind(el){
        // 只要 bind 被执行了那么 el 就是它所绑定的 UI 元素
        // el 就是原生 DOM 元素
        el.style.color='red'
    }
})

Vue.directive('focus',{
    // bind 表示指令第一次被解析执行时候调用，此时这个 DOM 元素还没 append 到父节点中
    bind(el){
        //el.focus()
    },
    // inserted 会在元素被插入到父节点之后执行
    inserted(el){
        // 定义文本框获得焦点的指令，只能能通过 inserted 来实现
        // 因为 bind 方法和 inserted 方法的执行机制不一样
        el.focus()
    }
})
// 总结：如果只是单纯的为元素这只样式，尽量写到 bind 中
// 如果要设置 JS 行为，如文本框获取焦点，这种行为尽量写到 inserted 中去

const vm = new Vue({
    el: '#app',
    render: h => h(App)
})