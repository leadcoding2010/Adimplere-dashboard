<template>
  <div class="container">
    <h5 class="mt-5 mb-5 ml-0 ml-lg-5 text-blue">Detalhes Acordo</h5>
    <div class="row justify-content-center">
      <table class="table table-borderless rounded-top-12px text-center col-12 col-lg-9">
        <thead class="thead-blue">
          <tr class="w-100">
            <th colspan="4" scope="col" class="h4 text-right pr-5 pt-4 pb-4">Em andamento</th>
          </tr>
          <tr>
            <th scope="col">Formalizado</th>
            <th scope="col">Parcelado em</th>
            <th scope="col">Valor</th>
            <th scope="col">Valor parcela</th>
          </tr>
          <tr class="small">
            <th class="font-weight-normal" scope="col">1/01/2020"</th>
            <th class="font-weight-normal" scope="col">10 vezes</th>
            <th class="font-weight-normal" scope="col">R$ 440,00</th>
            <th class="font-weight-normal" scope="col">R$ 44,00</th>
          </tr>
        </thead>
        <tbody class="text-muted table-shadow">
          <tr>
            <td>Installment No.</td>
            <td>Due date</td>
            <td>Value</td>
            <td>Pago em</td>
          </tr>
          <tr v-for="(installment, index) in installments" :key="index" class="small">
            <td>{{ index+1 }}</td>
            <td>{{ installment.due_date }}</td>
            <td class="text-blue-muted">{{ installment.value }}</td>
            <td>{{ installment.payment_date }}</td>
          </tr>
        </tbody>
      </table>
      <div class="col-12 text-center">
        <button class="btn btn-mint btn-lg rounded-pill text-white mt-3 mb-3 pl-5 pr-5">Boleto</button>
      </div>
      <div class="col-12 text-center">
        <a class="small" href="#">Linha digitável</a>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      installments: [
        {
          due_date: '16/12/2019',
          value: 'R$ 220,00',
          payment_date: '17/12/2019'
        },
        {
          due_date: '16/12/2019',
          value: 'R$ 110,00',
          payment_date: '17/12/2019'
        },
        {
          due_date: '16/12/2019',
          value: 'R$ 110,00',
          payment_date: '17/12/2019'
        }
      ]
    }
  }
}
</script>
