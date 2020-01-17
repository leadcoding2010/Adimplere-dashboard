import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Debt from '@/pages/Debt'
import Deals from '@/pages/Deals'
import Details from '@/pages/Details'
import ContactData from '@/pages/ContactData'
import store from '../store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/',
      name: 'Deals',
      component: Deals,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/debt',
      name: 'Debt',
      component: Debt,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/contact',
      name: 'ContactData',
      component: ContactData,
      beforeEnter: ifAuthenticated
    }
  ]
})
