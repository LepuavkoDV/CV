import Vue from 'vue'
import Vuex from 'vuex'
import skills from './skills'
import myWorks from './myWorks'
import content from './content'
import app from './app'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    skills,
    myWorks,
    content,
    app
  },
  strict: debug
})
