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
@import '../assets/scss/_variables';
.sidebar {
  grid-area: sidebar;
  background-color: $primary;
  color: $light;
  text-align: end;
  padding: 2em;
  display: grid;
  @media screen and (min-width: $media-min-width) {
    border-bottom-left-radius: $border-radius;
    text-align: end;
    grid-template-rows: 98% 2%;
    grid-template-areas:
    "nav"
    "copy";
  }

  @media screen and (max-width: $media-max-width) {
    text-align: end;
    grid-template-columns: 20% 80%;
    grid-template-areas:
    "copy nav";
  }
  .sidebar__nav {
    grid-area: nav;
    font-size: 1.2em;
    li {
      margin-bottom: 1em;
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
    text-align: center;
  }
}
</style>
