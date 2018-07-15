<template lang="html">

  <div class="tab-pane pt-2 pb-5" id="skills">
    <data-tables
      :data="skills"
      :pagination-props="pagination"
      :page-size="pagination.pageSize"
      :action-col="actions"
      :filters="filters"
      >
      <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.label">
      </el-table-column>
    </data-tables>

    <div class="d-flex flex-row w-25">
      <button
        type="button"
        class="btn btn-outline-primary mr-2"
        data-toggle="modal"
        data-target="#skillsModal">
        <i class="fas fa-plus"></i>
      </button>
      <input type="text" class="form-control" v-model="filters[0].value" placeholder="Поиск">
    </div>

    <!-- Modal -->
    <div class="modal fade" id="skillsModal" tabindex="-1" role="dialog" aria-labelledby="skillsModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="skillsModalLabel">{{modalTitle}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="submitSkill" class="dashboard-form mx-auto mb-5">
              <div class="form-group">
                <label for="input">Название:</label>
                <input class="form-control" type="text" name="group-name" v-model="skill.title">
              </div>
              <div class="form-group">
                <label for="input">Значение:</label>
                <input class="form-control" type="number" name="value" v-model="skill.value">
              </div>
              <div class="form-group">
                <label for="input">Группа:</label>
                <select class="form-control" name="group" v-model="skill.group">
                  <option v-for="(group, index) in groups" :key="index" :value="group._id">{{group.title}}</option>
                </select>
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
import $ from 'jquery'
import { mapState } from 'vuex'
export default {
  name: 'skills',
  props: [],
  beforeMount () {
    this.$store.dispatch('loadSkills')
    this.$store.dispatch('loadGroups')
  },
  mounted () {
    $('#skillsModal').on('hidden.bs.modal', (e) => {
      this.editmode = false
      this.skill._id = null
      this.skill.title = ''
      this.skill.value = ''
      this.skill.group = ''
    })
  },
  data () {
    return {
      titles: [
        { prop: 'title', label: 'Название' },
        { prop: 'value', label: 'Значение' },
        { prop: 'group.title', label: 'Группа' }
      ],
      filters: [
        {
          prop: ['title'],
          value: ''
        }
      ],
      pagination: {
        pageSizes: [5, 10, 15, 20],
        pageSize: 5
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
      skill: {
        _id: null,
        title: '',
        value: '',
        group: ''
      },
      editmode: false
    }
  },
  methods: {
    submitSkill () {
      let action = this.editmode ? 'editSkill' : 'addSkill'
      this.$store.dispatch(action, this.skill).then(() => {
        $('#skillsModal').modal('hide')
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
      let skill = this.$store.getters.getSkillById(id)
      this.skill._id = skill._id
      this.skill.title = skill.title
      this.skill.value = skill.value
      this.skill.group = skill.group._id
      $('#skillsModal').modal('show')
    },
    remove (id) {
      if (confirm('Удалить навык?')) {
        this.$store.dispatch('removeSkill', id)
      }
    }
  },
  computed: {
    ...mapState({
      groups: state => state.groups.groups,
      skills: state => state.skills.skills
    }),
    modalTitle () {
      return this.editmode ? 'Редактирование навыка' : 'Добавить новый навык'
    }
  }
}
</script>

<style scoped lang="scss"></style>
