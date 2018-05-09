
import firebase from './index'

export function login () {
  const provider = new firebase.auth.GoogleAuthProvider()

  return firebase.auth().signInWithPopup(provider).then((result) => {
    console.log('Auth worked!', result)
    this.$router.push('/chat')
  }, (error) => {
    console.log('Unable to auth', error)
  })
}
