
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import firebase from './firebase/index'

Vue.config.productionTip = false

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  router,
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/chat')
      } else {
        this.$router.push('/auth')
      }
    })
  },
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

// import Vue from 'vue';
// import App from './App';
// import router from './router';
// import Vuefire from 'vuefire';
//
// Vue.config.productionTip = false;
//
// Vue.use(Vuefire);
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// });
