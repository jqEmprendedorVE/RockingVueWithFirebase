<template>
  <div id="app">
    <div class="container">
      <NavbarApp></NavbarApp>
    </div>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import NavbarApp from './components/NavbarApp.vue'

export default {
  name: 'App',
  components: {
    NavbarApp
  },
  created () {
    let localAuth = this.$auth
    const commit = this.$store.commit
    const router = this.$router

    this.$firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        localAuth.setUser({uid: user.uid, email: user.email})
        commit('setUserAuth', user)
        router.push('/ruta-privada')
      } else {
        localAuth.destroyUser()
        commit('setUserAuth', {})
        router.push('/')
      }
    })
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
