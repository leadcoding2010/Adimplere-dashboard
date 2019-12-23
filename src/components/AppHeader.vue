<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-blue">
    <router-link to="/" class="navbar-brand p-0"><img class="logo" src="./../assets/images/logo_white.png"></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <router-link to="/debt" class="nav-item nav-link">Minhas Dívidas</router-link>
        <router-link to="/" class="nav-item nav-link">Meus Acordos</router-link>
        <router-link to="/contact" class="nav-item nav-link">André Oliveira</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
