import axios from 'axios'
import env from '../env'

const state = {
  groups: null
}

const mutations = {
  LOAD_GROUPS (state, data) {
    state.groups = data
  }
}

const actions = {
  loadGroups: ({commit}) => {
    return axios.get(env.apiEndpoint + '/api/v1/groups').then(res => {
      commit('LOAD_GROUPS', res.data)
    })
  }
}

export default {
  state, mutations, actions
}
