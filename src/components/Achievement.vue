<template lang="html">

  <div class="resume-item d-flex flex-column flex-md-row mb-5">
    <div class="resume-content mr-auto">
      <h3 class="mb-0">{{_props.item.title}}</h3>
      <div class="subheading mb-3">{{_props.item.position}}</div>
      <span v-html="_props.item.text"></span>
    </div>
    <div class="resume-date text-md-right">
      <span class="text-primary">{{_props.item.period}}</span>
    </div>
  </div>

</template>

<script lang="js">
export default {
  name: 'achievement',
  props: ['item'],
  mounted () {},
  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
h3 {
  text-align: start;
}
</style>
