<template lang="html">

  <div class="tab-pane pt-5" id="skills">
    <form v-on:submit.prevent="submitSkill" class="dashboard-form mx-auto mb-5">
      <h4>Add skill</h4>
      <div class="form-group">
        <label for="input">Skill:</label>
        <input class="form-control" type="text" name="group-name" v-model="skill.title">
      </div>
      <div class="form-group">
        <label for="input">Value:</label>
        <input class="form-control" type="text" name="value" v-model="skill.value">
      </div>
      <div class="form-group">
        <label for="input">Group:</label>
        <select class="form-control" name="group" v-model="skill.group">
          <option v-for="(group, index) in groups" :key="index" :value="group._id">{{group.title}}</option>
        </select>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>

</template>

<script lang="js">
import { mapState } from 'vuex'
export default {
  name: 'skills',
  props: [],
  mounted () {
    this.$store.dispatch('loadGroups')
  },
  data () {
    return {
      skill: {
        title: '',
        value: '',
        group: ''
      }
    }
  },
  methods: {
    submitSkill () {
      this.$store.dispatch('addSkill', this.skill).then(() => {
        this.skill.title = ''
        this.skill.value = ''
        this.skill.group = ''
      })
    }
  },
  computed: {
    ...mapState({
      groups: state => state.skills.groups
    })
  }
}
</script>

<style scoped lang="scss"></style>
