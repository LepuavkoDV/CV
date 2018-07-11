const state = {
  loading: true
}

const mutations = {
  SHOW_LOADING (state) {
    state.loading = true
  },
  HIDE_LOADING (state) {
    state.loading = false
  }
}

const actions = {
  showLoading: ({commit}) => {
    commit('SHOW_LOADING')
  },
  hideLoading: ({commit, rootState}) => {
    if (rootState.content.content !== null && rootState.myWorks.myWorks !== null && rootState.skills.groups !== null) {
      commit('HIDE_LOADING')
    }
  }
}

export default {
  state, mutations, actions
}
