<template lang="html">

  <section class="achievements content">
    <h1>Достижения</h1>
    <div class="my-achievements animated">
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
</style>
