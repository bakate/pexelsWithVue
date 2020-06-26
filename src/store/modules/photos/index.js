import apiClient from '@/lib'
import { ALL_PIX, CURATED_PHOTOS, SEARCH, SET_PAGE, SINGLE_PHOTO } from '../mutation-types'
const state = () => ({
  search: '',
  photos: [],
  singlePhoto: {},
  curatedPhotos: [],
  perPage: 8,
  page: 1,
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
  [SET_PAGE](state, newPage) {
    state.page = newPage
  },
}

const getters = {
  getPhotoById: state => id => state.photos.find(photo => photo.id === id),
  getCuratedPhotoById: state => id => state.curatedPhotos.find(photo => photo.id === id),
}

const actions = {
  async searchedTerm({ commit, state }, query) {
    commit(SEARCH, query)
    if (query.length) {
      const {
        data: { photos },
      } = await apiClient.get('/v1/search', {
        params: {
          page: state.page,
          per_page: state.perPage,
          locale: 'fr-FR' || 'en-US',
          query: query,
        },
      })
      commit(ALL_PIX, photos)
      return photos
    }
  },
  async getSinglePhoto({ commit, getters }, id) {
    const photo = await getters.getPhotoById(id)
    const curatedOne = await getters.getCuratedPhotoById(id)
    if (photo || curatedOne) {
      commit(SINGLE_PHOTO, photo || curatedOne)
      return photo || curatedOne
    } else {
      console.log('we need to fetch papi')
    }
  },
  async curated({ commit, state }, page) {
    console.log(page)
    const {
      data: { photos },
    } = await apiClient.get('/v1/curated', {
      params: {
        page,
        per_page: state.perPage,
      },
    })
    commit(CURATED_PHOTOS, photos)
    commit(SET_PAGE, page)
    return photos
  },
}

export default { namespaced: true, state, getters, mutations, actions }
