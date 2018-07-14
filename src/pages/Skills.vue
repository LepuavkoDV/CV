<template lang="html">

  <section class="resume-section p-3 p-lg-5 d-flex flex-column slow-fadeIn">
    <div class="my-auto">
      <h2 class="mb-5">Навыки</h2>
      <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="group in groups" :key="group._id">
        <div class="resume-content mr-auto">
          <h3 class="mb-0"><i :class="group.icon"></i> {{group.title}}</h3>
          <div v-for="item in group.items" :key="item._id">
            <h4 class="mb-0">{{item.title}}</h4><ProgressBar :value="item.value"/>
          </div>
        </div>
      </div>

    </div>
  </section>

</template>

<script lang="js">
import ProgressBar from 'vue-progressbar-component'
import { mapState } from 'vuex'
export default {
  name: 'skills',
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
      groups: state => state.groups.groups
    })
  },
  components: {
    'ProgressBar': ProgressBar
  }
}
</script>

<style scoped lang="scss"></style>
