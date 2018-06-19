<template lang="html">

  <section class="admin content pl-5 pr-5">
    <h2>admin Component</h2>
    <div class="groups-crud pl-5 pr-5">
      <form v-on:submit.prevent="submitGroup" class="mb-5">
        <h4>Add group</h4>
        <div class="form-group">
          <label for="input">Group name:</label>
          <input class="form-control" type="text" name="group-name" v-model="group.title">
        </div>
        <div class="form-group">
          <label for="input">Icon:</label>
          <input class="form-control" type="text" name="icon" v-model="group.icon">
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
      <form v-on:submit.prevent="submitSkill" class="mb-5">
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
          <select class="form-control" name="group" v-model="skill.group">
            <option v-for="(group, index) in groups" :key="index" :value="group._id">{{group.title}}</option>
          </select>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
      <form v-on:submit.prevent="submitAchievement" class="mb-5">
        <h4>Add achievement</h4>
        <div class="form-group">
          <label for="input">Title:</label>
          <input class="form-control" type="text" name="group-name" v-model="achievement.title">
        </div>
        <div class="form-group">
          <label for="input">Position:</label>
          <input class="form-control" type="text" name="group-name" v-model="achievement.position">
        </div>
        <div class="form-group">
          <label for="input">Period:</label>
          <input class="form-control" type="text" name="group-name" v-model="achievement.period">
        </div>
        <div class="form-group">
          <label for="input">Text:</label>
          <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="achievement.text"></textarea>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </section>

</template>

<script lang="js">
import { mapState } from 'vuex'
export default {
  name: 'admin',
  props: [],
  beforeMount () {
    this.$store.dispatch('loadGroups')
  },
  mounted () {},
  data () {
    return {
      group: {
        title: '',
        icon: ''
      },
      skill: {
        title: '',
        value: '',
        group: ''
      },
      achievement: {
        title: '',
        position: '',
        period: '',
        text: ''
      }
    }
  },
  methods: {
    submitGroup () {
      this.$store.dispatch('addGroup', this.group).then(() => {
        this.group.title = ''
        this.group.icon = ''
      })
    },
    submitSkill () {
      this.$store.dispatch('addSkill', this.skill).then(() => {
        this.skill.title = ''
        this.skill.value = ''
        this.skill.group = ''
      })
    },
    submitAchievement () {
      this.$store.dispatch('addAchievement', this.achievement).then(() => {
        this.achievement.title = ''
        this.achievement.position = ''
        this.achievement.period = ''
        this.achievement.text = ''
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

<style scoped lang="scss">
  .admin {
    .groups-crud {
      margin: 1em 0;
    }
  }
</style>
