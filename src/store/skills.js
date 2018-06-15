import axios from 'axios'

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
    console.log(process.env.API_ENDPOINT)
    return axios.get(process.env.API_ENDPOINT + '/api/v1/groups').then(res => {
      commit('LOAD_GROUPS', res.data)
    })
  },
  addGroup: ({dispatch}, data) => {
    console.log(data)
    return axios.post(process.env.API_ENDPOINT + '/api/v1/group', data).then(res => {
      dispatch('loadGroups')
    })
  },
  addSkill: ({dispatch}, data) => {
    return axios.post(process.env.API_ENDPOINT + '/api/v1/skill', data).then(res => {
      dispatch('loadGroups')
    })
  }
}

export default {
  state, mutations, actions
}
