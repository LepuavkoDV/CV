<template lang="html">

  <section class="skills-and-tech content">
    <h1>Навыки</h1>
    <div class="my-skills animated">
      <div class="my-skills__groups" v-for="(group, index) in groups" :key="index">
        <div class="my-skills__group-title"><i :class="group.icon"></i> {{group.title}}</div>
        <div class="my-skills__progress-bar" v-for="(item, index) in group.items" :key="index">
          <div class="title">{{item.title}}</div>
          <div><ProgressBar :value="item.value"/></div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import ProgressBar from 'vue-progressbar-component'
import { mapState } from 'vuex'
export default {
  name: 'skills-and-tech',
  props: [],
  beforeMount () {
    this.$store.dispatch('loadGroups')
  },
  mounted () {},
  data () {
    return {}
  },
  methods: {},
  computed: {
    ...mapState({
      groups: state => state.skills.groups
    })
  },
  components: {
    'ProgressBar': ProgressBar
  }
}
</script>

<style scoped lang="scss">
</style>
