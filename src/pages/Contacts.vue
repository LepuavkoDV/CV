<template lang="html">

  <section class="contacts content">
    <h1>Связаться со мной</h1>
    <div class="contact-me">
      <form>
        <div class="form-group">
          <label for="input">Кто Вы?</label>
          <input type="text">
        </div>
        <div class="form-group">
          <label for="input">Как с Вами связаться?</label>
          <input type="text">
        </div>
        <div class="form-group">
          <label for="textarea">Что Вы можете мне предложить?</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="form-group">
          <button><i class="far fa-envelope"></i> Отправить</button>
        </div>
      </form>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'contacts',
  props: [],
  mounted () {},
  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss"></style>
