<template lang="html">
  <section class="main-header">
    <div class="main-header__heading"><i class="fas fa-address-card"></i> CV</div>
    <div class="main-header__subheading">
      <h3>Dmitriy Lepuavko</h3>
      <h6>Web Developer</h6>
    </div>
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
  grid-template-columns: 20% auto;
  grid-template-areas:
  "heading subheading";
  align-items: center;
  justify-items: center;
  .main-header__heading {
    grid-area: heading;
    font-family: $titleFontFamily;
    font-size: 2em;
    color: $light;
    text-shadow: 0px 2px 2px $secondary;
  }
  .main-header__subheading {
    grid-area: subheading;
    color: $light;
    text-shadow: 0px 2px 2px $secondary;
    align-self: center;
    justify-self: start;
    h3 {
      font-size: 1.5em;
      font-weight: bolder;
      border-bottom: 1px solid $light;
      padding: 2px 0;
    }
    h6 {
      font-size: 1em;
      padding: 2px 0;
    }
  }
  animation: headerAnimation $fast-animation-speed forwards 0s ease-in;
}

@keyframes headerAnimation{
  0%{
      transform: translateY(-100%);
      }
  25%{
      transform: translateY(-75%);
      }
  50%{
      transform: translateY(-50%);
      }
  75%{
      transform: translateY(-25%);
      }
  100%{
      transform: translateY(0);
      }
}
</style>
