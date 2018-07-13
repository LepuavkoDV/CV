import axios from 'axios'
import Auth from '../utils/auth'

const state = {
  groups: null
}

const mutations = {
  LOAD_GROUPS (state, data) {
    state.groups = data
  }
}

const actions = {
  loadGroups: ({commit, dispatch}) => {
    return axios.get(process.env.API_ENDPOINT + process.env.API_VERSION + '/groups').then(res => {
      commit('LOAD_GROUPS', res.data)
      dispatch('hideLoading')
    })
  },
  addGroup: ({dispatch}, data) => {
    return axios.post(process.env.API_ENDPOINT + process.env.API_VERSION + '/group', data, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('loadGroups')
    })
  },
  addSkill: ({dispatch}, data) => {
    return axios.post(process.env.API_ENDPOINT + process.env.API_VERSION + '/skill', data, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('loadGroups')
    })
  }
}

export default {
  state, mutations, actions
}
