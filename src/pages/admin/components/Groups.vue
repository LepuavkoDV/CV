<template lang="html">

  <div class="tab-pane active pt-2 pb-5" id="groups">
    <Crud :data="$store.getters.getGroupsFormattedList()" :config="config"></Crud>
  </div>

</template>

<script lang="js">
import Crud from '../../../components/crud/Crud'
export default {
  name: 'groups',
  props: [],
  mounted () {},
  data () {
    return {
      config: {
        datatables: {
          titles: [
            { prop: 'title', label: 'Название' },
            { prop: 'icon', label: 'Иконка' },
            { prop: 'totalItems', label: 'Кол-во Навыков' },
            { prop: 'createdAt', label: 'Дата' }
          ],
          filters: [
            {
              prop: ['title', 'icon', 'createdAt'],
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
          icon: { type: 'string', defaultValue: '', name: 'icon', label: 'Иконка', render: true }
        },
        vuex: {
          addAction: 'addGroup',
          editAction: 'editGroup',
          removeAction: 'removeGroup'
        }
      }
    }
  },
  methods: {},
  computed: {},
  components: {
    Crud
  }
}
</script>

<style scoped lang="scss"></style>
