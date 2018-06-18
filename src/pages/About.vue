<template lang="html">

  <section class="resume-section p-3 p-lg-5 d-flex d-column slow-fadeIn" id="about">
    <div class="my-auto">
      <h1 class="mb-0">Дмитрий
        <span class="text-primary">Лепявко</span>
      </h1>
      <div class="subheading mb-5">Frontend developer · Чернигов · 30лет ·
        <a :href="'mailto:' + myEmail">{{myEmail}}</a>
      </div>
      <p class="mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
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
</style>
