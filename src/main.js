import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    const userStr = localStorage.getItem('user')
    if (userStr) {
      const userData = JSON.parse(userStr)
      this.$store.commit('SET_USER_DATA', userData)
    }
  },
  render: h => h(App)
}).$mount('#app')
