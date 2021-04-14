<template>
    <div>
        <h3>这是 BKPP 的 pp</h3>
        <div>{{msgFromBK}}</div>
    </div>
</template>
<script>
import bkpp from './bkpp.js'
export default {
    data(){
        return{
            msgFromBK:''
        }
    },
    // 生命周期钩子函数
    created(){
        // 在数据接收方，使用 bkpp.$on() 自定义事件，并指定事件处理函数
        bkpp.$on('truth',data=>{
            console.log(data);
            this.msgFromBK=data;
        })
    }
}
</script>