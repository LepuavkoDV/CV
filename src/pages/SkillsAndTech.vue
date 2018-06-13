<template lang="html">

  <section class="skills-and-tech content">
    <h1>Skills and technologies</h1>
    <div class="my-skills">
      <div class="my-skills__progress-bar" v-for="(item, index) in mySkills" :key="index">
        <div class="title">{{item.title}}:</div>
        <div><ProgressBar :value="item.value"/></div>
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
        // php and related stuff
        { title: 'PHP', value: 99 },
        { title: 'Codeigniter', value: 99 },
        { title: 'Laravel5', value: 50 },
        // db related stuff
        { title: 'MySQL', value: 99 },
        { title: 'MongoDB', value: 20 },
        // javascript and related stuff
        { title: 'JS', value: 99 },
        { title: 'Vue/Vuex', value: 80 },
        { title: 'Angular2+', value: 35 },
        { title: 'React', value: 15 },
        { title: 'Angularjs', value: 8 },
        { title: 'Nodejs', value: 25 },
        { title: 'Express', value: 15 },
        { title: 'Webpack', value: 50 },
        // html/css and related stuff
        { title: 'HTML5', value: 75 },
        { title: 'Bootstrap 3/4', value: 65 },
        { title: 'Google MD', value: 50 },
        { title: 'CSS3', value: 65 },
        { title: 'SASS', value: 45 },
      ]
    }
  },
  methods: {

  },
  computed: {

  },
  components: {
    'ProgressBar': ProgressBar
  }
}
</script>

<style scoped lang="scss">
.skills-and-tech {
  .my-skills {
    margin-top: 1em;
    .my-skills__progress-bar {
      margin-bottom: 0.5em;
      display: grid;
      grid-template-columns: 15% 85%;
      grid-template-areas: 
      "title bar";
      .title {
        grid-area: title;
        align-self: center;
        justify-self: center;
      }
    }
  }
}
</style>
