import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var FirebasePlugin = {
  db: () => firebase.database(),
  firestore: () => firebase.firestore(),
  auth: () => firebase.auth(),
  storage: () => firebase.storage(),
  providers: {
    google: new firebase.auth.GoogleAuthProvider(),
    facebook: new firebase.auth.FacebookAuthProvider()
  }
}

export default function (Vue, options) {
  if (!firebase.apps.length) firebase.initializeApp(options)
  Vue.prototype.$firebase = FirebasePlugin
}
