import axios from 'axios'
import _ from 'lodash'
import Auth from '../utils/auth'

const state = {
  groups: null
}

const mutations = {
  LOAD_GROUPS (state, data) {
    state.groups = data
  }
}

const getters = {
  getGroupById: (state) => (id) => {
    let item = _.find(state.groups, (o) => {
      return o._id === id
    })
    if (item !== undefined) {
      return item
    }
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
    dispatch('showLoading')
    return axios.post(process.env.API_ENDPOINT + process.env.API_VERSION + '/groups', data, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('loadGroups')
    })
  },
  editGroup: ({dispatch}, data) => {
    dispatch('showLoading')
    return axios.put(process.env.API_ENDPOINT + process.env.API_VERSION + '/groups/' + data._id, data, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('loadGroups')
    })
  },
  removeGroup: ({dispatch}, id) => {
    dispatch('showLoading')
    return axios.delete(process.env.API_ENDPOINT + process.env.API_VERSION + '/groups/' + id, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('loadGroups')
    })
  }
}

export default {
  state, mutations, actions, getters
}
