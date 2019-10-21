import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://www.greeninvoice.co.il/api-docs#/reference/users/get-user-info/get-user-info',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getData () {
    return apiClient.get('/dashboard')
  }
}
