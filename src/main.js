import BaseButton from '@/components/BaseButton'
import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './assets/nprogress.css'
import i18n from './i18n'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.component('BaseButton', BaseButton)

const requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')))

  Vue.component(componentName, componentConfig.default || componentConfig)
})
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  data() {
    return {
      toggle: false,
    }
  },
  render: h => h(App),
}).$mount('#app')
