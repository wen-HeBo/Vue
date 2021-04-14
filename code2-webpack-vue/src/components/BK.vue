<template>
    <div>
        <h3>这是 BKPP 的 bk</h3>
        <button @click="sendMsgToPP">给 pp 发送数据</button>
    </div>
</template>
<script>
import bkpp from './bkpp.js'
export default {
    data(){
        return{
            msg: "bk say 'BKPP is real !'"
        }
    },
    methods:{
        sendMsgToPP(){
            // 在数据发送方,调用 bkpp.$emit()，从而触发bkpp 上的某个事件，从而把数据发送出去
            bkpp.$emit('truth',this.msg)
        }
    }
}
</script>