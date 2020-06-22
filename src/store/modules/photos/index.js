import apiClient from '@/lib'
import { ALL_PIX, CURATED_PHOTOS, SEARCH, SINGLE_PHOTO } from '../mutation-types'
const state = () => ({
  search: '',
  photos: [],
  singlePhoto: {},
  curatedPhotos: [],
})
const mutations = {
  [ALL_PIX](state, photos) {
    state.photos = photos
  },
  [SEARCH](state, query) {
    state.search = query
  },
  [SINGLE_PHOTO](state, id) {
    state.singlePhoto = id
  },
  [CURATED_PHOTOS](state, items) {
    state.curatedPhotos = items
  },
}

const getters = {
  getPhotoById: state => id => state.photos.find(photo => photo.id === id),
}

const actions = {
  async searchedTerm({ commit }, query) {
    commit(SEARCH, query)
    if (query.length) {
      const {
        data: { photos },
      } = await apiClient.get('/v1/search', {
        params: {
          page: 2,
          per_page: 16,
          locale: 'fr-FR' || 'en-US',
          query: query,
        },
      })
      commit(ALL_PIX, photos)
    }
  },
  async getSinglePhoto({ commit, getters }, id) {
    console.log('SinglePhoto has been called')
    const photo = await getters.getPhotoById(id)
    if (photo) {
      commit(SINGLE_PHOTO, photo)
    } else {
      console.log('we need to fetch papi')
    }
  },
  async curated({ commit }) {
    console.log('currated is running')
    const { data } = await apiClient.get('/v1/curated', {
      params: {
        per_page: 8,
      },
    })
    commit(CURATED_PHOTOS, data)
  },
}

export default { namespaced: true, state, getters, mutations, actions }
