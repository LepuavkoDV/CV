<template lang="html">

  <section class="resume-section p-3 p-lg-5 d-flex d-column slow-fadeIn">
    <div class="my-auto">
      <h1 class="mb-1">Дмитрий
        <span class="text-primary">Лепявко</span>
      </h1>
      <div class="subheading mb-5">Frontend developer · 30лет ·
        Чернигов
      </div>
      <Content :content="getContent('about', 'content')"></Content>
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
import Content from '../components/Content'
export default {
  name: 'about',
  props: [],
  beforeMount () {
    this.$store.dispatch('getPageContents', 'about')
  },
  mounted () {},
  data () {
    return {}
  },
  methods: {
    getContent (page, section) {
      return this.$store.getters.getSectionContent(page, section)
    }
  },
  computed: {},
  components: {
    Content
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
.expectations {
  padding: 0;
  margin-left: 1.25em;
  li {
    margin: 0;
    padding: 0;
    &.primary {
      color: $primary;
    }
  }
}
</style>
