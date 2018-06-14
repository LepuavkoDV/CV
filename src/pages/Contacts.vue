<template lang="html">

  <section class="contacts content">
    <h1>Contact me</h1>
    <div class="contact-me">
      <form>
        <div class="form-group">
          <label for="input">Your name:</label>
          <input type="text">
        </div>
        <div class="form-group">
          <label for="input">Your email:</label>
          <input type="text">
        </div>
        <div class="form-group">
          <label for="textarea">What You can offer?:</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="form-group">
          <button><i class="far fa-envelope"></i> Contact me</button>
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
    return {

    }
  },
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss"></style>
