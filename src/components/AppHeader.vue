<template>
  <b-navbar toggleable="md" type="dark" class="bg-blue">
    <router-link to="/" class="navbar-brand p-0"><img class="logo" src="./../assets/images/logo_white.png"></router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto" right>
        <router-link to="/login" v-if="!isAuthenticated" class="nav-item nav-link">Login</router-link>
        <router-link to="/debt" v-if="isAuthenticated" class="nav-item nav-link">Minhas Dívidas</router-link>
        <router-link to="/" v-if="isAuthenticated" class="nav-item nav-link">Meus Acordos</router-link>
        <router-link to="/contact" v-if="isAuthenticated" class="nav-item nav-link">André Oliveira</router-link>
        <a @click.prevent="logout" v-if="isAuthenticated" href="/logout" class="nav-item nav-link">Logout</a>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import store from '../store'

export default {
  name: 'AppHeader',
  computed: {
    isAuthenticated: function () {
      return store.getters.isAuthenticated
    }
  },
  methods: {
    logout: function () {
      store.dispatch('logout')
        .then(() => {
          this.$router.go('/')
        })
    }
  }
}
</script>
