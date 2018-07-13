<template lang="html">

  <section class="admin content px-5">
    <h2>Панель Управления</h2>
    <div class="pt-2">
      <NavTabs></NavTabs>
      <div class="tab-content">
        <Groups></Groups>
        <Skills></Skills>
        <Works></Works>
        <Content></Content>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import NavTabs from './components/NavTabs'
import Groups from './components/Groups'
import Skills from './components/Skills'
import Works from './components/Works'
import Content from './components/Content'
export default {
  name: 'dashboard',
  props: [],
  beforeMount () {},
  mounted () {},
  data () {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    Groups, Skills, Works, Content, NavTabs
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/variables";
.dashboard-form {
  width: 90%;
}

table {
  color: $dark;
}
</style>
