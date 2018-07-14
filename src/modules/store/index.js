import Vue from 'vue'
import Vuex from 'vuex'
import skills from './skills'
import groups from './groups'
import myWorks from './myWorks'
import content from './content'
import app from './app'
import user from './user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    skills,
    groups,
    myWorks,
    content,
    app,
    user
  },
  strict: debug
})
