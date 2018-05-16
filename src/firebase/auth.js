
import firebase from './index'

export function login (provider) {
  var authProvider = new firebase.auth.GoogleAuthProvider()

  return firebase.auth().signInWithPopup(authProvider).then((result) => {
    console.log('Auth worked!', result)
    this.$router.push('/chat')
  }, (error) => {
    console.log('Unable to auth', error)
  })
}
