<template lang="html">

  <section class="admin content">
    <h1>admin Component</h1>
    <div class="groups-crud">
      <form>
        <caption>Add group</caption>
        <div class="form-group">
          <label for="input">Group name:</label>
          <input type="text" name="group-name">
        </div>
        <div class="form-group">
          <label for="input">Icon:</label>
          <input type="text" name="icon">
        </div>
        <div class="form-group">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'admin',
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
  .admin {
    .groups-crud {
      margin: 1em 0;
    }
  }
</style>
