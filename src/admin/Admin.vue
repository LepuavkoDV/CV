<template lang="html">

  <section class="admin content">
    <h1>admin Component</h1>
    <div class="groups-crud">
      <form v-on:submit.prevent="submitGroup">
        <caption>Add group</caption>
        <div class="form-group">
          <label for="input">Group name:</label>
          <input type="text" name="group-name" v-model="group.title">
        </div>
        <div class="form-group">
          <label for="input">Icon:</label>
          <input type="text" name="icon" v-model="group.icon">
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
      group: {
        title: '',
        icon: ''
      }
    }
  },
  methods: {
    submitGroup () {
      this.$store.dispatch('addGroup', this.group).then(() => {
        this.group.title = ''
        this.group.icon = ''
      })
    }
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
