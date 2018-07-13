<template lang="html">

  <div class="tab-pane pt-5" id="my-works">
    <form v-on:submit.prevent="submitMyWork" class="dashboard-form mx-auto mb-5">
      <h4>Add my work</h4>
      <div class="form-group">
        <label for="input">Title:</label>
        <input class="form-control" type="text" name="group-name" v-model="myWork.title">
      </div>
      <div class="form-group">
        <label for="input">Position:</label>
        <input class="form-control" type="text" name="group-name" v-model="myWork.position">
      </div>
      <div class="form-group">
        <label for="input">Period:</label>
        <input class="form-control" type="text" name="group-name" v-model="myWork.period">
      </div>
      <div class="form-group">
        <label for="input">Text:</label>
        <textarea class="form-control" name="" id="mywork" cols="30" rows="10" v-model="myWork.text"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>

</template>

<script lang="js">
export default {
  name: 'works',
  props: [],
  mounted () {

  },
  data () {
    return {
      myWork: {
        title: '',
        position: '',
        period: '',
        text: ''
      }
    }
  },
  methods: {
    submitMyWork () {
      this.$store.dispatch('addMyWork', this.myWork).then(() => {
        this.myWork.title = ''
        this.myWork.position = ''
        this.myWork.period = ''
        this.myWork.text = ''
      })
    }
  },
  computed: {

  }
}
</script>

<style scoped lang="scss"></style>
