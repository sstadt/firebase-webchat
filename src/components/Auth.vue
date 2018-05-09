
<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav__left">
          <li><a href=''>VUECHAT</a></li>
        </ul>
        <ul class="nav__right">
          <li><a href=''>SIGNUP</a></li>
        </ul>
      </div>
    </nav>
    <main>
      <img src="../assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
    <div id="login">
      <div class="container">
        <div class="row">
          <div class="login-clean">
            <form>
              <h1 class="text">VUECHAT APP</h1>
              <h1>{{ msg }}</h1>

              <div class="form-group">
                <button class="btn btn-info btn-block" @click="appLogin()"> Login with Twitter</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
/* eslint-disable */
import { config } from '../firebase/index'
import { login } from '../firebase/auth'

export default {
  name: 'auth',
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    appLogin() {
      login()
    }
  }
}
</script>


<style>
.text {
  margin:auto
}
</style>
