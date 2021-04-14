<template>
    <div>
        <!-- 注意 单文件组件中的 templa 节点只能有唯一的父元素进行包裹 -->
        <div class="home-box">
            <!-- ref 是 Vue 中提供的用于获取 DOM 对象引用的方式 -->
            <!-- ref 是单词 reference “引用”的缩写 -->
            <!-- 通过 ref 获取到的 DOM 元素的引用，就是一个元素的 DOM 对象 -->
            <h3 ref='myh3'>这是使用 .vue 文件定义的单文件组件 --- {{msg}}</h3>
            <button @click="getContent">获取h3内部文本</button>
        </div>
    </div>
</template>

<script>
// 行为中固定写法 export default {}
// 组件中没有 el
export default {
    // 这是组件中的私有的 data 数据
    data(){
        return{
            msg: ' .vue文件'
        }
    },
    methods:{
        getContent(){
            // 不要再 Vue 中操作 DOM
            // console.log(document.getElementById('myh3').innerHTML) 
            console.log(this.$refs.myh3.innerHTML)
        }
    },
    filters:{},
}
</script>

// 今后都要为组件的 style 样式添加 scoped，防止样式冲突
<style lang="less" scoped>
// 一定要在安装与配置 less-loader 的前提下下，去使用 less 语法编写样式
    /* scoped 的作用域于当前组件 */
    /* 注意：在默认情况下，组件中定义的样式是 全局生效的 */
    .home-box{
        h3{
        color: red;
    }
    }
</style>