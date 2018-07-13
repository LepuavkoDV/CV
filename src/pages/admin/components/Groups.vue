<template lang="html">

  <div class="tab-pane active py-5" id="groups">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">Иконка</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="group in groups" :key="group._id">
          <td>{{group.title}}</td>
          <td>{{group.icon}}</td>
          <td>
            <button @click.prevent="edit(group._id)" class="btn btn-sm btn-outline-info"><i class="fas fa-edit"></i></button>
            <button @click.prevent="remove(group._id)" class="btn btn-sm btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#groupModal">
      <i class="fas fa-plus"></i>
    </button>
    <!-- Modal -->
    <div class="modal fade" id="groupModal" tabindex="-1" role="dialog" aria-labelledby="groupModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="groupModalLabel">{{modalTitle}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="submitGroup" class="dashboard-form mx-auto">
              <div class="form-group">
                <label for="input">Название:</label>
                <input class="form-control" type="text" name="group-name" v-model="group.title">
              </div>
              <div class="form-group">
                <label for="input">Иконка:</label>
                <input class="form-control" type="text" name="icon" v-model="group.icon">
              </div>
              <div class="form-group">
                <button class="btn btn-success"><i class="fas fa-check"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import { mapState } from 'vuex'
import $ from 'jquery'
export default {
  name: 'groups',
  props: [],
  mounted () {

  },
  data () {
    return {
      group: {
        _id: null,
        title: '',
        icon: ''
      },
      editmode: false
    }
  },
  methods: {
    submitGroup () {
      let action = this.editmode ? 'editGroup' : 'addGroup'
      this.$store.dispatch(action, this.group).then(() => {
        this.group._id = null
        this.group.title = ''
        this.group.icon = ''
        $('#groupModal').modal('hide')
        this.editmode = false
      }).catch(err => {
        this.$store.dispatch('hideLoading')
        this.$notify({
          group: 'main',
          type: 'error',
          text: err.response.data.message
        })
      })
    },
    edit (id) {
      this.editmode = true
      let group = this.$store.getters.getGroupById(id)
      this.group._id = group._id
      this.group.title = group.title
      this.group.icon = group.icon
      $('#groupModal').modal('show')
    },
    remove (id) {
      if (confirm('Удалить группу?')) {
        this.$store.dispatch('removeGroup', id)
      }
    }
  },
  computed: {
    ...mapState({
      groups: state => state.skills.groups
    }),
    modalTitle () {
      return this.editmode ? 'Редактирование группы' : 'Добавить новую группу'
    }
  }
}
</script>

<style scoped lang="scss"></style>
