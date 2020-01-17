import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    customerId: localStorage.getItem('customerId') || ''
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, token, customerId) {
      state.status = 'success'
      state.token = token
      state.customerId = customerId
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    login ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.post('/customers/portal/auth', user)
          .then(resp => {
            const token = resp.data.access_token
            const customerId = resp.data.customer.id
            localStorage.setItem('token', token)
            localStorage.setItem('customerId', customerId)
            axios.defaults.headers.common['adimplere-portal-auth-token'] = token
            commit('auth_success', token, customerId)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },

    logout ({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('customerId')
        delete axios.defaults.headers.common['adimplere-auth-token']
        delete axios.defaults.headers.common['adimplere-portal-auth-token']
        resolve(resolve)
      })
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    getCustomerId: state => state.customerId
  }
})
