<template lang="html">
<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
  <a class="navbar-brand">
    <span class="d-block d-lg-none"></span>
    <span class="d-none d-lg-block">
      <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../../static/profile.jpg" alt="">
    </span>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="navbar-collapse collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item" v-for="(item, index) in navLinks" :key="index">
        <router-link :class="['nav-link', { 'active': currentRoute === item.to }]" :to="item.to">{{item.title}}</router-link>
      </li>
      <li class="nav-item" v-if="user !== null">
        <router-link :class="['nav-link', { 'active': currentRoute === 'dashboard' }]" to="dashboard">Панель управления</router-link>
      </li>
      <li class="nav-item" v-if="user !== null">
        <a href="#" class="nav-link" @click.prevent="logout()">Выход</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script lang="js">
import router from '../modules/router'
import { mapState } from 'vuex'
export default {
  name: 'sidebar',
  props: [],
  created () {
    this.currentRoute = router.currentRoute.name
  },
  data () {
    return {
      navLinks: [
        {
          title: 'О себе',
          to: '/'
        },
        {
          title: 'Навыки',
          to: 'my-skills'
        },
        {
          title: 'Мои работы',
          to: 'my-works'
        },
        {
          title: 'Обратная связь',
          to: 'contact-me'
        }
      ],
      currentRoute: null
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      router.push({ path: '/login' })
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  watch: {
    '$route' (to, from) {
      this.currentRoute = to.name
      /* eslint-disable no-undef */
      $('.navbar-collapse').collapse('hide')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
