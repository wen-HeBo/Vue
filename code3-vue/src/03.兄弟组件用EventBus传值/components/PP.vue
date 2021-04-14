<template>
    <div>
        <h2>PP 组件收到 {{msg}}</h2>
    </div>
</template>
<script>
import bkpp from './BKPP.js'
export default {
    data(){
        return{
            msg:''
        }
    },
    created(){
        bkpp.$on('truth',arg=>{
            this.msg = arg
        })
    }
}
</script>
