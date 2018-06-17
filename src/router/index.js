import Vue from 'vue'
import Router from 'vue-router'
import About from '../pages/About'
import SkillsAndTech from '../pages/SkillsAndTech'
import Achievements from '../pages/Achievements'
import Contacts from '../pages/Contacts'
// import Admin from '../admin/Admin'
import PageNotFound from '../pages/PageNotFound'

Vue.use(Router)

const routes = [
  { path: '/', name: '/', component: About },
  { path: '/skills', name: 'skills', component: SkillsAndTech },
  { path: '/achievements', name: 'achievements', component: Achievements },
  { path: '/contacts', name: 'contacts', component: Contacts },
  // { path: '/admin', name: 'admin', component: Admin },
  { path: '/*', name: 'pageNotFound', component: PageNotFound }
]

export default new Router({
  routes,
  mode: 'history'
})
