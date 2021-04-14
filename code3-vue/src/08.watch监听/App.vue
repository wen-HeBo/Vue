<template>
    <div>
       <h1>App 根组件</h1>
       <p>姓名： <input type="text" v-model="uname"></p>
       <P>密码： <input type="password" v-model="upwd" ref='pwdDOM'></P>
       <button>登录</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:'',
            upwd:''
        }
    },
    // watch 是监听 data 中数据的变化，侧重做某件事情
    watch:{
        upwd(newVal,oldVal){
            // console.log(newVal,oldVal)
            if(newVal.length < 8){
                this.$refs.pwdDOM.style.color = 'red'
            }
            else{
                this.$refs.pwdDOM.style.color = ''
            }
        }
    }
}
</script>