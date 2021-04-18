import Vue from 'vue'
import App from './App'
import router from './modules/router'
import store from './modules/store'

import '../node_modules/bootstrap/dist/js/bootstrap.js'

import ProgressBar from 'vue-progressbar-component'

import { Table, TableColumn, Button, Pagination, InputNumber, Select, Option, MessageBox, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import { DataTables } from 'vue-data-tables'
Vue.component('progress-bar', ProgressBar)
locale.use(lang)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Pagination)
Vue.use(InputNumber)
Vue.use(Select)
Vue.use(Option)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
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
