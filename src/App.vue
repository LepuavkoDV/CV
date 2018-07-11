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
import router from './modules/router'
import Loading from 'vue-loading-overlay'
import { mapState } from 'vuex'
export default {
  name: 'App',
  beforeMount () {
    this.$store.dispatch('getPageContents', 'about')
    this.$store.dispatch('loadGroups')
    this.$store.dispatch('loadMyWorks')
  },
  created () {
    this.currentRoute = router.currentRoute.name
  },
  components: {
    'Sidebar': Sidebar,
    'Loading': Loading
  },
  data () {
    return {
      currentRoute: null
    }
  },
  computed: {
    ...mapState({
      loading: state => state.app.loading
    })
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
