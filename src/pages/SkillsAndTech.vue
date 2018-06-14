<template lang="html">

  <section class="skills-and-tech content">
    <h1>My technologies knowlege and skills</h1>
    <div class="my-skills">
      <div class="my-skills__groups" v-for="(section, index) in mySkills" :key="index">
        <div class="my-skills__group-title"><i :class="section.icon"></i> {{section.title}}</div>
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
          icon: 'fab fa-php',
          items: [
            { title: 'PHP', value: 99 },
            { title: 'Codeigniter', value: 99 },
            { title: 'Laravel 5.*', value: 50 }
          ]
        },
        {
          title: 'Database',
          icon: 'fas fa-database',
          items: [
            { title: 'MySQL', value: 80 },
            { title: 'MongoDB', value: 20 }
          ]
        },
        {
          title: 'Javascript',
          icon: 'fab fa-js',
          items: [
            { title: 'JS', value: 99 },
            { title: 'Vue/Vuex', value: 80 },
            { title: 'Angular 2+', value: 55 },
            { title: 'React', value: 25 },
            { title: 'Angularjs', value: 8 },
            { title: 'Nodejs', value: 50 },
            { title: 'Express', value: 35 }
          ]
        },
        {
          title: 'Markup',
          icon: 'fas fa-code',
          items: [
            { title: 'HTML 5', value: 95 },
            { title: 'Bootstrap 3/4', value: 90 },
            { title: 'Material Design', value: 75 },
            { title: 'CSS 3', value: 65 },
            { title: 'Sass', value: 45 }
          ]
        },
        {
          title: 'Tools',
          icon: 'fas fa-screwdriver',
          items: [
            { title: 'Git', value: 70 },
            { title: 'Webpack', value: 50 },
            { title: '*nix command line', value: 60 },
            { title: 'Composer', value: 100 },
            { title: 'Npm', value: 100 }
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
