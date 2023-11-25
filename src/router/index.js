import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Bridge from '@/pages/Bridge'
import Swap from '@/pages/Swap'
import Lend from '@/pages/Lend'
import Lend2 from '@/pages/Lend2'
import Governance from '@/pages/Governance'
import Faq from '@/pages/Faq'
import Homes from '@/pages/Homes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/homes',
      name: 'homes',
      component: Homes
    },
    {
      path: '/bridge',
      name: 'bridge',
      component: Bridge
    },
    {
      path: '/swap',
      name: 'swap',
      component: Swap
    },
    {
      path: '/lend',
      name: 'lend',
      component: Lend
    },
    {
      path: '/lend2',
      name: 'lend2',
      component: Lend2
    },
    {
      path: '/governance',
      name: 'governance',
      component: Governance
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    }
  ]
})
