<template lang="html">
  <section class="main-header">
    <h1 class="main-header__title">Dmitriy Lepuavko</h1>
    <div class="main-header__divider"></div>
    <h3 class="main-header__description">Frontend developer</h3>
  </section>
</template>

<script lang="js">
export default {
  name: 'main-header',
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
@import '../assets/scss/_variables';
.main-header {
  grid-area: header;
  background-color: $secondary;
  width: 100%;
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
  border-bottom: 20px solid $dark;
  text-align: center;
  .main-header__title {
    font-family: $titleFontFamily;
    font-size: 2em;
    color: $light;
    padding-top: 1em;
  }
  .main-header__divider {
    border-bottom: 1px solid $light;
    width: 70%;
    margin-left: 15%;
    margin-top: 0.7em;
    margin-bottom: 0.4em;
  }
  .main-header__description {
    color: $light;
    font-size: 1.3em;
  }
}
</style>
