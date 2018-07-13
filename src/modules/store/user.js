import axios from 'axios'
import Auth from '../utils/auth'

const state = {
  user: null,
  token: null
}

const mutations = {
  SET_USER (state, data) {
    state.user = data
    window.localStorage.setItem('user', data)
  },
  SET_TOKEN (state, data) {
    state.token = data
    window.localStorage.setItem('token', data)
  },
  CLEAR_USER (state) {
    state.user = null
    window.localStorage.removeItem('user')
  },
  CLEAR_TOKEN (state) {
    state.token = null
    window.localStorage.removeItem('token')
  }
}

const actions = {
  login: ({commit, dispatch}, data) => {
    return axios.post(process.env.API_ENDPOINT + '/auth/login', data).then(res => {
      if (res.status !== 200) {
        //
      } else {
        commit('SET_USER', res.data.user)
        commit('SET_TOKEN', res.data.token)
      }
    })
  },
  register: ({commit, dispatch}, data) => {
    return axios.post(process.env.API_ENDPOINT + '/auth/register', data).then(res => {
      console.log(res)
    })
  },
  logout: ({commit}) => {
    commit('CLEAR_USER')
    commit('CLEAR_TOKEN')
  },
  loadUserInfo: ({commit}) => {
    if (Auth.isAuthenticated()) {
      commit('SET_USER', window.localStorage.getItem('user'))
      commit('SET_TOKEN', window.localStorage.getItem('token'))
    }
  }
}

export default {
  state, mutations, actions
}
