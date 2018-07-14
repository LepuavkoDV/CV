import axios from 'axios'
import _ from 'lodash'
import Auth from '../utils/auth'

const state = {
  skills: null
}

const mutations = {

  LOAD_SKILLS (state, data) {
    state.skills = data
  }
}

const getters = {
  getSkillById: (state) => (id) => {
    let item = _.find(state.skills, (o) => {
      return o._id === id
    })
    if (item !== undefined) {
      return item
    }
  }
}

const actions = {
  loadSkills: ({commit, dispatch}) => {
    return axios.get(process.env.API_ENDPOINT + process.env.API_VERSION + '/skills').then(res => {
      commit('LOAD_SKILLS', res.data)
      dispatch('hideLoading')
    })
  },
  addSkill: ({dispatch}, data) => {
    return axios.post(process.env.API_ENDPOINT + process.env.API_VERSION + '/skill', data, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('loadSkills')
    })
  },
  editSkill: ({dispatch}, data) => {
    dispatch('showLoading')
    return axios.put(process.env.API_ENDPOINT + process.env.API_VERSION + '/skill', data, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('loadSkills')
    })
  },
  removeSkill: ({dispatch}, id) => {
    dispatch('showLoading')
    return axios.delete(process.env.API_ENDPOINT + process.env.API_VERSION + '/skill/' + id, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('loadSkills')
    })
  }
}

export default {
  state, mutations, actions, getters
}
