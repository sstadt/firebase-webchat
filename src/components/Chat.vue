<template>
<div>
  <nav>
    <div class="container">
      <a href=''>VUECHAT</a>
      <ul class="nav__left"></ul>
      <ul class="nav__right">
        <li><a href='' @click="logOut()">SIGNOUT</a></li>
      </ul>
    </div>
  </nav>
  <main>
    <router-view></router-view>
  </main>
  <div class="chat-frame">
    <div v-for="item in anArray" class="chat-message">
      <img class="chat-message__avatar" :src="item.photo_url" />
      <div class="chat-message__body">
        <p class="chat-message__user">{{item.name}}</p>
        <p class="chat-message__timestamp">{{item.timestamp | formatDate}}</p>
        <p class="chat-message__message">{{item.message}}</p>
      </div>
    </div>
    <form @submit.prevent="addComment">
    <div class="chat-form">
      <textarea v-model="newComment" placeholder="Type and click send to chat"></textarea>
      <button>Send</button>
    </div>
    </form>
  </div>
</div>
</template>

<script>
/*eslint-disable*/
import firebase, { chatRef } from '../firebase/index'
import Vue from 'vue'
import Vuefire from 'vuefire'
import moment from 'moment'
import dateFilter from '../utils/dateFilter.js'

Vue.use(Vuefire)
Vue.filter('formatDate', dateFilter)

export default {
  name: 'chat',
  data() {
    return {
      comment: '',
      newComment: '',
      loading: true
    };
  },

  firebase: {
    // can bind to either a direct Firebase reference or a query

    anArray: chatRef,

    // optionally provide the cancelCallback
    cancelCallback: function () {

    },
    // this is called once the data has been retrieved from firebase
    readyCallback: function () {

    }
  },
  filters: {
    dateFilter,
  },
  methods: {
    logOut() {
      firebase.auth().signOut()
    },
    addComment() {
      if (this.newComment !== '') {
        this.comment = this.newComment.trim();
        chatRef.push({
          message: this.comment,
          name: this.getUserName(),
          timestamp: moment().unix(),
          userId: this.getUserId(),
          photo_url:this.getPhotoURL()
        });
        this.newComment = "";
      }
    },
    getUserId() {
      return firebase.auth().currentUser.uid;
    },
    getUserName() {
      return firebase.auth().currentUser.displayName;
    },
    getPhotoURL() {
      return firebase.auth().currentUser.photoURL;
    }
  }
}
</script>

<style>
.chat-message {
  display: flex;
  padding: 10px;
}

.chat-message__body {
  padding-left: 10px;
}

.chat-message__user,
.chat-message__message,
.chat-message__timestamp {
  margin: 0;
}

.chat-message__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.chat-message__user {
  font-weight: bold;
  margin-bottom: 0;
}

.chat-message__timestamp {
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}
</style>
