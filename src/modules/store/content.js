import axios from 'axios'
import _ from 'lodash'
import Auth from '../utils/auth'

const state = {
  content: [],
  list: null
}

const mutations = {
  SET_PAGE_CONTENT (state, data) {
    _.each(data, (item) => {
      state.content = _.reject(state.content, (o) => {
        return o.page === item.page && o.section === item.section
      })
      state.content.push(item)
    })
  },
  LOAD_CONTENTS (state, data) {
    state.list = data
  }
}

const getters = {
  getSectionContent: state => (page, section) => {
    let item = _.find(state.content, (o) => {
      return o.page === page && o.section === section
    })
    if (item !== undefined) {
      return item.content
    }
  },
  getContentById: (state) => (id) => {
    let item = _.find(state.list, (o) => {
      return o._id === id
    })
    if (item !== undefined) {
      return item
    }
  }
}

const actions = {
  getContentList: ({commit, dispatch}) => {
    return axios.get(process.env.API_ENDPOINT + process.env.API_VERSION + '/contents').then(res => {
      commit('LOAD_CONTENTS', res.data)
      dispatch('hideLoading')
    })
  },
  getPageContents: ({commit, dispatch}, page) => {
    return axios.get(process.env.API_ENDPOINT + process.env.API_VERSION + '/content/' + page).then(res => {
      commit('SET_PAGE_CONTENT', res.data)
      dispatch('hideLoading')
    })
  },
  addPageContent: ({dispatch}, data) => {
    dispatch('showLoading')
    return axios.post(process.env.API_ENDPOINT + process.env.API_VERSION + '/content', data, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('getPageContents', data.page)
      dispatch('getList')
    })
  },
  editPageContent: ({dispatch}, data) => {
    dispatch('showLoading')
    return axios.put(process.env.API_ENDPOINT + process.env.API_VERSION + '/content', data, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('getList')
    })
  },
  removePageContent: ({dispatch}, id) => {
    dispatch('showLoading')
    return axios.delete(process.env.API_ENDPOINT + process.env.API_VERSION + '/content/' + id, {
      headers: Auth.getJWTAuthHeaders()
    }).then(res => {
      dispatch('getList')
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
