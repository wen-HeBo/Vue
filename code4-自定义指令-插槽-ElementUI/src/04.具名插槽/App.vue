<template>
    <div>
        <h1>App 根组件</h1>
        <hr>
        <my-son>
            <!-- 默认情况下，在组件内容区域中，定义的信息会被显示到 匿名插槽中 -->
            <img src="../images/pp.jpg" alt="">
            <!-- 通过 slot="插槽名字" 从而让元素渲染到指定的插槽内部 -->
            <img src="../images/bkpp.jpg" alt="" slot="bkpp">
            <img src="../images/bkpp2.jpg" alt="" slot="bkpp">
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