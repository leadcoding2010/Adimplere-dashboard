import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueGtm from 'vue-gtm'
import axios from 'axios'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/style.css'
import router from './router'
import './filters'

axios.defaults.baseURL = process.env.API_ENDPOINT

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['adimplere-portal-auth-token'] = token
}

Vue.config.productionTip = false

Vue.use(BootstrapVue)

if (process.env.GTM_ID) {
  Vue.use(VueGtm, {
    id: process.env.GTM_ID,
    enabled: true,
    debug: process.env.NODE_ENV === 'development',
    loadScript: true,
    vueRouter: router
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
