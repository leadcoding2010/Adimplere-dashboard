import Vue from 'vue'
import Router from 'vue-router'
import Debt from '@/pages/Debt'
import Deals from '@/pages/Deals'
import Details from '@/pages/Details'
import ContactData from '@/pages/ContactData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Deals',
      component: Deals
    },
    {
      path: '/debt',
      name: 'Debt',
      component: Debt
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/contact',
      name: 'ContactData',
      component: ContactData
    }
  ]
})
