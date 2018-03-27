<template>
  <div id="ruta_publica" class="container">
    <h2>Ruta Publica</h2>
    <pre class="text-left">{{datos_publicos}}</pre>
  </div>
</template>
<script>
export default {
  name: 'RutaPublica',
  data () {
    return {
      datos_publicos: {}
    }
  },
  created () {
    const db = this.$firebase.db()
    db.ref('datos_publicos').once('value', snapshot => {
      this.datos_publicos = snapshot.val()
    })
  }
}
</script>
