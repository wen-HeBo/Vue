<template>
    <div>
        <p>姓名：<input type="text" v-model='uname'></p>
        <p>密码：<input type="text"  v-model='upwd'></p>
        <button @click="login">登录</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            uname:'',
            upwd:'',
        }
    },
    methods:{
        login(){
            if(this.uname.length <= 0 || this.upwd.length <= 0){
                alert('请登录！')
                return
            }
            else{
                alert('登录成功！')
                // 假设这个 tokenStr 是登录成功后服务器返回的 token 身份令牌
                const tokenStr = 'sdnhjahfcusjvhbueaakdjxikwihefnciwnakdnkfaqiq'
                window.sessionStorage.setItem('token',tokenStr)
                this.$router.push('/home')
            }
        }
    }
}
</script>