<template>
  <div class="container">
    <h5 class="mt-5 mb-5 ml-0 ml-lg-5 text-blue font-weight-normal">Meus Acordos</h5>
    <div v-if="error && error.length > 0" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <div v-if="deals.length > 0" class="row justify-content-center">
      <table class="table table-borderless rounded-top-12px table-padding text-center col-12 col-lg-9">
        <thead class="thead-blue">
          <tr>
            <th scope="col">Parceiro A</th>
            <th scope="col">dd/mm/yyyy</th>
            <th scope="col">R$ XXX,XX</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody class="text-muted small table-shadow">
          <tr v-for="(deal,index) in deals" :key="index">
            <td>CNPJ {{ deal.partner.cnpj }}</td>
            <td>{{ deal.created_at | dateFormatted }}</td>
            <td class="text-blue-muted">R$ {{ deal.value | moneyFormatted }}</td>
            <td>
              <router-link v-if="deal.status.id !== 3" :to="'/details/' + deal.id" class="btn btn-mint rounded-pill w-100">Parcelas</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../store'

export default {
  name: 'Deals',
  data () {
    return {
      deals: [],
      error: ''
    }
  },

  created () {
    axios.get('/customers/' + store.getters.getCustomerId + '/deals')
      .then(response => (
        this.deals = response.data.sort((a, b) => (Date.parse(a.created_at) > Date.parse(b.created_at)) ? -1 : 1))
      )
      .catch((error) => {
        if (error.response.data.error && error.response.data.error.message) {
          this.error = error.response.data.error.message
        } else if (error.response.data.message) {
          this.error = error.response.data.message
        }
      })
  }
}
</script>
