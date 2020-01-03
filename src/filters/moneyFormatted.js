import Vue from 'vue'

Vue.filter('moneyFormatted', function (value) {
  if (!value) return ''
  return (value / 1).toFixed(2).replace('.', ',').toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
})
