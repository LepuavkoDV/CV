<template lang="html">

  <section class="content">
    <span v-html="_props.content"></span>
  </section>

</template>

<script lang="js">
export default {
  name: 'content-block',
  props: ['content'],
  mounted () {},
  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss"></style>
