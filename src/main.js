import BaseButton from '@/components/BaseButton'
import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'
import Vue from 'vue'
import App from './App.vue'
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

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
