'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ENDPOINT: '"https://cors-anywhere.herokuapp.com/https://cliente.adimplere.com.br/api"',
  GTM_ID: '""'
})
