import Vue from 'vue'
import Vuex from 'vuex'
import skills from './skills'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    skills
  },
  strict: debug
})
