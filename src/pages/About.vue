<template lang="html">

  <section class="about content">
    <h1>Обо мне</h1>
    <div class="my-expectations">
      <div class="my-expectations-title">Ожидания от работы</div>
      <ul>
        <li>Профессиональный рост</li>
        <li>Адекватный менеджмент</li>
        <li>Работа в команде</li>
        <li>Возможность удаленной работы</li>
      </ul>
      <p>В данный момент интересует работа с Vue/Vuex (Варианты с React/Angular2+ тоже рассмотрю)</p>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'about',
  props: [],
  mounted () {

  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/shared';
.about {
  .my-expectations {
    display: grid;
    margin-top: 1em;
    .my-expectations-title {
      @extend .post-title-bar; // shared
      width: 50%;
    }
    ul {
      padding-left: 1.5em;
      margin-bottom: 1em;
      li {
        list-style-type: disc;
        margin-bottom: .1em;
      }
    }
  }
}
</style>
