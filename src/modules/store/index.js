import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const requireModule = require.context('.', false, /\.js$/)
const modules = {}
const debug = process.env.NODE_ENV !== 'production'

requireModule.keys().forEach(fileName => {
  // skip this file
  if (fileName === './index.js') return

  const moduleName = _.camelCase(fileName.replace(/(\.\/|\.js)/g, ''))

  modules[moduleName] = requireModule(fileName).default
})

export default new Vuex.Store({
  modules: modules,
  strict: debug
})
