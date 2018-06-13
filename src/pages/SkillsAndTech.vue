<template lang="html">

  <section class="skills-and-tech content">
    <h1>Skills and technologies</h1>
    <div class="my-skills">
      <div class="my-skills__groups" v-for="(section, index) in mySkills" :key="index">
        <div class="my-skills__group-title">{{section.title}}</div>
        <div class="my-skills__progress-bar" v-for="(item, index) in section.items" :key="index">
          <div class="title">{{item.title}}</div>
          <div><ProgressBar :value="item.value"/></div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import ProgressBar from 'vue-progressbar-component'
export default {
  name: 'skills-and-tech',
  props: [],
  mounted () {},
  data () {
    return {
      mySkills: [
        {
          title: 'PHP',
          items: [
            { title: 'PHP', value: 99 },
            { title: 'Codeigniter', value: 99 },
            { title: 'Laravel5', value: 50 }
          ]
        },
        {
          title: 'Database',
          items: [
            { title: 'MySQL', value: 80 },
            { title: 'MongoDB', value: 20 }
          ]
        },
        {
          title: 'Javascript',
          items: [
            { title: 'JS', value: 99 },
            { title: 'Vue/Vuex', value: 80 },
            { title: 'Angular2+', value: 55 },
            { title: 'React', value: 25 },
            { title: 'Angularjs', value: 8 },
            { title: 'Nodejs', value: 50 },
            { title: 'Express', value: 35 },
            { title: 'Webpack', value: 50 }
          ]
        },
        {
          title: 'Markup',
          items: [
            { title: 'HTML5', value: 95 },
            { title: 'Bootstrap 3/4', value: 75 },
            { title: 'Google MD', value: 75 },
            { title: 'CSS3', value: 65 },
            { title: 'SASS', value: 45 }
          ]
        }
      ]
    }
  },
  methods: {},
  computed: {},
  components: {
    'ProgressBar': ProgressBar
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/variables';
.skills-and-tech {
  .my-skills {
    display: grid;
    margin-top: 1em;
    grid-template-rows: 20%;
    .my-skills__groups {
      display: grid;
      grid-template-rows: 15% auto;
      .my-skills__group-title {
        background-color: $secondary;
        color: $light;
        padding: 0.5em;
        margin: 1em 0;
        text-align: center;
        justify-self: center;
        box-shadow: 0px 2px 5px $dark;
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
