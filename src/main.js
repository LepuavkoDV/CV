// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable import/first */
import Vue from 'vue'
import App from './App'
import router from './modules/router'
import store from './modules/store'

import '../node_modules/bootstrap/dist/js/bootstrap.js'

import ProgressBar from 'vue-progressbar-component'
Vue.component('progress-bar', ProgressBar)

import Notifications from 'vue-notification'
Vue.use(Notifications)

// import ElementUI from 'element-ui'
import { Table, TableColumn, Button, Pagination } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Pagination)

import { DataTables } from 'vue-data-tables'
Vue.use(DataTables)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
