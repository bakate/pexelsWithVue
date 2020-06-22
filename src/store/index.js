import Vue from 'vue'
import Vuex from 'vuex'
import photos from './modules/photos'
import videos from './modules/videos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    photos,
    videos,
  },
  state: {
    informations: [
      { icon: 'mdi-house', text: 'Home', route: 'home' },
      { icon: 'mdi-photos', text: 'photos', route: 'photos' },
      { icon: 'mdi-camera', text: 'videos', route: 'videos' },
    ],
  },
  mutations: {},
  // actions: {},
  // modules: {}
})
