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
@import '../assets/scss/variables';
@import '../assets/scss/round-corners';
.sidebar {
  @extend .border-radius-bottom;
  opacity: 0;
  grid-area: sidebar;
  background-color: $bgcolor;
  margin: -0.1em 1em 1em 0em;
  color: $light;
  box-shadow: 0px 1px 5px $primary;
  display: grid;
  grid-template-rows: 95% 5%;
  grid-template-areas:
    "nav"
    "copy";
  align-items: start;
  justify-items: center;
  border: 1px solid $primary;
  .sidebar__nav {
    margin-top: 1.5em;
    grid-area: nav;
    font-size: 1.2em;
    text-align: center;
    text-shadow: 0px 4px 4px $primary;
    li {
      @extend .border-radius-full;
      background-color: transparent;
      width: 100%;
      margin-left: -0.5em;
      padding: .5em .5em;
      margin-bottom: .5em;
      a {
        color: inherit;
        text-decoration: none;
      }
      &.active {
        background-color: $primary;
        font-weight: 500;
        box-shadow: 0px 2px 5px $dark;
        text-shadow: 0px 2px 2px $secondary;
      }
    }
  }
  .sidebar__copy {
    grid-area: copy;
    text-shadow: 0px 2px 2px $primary;
    @media screen and (min-width: $media-min-width) {
      text-align: center;
    }
    @media screen and (max-width: $media-max-width) {
      text-align: center;
      margin-top: 0.5em;
    }
  }
  animation: pageHeadingAnimation $fast-animation-speed forwards .5s ease-in;
}

@keyframes sidebarAnimation {
  0% {
    transform: translateX(100%);
    opacity: 0.1;
  }
  25% {
    transform: translateX(75%);
    opacity: 0.25;
  }
  50% {
    transform: translateX(50%);
    opacity: 0.5;
  }
  75% {
    transform: translateX(25%);
    opacity: 0.75;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
