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
  },
  addGroup: ({dispatch}, data) => {
    console.log(data)
    return axios.post(env.apiEndpoint + '/api/v1/group', data).then(res => {
      dispatch('loadGroups')
    })
  },
  addSkill: ({dispatch}, data) => {
    return axios.post(env.apiEndpoint + '/api/v1/skill', data).then(res => {
      dispatch('loadGroups')
    })
  }
}

export default {
  state, mutations, actions
}
