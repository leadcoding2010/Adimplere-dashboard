import axios from 'axios'

let getUser = function () {
  return new Promise((resolve, reject) => {
    axios.get('/customers/portal/current')
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export default getUser
