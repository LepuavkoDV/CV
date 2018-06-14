<template lang="html">

  <section class="achievements content">
    <h1>My achievements</h1>
    <div class="my-achievements">
      <div class="my-achievements__achievement" v-for="(item, index) in achievements" :key="index">
        <div class="title">{{item.title}}</div>
        <div class="text">{{item.text}}</div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'achievements',
  props: [],
  mounted () {},
  data () {
    return {
      achievements: [
        {
          title: 'Что такое Lorem Ipsum?',
          text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
        },
        {
          title: 'Что такое Lorem Ipsum?',
          text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
        },
        {
          title: 'Что такое Lorem Ipsum?',
          text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
        },
        {
          title: 'Что такое Lorem Ipsum?',
          text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
        }
      ]
    }
  },
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
@import '../assets/scss/variables';
@import '../assets/scss/shared';
.achievements {
  .my-achievements {
    display: grid;
    grid-template-columns: 50% 50%;
    .my-achievements__achievement {
      display: grid;
      grid-template-rows: 10% auto;
      margin: 1em 1em 1em 0;
      .title {
        @extend .post-title-bar; // shared
        width: 80%;
      }
      .text {
        text-indent: 1em;
      }
    }
  }
}
</style>
