<template>
    <div>
        <h1 v-red>App 根组件</h1>
        <h2 v-blue>ppKritt</h2>
        <input type="text" v-focus>
    </div>
</template>
<script>
export default {
    data(){
        return {
        }
    },
    // 私有自定义指令节点
    directives:{
        'blue': {
            bind(el){
                el.style.color = 'blue';
            }
        },
    }
}
</script>