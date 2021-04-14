<template>
    <div>
        <h2>这是 Parent 组件 --- {{smsg}}</h2>
        <my-son @func="show"></my-son>
    </div>
</template>
<script>
import Son from './Son.vue'
export default {
    data(){
        return{
            smsg:''
        }
    },
    components:{
        'my-son': Son
    },
    methods:{
        show(arg){
            this.smsg=arg;
        }
    }
}
</script>