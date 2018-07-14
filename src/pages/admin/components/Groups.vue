<template lang="html">

  <div class="tab-pane active pt-2 pb-5" id="groups">
    <data-tables
      :data="groups"
      :pagination-props="pagination"
      :action-col="actions"
      :filters="filters">
      <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.label">
      </el-table-column>
    </data-tables>

    <div class="d-flex flex-row w-25">
      <button
        type="button"
        class="btn btn-outline-primary mr-2"
        data-toggle="modal"
        data-target="#groupModal">
        <i class="fas fa-plus"></i>
      </button>
      <input type="text" class="form-control" v-model="filters[0].value" placeholder="Поиск">
    </div>

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
            <form v-on:submit.prevent="submitGroup" class="dashboard-form">
              <div class="form-group">
                <label for="input">Название:</label>
                <input class="form-control" type="text" name="group-name" v-model="group.title">
              </div>
              <div class="form-group">
                <label for="input">Иконка:</label>
                <input class="form-control" type="text" name="icon" v-model="group.icon">
              </div>
              <div class="form-group">
                <button data-dismiss="modal" aria-label="Close" class="btn btn-danger float-right"><i class="fas fa-times"></i> Отмена</button>
                <button class="btn btn-success float-right mr-2"><i class="fas fa-check"></i> Ок</button>
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
    $('#groupModal').on('hidden.bs.modal', (e) => {
      this.editmode = false
      this.group._id = null
      this.group.title = ''
      this.group.icon = ''
    })
  },
  data () {
    return {
      titles: [
        { prop: 'title', label: 'Название' },
        { prop: 'icon', label: 'Иконка' }
      ],
      filters: [
        {
          prop: ['title', 'icon'],
          value: ''
        }
      ],
      pagination: {
        pageSizes: [5, 10, 15, 20]
      },
      actions: {
        label: 'Действия',
        props: {
          align: 'center'
        },
        buttons: [
          {
            props: {
              type: 'btn btn-sm btn-outline-info',
              icon: 'fas fa-edit'
            },
            handler: row => {
              this.edit(row._id)
            }
          },
          {
            props: {
              type: 'btn btn-sm btn-outline-danger',
              icon: 'fas fa-trash-alt'
            },
            handler: row => {
              this.remove(row._id)
            }
          }
        ]
      },
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
        $('#groupModal').modal('hide')
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
