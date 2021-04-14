<template>
    <div>
      <p>firstname：<input type="text" v-model="firstname"></p>
      <p>lastname：<input type="text" v-model="lastname"></p>
      <p>fullname：<input type="text" readonly :value="fullName"></p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            firstname:'',
            lastname:''
        }
    },
    // computed 计算属性
    computed:{
        // 定义一个计算属性叫做 fullName
        // 注意：所有的计算属性在定义的时候的被定义为 function
        // 但是在页面使用计算属性的时候，是直接当作普通的变量来使用的而不是方法去调用！！！
        // 特点：只要计算属性的 function 中依赖的 任何一个数据发生了变化都会对这个计算属性重新求值
        fullName:function(){
            return this.firstname + '-' + this.lastname
        }
    }
}
</script>