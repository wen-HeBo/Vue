<template>
    <div>
        <h2>这是 Son 组件 --- {{pmsg}}</h2>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:['pmsg'],
    methods:{
        show(){
            console.log("成功调用子组件的方法")
        }
    }
}
</script>