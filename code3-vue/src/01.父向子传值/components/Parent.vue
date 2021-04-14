<template>
    <div>
        <h2>这是 Parent 组件</h2>
        <button @click="btnHandler">调用子组件的方法</button>
        <my-son :pmsg="msg" ref="son"></my-son>
    </div>
</template>
<script>
import Son from './Son.vue'
export default {
    data(){
        return{
            msg:'父组件的信息'
        }
    },
    components:{
        'my-son': Son
    },
    methods:{
        btnHandler(){
            this.$refs.son.show();
        }
    }
}
</script>