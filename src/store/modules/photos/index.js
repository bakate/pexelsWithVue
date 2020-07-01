import apiClient from '@/lib'
import {
  ADD_FAVORITE,
  ALL_PIX,
  CURATED_PHOTOS,
  REMOVE_FAVORITE,
  SEARCH,
  SET_PAGE,
  SINGLE_PHOTO,
  TOGGLE_FAVORITE
} from '../mutation-types'

const captains = el => console.log(el)
function dataFromLS() {
  const data = localStorage.getItem('photos')
  return data ? JSON.parse(data) : []
}
captains(dataFromLS())

const state = () => ({
  search: '',
  photos: [],
  singlePhoto: {},
  favorites: dataFromLS(),
  perPage: 10,
  page: 1,
  isLoading: false,
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
    state.photos = items
  },
  [SET_PAGE](state, newPage) {
    state.page = newPage
  },
  // [TOGGLE_FAVORITE](state, photo) {
  //   state.favorites = [...state, photo]
  // },
  [ADD_FAVORITE](state, photo) {
    state.favorites = [...state.favorites, photo]
  },
  [REMOVE_FAVORITE](state, photo) {
    state.favorites = photo
  },
}

const getters = {
  getPhotoById: state => id => state.photos.find(photo => photo.id === id),
  serialize: state => [...new Set(state.favorites)],
}

const actions = {
  async searchedTerm({ commit, state }, query) {
    try {
      commit(SEARCH, query)
      if (query.length) {
        state.isLoading = true
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
        state.isLoading = false
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

      if (photo) {
        commit(SINGLE_PHOTO, photo)
        return photo
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
      state.isLoading = true
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
      state.isLoading = false
      return photos
    } catch (error) {
      captains(error)
    }
  },
  toggleFavoriteAction({ commit }, id) {
    commit(TOGGLE_FAVORITE, id)
  },
  addFavoriteAction({ commit, state, getters }, id) {
    const newPhoto = getters.getPhotoById(id)
    newPhoto.liked = !newPhoto.liked

    commit(ADD_FAVORITE, newPhoto)
    localStorage.setItem('photos', JSON.stringify([...new Set(state.favorites)]))
  },
  removeFavoriteAction({ commit, state }, id) {
    const removedPhoto = state.favorites.filter(photo => photo.id !== id)
    commit(REMOVE_FAVORITE, removedPhoto)
    localStorage.setItem('photos', JSON.stringify(removedPhoto))
  },
}

export default { namespaced: true, state, getters, mutations, actions }
