<template lang="html">

  <div class="tab-pane pt-2 pb-5" id="my-works">
    <Crud :data="$store.getters.getMyWorksFormattedList()" :config="config"></Crud>
  </div>

</template>

<script lang="js">
import Crud from '../../../components/crud/Crud'
export default {
  name: 'works',
  props: [],
  mounted () {},
  data () {
    return {
      config: {
        datatables: {
          titles: [
            { prop: 'title', label: 'Заголовок' },
            { prop: 'period', label: 'Период' },
            { prop: 'position', label: 'Позиция' },
            { prop: 'createdAt', label: 'Дата' }
          ],
          filters: [
            {
              prop: ['title', 'period', 'position', 'createdAt'],
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
          position: { type: 'string', defaultValue: '', name: 'position', label: 'Позиция', render: true },
          period: { type: 'string', defaultValue: '', name: 'period', label: 'Период', render: true },
          text: { type: 'text', defaultValue: '', name: 'text', label: 'Текст', render: true }
        },
        vuex: {
          addAction: 'addMyWork',
          editAction: 'editMyWork',
          removeAction: 'removeMyWork'
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
