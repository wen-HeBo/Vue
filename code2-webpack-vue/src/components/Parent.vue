<template>
    <div id="bkpp">
        <h3>父组件</h3>
        <button>发送数据给子组件</button>
        <h3>{{msgFromSon}}</h3>
        <hr>
        <!-- 在使用组件的时候，通过 属性绑定 把数据传递给子组件 -->
        <!-- 通过事件绑定机制，父组件把自己的方法，传递给子组件 -->
        <my-son :pinfo="parentInfo" :pmsg='parentMsg' :msg='msgs' @func='show'></my-son>
    </div>
</template>
<script>
// 导入 Son 组件
import Son from './Son.vue'
export default {
    data(){
        return{
            parentMsg:'i love u',
            parentInfo:'bllikin say',
            msgs:{
                pp:0,
                bk:1,
                counts:100
            },
            msgFromSon:''
        }
    },
    methods:{
        show(arg1){
            console.log("有人调用了父组件的 show 方法 " + arg1)
            this.msgFromSon = arg1
        }
    },
    components:{
        'my-son': Son
    },
}
</script>

<style scoped>
    #bkpp{
        margin: 2px;
        padding: 10px;
        border: 2px solid #ccc;
    }
</style>