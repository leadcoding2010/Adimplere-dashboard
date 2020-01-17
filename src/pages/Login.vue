<template>
  <div class="container w-max-500 w-h-center">
    <div class="h4 text-center mb-4">Portal do Cliente</div>
    <div v-if="error && error.length > 0" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" class="form-control" v-model="user.document" placeholder="Insira seu CPF">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model="user.password" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary w-100">Acessar</button>
    </form>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Login',
  data () {
    return {
      user: {
        document: '',
        password: ''
      },
      error: ''
    }
  },

  methods: {
    onSubmit () {
      this.error = {}
      store.dispatch('login', this.user)
        .then(() => this.$router.push('/'))
        .catch((error) => {
          if (error.response.data.error && error.response.data.error.message) {
            this.error = error.response.data.error.message
          } else if (error.response.data.message) {
            this.error = error.response.data.message
          }
        })
    }
  }
}
</script>
