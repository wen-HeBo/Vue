<template>
    <div>
        <h1>App 根组件</h1>
        <my-parent></my-parent>
    </div>
</template>

<script>
import Parent from './components/Parent.vue'
export default {
    components:{
        "my-parent": Parent,
    }
}
</script>