<template lang="html">

  <section class="contacts content">
    <h1>Связаться со мной</h1>
    <div class="contact-me animated">
      <form v-on:submit.prevent="sendMessage">
        <div class="form-group">
          <label for="input">Кто Вы?</label>
          <input :class="getValidationClass('who')" type="text" v-model="message.who">
          <span class="validation-error-message" v-if="!$v.message.who.required && $v.message.$dirty">
            {{validationErrorMessages.who.required}}
          </span>
        </div>
        <div class="form-group">
          <label for="input">Как с Вами связаться?</label>
          <input :class="getValidationClass('contact')" type="text" v-model="message.contact">
          <span class="validation-error-message" v-if="!$v.message.contact.required && $v.message.$dirty">
            {{validationErrorMessages.contact.required}}
          </span>
        </div>
        <div class="form-group">
          <label for="textarea">Что Вы можете мне предложить?</label>
          <textarea :class="getValidationClass('body')" name="" id="" cols="30" rows="10" v-model="message.body"></textarea>
          <span class="validation-error-message" v-if="!$v.message.body.required && $v.message.$dirty">
            {{validationErrorMessages.body.required}}
          </span>
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
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { getValidationClass } from '../modules/validation'
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
      },
      validationErrorMessages: {
        who: {
          required: 'Поле обязательное'
        },
        contact: {
          required: 'Поле обязательное'
        },
        body: {
          required: 'Поле обязательное'
        }
      }
    }
  },
  methods: {
    sendMessage () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        EventBus.$emit(Events.SHOW_LOADING)
        axios.post(process.env.API_ENDPOINT + process.env.API_VERSION + '/message', this.message).then(res => {
          EventBus.$emit(Events.HIDE_LOADING)
          this.message.who = ''
          this.message.contact = ''
          this.message.body = ''
          this.$v.$reset()
          this.$notify({
            group: 'main',
            type: 'success',
            text: 'Сообщение отправлено'
          })
        })
      }
    },
    getValidationClass (fieldname) {
      return getValidationClass(this.$v.message, fieldname)
    }
  },
  computed: {},
  mixins: [validationMixin],
  validations: {
    message: {
      who: { required },
      contact: { required },
      body: { required }
    }
  }
}
</script>

<style scoped lang="scss"></style>
