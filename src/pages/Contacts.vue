<template lang="html">

  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
    <div class="my-auto">
      <h2 class="mb-5">Связаться со мной</h2>

      <div class="resume-item d-flex flex-column flex-md-row mb-5 pl-5 pr-5">
        <div class="resume-content mr-auto">
          <form v-on:submit.prevent="sendMessage">
            <div class="form-group">
              <label for="input">Кто Вы?</label>
              <input :class="['form-control', getValidationClass('who')]" type="text" v-model="message.who">
              <span class="validation-error-message" v-if="!$v.message.who.required && $v.message.$dirty">
                {{validationErrorMessages.who.required}}
              </span>
            </div>
            <div class="form-group">
              <label for="input">Как с Вами связаться?</label>
              <input :class="['form-control', getValidationClass('contact')]" type="text" v-model="message.contact">
              <span class="validation-error-message" v-if="!$v.message.contact.required && $v.message.$dirty">
                {{validationErrorMessages.contact.required}}
              </span>
            </div>
            <div class="form-group">
              <label for="textarea">Что Вы можете мне предложить?</label>
              <textarea :class="['form-control', getValidationClass('body')]" name="" id="" cols="30" rows="10" v-model="message.body"></textarea>
              <span class="validation-error-message" v-if="!$v.message.body.required && $v.message.$dirty">
                {{validationErrorMessages.body.required}}
              </span>
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-lg"><i class="far fa-envelope"></i> Отправить</button>
            </div>
          </form>
        </div>
      </div>

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
            text: 'Сообщение отправлено',
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

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
.validation-error-message {
  color: $danger;
}
</style>
