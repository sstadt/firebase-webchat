
import Router from 'vue-router'

import Auth from '@/components/Auth'
import Chat from '@/components/Chat'

export default new Router({
  routes: [
    { path: '/', name: 'Auth', component: Auth },
    { path: '/auth', name: 'Auth', component: Auth },
    { path: '/chat', name: 'Chat', component: Chat }
  ]
})
