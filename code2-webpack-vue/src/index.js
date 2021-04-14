// 1.导入 Vue 构造函数
// 默认在 webpack 项目中导入的 vue 不是功能最全的包而实阉割版的 vue

// 在开发阶段尽量使用 阉割版的 Vue
// 但在学习阶段先从最全的 Vue 学起
import Vue from 'vue/dist/vue.js'

import './css/1.css'

// 因为 Vue 组件是特殊的 Vue 实例，那么每一个组件都可以发起 this.$http 的 ajax 请求
// Vue.prototype.$http = axios

// 定义全局组件
// 总结：组件其实就是封装了一些 HTML 标签
// 总结：组件中可以有 data，methods，filters，生命周期函数
// 组件中的 data 比较特殊，必须是一个 function 且要 return 一个数据对象
Vue.component('ppkritt-test',{
    // 一定要有唯一的父节点包裹
    template:`<div>
                <div>这是ppKritt定义的一个 Vue 组件</div>
                <div @click='show'>这是{{name | ppFilter}}定义的一个 Vue 组件</div>
            </div>`,
    // 注意：Vue 规定组件中的 data 必须是一个 function 函数，必须 return 一个数据对象
    data() {
        // return 当前组件的数据对象
        return {
            name: 'pp'
        }
    },
    // 组件中也可以有在自己的methods
    methods: {
        show(){
            console.log("调用自定义组件中的 show 方法")
        }
    },
    // 组件中也可以有在自己的私有过滤器
    filters:{
        ppFilter(originVal){
            return originVal+"Kritt"
        }
    },
    created(){
        console.log("调用了created")
    }
})

// 1.导入单文件组件
import Home from './components/Home.vue'
// 2.把单文件组件以 Vue.component() 注册为全局组件使用
Vue.component('my-home',Home)

import Parent from './components/Parent.vue';
Vue.component('my-parent',Parent)

import BK from './components/BK.vue'
Vue.component('my-bk',BK)

import PP from './components/PP.vue'
Vue.component('my-pp',PP)

const vm1 = new Vue({
    el: '#app',
    data: {
        msg:'i love ppKritt'
    }
})

const vm2 = new Vue({
    el: '#app2',
    data: {
        msg:'i love billkin'
    },
    // 使用 components 属性定义私有组件
    components:{
        // '组件名称': {/* 组件配置对象 */}
        'billkin-test':{
            template:`<div>
                        <div>这是billkin定义的一个 Vue 组件</div>
                        <div>这是billkin定义的一个 Vue 组件</div>
                    </div>`
        },
    }
})

// 导入 APP 组件
import App from './components/APP.vue'

const vm3 = new Vue({
    el: '#app3',
    data: {
        msg:'Hi!BKPP!'
    },
    template:'<h6>{{msg}}</h6>',
    /*createElements 形参是一个方法，专门渲染一个组件并替换掉 el 区域
    render:(createElements) => {
       return createElements(App)
    }*/
    // 被 render 渲染的组件叫做 根组件
    // 根组件：无论浏览器中的页面如何切换，根组件永远都在页面上显示
    render:h => h(App)
})

// 注意：只要在 vm 实例中指定了 render 函数来渲染组件，那么 el 区域就会被 render 中渲染的组件替换掉