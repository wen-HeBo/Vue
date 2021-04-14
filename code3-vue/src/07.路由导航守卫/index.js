import Vue from 'vue'

import App from './App.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {path: '/', redirect: 'login'},
        {path: '/login', component: Login},
        {path: '/home', component :Home}
    ]
})

// 参数1：是要去那个页面路由相关的参数
// 参数2：从哪个页面即将离开
// 参数3：next 是一个函数，就相当于 Node 里面 express 中的 next 函数
// 注意：这里的 router 就是 new VueRouter 得到的路由对象
router.beforeEach((to,from,next) => {
    // 直接调用表示放行
    // next()

    // to.path 表示下一刻要访问的地址
    // from.path 表示我们上一刻访问的地址
   if(to.path === '/login') return next()
    // 如果用户访问的不是 登陆页面 则尝试从 sessionStorage 中获取 token 令牌字符串
    const tokenStr = window.sessionStorage.getItem('token')
    // 如果没有 token 令牌则强制用户跳转到登陆页面
    if(!tokenStr) return next('/login')
    // 如果有令牌，则直接放行
    next()
})

const vm = new Vue({
    el: '#app',
    render: h => h(App),
    router
})