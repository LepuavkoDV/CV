<template>
  <div id="app" class="main-container">
    <Main-header></Main-header>
    <Sidebar></Sidebar>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
export default {
  name: 'App',
  components: {
    'Main-header': Header,
    'Sidebar': Sidebar
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
