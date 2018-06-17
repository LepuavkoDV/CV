<template lang="html">

  <div class="my-achievements__achievement">
    <div class="title">{{_props.item.title}}</div>
    <div class="text" v-html="_props.item.text"></div>
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

<style scoped lang="scss"></style>
