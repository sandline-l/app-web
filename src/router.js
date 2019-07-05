import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import zhuce from './views/zhuce.vue'
import Regist from './views/regist.vue'
import defaultPage from './views/defaultPage.vue'

import movie from './components/testhtml/movie.vue'
import myslot from './components/testhtml/myslot.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect:'/home',
      children:[
        {
          path:'/home',
          name:'Home',
          component:Home
        },
        {
          path:'/login',
          name:'login',
          component:Login
        },
        {
          path:'/zhuce',
          name:'zhuce',
          component:zhuce
        },
      ]
    },
    // {
    //   path:'/login',
    //   name:'login',
    //   component:Login
    // },
    {
      path:'/regist',
      name:'regist',
      component:Regist
    },
    {
      path:'/movie',
      name:'movie',
      component:movie
    },
    {
      path:'/myslot',
      name:'myslot',
      component:myslot
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
