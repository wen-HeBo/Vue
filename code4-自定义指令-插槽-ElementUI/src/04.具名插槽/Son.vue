<template>
    <div>
        <h3>Son 组件</h3>
        <p>ppKirrt</p>
        <!-- 匿名插槽 -->
        <slot></slot>
        <p>billkin</p>
        <!-- 具名插槽 -->
        <slot  name="bkpp"></slot>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
