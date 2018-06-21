// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './modules/router'
import store from './modules/store'

import '../node_modules/bootstrap/dist/js/bootstrap.js'

import ProgressBar from 'vue-progressbar-component'
import Notifications from 'vue-notification'

Vue.component('progress-bar', ProgressBar)
Vue.use(Notifications)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
