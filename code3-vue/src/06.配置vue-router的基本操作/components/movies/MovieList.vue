<template>
    <div>
         <ul>
            <!-- <li v-for="item in mlist" :key="item.id">{{item.name}}</li> -->

            <!-- 当 router-link 的 to 地址要动态进行破解的时候，则 to 属性需要设置成属性绑定的形式 -->
            <!-- <router-link v-for="item in mlist" :key="item.id" tag="li" :to="`/movie/mdetail/${item.id}/${item.name}`">{{item.name}}</router-link> -->

            <li v-for="item in mlist" :key="item.id" @click="goDetails(item)">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mlist:[
                {id: 1,name: '雷神'},
                {id: 2,name: '死侍'},
                {id: 3,name: '黑豹'},
                {id: 4,name: '复联'},
           ]
        }
    },
    methods:{
        // 通过点击 li 标签，实现路由跳转
        // 通过调用编程式导航 API 实现路由跳转
        // this.$router.push() 就是跳转一个指定的路由规则中
        goDetails(item){
            this.$router.push(`/movie/mdetail/${item.id}/${item.name}`)
        }
    }
}
</script>
<style scoped>
li{
    border: 1px dashed #ccc;
    cursor: pointer;
    margin: 10px 0;
}
</style>