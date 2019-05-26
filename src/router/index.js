import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import home from '@/components/Home'
import loading from '@/components/Loading'
import table from '@/components/Table'

import list from '@/components/List'

import page1 from '@/components/Page1'
import page2 from '@/components/Page2'
import page3 from '@/components/Page3'
import page21 from '@/components/Page21'
import header from '@/components/Header'
import usertag from '@/components/UserTag'
import message from '@/components/Message'
import detail from '@/components/Detail'
import concern from '@/components/Concern'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/concern',
      name: 'concern',
      component: concern
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/usertag',
      name: 'usertag',
      component: usertag
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },

    {
      path: '/home',
      name: 'home',
      component: home,
      redirect:'/page1',
      children:[
        {
          path: '/page1',
          name:'page1',
          component:page1
        },
        {
          path: '/page2',
          name:'page2',
          component:page2,
          redirect:'/page21',
          children:[
            {
              path: '/page21',
              name:'page21',
              component:page21
            },
            {
              path:'*',
              redirect:'/page21'
            }
          ]
        },
        {
          path: '/page3',
          name:'page3',
          component:page3
        },

        {
          path:'*',
          redirect:'/page1'
        }
      ]
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
