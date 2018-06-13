<template lang="html">
  <section class="main-header">
    <h1 class="main-header__heading">Dmitriy Lepuavko</h1>
    <div class="main-header__line"></div>
    <h3 class="main-header__subheading">Frontend developer</h3>
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
@import '../assets/scss/variables';
.main-header {
  grid-area: header;
  background-color: $primary;
  width: 102%;
  margin-left: -1%;
  box-shadow: 0px 2px 5px $dark;
  display: grid;
  grid-template-rows: 45% 10% 45%;
  grid-template-areas:
  "heading"
  "line"
  "subheading";
  align-items: center;
  justify-items: center;
  .main-header__heading {
    grid-area: heading;
    font-family: $titleFontFamily;
    font-size: 2em;
    color: $light;
    align-self: center;
    text-shadow: 0px 2px 2px $secondary;
    align-self: end;
  }
  .main-header__line {
    grid-area: line;
    border-bottom: 1px solid $light;
    width: 70%;
    box-shadow: 0px 2px 5px $secondary;
  }
  .main-header__subheading {
    grid-area: subheading;
    color: $light;
    font-size: 1.3em;
    text-shadow: 0px 2px 2px $secondary;
    align-self: start;
  }
}
</style>
