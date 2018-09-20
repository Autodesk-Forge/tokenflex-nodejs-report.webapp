import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contractNumber: null,
    isUserLoggedIn: false,
    user: {
      fullName: null,
      picture: null
    }
  },
  mutations: {
    setContractNumber (state, contractNumber) {
      state.contractNumber = contractNumber
    },
    setUser (state, user) {
      state.user = user
    },
    setUserFullName (state, fullName) {
      state.user.fullName = fullName
    },
    setUserPicture (state, pictureUri) {
      state.user.picture = pictureUri
    }
  },
  actions: {
    setContractNumber ({ commit }, contractNumber) {
      commit('setContractNumber', contractNumber)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    },
    setUserFullName ({ commit }, fullName) {
      commit('setUserFullName', fullName)
    },
    setUserPicture ({ commit }, pictureUri) {
      commit('setUserPicture', pictureUri)
    }
  }
})
