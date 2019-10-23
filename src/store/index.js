import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import apiService from '../service/apiService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `bearer ${
        userData.token
      }`
    },
    CLEAR_USER_DATA (state) {
      state.user = null
      localStorage.removeItem('user')
      location.reload()
    },
    FETCH_USER_DATA (state, user) {
      state.user = user
      axios.defaults.headers.common['Authorization'] = `bearer ${
        user.token
      }`
    }
  },
  actions: {
    register ({ commit }, { email, password }) {
      // console.log(...arguments)
      return axios({
        method: 'post',
        url: 'https://sandbox.d.greeninvoice.co.il/api/v1/account/login',
        data: {
          email,
          password
        },
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.VUZndHRzQzN6Ym4vVG1YL2JFWEVjUnlNMzZKNXpaN3BYQWdZQmxjcUg1Sjh4V1ZFQnk3a3daRVdaY3dIYVluMDJvT1dhVkNiR2wySktpeis3K1VJN1FaRjFpYjhEcTJyUElYc1NTb2FNNG5BUExGcTBvWXRnelNuQlNBVDk3RVhlZVZyaWpTYVJUUnBzNEpoZVd6Z3pKdlF5Vml4Q212UG1XTzA2OVoyN1lHV1l4Y21kSy9RNEpVVytiY3lqeTc5aDZkemJUWUlRSXFJRWlZZXFZZTdxcTJPdFp1VDNDRWJGeGRkWi9WYSt4RS9ya2tjbmRTU0Z0c3NPK1drT0NMTQ.Nr-yVUzJhjb0OfFpqikORxZom_l0DV4JpXM4YFOyTUo`,
          'Content-Type': 'application/json'
        }
      })
        .then(
          ({
            data
          }) => {
            console.log('D A T A', data)
            commit('SET_USER_DATA', data)
          }
        )
    },
    FetchUsers ({ commit }) {
      apiService.getUserInfo()
        .then(response => {
          console.log(response.data)
          commit('FETCH_USER_DATA', response.data)
        })
        .catch(error => {
          console.log(' FetchUsers there is an error', error.response)
        })
    },
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  modules: {}
})
