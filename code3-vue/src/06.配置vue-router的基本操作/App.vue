<template>
    <div>
        <h1>App 根组件</h1>
        <!-- 显示三个路由链接 -->
        <!-- 注意：router-link 是 Vue 提供的路由链接标签，默认渲染为 a 链接 -->
        <!-- <a href="#/home">首页</a> -->
        <router-link to="/home">首页</router-link>
        <router-link to="/movie">电影</router-link>
        <router-link to="/about">关于</router-link>

        <!-- 再合适的位置放一个 router-view 标签来显示对应的组件 -->
        <!-- router-view 是路由容器组件，路由匹配到的组件会被替换到该位置 -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    }
}
</script>
<style scoped>
/* .router-link-active{
    color: red;
    font-weight: bold;
} */
.my-active{
    color: lightblue;
    font-weight: bold;
}
</style>