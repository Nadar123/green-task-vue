import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'
import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import UserInformation from '@/views/UserInformation'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/account/login',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
      // beforeEnter (to, from, next) {
      //   if (store.state.idToken) {
      //     next()
      //   } else {
      //     next('/account/login')
      //   }
      // }
    },
    {
      path: '/userInfromation',
      name: 'userInfromation',
      component: UserInformation,
      meta: { requiresAuth: true }
      // beforeEnter (to, from, next) {
      //   if (store.state.idToken) {
      //     next()
      //   } else {
      //     next('/account/login')
      //   }
      // }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(recored => recored.meta.requiresAuth) && !loggedIn) {
    next('/account/login')
  }
  next()
})

export default router
