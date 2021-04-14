<template>
    <div>
        <h4>子组件</h4>
        <button @click="msgFormParent+=' forever'">修改父组件传递过来的数据</button>
        <button @click="msgsFormParent.counts++">修改对象类型数据的值:{{msgsFormParent.counts}}</button>
        <button @click="btnHandler">触发 func 事件</button>
        <h4>{{pinfo}}:" {{msgFormParent}} "</h4>
    </div>
</template>
<script>
import _ from 'lodash'
export default {
    // data 中的数据都是当前组件的私有数据，是可读可写的
    data(){
        return{
            msgFormParent: this.pmsg,
            msgsFormParent: _.cloneDeep(this.msg),
            smsg:'pp 给你打 call',
        }
    },
    // 子组件需要通过 props 数组接受外界传递过来的数据
    // props 接受的数据只是只读，不要对其重新赋值
    // 如果想对 props 重新赋值可以把数据转存到 data 中一份从而实现赋值的操作
    props:['pmsg','pinfo','msg'],
    methods:{
        btnHandler(){
            // 在子组件中，通过 this.$emit() 方法出发父组件为子组件绑定的 func 事件
            this.$emit('func',this.smsg)
        }
    }

}
</script>