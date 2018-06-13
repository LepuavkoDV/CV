<template lang="html">
<section class="sidebar">
  <ul class="sidebar__nav">
    <li v-for="(item, index) in navLinks" :key="index">
      <router-link :class="{ 'active' : currentRoute === item.to }" v-bind:to="item.to">{{item.title}}</router-link>
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
          title: 'Skills and Technologies',
          to: '/'
        },
        {
          title: 'Achievements',
          to: 'achievements'
        },
        {
          title: 'Expectations',
          to: 'expectations'
        },
        {
          title: 'Contacts',
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
.sidebar {
  grid-area: sidebar;
  background-color: $primary;
  color: $light;
  display: grid;
  grid-template-rows: 98% 2%;
  grid-template-areas:
  "nav"
  "copy";
  @media screen and (min-width: $media-min-width) {
    border-bottom-left-radius: $border-radius;
    text-align: end;
    padding: 2em;
  }

  @media screen and (max-width: $media-max-width) {
    text-align: center;
    padding: 1em 1em 2em 1em;
  }
  .sidebar__nav {
    grid-area: nav;
    font-size: 1.2em;
    li {
      @media screen and (min-width: $media-min-width) {
        margin-bottom: 1em;
      }
      @media screen and (max-width: $media-max-width) {
        margin-bottom: 0.5em;
      }
      a {
        color: inherit;
        text-decoration: none;
        &:hover, &.active {
          text-shadow: 0px 2px 2px $secondary;
        }
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
}
</style>
