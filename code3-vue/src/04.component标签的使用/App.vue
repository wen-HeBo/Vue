<template>
    <div>
        <h1>App 根组件</h1>
        <button @click="comName='my-home'">Home</button>
        <button @click="comName='my-movie'">Movie</button>
        <!-- 可以通过 component 的 is 属性动态指定要渲染的组件 -->
        <component :is="comName"></component>
    </div>
</template>

<script>
import Home from './components/Home.vue'
import Movie from './components/Movie.vue'
export default {
    data(){
        return{
            comName:'my-home'
        }
    },
    components:{
        "my-home": Home,
        "my-movie": Movie
    }
}
</script>