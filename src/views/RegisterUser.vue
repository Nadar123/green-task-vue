<template>
  <div>
    <div  dir="rtl" class="form-wrapper">
      <div class="formtitle">
        <h3>{{formTitle}}</h3>
      </div>
      <form class="form-content" @submit.prevent="register">
        <div class="input-wrapper">
          <input
            @blur="$v.email.$touch()"
            :class="{error: $v.email.$error}"
            v-model="email"
            type="email"
            name="email"
            placeholder="מייל"
            value>
          <span class="mailInputInfo"> {{ mailInputInfo }} </span>
          <div v-if="$v.email.$error" class="validation-message">
            <p v-if="!$v.email.email" class="err-message"> Please enter a valid email </p>
            <p v-if="!$v.email.required" class="err-message"> Email is required </p>
          </div>
        </div>
        <div class="input-wrapper">
          <input
            @blur="$v.password.$touch()"
            :class="{error: $v.password.$error}"
           v-model="password"
           type="password"
           name="password"
           placeholder="סיסמא"
           value>
          <span class="passwordInputInfo"> <a class="password-link" href="/"> {{passwordInputInfo}} </a></span>
          <div v-if="$v.password.$error" class="validation-message">
            <p v-if="!$v.password.password" class="err-message"> Current Password is not vaild</p>
            <p v-if="!$v.password.required" class="err-message"> Password is required </p>
          </div>
        </div>
        <div class="btn-register">
          <button class="login" type="submit" name="button">
            כניסה
          </button>
          <button :style="{backgroundImage: `url(${googleIcon})`}" class="log-google" type="submit" name="button">
            כניסה עם גוגל
          </button>
          <p class="err-rtl err-message"> {{error}} </p>
        </div>
      </form>
    </div>
    <BelowFooter/>
  </div>
</template>
<script>
import googleIcon from '../assets/Google_G.svg'
import BelowFooter from '../components/BelowFooter'
import { required, email } from 'vuelidate/lib/validators'
export default {
  components: { BelowFooter },
  data () {
    return {
      formTitle: 'התחברות לחשבונית ירוקה',
      mailInputInfo: 'כתובת המייל איתה נרשמת לחשבונית ירוקה',
      passwordInputInfo: 'שכחת סיסמא?',
      googleIcon,
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    register () {
      this.$store
        .dispatch('register', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          this.error = err.response.data.errorMessage
        })
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  }
}
</script>
<style lang="scss" scoped>
  .form-wrapper{
    max-width: 75%;
    padding-top: 3rem;
    @media only screen and (max-width: 480px) {
      padding-top: 0;
    }
    .formtitle{
      padding-bottom: 4rem;
      @media only screen and (max-width: 480px){
        font-size: 22px;
        text-align: center;
        padding-bottom: 2rem;
      }
      h3{
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 35px;
        color: rgb(13, 83, 245);
        @media only screen and (max-width: 480px) {
          font-size: 21px;
          margin-block-start: 0em !important;
          margin-block-end: 0em !important;
        }
        @media only screen and (max-width: 960px) {
          font-size: 28px;
        }
      }
    }
    .form-content{
      .input-wrapper{
        position: relative;
        padding-bottom: 4rem;
        @media only screen and (max-width: 480px){
          padding-bottom: 1rem;
        }
        cursor: pointer;
        input{
          width: 422px;
          height: 35px;
          box-shadow: none;
          border: none;
          border-bottom: 1px solid rgba(0,0,0,0.7);
          background-size: 0px 0px !important;
          &:focus {
            border-bottom: 2px solid #18c746;
            outline: none;
          }
          &::placeholder{
            font-size: 15px;
            font-weight: 400;
            padding-top: 1rem;
            color: rgba(0,0,0,0.7);
          }
          @media only screen and (max-width: 960px) {
            width: 100%;
          }
        }
        .mailInputInfo,
        .passwordInputInfo{
          display: block;
          padding-top: 0.5rem;
          font-size: 12px;
          font-weight: 300;
          color: rgba(0,0,0,0.7);
          .password-link{
            color: rgba(0,0,0,0.7);
            transition: color 0.2s ease-in-out;
            &:hover{
              color: #18c746;
            }
          }
        }
      }
      .btn-register{
        padding-top: 1rem;
        @media only screen and (max-width: 480px) {
          padding-top: 2rem;
          text-align: center;
        }
        .login{
        background-color: rgb(13, 83, 245);
        padding: 20px 85px;
        width: 210px;
        height: 63px;
        color: #fff;
        border: none;
        border-radius: 4rem;
        font-size: 16px;
        font-weight: 600;
        margin-left: 1.5rem;
        letter-spacing: 0.58px;
        cursor: pointer;
        transition: all 0.2 ease-in-out;
          &:hover{
            background-color: #fff;
            color: rgb(13, 83, 245);
            border: 1px solid rgb(13, 83, 245);
          }
          @media only screen and (max-width: 480px) {
            margin-bottom: 2rem;
            width: 100%;
            padding:0;
            width:100% !important;
          }
          @media only screen and (max-width: 960px) {
            width: 100%;
            margin-bottom: 2rem;
          }
        }
        .log-google{
          background-position: 21px 21px;
          background-repeat: no-repeat;
          background-size: 20px;
          background-color: #fff;
          padding: 20px 22px 19px 56px;
          height: 63px;
          color: rgb(13, 83, 245);
          border: none;
          border-radius: 4rem;
          border: 1px solid rgb(13, 83, 245);
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.58px;
          cursor: pointer;
          transition: all 0.2 ease-in-out;
          &:hover{
            background-color:rgb(13, 83, 245);
            color: #fff;
          }
          @media only screen and (max-width: 480px) {
            width: 100%;
            padding:0
          }
          @media only screen and (max-width: 960px) {
            width: 100%;
          }
        }
      }
    }
    .err-message{
        color: red;
        &.err-rtl{
          text-align: center;
        }
      }
  }
</style>
