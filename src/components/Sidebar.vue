<template lang="html">
<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
  <a class="navbar-brand">
    <span class="d-block d-lg-none"></span>
    <span class="d-none d-lg-block">
      <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../../static/profile.jpg" alt="">
    </span>
  </a>
  <button class="navbar-toggler" @click="hideNavBar = !hideNavBar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div :class="['navbar-collapse', { 'collapse': hideNavBar }]" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item" v-for="(item, index) in navLinks" :key="index">
        <router-link :class="['nav-link', { 'active': currentRoute === item.to }]" :to="item.to">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script lang="js">
import router from '../router'
export default {
  name: 'sidebar',
  props: [],
  created () {
    this.currentRoute = router.currentRoute.name
  },
  data () {
    return {
      hideNavBar: true,
      navLinks: [
        {
          title: 'Обо мне',
          to: '/'
        },
        {
          title: 'Навыки',
          to: 'skills'
        },
        {
          title: 'Достижения',
          to: 'achievements'
        },
        {
          title: 'Обратная связь',
          to: 'contacts'
        }
      ],
      currentRoute: null
    }
  },
  methods: {},
  computed: {},
  watch: {
    '$route' (to, from) {
      this.currentRoute = to.name
      this.hideNavBar = true
    }
  }
}
</script>

<style scoped lang="scss">
</style>
