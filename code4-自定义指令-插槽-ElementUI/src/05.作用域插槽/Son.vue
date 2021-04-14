<template>
    <div>
        <h3>Son 组件</h3>
        <slot smsg="ppKritt" ></slot>
        <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
        <slot name='bk' smsg="billkin" struth="bkpp"></slot>
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
