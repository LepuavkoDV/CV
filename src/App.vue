<template>
  <div id="app" class="main-container">
    <Main-header></Main-header>
    <Sidebar v-show="currentRoute !== 'pageNotFound'"></Sidebar>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import router from './router'
export default {
  name: 'App',
  components: {
    'Main-header': Header,
    'Sidebar': Sidebar
  },
  data () {
    return {
      currentRoute: router.currentRoute.name
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
