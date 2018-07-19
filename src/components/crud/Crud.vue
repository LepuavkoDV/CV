<template lang="html">

  <section class="crud-crud">
    <div class="d-flex flex-row my-2 justify-content-end">
      <button
        type="button"
        class="el-button el-button--primary el-button--mini is-plain mr-2"
        data-toggle="modal"
        :data-target="'#'+modalId">
        <i class="fas fa-plus"></i>
      </button>

      <div class="input-group w-25">
        <input type="text" class="form-control" placeholder="Поиск" aria-label="Поиск" aria-describedby="button-addon2" v-model="_props.config.datatables.filters[0].value">
        <div class="input-group-append" v-if="_props.config.datatables.filters[0].value !== ''">
          <button @click="_props.config.datatables.filters[0].value = ''" class="btn btn-primary btn-clear" type="button"><i class="fas fa-ban"></i></button>
        </div>
      </div>
    </div>

    <data-tables
      :data="_props.data"
      :pagination-props="_props.config.datatables.pagination"
      :page-size="_props.config.datatables.pagination.pageSize"
      :action-col="actions"
      :table-props="tableProps"
      :filters="_props.config.datatables.filters">
      <el-table-column
        v-for="title in _props.config.datatables.titles"
        :prop="title.prop"
        :label="title.label"
        sortable="custom"
        :key="title.label">
      </el-table-column>
    </data-tables>

    <!-- Modal -->
    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" :aria-labelledby="modalId + 'ModalLabel'" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="modalId+'ModalLabel'">{{modalTitle}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="submit" class="dashboard-form">
              <div class="form-group">
                <div class="form-group d-flex flex-column" v-for="(item, index) in _props.config.model" :key="index">
                  <label v-if="item.type !== 'hidden'" for="input">{{item.label}}:</label>
                  <input
                    v-if="item.type === 'string'"
                    class="form-control"
                    type="text"
                    v-model="model[item.name]"
                  >
                  <vue-editor
                    v-if="item.type === 'text'"
                    v-model="model[item.name]"
                  ></vue-editor>
                  <el-input-number
                    v-if="item.type === 'number'"
                    v-model="model[item.name]"
                    :min="item.min"
                    :max="item.max"
                  ></el-input-number>
                  <el-select
                  v-if="item.type === 'select'"
                  v-model="model[item.name]"
                  placeholder="">
                    <el-option
                      v-for="(option, index) in item.selectConfig.options" :key="index"
                      :label="option.label"
                      :value="option.value">
                    </el-option>
                  </el-select>
                </div>
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
  </section>

</template>

<script lang="js">
import Vue from 'vue'
import _ from 'lodash'
import $ from 'jquery'
import { VueEditor } from 'vue2-editor'
export default {
  name: 'crud-crud',
  props: ['data', 'config'],
  beforeMount () {
    // make sure all modals in crud have unique id
    this.modalId = this.rndStr(5)
    // init model and copy default model state to separate property so we can reset model easily
    _.forOwn(this._props.config.model, (value, key) => {
      Vue.set(this.model, key, value.defaultValue)
      Vue.set(this.modelDefaultState, key, value.defaultValue)
    })
  },
  mounted () {
    // reset modal on close
    $('#' + this.modalId).on('hidden.bs.modal', (e) => {
      this.editmode = false
      this.resetModel()
    })
  },
  data () {
    return {
      // general crud options
      modalId: null,
      editmode: false,
      // model
      model: {},
      modelDefaultState: {},
      // datatable sorting
      tableProps: {
        defaultSort: {
          prop: 'createdAt',
          order: 'descending'
        }
      },
      // datatable actions
      actions: {
        label: 'Действия',
        props: {
          align: 'center'
        },
        buttons: [
          // edit btn
          {
            props: {
              type: 'info el-button--mini is-plain',
              icon: 'fas fa-edit'
            },
            handler: row => {
              this.edit(row)
            }
          },
          // remove btn
          {
            props: {
              type: 'danger el-button--mini is-plain',
              icon: 'fas fa-trash-alt'
            },
            handler: row => {
              this.remove(row)
            }
          }
        ]
      },
      lang: {
        addSuccessMsg: 'Запись добавлена',
        saveSuccessMsg: 'Запись сохранена',
        removeSuccessMsg: 'Запись удалена',
        warning: 'Внимание!',
        confirmDeleteMsg: 'Удалить запись?',
        confirmButtonText: 'Ок',
        cancelButtonText: 'Отмена',
        addModalTitle: 'Добавить новую запись',
        editModalTitle: 'Редактирование записи'
      }
    }
  },
  methods: {
    submit () {
      let action = this.editmode ? this._props.config.vuex.editAction : this._props.config.vuex.addAction
      // either create or edit object
      this.$store.dispatch(action, this.model).then(() => {
        this.$message({
          type: 'success',
          showClose: true,
          message: this.editmode ? this.lang.saveSuccessMsg : this.lang.addSuccessMsg
        })
        $('#' + this.modalId).modal('hide')
      }).catch(err => {
        this.$store.dispatch('hideLoading')
        this.$message({
          type: 'error',
          showClose: true,
          message: err.response.data.message
        })
      })
    },
    edit (data) {
      this.editmode = true
      // make sure we working with known props in passed data object
      // "known fields" - is a model passed via config and initialised in beforeMount()
      _.forOwn(data, (value, key) => {
        // if model have this property (need to filter system mongodb values, to avoid unnecesarry errors)
        if (this._props.config.model[key] !== undefined) {
          let modelProp = this._props.config.model[key]
          // some props can have not plain values, so make sure we handle them here
          switch (modelProp.type) {
            case 'select':
              this.model[key] = value[modelProp.selectConfig.relationKey]
              break
            default:
              this.model[key] = value
              break
          }
        }
      })
      $('#' + this.modalId).modal('show')
    },
    remove (data) {
      this.$confirm(this.lang.confirmDeleteMsg, this.lang.warning, {
        confirmButtonText: this.lang.confirmButtonText,
        cancelButtonText: this.lang.cancelButtonText,
        type: 'warning'
      }).then(() => {
        this.$store.dispatch(this._props.config.vuex.removeAction, data._id).then(() => {
          this.$message({
            type: 'success',
            showClose: true,
            message: this.lang.removeSuccessMsg
          })
        })
      }).catch(() => {})
    },
    rndStr (len) {
      let text = ''
      let chars = 'abcdefghijklmnopqrstuvwxyz'
      for (let i = 0; i < len; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      return text
    },
    resetModel () {
      this.model = { ...this.modelDefaultState }
    }
  },
  computed: {
    modalTitle () {
      return this.editmode ? this.lang.editModalTitle : this.lang.addModalTitle
    }
  },
  components: {
    VueEditor
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/variables';
.btn-clear {
  background-color: $white;
  border: 1px solid $gray-400;
  border-left: 0;
  color: $danger;
}
</style>
