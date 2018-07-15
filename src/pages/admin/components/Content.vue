<template lang="html">

  <div class="tab-pane pt-2 pb-5" id="content">

    <data-tables
      :data="contents"
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
        data-target="#contentModal">
        <i class="fas fa-plus"></i>
      </button>
      <input type="text" class="form-control" v-model="filters[0].value" placeholder="Поиск">
    </div>

    <!-- Modal -->
    <div class="modal fade" id="contentModal" tabindex="-1" role="dialog" aria-labelledby="contentModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="contentModalLabel">{{modalTitle}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="submitPageContent" class="dashboard-form mx-auto mb-5">
              <div class="form-group">
                <label for="input">Страница:</label>
                <input class="form-control" type="text" v-model="content.page">
              </div>
              <div class="form-group">
                <label for="input">Секция:</label>
                <input class="form-control" type="text" v-model="content.section">
              </div>
              <div class="form-group">
                <label for="input">Текст:</label>
                <vue-editor v-model="content.content"></vue-editor>
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
import $ from 'jquery'
import { mapState } from 'vuex'
import { VueEditor } from 'vue2-editor'
export default {
  name: 'mycontent',
  props: [],
  beforeMount () {
    this.$store.dispatch('getList')
  },
  mounted () {

  },
  data () {
    return {
      titles: [
        { prop: 'section', label: 'Секция' },
        { prop: 'page', label: 'Страница' }
      ],
      filters: [
        {
          prop: ['section', 'page'],
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
      content: {
        _id: null,
        page: '',
        section: '',
        content: ''
      },
      editmode: false
    }
  },
  methods: {
    submitPageContent () {
      let action = this.editmode ? 'editPageContent' : 'addPageContent'
      this.$store.dispatch(action, this.content).then(() => {
        $('#contentModal').modal('hide')
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
      let item = this.$store.getters.getContentById(id)
      this.content._id = item._id
      this.content.section = item.section
      this.content.page = item.page
      this.content.content = item.content
      $('#contentModal').modal('show')
    },
    remove (id) {
      if (confirm('Удалить запись?')) {
        this.$store.dispatch('removePageContent', id)
      }
    }
  },
  computed: {
    ...mapState({
      contents: state => state.content.list
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
