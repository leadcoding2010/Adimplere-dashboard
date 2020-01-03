<template>
  <div class="container">
    <h5 class="mt-5 mb-5 ml-0 ml-lg-5 text-blue font-weight-normal">Minhas Dívidas</h5>
    <div v-if="debts.length > 0" class="row justify-content-center">
      <table class="table table-borderless rounded-top-12px table-padding text-center col-12 col-lg-9">
        <thead class="thead-blue">
          <tr>
            <th scope="col">Serial No.</th>
            <th scope="col">Parceiro</th>
            <th scope="col">Debt value</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody class="text-muted small table-shadow">
          <tr v-for="(debt,index) in debts" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ debt.parceiro.nome_fantasia }}</td>
            <td class="text-blue-muted">R$ {{ parseFloat(debt.total.replace(',', '.')) | moneyFormatted }}</td>
            <td>{{ debt.data }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Debt',
  data () {
    return {
      debts: []
    }
  },

  mounted () {
    // TODO: Use authenticated user id
    axios.get('/customers/255347/debts')
      .then(response => (
        this.debts = response.data.sort((a, b) => (Date.parse(a.data) > Date.parse(b.data)) ? -1 : 1))
      )
  }
}
</script>
