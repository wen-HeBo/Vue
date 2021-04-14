<template>
    <div>
        <h1>App 根组件</h1>
        <my-bk></my-bk>
        <my-pp></my-pp>
    </div>
</template>

<script>
import BK from './components/BK.vue'
import PP from './components/PP.vue'
export default {
    components:{
        "my-bk": BK,
        'my-pp': PP
    }
}
</script>