<template>
    <div>
        <h1>App 根组件</h1>
        <a href="#/home">首页</a>
        <a href="#/movie">电影</a>
        <a href="#/about">关于</a>
        <transition>
            <component :is="comName"></component>
        </transition>
    </div>
</template>
<script>
import Home from './components/Home.vue'
import Movie from './components/Movie.vue'
import About from './components/About.vue'
export default {
    data(){
        return{
            comName:'my-home',
        }
    },
    // 创建阶段的生命周期函数，此时 data 数据和 methods 方法都已初始化完毕
    created(){
        // 只要浏览器中的 哈希（hash） 地址发生变化必然会调用 window.onhashchange 的处理函数
        window.onhashchange = ()=>{
            const hashStr = window.location.hash.slice(1)
            console.log(hashStr)
            switch(hashStr){
                case '/home':
                    this.comName = 'my-home';
                    break;
                case '/movie':
                    this.comName = 'my-movie';
                    break;
                case '/about':
                    this.comName = 'my-about';
                    break;
            }
        }
    },
    components:{
        'my-home': Home,
        'my-movie': Movie,
        'my-about': About,
    }
}
</script>

<style scoped>
.v-enter{
    transform: translateX(100%); 
}
.v-leave-to{
    transform: translateX(-100%); 
}
.v-enter-active,
.v-leave-active{
    transition: all 1s ease;
}
.v-leave-active{
    position: absolute;
    width: 100%;
}
</style>