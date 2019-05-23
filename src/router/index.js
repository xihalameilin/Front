import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Login from '@/components/Login'
import home from '@/components/Home'
import loading from '@/components/Loading'
import table from '@/components/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },

    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path: '/table',
      name: 'table',
      component: table
    }
  ]
})
