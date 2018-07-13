<template lang="html">

  <section class="admin content px-5">
    <h2>Панель Управления</h2>
    <div class="pt-2">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#groups">Группы</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#skills">Навыки</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#my-works">Мои работы</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#content">Контент</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#user">Пользователи</a>
        </li>
      </ul>

      <div class="tab-content">
        <div class="tab-pane active pt-5" id="groups">
          <form v-on:submit.prevent="submitGroup" class="mx-auto mb-5">
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
        </div>
        <div class="tab-pane pt-5" id="skills">
          <form v-on:submit.prevent="submitSkill" class="mx-auto mb-5">
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
        <div class="tab-pane pt-5" id="my-works">
          <form v-on:submit.prevent="submitMyWork" class="mx-auto mb-5">
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
        <div class="tab-pane pt-5" id="content">
          <form v-on:submit.prevent="submitPageContent" class="mx-auto mb-5">
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
        <div class="tab-pane pt-5" id="user">
          <form v-on:submit.prevent="submitUser" class="mx-auto mb-5">
            <h4>Add user</h4>
            <div class="form-group">
              <label for="input">Email:</label>
              <input class="form-control" type="text" v-model="user.email">
            </div>
            <div class="form-group">
              <label for="input">Password:</label>
              <input class="form-control" type="password" v-model="user.password">
            </div>
            <div class="form-group">
              <button class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import { mapState } from 'vuex'
export default {
  name: 'dashboard',
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
      myWork: {
        title: '',
        position: '',
        period: '',
        text: ''
      },
      content: {
        page: '',
        section: '',
        content: ''
      },
      user: {
        email: '',
        password: ''
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
    submitMyWork () {
      this.$store.dispatch('addMyWork', this.myWork).then(() => {
        this.myWork.title = ''
        this.myWork.position = ''
        this.myWork.period = ''
        this.myWork.text = ''
      })
    },
    submitPageContent () {
      this.$store.dispatch('addPageContent', this.content).then(() => {
        this.content.page = ''
        this.content.section = ''
        this.content.content = ''
      })
    },
    submitUser () {
      this.$store.dispatch('register', this.user).then(() => {
        this.user.email = ''
        this.user.password = ''
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
form {
  width: 90%;
}

@media (min-width: 992px) {
  form {
    width: 50%;
  }
}</style>
