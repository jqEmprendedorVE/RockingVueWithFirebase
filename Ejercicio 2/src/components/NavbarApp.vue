<template>
  <nav id="NavbarApp" class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">Rocking Vuejs with Firebase</router-link>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li><router-link to="/ruta-publica">Ruta Publica</router-link></li>
          <li v-if="!userActive"><router-link to="/ruta-privada">Ruta Privada</router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li v-if="userActive"><a  href="javascript:void(0)" @click.prevent="conectar">Sign In</a></li>
          <li ></li>
          <li v-if="!userActive" class="dropdown">
            <a href="#" class="dropdown-toggle" style="padding-top: 12px;padding-bottom: 5px;" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              {{user.displayName}}
              <img :src="user.photoURL" alt="" class="avatar">
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="javascript:void(0)" @click.prevent="desconectar">Sign Out</a></li>
            </ul>
          </li>
        </ul>
      </div><!--/.nav-collapse -->
    </div><!--/.container-fluid -->
  </nav>
</template>
<script>
export default {
  name: 'NavbarApp',
  computed: {
    userActive () {
      return Object.keys(this.$store.state.user).length === 0
    },
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    conectar () {
      this.$firebase.auth().signInWithPopup(this.$firebase.providers.google)
        .catch(error => {
          console.log('Errores: ' + error)
        })
    },
    desconectar () {
      this.$firebase.auth().signOut()
    }
  }
}
</script>
<style>
  .avatar {
    height: 28px;
    width: 28px;
    border-radius: 6px;
  }
  .option-avatar {
    padding-top: 0px;
    padding-bottom: 0px;
  }
</style>
