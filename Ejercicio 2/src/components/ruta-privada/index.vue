<template>
  <div id="ruta_publica" class="container">
    <h2>Ruta Privada</h2>
    <pre class="text-left">{{datos_privados}}</pre>
  </div>
</template>
<script>
export default {
  name: 'RutaPrivada',
  data () {
    return {
      datos_privados: {}
    }
  },
  created () {
    const db = this.$firebase.db()
    db.ref('datos_privados').once('value', snapshot => {
      this.datos_privados = snapshot.val()
    },
    e => {
      this.datos_privados = e
    })
  }
}
</script>
