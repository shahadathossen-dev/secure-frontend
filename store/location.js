export const state = () => ({
  location: {}
})

export const getters = {
  getState(state) {
    return state.location
  }
}

export const mutations = {
  SET_LOCATION(state, location) {
    state.location = location
  }
}

export const actions = {
  setState({ commit }, location) {
    commit("SET_LOCATION", location)
  },
  clearState({ commit }) {
    commit("SET_LOCATION", {})
  }
}
