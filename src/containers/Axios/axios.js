import axios from 'axios'

export default axios.create({
  baseURL: 'http://portfoloi.api:3003/'
})