import Vue from 'vue'
import Router from 'vue-router'
import SkillsAndTech from '../pages/SkillsAndTech'
import Achievements from '../pages/Achievements'
import Expectations from '../pages/Expectations'
import Contacts from '../pages/Contacts'
import Admin from '../admin/Admin'
import PageNotFound from '../pages/PageNotFound'

Vue.use(Router)

const routes = [
  { path: '/', name: '/', component: SkillsAndTech },
  { path: '/achievements', name: 'achievements', component: Achievements },
  { path: '/expectations', name: 'expectations', component: Expectations },
  { path: '/contacts', name: 'contacts', component: Contacts },
  { path: '/admin', name: 'admin', component: Admin },
  { path: '/*', name: 'pageNotFound', component: PageNotFound }
]

export default new Router({
  routes,
  mode: 'history'
})
