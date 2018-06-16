<template lang="html">

  <section class="achievements content">
    <h1>My achievements</h1>
    <div class="my-achievements">
      <div class="my-achievements__achievement" v-for="(item, index) in achievements" :key="index">
        <div class="title">{{item.title}}</div>
        <div class="text">{{item.text}}</div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import { mapState } from 'vuex'
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
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/variables';
@import '../assets/scss/shared';
.achievements {
  .my-achievements {
    display: grid;
    grid-template-columns: 50% 50%;
    .my-achievements__achievement {
      display: grid;
      grid-template-rows: 10% auto;
      margin: 1em 1em 1em 0;
      .title {
        @extend .post-title-bar; // shared
        width: 80%;
      }
      .text {
        text-indent: 1em;
      }
    }
  }
}
</style>
