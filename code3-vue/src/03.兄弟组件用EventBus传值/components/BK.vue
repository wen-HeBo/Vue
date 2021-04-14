<template>
    <div>
        <h2>BK 组件</h2>
        <button @click='sendMsgToPP'> 给 PP 发送数据</button>
    </div>
</template>
<script>
import bkpp from './BKPP.js'
export default {
    data(){
        return{
            msg:'BKPP is real!'
        }
    },
    methods:{
        sendMsgToPP(){
            bkpp.$emit('truth',this.msg)
        }
    }
}
</script>