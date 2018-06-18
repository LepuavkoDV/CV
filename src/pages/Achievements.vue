<template lang="html">

  <section class="resume-section p-3 p-lg-5 d-flex flex-column slow-fadeIn" id="experience">
    <div class="my-auto">
      <h2 class="mb-5">Достижения</h2>

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
img {
  width: 15rem;
  height: auto;
  float: left;
  margin: .4em 1em 1em 0;
}
</style>
