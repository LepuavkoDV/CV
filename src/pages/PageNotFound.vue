<template lang="html">

  <section class="page-not-found content">
    <div class="not-found">
      <div class="not-found__image">
        <div class="message">
          <i class="fas fa-exclamation-triangle"></i> Oops! Page not found :( Go back to <router-link to="/">homepage</router-link>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'page-not-found',
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
.page-not-found {
  .not-found {
    position: fixed;
    top: 50%;
    left: 50%;
    .not-found__image {
      .message {
        text-shadow: 0px 2px 2px $bgcolor;
        i {
          color: $secondary;
        }
        font-size: 2em;
        color: $primary;
        margin-left: -50%;
        width: 100%;
        a {
          color: $secondary;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
