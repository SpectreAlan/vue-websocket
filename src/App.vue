<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  name: 'App',
  mounted () {
    localStorage.getItem('store') && this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(localStorage.getItem('store'))))
    if (this.isLogin) {
      this.isLogin(true)
    }
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  methods: {
    ...mapMutations({
      isLogin: 'ISLOGIN'
    }),
    send () {
      this.msg()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
