<template>
  <div id="app" class="main-container">
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import router from './router'
import Loading from 'vue-loading-overlay'
import { EventBus, Events } from './events'
export default {
  name: 'App',
  created () {
    this.currentRoute = router.currentRoute.name
    EventBus.$on(Events.SHOW_LOADING, () => { this.loading = true })
    EventBus.$on(Events.HIDE_LOADING, () => { this.loading = false })
  },
  components: {
    'Main-header': Header,
    'Sidebar': Sidebar,
    'Loading': Loading
  },
  data () {
    return {
      currentRoute: null,
      loading: false
    }
  },
  watch: {
    '$route' (to, from) {
      this.currentRoute = to.name
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
