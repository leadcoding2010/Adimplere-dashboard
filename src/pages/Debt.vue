<template>
  <div class="container">
    <h5 class="mt-5 mb-5 ml-0 ml-lg-5 text-blue font-weight-normal">Minhas Dívidas</h5>
    <div class="row justify-content-center">
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
            <td>{{ debt.parceiro }}</td>
            <td class="text-blue-muted">{{ debt.value }}</td>
            <td>{{ debt.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Debt',
  data () {
    return {
      debts: [
        {
          parceiro: 'John Doe',
          value: 'R$ 440,00',
          date: '17/12/2019'
        },
        {
          parceiro: 'John Doe',
          value: 'R$ 440,00',
          date: '17/12/2019'
        },
        {
          parceiro: 'John Doe',
          value: 'R$ 440,00',
          date: '17/12/2019'
        }
      ]
    }
  }
}
</script>
