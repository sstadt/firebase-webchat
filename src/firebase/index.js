
import firebase from 'firebase'

export const config = {
  apiKey: 'AIzaSyBCT_AzzEXMjujqafNyXNJHT2uuOXPaJrY',
  authDomain: 'vuechat-3eef2.firebaseapp.com',
  databaseURL: 'https://vuechat-3eef2.firebaseio.com',
  projectId: 'vuechat-3eef2',
  storageBucket: 'vuechat-3eef2.appspot.com',
  messagingSenderId: '289397341524'
}

firebase.initializeApp(config)

var firebaseRef = firebase.database().ref()
export default firebase
export var chatRef = firebaseRef.child('chat')
