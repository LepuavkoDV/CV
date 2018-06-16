<template lang="html">

  <section class="contacts content">
    <h1>Связаться со мной</h1>
    <div class="contact-me">
      <form v-on:submit.prevent="sendMessage">
        <div class="form-group">
          <label for="input">Кто Вы?</label>
          <input type="text" v-model="message.who">
        </div>
        <div class="form-group">
          <label for="input">Как с Вами связаться?</label>
          <input type="text" v-model="message.contact">
        </div>
        <div class="form-group">
          <label for="textarea">Что Вы можете мне предложить?</label>
          <textarea name="" id="" cols="30" rows="10" v-model="message.body"></textarea>
        </div>
        <div class="form-group">
          <button><i class="far fa-envelope"></i> Отправить</button>
        </div>
      </form>
    </div>
  </section>

</template>

<script lang="js">
import axios from 'axios'
import { EventBus, Events } from '../events'
export default {
  name: 'contacts',
  props: [],
  mounted () {},
  data () {
    return {
      message: {
        who: '',
        contact: '',
        body: ''
      }
    }
  },
  methods: {
    sendMessage () {
      EventBus.$emit(Events.SHOW_LOADING)
      let that = this
      axios.post(process.env.API_ENDPOINT + '/api/v1/message', this.message).then(res => {
        this.message.who = ''
        this.message.contact = ''
        this.message.body = ''
        EventBus.$emit(Events.HIDE_LOADING)
        that.$notify({
          group: 'main',
          type: 'success',
          text: 'Message sent'
        })
      })
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss"></style>
