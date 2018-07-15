<template lang="html">

  <div class="tab-pane pt-2 pb-5" id="my-works">
    <data-tables
      :data="myWorks"
      :pagination-props="pagination"
      :page-size="pagination.pageSize"
      :action-col="actions"
      :filters="filters">
      <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.label">
      </el-table-column>
    </data-tables>

    <div class="d-flex flex-row w-25">
      <button
        type="button"
        class="el-button el-button--primary is-plain mr-2"
        data-toggle="modal"
        data-target="#myWorkModal">
        <i class="fas fa-plus"></i>
      </button>
      <input type="text" class="form-control" v-model="filters[0].value" placeholder="Поиск">
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myWorkModal" tabindex="-1" role="dialog" aria-labelledby="myWorkModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="myWorkModalLabel">{{modalTitle}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="submitMyWork" class="dashboard-form mx-auto mb-5">
              <div class="form-group">
                <label for="input">Заголовок:</label>
                <input class="form-control" type="text" name="group-name" v-model="myWork.title">
              </div>
              <div class="form-group">
                <label for="input">Позиция:</label>
                <input class="form-control" type="text" name="group-name" v-model="myWork.position">
              </div>
              <div class="form-group">
                <label for="input">Период:</label>
                <input class="form-control" type="text" name="group-name" v-model="myWork.period">
              </div>
              <div class="form-group">
                <label for="input">Описание:</label>
                <vue-editor v-model="myWork.text"></vue-editor>
              </div>
              <div class="form-group">
                <button data-dismiss="modal" aria-label="Close" class="el-button el-button--danger float-right"><i class="fas fa-times"></i> Отмена</button>
                <button class="el-button el-button--success float-right mr-2"><i class="fas fa-check"></i> Ок</button>
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
import { VueEditor } from 'vue2-editor'
export default {
  name: 'works',
  props: [],
  mounted () {
    $('#myWorkModal').on('hidden.bs.modal', (e) => {
      this.editmode = false
      this.myWork._id = null
      this.myWork.title = ''
      this.myWork.position = ''
      this.myWork.period = ''
      this.myWork.text = ''
    })
  },
  data () {
    return {
      titles: [
        { prop: 'title', label: 'Заголовок' },
        { prop: 'period', label: 'Период' },
        { prop: 'position', label: 'Позиция' }
      ],
      filters: [
        {
          prop: ['title', 'period', 'position'],
          value: ''
        }
      ],
      pagination: {
        pageSizes: [5, 10, 15, 20],
        pageSize: 10
      },
      actions: {
        label: 'Действия',
        props: {
          align: 'center'
        },
        buttons: [
          {
            props: {
              type: 'info el-button--mini is-plain',
              icon: 'fas fa-edit'
            },
            handler: row => {
              this.edit(row._id)
            }
          },
          {
            props: {
              type: 'danger el-button--mini is-plain',
              icon: 'fas fa-trash-alt'
            },
            handler: row => {
              this.remove(row._id)
            }
          }
        ]
      },
      myWork: {
        _id: null,
        title: '',
        position: '',
        period: '',
        text: ''
      },
      editmode: false
    }
  },
  methods: {
    submitMyWork () {
      let action = this.editmode ? 'editMyWork' : 'addMyWork'
      this.$store.dispatch(action, this.myWork).then(() => {
        $('#myWorkModal').modal('hide')
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
      let item = this.$store.getters.getMyWorkById(id)
      this.myWork._id = item._id
      this.myWork.title = item.title
      this.myWork.period = item.period
      this.myWork.position = item.position
      this.myWork.text = item.text
      $('#myWorkModal').modal('show')
    },
    remove (id) {
      if (confirm('Удалить запись?')) {
        this.$store.dispatch('removeMyWork', id)
      }
    }
  },
  computed: {
    ...mapState({
      myWorks: state => state.myWorks.myWorks
    }),
    modalTitle () {
      return this.editmode ? 'Редактирование записи' : 'Добавить новую запись'
    }
  },
  components: {
    VueEditor
  }
}
</script>

<style scoped lang="scss"></style>
