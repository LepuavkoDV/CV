<template lang="html">

  <div class="tab-pane pt-2 pb-5" id="skills">
    <Crud :data="$store.state.skills.skills" :config="config"></Crud>
  </div>

</template>

<script lang="js">
import Crud from './crud/Crud'
import _ from 'lodash'
export default {
  name: 'skills',
  props: [],
  mounted () {},
  data () {
    return {
      config: {
        datatables: {
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
            pageSize: 10
          }
        },
        model: {
          _id: { type: 'hidden', defaultValue: null, name: '_id', label: '', render: false },
          title: { type: 'string', defaultValue: '', name: 'title', label: 'Название', render: true },
          value: { type: 'number', defaultValue: '', name: 'value', label: 'Значение', min: 1, max: 100, render: true },
          group: { type: 'select',
            defaultValue: '',
            name: 'group',
            label: 'Группа',
            selectConfig: {
              options: this.getSelectOptions(),
              relationKey: '_id'
            },
            render: true
          }
        },
        vuex: {
          addAction: 'addSkill',
          editAction: 'editSkill',
          removeAction: 'removeSkill'
        }
      }
    }
  },
  methods: {
    getSelectOptions () {
      let options = _.flatMap(this.$store.state.groups.groups, (item) => {
        return {
          value: item._id,
          label: item.title
        }
      })
      return options
    }
  },
  computed: {},
  components: {
    Crud
  }
}
</script>

<style scoped lang="scss"></style>
