<template>
  <div class="login">
    用户名：<input type="text" v-model="userName">
    密码：<input type="password" v-model="userPwd">
    <button @click="login">登录</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userPwd: '',
      userName: ''
    }
  },
  methods: {
    ...mapMutations({
      isLogin: 'ISLOGIN'
    }),
    login () {
      this.$http.post('/api/login',
        this.qs.stringify({
          userName: this.userName,
          userPwd: this.userPwd
        })
      ).then(res => {
        this.islogin(true)
        this.$router.push('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
