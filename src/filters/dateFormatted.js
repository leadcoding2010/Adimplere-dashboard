import Vue from 'vue'

Vue.filter('dateFormatted', function (date) {
  if (!date) return ''
  let d = new Date(Date.parse(date))
  return d.getDate() + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear()
})
