import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RutaPrivada from '@/components/ruta-privada'
import RutaPublica from '@/components/ruta-publica'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/ruta-publica',
      name: 'RutaPublica',
      component: RutaPublica,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/ruta-privada',
      name: 'RutaPrivada',
      component: RutaPrivada,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
