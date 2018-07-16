<template lang="html">

  <section class="resume-section p-3 p-lg-5 d-flex flex-column slow-fadeIn">
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
              <vue-editor :class="[getValidationClass('body')]" v-model="message.body" :editorToolbar="customToolbar"></vue-editor>
              <span class="validation-error-message" v-if="!$v.message.body.required && $v.message.$dirty">
                {{validationErrorMessages.body.required}}
              </span>
            </div>
            <div class="form-group">
              <button class="el-button el-button--primary"><i class="far fa-envelope"></i> Отправить</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </section>

</template>

<script lang="js">
import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import Validation from '../modules/utils/validation'
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
      messageDefaulsState: {
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
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'color': [] }, { 'background': [] }],
        ['clean']
      ]
    }
  },
  methods: {
    sendMessage () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('showLoading')
        axios.post(process.env.API_ENDPOINT + process.env.API_VERSION + '/message', this.message).then(res => {
          this.$store.dispatch('hideLoading')
          this.resetForm()
          this.$v.$reset()
          this.$message({
            type: 'success',
            showClose: true,
            message: 'Сообщение отправлено'
          })
        })
      }
    },
    getValidationClass (fieldname) {
      return Validation.getValidationClass(this.$v.message, fieldname)
    },
    resetForm () {
      this.message = { ...this.messageDefaulsState }
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
@media (min-width: 992px) {
  .resume-item {
    padding-left: 10rem;
    padding-right: 10rem;
  }
}
</style>
