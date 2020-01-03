<template>
  <div class="container">
    <h5 class="mt-5 mb-5 ml-0 ml-lg-5 text-blue font-weight-normal">Detalhes Acordo</h5>
    <div v-if="boletos.length > 0" class="row justify-content-center">
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
            <th class="font-weight-normal" scope="col">{{ boletos[0].generated_at | dateFormatted }}"</th>
            <th class="font-weight-normal" scope="col">{{ boletos.length }} vezes</th>
            <th class="font-weight-normal" scope="col">R$ {{ sumValue() | moneyFormatted }}</th>
            <th class="font-weight-normal" scope="col">R$ {{ averageValue() | moneyFormatted }}</th>
          </tr>
        </thead>
        <tbody class="text-muted table-shadow">
          <tr>
            <td>Installment No.</td>
            <td>Due date</td>
            <td>Value</td>
            <td>Pago em</td>
          </tr>
          <tr v-for="(boleto, index) in boletos" :key="index" class="small">
            <td>{{ boleto.installment }}</td>
            <td>{{ boleto.due_date | dateFormatted }}</td>
            <td class="text-blue-muted">R$ {{ boleto.value | moneyFormatted }}</td>
            <td>{{ boleto.generated_at | dateFormatted }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="doBoletoAvailable()" class="col-12 text-center">
        <button @click="getPdf()" class="btn btn-mint btn-lg rounded-pill text-white mt-3 mb-3 pl-5 pr-5">Boleto</button>
      </div>
      <div v-if="doBoletoAvailable()" class="col-12 text-center">
        <a class="small" @click.prevent="getBoletoCode()" href="#"><u>Linha digitável</u></a>
      </div>
      <div v-if="!doBoletoAvailable()" class="col-12 text-center">
        Não disponível
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Details',
  data () {
    return {
      dealId: false,
      boletos: []
    }
  },

  methods: {
    sumValue: function () {
      return this.boletos.reduce((sum, { value }) => sum + value, 0)
    },
    averageValue: function () {
      return this.sumValue() / this.boletos.length
    },
    getPdf: function () {
      let boleto = this.boletos[this.boletos.length - 1]
      if (boleto.displayable_code !== null) {
        axios.get('/boleto/' + boleto.id + '/binary')
          .then(response => {
            let fileURL = window.URL.createObjectURL(new Blob([response.data], {type: 'application/pdf'}))
            let fileLink = document.createElement('a')
            fileLink.href = fileURL
            fileLink.setAttribute('download', 'boleto_' + boleto.id + '.pdf')
            document.body.appendChild(fileLink)
            fileLink.click()
          })
          .catch(error => {
            if (error.response.status === 400) {
              console.log(error.response.data.error.message)
            }
          })
      }
    },
    getBoletoCode: function () {
      let displayableCode = this.boletos[this.boletos.length - 1].displayable_code
      if (displayableCode) {
        let el = document.createElement('input')
        el.setAttribute('value', displayableCode)
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left = '-9999px'
        document.body.appendChild(el)
        const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
        el.select()
        el.setSelectionRange(0, 99999)
        document.execCommand('copy')
        document.body.removeChild(el)
        if (selected) {
          document.getSelection().removeAllRanges()
          document.getSelection().addRange(selected)
        }
      }
    },
    doBoletoAvailable: function () {
      return this.boletos[this.boletos.length - 1].displayable_code !== null
    }
  },

  mounted () {
    this.dealId = window.location.href.match(/\d+$/)[0]
    if (this.dealId) {
      axios.get('/deal/' + this.dealId + '/boletos')
        .then(response => (this.boletos = response.data))
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
