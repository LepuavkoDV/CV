import axios from 'axios'
import _ from 'lodash'

const state = {
  content: []
}

const mutations = {
  SET_PAGE_CONTENT (state, data) {
    _.each(data, (item) => {
      state.content = _.filter(state.content, (o) => {
        return o.page !== item.page && o.section !== item.section
      })
      state.content.push(item)
    })
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
  }
}

const actions = {
  getPageContents: ({commit}, page) => {
    return axios.get(process.env.API_ENDPOINT + process.env.API_VERSION + '/content/' + page).then(res => {
      commit('SET_PAGE_CONTENT', res.data)
    })
  },
  addPageContent: ({dispatch}, data) => {
    return axios.post(process.env.API_ENDPOINT + process.env.API_VERSION + '/content', data).then(res => {
      dispatch('getPageContents', data.page)
    })
  }
}

export default {
  state, mutations, actions, getters
}
