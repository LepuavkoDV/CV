<template lang="html">

  <section class="expectations content">
    <h1>Ожидания от работы</h1>
    <div class="my-expectations">
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
  name: 'expectations',
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
.expectations {
  .my-expectations {
    margin-top: 1em;
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
