<template lang="html">

  <section class="resume-section p-3 p-lg-5 d-flex flex-column slow-fadeIn">
    <div class="my-auto">
      <h2 class="mb-5">Мои работы</h2>

      <MyWork v-for="(item, index) in myWorks" :key="index" :item="item"></MyWork>

    </div>
  </section>

</template>

<script lang="js">
import { mapState } from 'vuex'
import MyWork from '../components/MyWork'
export default {
  name: 'my-works',
  props: [],
  beforeMount () {
    this.$store.dispatch('loadMyWorks')
  },
  mounted () {},
  data () {
    return {}
  },
  methods: {},
  computed: {
    ...mapState({
      myWorks: state => state.myWorks.myWorks
    })
  },
  components: {
    MyWork
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
