import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    CLEAR_USER_DATA () {
      localStorage.removeItem('user')
      location.reload()
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
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.VUZndHRzQzN6Ym4vVG1YL2JFWEVjUnlNMzZKNXpaN3BYQWdZQmxjcUg1SW9KU29EUHE4TllYMXkvcDFkZnNzQytPZ2RuWGR3WFQvR0ZrUG5GMzAvSWJwZFJWVm9kWUVBV0lOUlZoQ2NFUFkrc2tkVG9ia3hzd1hDYVNmVnY5RnlRdTBLRThBbEQ3QlgxZkdSQ0dGb2c1Q0MrdktNbFQwUk5ET1pLdHVlWWRsTnFCS2FlRTk3clVnSTltSjVRTllHN3lWQUxIbkdNN1JxajNsd0E3d2Q1cnRzY1N6eHRVbTd0WWhjVVBmais5Z0RHV2dsMUIyangzUGtqUUM2TS9YWg.0sQjU1_lZ5EIvD_eUBM4pwVp6zOD5PFcWZwrsRwWMyg`,
          'Content-Type': 'application/json'
        }
      })
        .then(
          ({ data }) => {
            console.log('D A T A', data)
            commit('SET_USER_DATA', data)
          }
        )
    },
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  modules: {
  }
})
