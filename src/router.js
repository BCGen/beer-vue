import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/trade',
      name: 'trade',
      component: () => import('./views/Trade.vue')
    },
    {
      path: '/pregame',
      name: 'pregame',
      component: () => import('./views/Pregame.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./views/Mine.vue')
    },
    {
      path: '/prize_list',
      name: 'prizeList',
      component: () => import('./views/PrizeList.vue')
    }
  ]
})
