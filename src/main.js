import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/style.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
