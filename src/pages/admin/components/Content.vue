<template lang="html">

  <div class="tab-pane pt-2 pb-5" id="content">
    <Crud :data="$store.state.content.list" :config="config"></Crud>
  </div>

</template>

<script lang="js">
import Crud from './crud/Crud'
export default {
  name: 'mycontent',
  props: [],
  mounted () {},
  data () {
    return {
      config: {
        datatables: {
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
          }
        },
        model: {
          _id: { type: 'hidden', defaultValue: null, name: '_id', label: '', render: false },
          page: { type: 'string', defaultValue: '', name: 'page', label: 'Страница', render: true },
          section: { type: 'string', defaultValue: '', name: 'section', label: 'Секция', render: true },
          content: { type: 'text', defaultValue: '', name: 'content', label: 'Контент', render: true }
        },
        vuex: {
          addAction: 'addPageContent',
          editAction: 'editPageContent',
          removeAction: 'removePageContent'
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
