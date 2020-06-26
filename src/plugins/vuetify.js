import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#457b9d',
        secondary: '#a8dadc',
        error: '#e63946',
      },
      dark: {
        primary: '#1d3557',
      },
    },
  },
})
