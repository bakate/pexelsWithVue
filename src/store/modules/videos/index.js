import apiClient from '@/lib'
import { ALL_VIDEOS, CURATED_VIDEOS, SINGLE_VIDEO } from '../mutation-types'

const state = () => ({
  videosArr: [],
  singleVideo: {},
})

const mutations = {
  [ALL_VIDEOS](state, videos) {
    state.videosArr = videos
  },
  [SINGLE_VIDEO](state, id) {
    state.singleVideo = id
  },
  [CURATED_VIDEOS](state, videos) {
    state.videosArr = videos
  },
}
const getters = {
  getVideoById: state => id => state.videosArr.find(video => video.id === id),
}

const actions = {
  async retrieveVideos({ commit, rootState }, searchTerm) {
    searchTerm = rootState.photos.search
    if (searchTerm.length) {
      rootState.photos.isLoading = true
      const {
        data: { videos },
      } = await apiClient.get('/videos/search', {
        params: {
          per_page: 16,
          locale: 'fr-FR' || 'en-US',
          min_width: 250,
          min_duration: 10,
          max_duration: 30,
          query: searchTerm,
        },
      })
      commit(ALL_VIDEOS, videos)
      rootState.photos.isLoading = false
      return videos
    }
  },
  async getCuratedVideos({ commit, rootState }) {
    rootState.photos.isLoading = true
    const {
      data: { videos },
    } = await apiClient.get('/videos/popular', {
      params: {
        per_page: 10,
        min_width: 250,
        min_height: 250,
        min_duration: 10,
        max_duration: 30,
      },
    })
    commit(CURATED_VIDEOS, videos)
    rootState.photos.isLoading = false
  },
  async getSingleVideo({ commit, getters }, id) {
    const alreadyPresent = await getters.getVideoById(id)

    if (alreadyPresent) {
      commit(SINGLE_VIDEO, alreadyPresent)
      return alreadyPresent
    } else {
      console.log('we need to fetch papi')
    }
  },
}

export default { namespaced: true, state, actions, mutations, getters }
