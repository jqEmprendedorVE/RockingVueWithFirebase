import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import config from './firebase/config'
import Firebase from './firebase/plugin'
import Auth from './plugins/Auth.js'

Vue.use(Auth)
Vue.use(Firebase, config)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth) && !Vue.auth.loggedIn()) {
    next({
      path: '/'
    })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
