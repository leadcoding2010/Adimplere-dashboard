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
// TODO: Replace with authentication
axios.defaults.headers.common['adimplere-auth-token'] = 'nnlm8IdSFi5b2UngQbYHHafHSZ3YQatfUpbHZwBZDo64SG7d7H6rRZGXEXi5785sFRky45QYmRhxsmT71tiJp3BCaeGmjS4XzrBlSwfUZ4iPSXTGWrdENkt98KlGlHLG1kRprz6aIgPwgPdwWm4y64jYBVMAubfMq7E581AVCatuhcdcLrd56ScLPE6Lnh1ovDIlt4J7snC2noeCNukFsYLYVytU9Z3zNiCbMfIAmg4FYUnR24u3TD0DuTV8Bf0'

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
