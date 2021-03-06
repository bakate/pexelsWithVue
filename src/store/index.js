import Vue from 'vue'
import Vuex from 'vuex'
import photos from './modules/photos'
import user from './modules/user'
import videos from './modules/videos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    photos,
    videos,
    user,
  },
  state: {
    informations: [
      { icon: 'mdi-home', text: 'Home', route: 'home' },
      { icon: 'mdi-camera-enhance', text: 'photos', route: 'photos' },
      { icon: 'mdi-video-vintage', text: 'videos', route: 'videos' },
    ],
  },
  mutations: {},
  // actions: {},
  // modules: {}
})
