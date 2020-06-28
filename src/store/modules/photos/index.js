import apiClient from '@/lib'
import {
  ALL_PIX,
  CURATED_PHOTOS,
  SEARCH,


  SET_FAVORITE, SET_PAGE,
  SINGLE_PHOTO
} from '../mutation-types'

const captains = el => console.log(el)

const state = () => ({
  search: '',
  photos: [],
  singlePhoto: {},
  curatedPhotos: [],
  favorites: [],
  perPage: 9,
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
  [SET_FAVORITE](state, photo) {
    state.page = [...state, photo]
  },
}

const getters = {
  getPhotoById: state => id => state.photos.find(photo => photo.id === id),
  getCuratedPhotoById: state => id => state.curatedPhotos.find(photo => photo.id === id),
}

const actions = {
  async searchedTerm({ commit, state }, query) {
    try {
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
    } catch (error) {
      captains(error)
    }
  },
  async setPage({ commit }, page) {
    commit(SET_PAGE, page)
  },
  async getSinglePhoto({ commit, getters }, id) {
    try {
      const photo = await getters.getPhotoById(id)
      const curatedOne = await getters.getCuratedPhotoById(id)
      if (photo || curatedOne) {
        commit(SINGLE_PHOTO, photo || curatedOne)
        return photo || curatedOne
      } else {
        console.log('we need to fetch papi')
      }
    } catch (error) {
      captains(error)
    }
  },
  async curated({ commit, state }, page) {
    try {
      captains({ page })
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
    } catch (error) {
      captains(error)
    }
  },
}

export default { namespaced: true, state, getters, mutations, actions }
