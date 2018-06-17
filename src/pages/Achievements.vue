<template lang="html">

  <section class="achievements content">
    <h1>Достижения</h1>
    <div class="my-achievements">
      <Achievement v-for="(item, index) in achievements" :key="index" :item="item"></Achievement>
    </div>
  </section>

</template>

<script lang="js">
import { mapState } from 'vuex'
import Achievement from '../components/Achievement'
export default {
  name: 'achievements',
  props: [],
  beforeMount () {
    this.$store.dispatch('loadAchievements')
  },
  mounted () {},
  data () {
    return {}
  },
  methods: {},
  computed: {
    ...mapState({
      achievements: state => state.achievements.achievements
    })
  },
  components: {
    Achievement
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';
@import '../assets/scss/shared';
.achievements {
  .my-achievements {
    display: grid;
    .my-achievements__achievement {
      display: grid;
      grid-template-rows: 10% auto;
      margin: 1em 1em 1em 0;
      .title {
        @extend .post-title-bar; // shared
        width: 50%;
      }
      .text {
        img {
          border-radius: $border-radius;
          width: 15em;
          height: auto;
          float: left;
          margin: 0 1em 1em 0;
        }
        p {
          margin-bottom: .5em;
          text-indent: 1em;
          a {
            color: $secondary;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
