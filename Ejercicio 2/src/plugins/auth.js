var AuthPlugin = {
  setUser: function (user, expiration = null) {
    localStorage.setItem('authUser', user.uid)
    localStorage.setItem('authUserMail', user.email)
    if (expiration === null) localStorage.setItem('authUserExpiration', expiration)
  },
  destroyUser: function () {
    localStorage.removeItem('authUser')
  },
  getUser: function () {
    var user = localStorage.getItem('authUser')
    var expiration = localStorage.getItem('authUserExpiration')

    if (!user || !expiration) return null

    if (Date.now() > parseInt(expiration)) {
      this.destroyUser()
      return null
    } else {
      return user
    }
  },
  loggedIn: function () {
    return this.getUser() !== null
  }
}

export default function (Vue) {
  Vue.auth = AuthPlugin

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: function () {
        return Vue.auth
      }
    }
  })
}
