<template>
  <div class="home">
    <div class="row row-home">
       <div class="col-lg-6 col-wrapper-1">
         <div class="big-img-wrapper">
            <div class="big-img">
            <img src="@/assets/green_login_page.svg"/>
         </div>
         </div>
      </div>
      <div class="col-lg-6 col-wrapper-2">
         <div class="logo" :style="{backgroundImage: `url(${backgroundImg})`}">
         </div>
        <RegisterUser/>
      </div>
    </div>
  </div>
</template>
<script>
import RegisterUser from '@/views/RegisterUser'
import backgroundImg from '../assets/green_logo.svg'
export default {
  components: { RegisterUser },
  data () {
    return {
      backgroundImg
    }
  }
}
</script>
<style lang="scss">
.home{
  font-family: sans-serif;
  .row-home{
    width: 100%;
      img{
      background-color:rgb(255, 220, 220);
      width: 100%;
      height: 110vh;
        @media only screen and (max-width: 480px) {
          display: none;
        }
      }
      .logo{
        width: 175px;
        height: 36px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        margin-left: auto;
        padding-top: 4rem;
        @media only screen and (max-width: 480px) {
          margin-left: none;
          margin: auto;
          padding-top: 2rem;
        }
      }
  }
}

@media only screen and (max-width: 1199px) {
      .col-wrapper-1{
        width: 40%
      }
      .col-wrapper-2{
        width: 60%;
      }
 }

 @media only screen and (max-width: 1000px) {
  .col-wrapper-1{
      width: 25%
    }
  .col-wrapper-2{
    width: 75%;
    .form-wrapper{
      margin: auto !important;
    }
  }
 }
 @media only screen and (max-width: 480px) {
   .col-wrapper-1{
      width: 0%;
    }
  .col-wrapper-2{
    width: 100%;
  }
 }
</style>
