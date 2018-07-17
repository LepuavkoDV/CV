<template lang="html">

  <section class="resume-section login content px-5 d-flex flex-row justify-content-center align-items-center">
    <div class="card login-form">
      <div class="card-body">
        <h3>Вход</h3>
        <form v-on:submit.prevent="tryLogin">
          <div class="form-group">
            <label for="input">Email</label>
            <input :class="['form-control', getValidationClass('email')]" type="text" v-model="user.email">
            <span class="validation-error-message" v-if="!$v.user.email.required && $v.user.$dirty">
              {{validationErrorMessages.email.required}}
            </span>
            <span class="validation-error-message" v-if="!$v.user.email.email && $v.user.$dirty">
              {{validationErrorMessages.email.email}}
            </span>
          </div>
          <div class="form-group">
            <label for="input">Пароль</label>
            <input :class="['form-control', getValidationClass('password')]" type="password" v-model="user.password">
            <span class="validation-error-message" v-if="!$v.user.password.required && $v.user.$dirty">
              {{validationErrorMessages.password.required}}
            </span>
          </div>
          <div class="form-group">
            <button class="el-button el-button--primary"><i class="fas fa-sign-in-alt"></i> Войти</button>
          </div>
        </form>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import Validation from '../../modules/utils/validation'
import router from '../../modules/router'
export default {
  name: 'login',
  props: [],
  mounted () {},
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      validationErrorMessages: {
        email: {
          required: 'Поле обязательное',
          email: 'Должен быть E-mail'
        },
        password: {
          required: 'Поле обязательное'
        }
      }
    }
  },
  methods: {
    getValidationClass (fieldname) {
      return Validation.getValidationClass(this.$v.user, fieldname)
    },
    tryLogin () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('showLoading')
        this.$store.dispatch('login', this.user).then(res => {
          this.$store.dispatch('hideLoading')
          router.push({ path: '/dashboard' })
        }).catch(err => {
          this.$store.dispatch('hideLoading')
          this.$notify({
            group: 'main',
            type: 'error',
            text: err.response.data.message
          })
        })
      }
    }
  },
  computed: {},
  mixins: [validationMixin],
  validations: {
    user: {
      email: { required, email },
      password: { required }
    }
  }
}
</script>

<style scoped lang="scss">
.login-form {
  width: 90%;
}

@media (min-width: 992px) {
  .login-form {
    width: 35%;
  }
}
</style>
