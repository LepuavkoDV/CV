<template lang="html">

  <section class="resume-section p-3 p-lg-5 d-flex d-column slow-fadeIn" id="about">
    <div class="my-auto">
      <h1 class="mb-0">Дмитрий
        <span class="text-primary">Лепявко</span>
      </h1>
      <div class="subheading mb-5">Frontend developer · 30лет ·
        Чернигов
      </div>
      <h4 class="mb-1">О себе</h4>
      <p class="mb-5">~5 лет в веб разработке. Занимался приложениями для Facebook. Очень долго работал с Codeigniter. Сделал пару плагинов для Wordpress и Opencart.</p>
      <h4 class="mb-1">Что я ожидаю от работы?</h4>
      <p class="mb-5">
        <ul class="expectations">
          <li>Профессиональный рост.</li>
          <li>Адекватный менеджмент.</li>
          <li>Возможность удаленной работы.</li>
          <li>Работа в команде</li>
        </ul>
      В данный момент интересует работа с Vue/Vuex (Варианты с React/Angular2+ тоже рассмотрю)</p>
      <ul class="list-inline list-social-icons mb-0">
        <li class="list-inline-item">
          <a href="https://github.com/LepuavkoDV" target="_blank">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fab fa-github fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'about',
  props: [],
  mounted () {},
  data () {
    return {
      myEmail: process.env.MY_EMAIL
    }
  },
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.expectations {
  padding: 0;
  margin-left: 1.25em;
  li {
    margin: 0;
    padding: 0;
  }
}
</style>
