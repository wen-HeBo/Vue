<template>
    <div>
        <button @click='goBack'>返回</button>
        <h3>电影详情 --- {{$route.params.id}} --- {{$route.params.name}}</h3>
        <h3>电影详情 --- {{id}} --- {{name}}</h3>
    </div>
</template>
<script>
export default {
    // this.$route 是路由参数对象
    // this.$router 是路由导航对象（前进后退）
    // 外界传递过来的参数，数据都是只读的
    props:['id','name'],
    methods:{
        goBack(){
            this.$router.back()
        }
    }
}
</script>