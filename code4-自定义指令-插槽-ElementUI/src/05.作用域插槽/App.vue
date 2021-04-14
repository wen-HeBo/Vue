<template>
    <div>
        <h1>App 根组件</h1>
        <hr>
        <my-son>
            <p slot-scope="scope">{{scope.smsg}}</p>

            <!-- 如果要接受作用域插槽中的数据且要渲染为多个标签，则必须在多个标签之外包裹一个父元素接收插槽中的数据 -->
            <!-- 注意：template 之气包裹元素的作用，不会被渲染为任何标签 -->
            <template slot="bk" slot-scope="scope">
                <p>{{scope.smsg}}</p>
                <p>{{scope.struth}}</p>
            </template>
            
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