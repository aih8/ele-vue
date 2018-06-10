import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/fa',
      name: 'selectFile',
      component: require('@/components/selectFile').default
    },
    {
      path: '/',
      name: 'selectFile',
      component: require('@/components/readFile').default
    },
    {
      path: '/landing',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/landing'
    }
  ]
})
