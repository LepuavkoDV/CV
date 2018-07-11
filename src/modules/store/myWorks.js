import axios from 'axios'

const state = {
  myWorks: null
}

const mutations = {
  LOAD_MY_WORKS (state, data) {
    state.myWorks = data
  }
}

const actions = {
  loadMyWorks: ({commit, dispatch}) => {
    return axios.get(process.env.API_ENDPOINT + process.env.API_VERSION + '/my-works').then(res => {
      commit('LOAD_MY_WORKS', res.data)
      dispatch('hideLoading')
    })
  },
  addMyWork: ({dispatch}, data) => {
    return axios.post(process.env.API_ENDPOINT + process.env.API_VERSION + '/my-work', data).then(res => {
      dispatch('loadMyWorks')
    })
  }
}

export default {
  state, mutations, actions
}
