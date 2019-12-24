<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="bg-blue">
      <router-link to="/" class="navbar-brand p-0"><img class="logo" src="./../assets/images/logo_white.png"></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" right>
          <router-link to="/debt" class="nav-item nav-link">Minhas Dívidas</router-link>
          <router-link to="/" class="nav-item nav-link">Meus Acordos</router-link>
          <router-link to="/contact" class="nav-item nav-link">André Oliveira</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
