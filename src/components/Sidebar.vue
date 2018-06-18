<template lang="html">
<section class="sidebar">
  <ul class="sidebar__nav">
    <li v-for="(item, index) in navLinks" :key="index" :class="{ 'active' : currentRoute === item.to }">
      <router-link v-bind:to="item.to">{{item.title}}</router-link>
    </li>
  </ul>
  <div class="sidebar__copy">2018 ©</div>
</section>
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
          title: 'Контакты',
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
    }
  }
}
</script>

<style scoped lang="scss">
</style>
