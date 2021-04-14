import Vue from 'vue'
// 1.导入路由的包
import VueRouter from 'vue-router';
// 2.把路由模块安装注册到 Vue 上
Vue.use(VueRouter)

// 导入路由规则中需要用到的组件
import Home from './components/Home.vue'
import Movie from './components/Movie.vue'
import About from './components/About.vue'
import Tab1 from './components/tabs/Tab1.vue'
import Tab2 from './components/tabs/Tab2.vue'
import MovieList from './components/movies/MovieList.vue'
import MovieDetails from './components/movies/MovieDetails.vue'

// 3.创建路由规则对象（hash 与组件对应关系）
const router = new VueRouter({
    // 路由规则的数组
    routes:[
        // 每一个路由规则都是一个对象，这个对象都有 path 属性和 component 属性
        // 其中 path 属性是 hash 地址，component 是前面 hash 地址对应要展示的组件
        // path  路由hash地址中，路径必须以 / 开头，而且必须是小写不加空格
        // 在路由规则中，通过 redirect 属性指向一个新地址就能实现路由重定向
        {path: '/',redirect:'/home'},
        {path: '/home',component: Home},
        {
            path: '/movie',
            component: Movie,
            redirect:'/movie/mlist',
            children:[
                {path:'/movie/mlist',component:MovieList},
                // 把路由规则中参数位置前面加上 : 表示这是一个参数项
                // props:true 表示为当前路由规则开启 props 传参
                {path:'/movie/mdetail/:id/:name',component:MovieDetails,props: true}
            ]
        },
        // 在路由规则中还有 children 属性
        // children 属性就是一个数组，作用：嵌套子路由
        {
            path: '/about',
            component: About,
            redirect:'/about/tab1',
            children:[
            {path: '/about/tab1',component: Tab1},
            {path: '/about/tab2',component: Tab2},
        ]},
        
    ],
    // 使用的 UI 组件库提供了高亮的效果
    linkActiveClass:'my-active'
})


import App from './App.vue'


const vm = new Vue({
    el: '#app',
    render: h => h(App),
    // 4.把路由规则对象挂载在 VM 实例上
    router // （router:router)属性值和属性名可以简写
})