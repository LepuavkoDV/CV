import Vue from 'vue'
import Router from 'vue-router'
import About from '../../pages/About'
import Skills from '../../pages/Skills'
import MyWorks from '../../pages/MyWorks'
import ContactMe from '../../pages/ContactMe'
import p404 from '../../pages/p404'
import Login from '../../pages/auth/Login'
import Dashboard from '../../pages/admin/Dashboard'

import { RestrictedAccessGuard } from './guards'

Vue.use(Router)

const routes = [
  { path: '/', name: '/', component: About },
  { path: '/my-skills', name: 'my-skills', component: Skills },
  { path: '/my-works', name: 'my-works', component: MyWorks },
  { path: '/contact-me', name: 'contact-me', component: ContactMe },
  { path: '/login', name: 'login', component: Login },
  { path: '/dashboard', name: 'dashboard', component: Dashboard, beforeEnter: RestrictedAccessGuard },
  { path: '/*', name: '404', component: p404 }
]

export default new Router({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
