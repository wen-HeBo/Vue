<template>
    <div>
        <h2>这是 Son 组件</h2>
        <button @click="btnHandler">子向父传值</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'子组件的信息',
        }
    },
    methods:{
        btnHandler(){
            this.$emit('func',this.msg)
        }
    }
}
</script>