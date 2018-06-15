<template lang="html">

  <section class="skills-and-tech content">
    <h1>My technologies knowlege and skills</h1>
    <div class="my-skills">
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
@import '../assets/scss/variables';
@import '../assets/scss/shared';
.skills-and-tech {
  .my-skills {
    display: grid;
    margin-top: 1em;
    grid-template-rows: 20%;
    .my-skills__groups {
      display: grid;
      grid-template-rows: 15% auto;
      .my-skills__group-title {
        @extend .post-title-bar; // shared
        width: 50%;
      }
      .my-skills__progress-bar {
        margin-bottom: 0.5em;
        display: grid;
        grid-template-columns: 0 100%;
        grid-template-areas:
        "title bar";
        .title {
          grid-area: title;
          align-self: center;
          color: $light;
          z-index: 20;
          font-size: 0.8em;
          margin-left: .5em;
          min-width: 10em;
        }
      }
    }
  }
}
</style>
