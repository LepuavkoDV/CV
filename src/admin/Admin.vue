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
      <form v-on:submit.prevent="submitSkill">
        <caption>Add skill</caption>
        <div class="form-group">
          <label for="input">Skill:</label>
          <input type="text" name="group-name" v-model="skill.title">
        </div>
        <div class="form-group">
          <label for="input">Value:</label>
          <input type="text" name="value" v-model="skill.value">
        </div>
        <div class="form-group">
          <select name="group" v-model="skill.group">
            <option v-for="(group, index) in groups" :key="index" :value="group._id">{{group.title}}</option>
          </select>
        </div>
        <div class="form-group">
          <button>Submit</button>
        </div>
      </form>
      <form v-on:submit.prevent="submitAchievement">
        <caption>Add achievement</caption>
        <div class="form-group">
          <label for="input">Title:</label>
          <input type="text" name="group-name" v-model="achievement.title">
        </div>
        <div class="form-group">
          <label for="input">Text:</label>
          <textarea name="" id="" cols="30" rows="10" v-model="achievement.text"></textarea>
        </div>
        <div class="form-group">
          <button>Submit</button>
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
