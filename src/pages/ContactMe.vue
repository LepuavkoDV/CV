<template lang="html">

  <section class="resume-section p-3 p-lg-5 d-flex flex-column slow-fadeIn" id="experience">
    <div class="my-auto">
      <h2 class="mb-5">Оставить сообщение</h2>

      <div class="resume-item d-flex flex-column flex-md-row mb-5">
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
              <!-- <textarea :class="['form-control', getValidationClass('body')]" name="" id="" cols="30" rows="10" v-model="message.body"></textarea> -->
              <vue-editor :class="[getValidationClass('body')]" v-model="message.body" :editorToolbar="customToolbar"></vue-editor>
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
import { EventBus, Events } from '../modules/events'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { getValidationClass } from '../modules/validation'
import { VueEditor } from 'vue2-editor'
export default {
  name: 'contact-me',
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
      },
      customToolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'align': [] }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'color': [] }, { 'background': [] }],
        ['clean'] 
      ]
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
  components: {
    VueEditor
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
@media (min-width: 992px) {
  .resume-item {
    padding-left: 10rem;
    padding-right: 10rem;
  }
}
</style>
