<template lang="html">

  <section class="page-not-found content">
    <div class="not-found">
      <div class="not-found__image">
        <div class="message">
          <i class="far fa-frown"></i> 404 Пичалька
          <br>
          <router-link to="/">Го назад</router-link>
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
</style>
