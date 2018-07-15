import axios from 'axios'
import Auth from '../utils/auth'
import _ from 'lodash'

const state = {
  myWorks: null
}

const mutations = {
  LOAD_MY_WORKS (state, data) {
    state.myWorks = data
  }
}

const getters = {
  getMyWorkById: (state) => (id) => {
    let item = _.find(state.myWorks, (o) => {
      return o._id === id
    })
    if (item !== undefined) {
      return item
    }
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
    dispatch('showLoading')
    return axios.post(process.env.API_ENDPOINT + process.env.API_VERSION + '/my-work', data, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('loadMyWorks')
    })
  },
  editMyWork: ({dispatch}, data) => {
    dispatch('showLoading')
    return axios.put(process.env.API_ENDPOINT + process.env.API_VERSION + '/my-work', data, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('loadMyWorks')
    })
  },
  removeMyWork: ({dispatch}, id) => {
    dispatch('showLoading')
    return axios.delete(process.env.API_ENDPOINT + process.env.API_VERSION + '/my-work/' + id, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('loadMyWorks')
    })
  }
}

export default {
  state, mutations, actions, getters
}
