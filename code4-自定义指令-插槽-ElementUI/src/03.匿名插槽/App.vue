<template>
    <div>
        <h1>App 根组件</h1>
        <hr>
        <my-son>
            <!-- 默认情况下，在组件内容区域中，定义的信息会被显示到 匿名插槽中 -->
          <img src="../images/bkpp.jpg" alt="">
          <img src="../images/bkpp2.jpg" alt="">
        </my-son>
    </div>
</template>
<script>
import Son from './Son.vue'
export default {
    data(){
        return {
        }
    },
    components:{
        "my-son": Son,
    }
}
</script>