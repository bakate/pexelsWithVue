import { auth } from '@/firebase'
import router from '@/router'
import { SET_ERROR, SET_USER } from '../mutation-types'

const state = () => ({
  user: null,
  error: null,
})
const mutations = {
  [SET_USER](state, payload) {
    state.user = payload
  },
  [SET_ERROR](state, payload) {
    state.error = payload
  },
}

const getters = {
  getUser(state) {
    return state.user
  },
  isUserAuth(state) {
    return !!state.user
  },
  getError(state) {
    return state.error
  },
}

const actions = {
  async authAction({ commit }) {
    await auth.onAuthStateChanged(user => {
      if (user) {
        commit(SET_USER, user)
        return user
      } else {
        commit(SET_USER, null)
      }
    })
  },
  async signupAction({ commit }, { email, password }) {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password)
      router.push({ name: 'dashboard' })
      return res
    } catch (error) {
      console.error(error.message)
      commit(SET_ERROR, error.message)
    }
  },
  async loginAction({ commit }, { email, password }) {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password)
      router.push({ name: 'dashboard' })
      return res
    } catch (error) {
      console.error(error.message)
      commit(SET_ERROR, error.message)
    }
  },
  async signOutAction({ commit }) {
    try {
      await auth.signOut()
      commit(SET_USER, null)
    } catch (error) {
      commit(SET_ERROR, error.message)
    }
  },
}

export default { namespaced: true, state, getters, mutations, actions }
