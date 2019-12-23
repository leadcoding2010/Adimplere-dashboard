<template>
  <div class="container">
    <h5 class="mt-5 mb-5 ml-0 ml-lg-5 text-blue">Meus Acordos</h5>
    <div class="row justify-content-center">
      <table class="table table-borderless rounded-top-12px col-12 col-lg-9 text-center">
        <thead class="thead-blue">
          <tr>
            <th scope="col">Parceiro A</th>
            <th scope="col">dd/mm/yyyy</th>
            <th scope="col">R$ XXX,XX</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody class="text-muted small table-shadow pl-4 pr-4 pb-4">
          <tr v-for="(deal,index) in deals" :key="index">
            <td>{{ deal.parceiro }}</td>
            <td>{{ deal.date }}</td>
            <td class="text-blue-muted">{{ deal.value }}</td>
            <td>
              <router-link :to="'/details/' + encodeURIComponent(deal.parceiro)" class="btn btn-mint rounded-pill w-100">Parcelas</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Deals',
  data () {
    return {
      deals: [
        {
          parceiro: 'CNPJ 12.121.221/0001-88',
          date: '17/12/2019',
          value: 'R$ 450,00'
        },
        {
          parceiro: 'CNPJ 12.121.221/0001-88',
          date: '17/12/2019',
          value: 'R$ 450,00'
        },
        {
          parceiro: 'CNPJ 12.121.221/0001-88',
          date: '17/12/2019',
          value: 'R$ 450,00'
        }
      ]
    }
  }
}
</script>
