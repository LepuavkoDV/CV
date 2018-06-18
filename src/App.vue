<template>
  <div id="app" class="main-container">
    <loading :active.sync="loading"></loading>
    <notifications classes="my-notification" group="main" position="bottom center"/>
    <Sidebar></Sidebar>
    <div class="container-fluid p-0">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
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
