<template lang="html">

  <div class="tab-pane pt-5" id="content">
    <form v-on:submit.prevent="submitPageContent" class="dashboard-form mx-auto mb-5">
      <h4>Add page content</h4>
      <div class="form-group">
        <label for="input">Page:</label>
        <input class="form-control" type="text" v-model="content.page">
      </div>
      <div class="form-group">
        <label for="input">Section:</label>
        <input class="form-control" type="text" v-model="content.section">
      </div>
      <div class="form-group">
        <label for="input">Text:</label>
        <textarea class="form-control" name="" id="content" cols="30" rows="10" v-model="content.content"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>

</template>

<script lang="js">
export default {
  name: 'mycontent',
  props: [],
  mounted () {

  },
  data () {
    return {
      content: {
        page: '',
        section: '',
        content: ''
      }
    }
  },
  methods: {
    submitPageContent () {
      this.$store.dispatch('addPageContent', this.content).then(() => {
        this.content.page = ''
        this.content.section = ''
        this.content.content = ''
      })
    }
  },
  computed: {

  }
}
</script>

<style scoped lang="scss"></style>
