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
  mounted () {
  },
  data () {
    return {
      navLinks: [
        {
          title: 'Навыки',
          to: '/'
        },
        {
          title: 'Достижения',
          to: 'achievements'
        },
        {
          title: 'Ожидания от работы',
          to: 'expectations'
        },
        {
          title: 'Контакты',
          to: 'contacts'
        }
      ],
      currentRoute: router.currentRoute.path
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
  grid-area: sidebar;
  background-color: $secondary;
  margin: -0.1em 1em 1em 1em;
  color: $light;
  box-shadow: 0px 2px 5px $primary;
  display: grid;
  grid-template-rows: 95% 5%;
  grid-template-areas:
    "nav"
    "copy";
  align-items: start;
  justify-items: center;
  .sidebar__nav {
    margin-top: 3em;
    grid-area: nav;
    font-size: 1.2em;
    text-align: center;
    li {
      @extend .border-radius-full;
      background-color: $primary;
      width: 106%;
      margin-left: -3%;
      padding: 0.5em 0;
      box-shadow: 0px 2px 5px $dark;
      @media screen and (min-width: $media-min-width) {
        margin-bottom: 1em;
      }
      @media screen and (max-width: $media-max-width) {
        margin-bottom: 0.5em;
      }
      a {
        color: inherit;
        text-decoration: none;
        text-shadow: 0px 2px 2px $secondary;
      }
      &:hover,
      &.active {
        width: 110%;
        margin-left: -5%;
        font-weight: 500;
      }
    }
  }
  .sidebar__copy {
    grid-area: copy;
    @media screen and (min-width: $media-min-width) {
      text-align: center;
    }
    @media screen and (max-width: $media-max-width) {
      text-align: center;
      margin-top: 0.5em;
    }
  }
  animation: sidebarAnimation $fast-animation-speed forwards 0s ease-in;
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
