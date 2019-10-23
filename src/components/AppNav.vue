<template>
  <div class="row inner-nav-background">
    <div class="col-lg-12 col-xs-12 page-width">
      <div class="inner-nav">
          <div class="user">
           <BaseIcon name="user"/>
          </div>
        <div class="nav" id="nav">
          <ul>
            <li>
              <router-link to="/dashboard">
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link to="/userInfromation">
                User-Infomation
              </router-link>
            </li>
            <li>
              <div class="log-out-btn">
                <button @click="logout" type="button" class="logout"> Logout </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.inner-nav-background{
   background: #fff;
   transition: 0.3s ease-in;
   box-shadow: 0 4px 2px -2px rgba(0,0,0,0.4);
  .page-width{
    max-width: 1200px;
    margin: auto;
  }
  .inner-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav{
      ul{
        padding-inline-start: 0px;
        display: flex;
        align-items: center;
        li{
          list-style: none;
          padding: 20px;
          cursor: pointer;
          @media only screen and (max-width: 480px) {
            padding: 5px;
          }
          a{
            text-decoration: none;
            color: rgba(0,0,0,0.4);
            font-weight: 400;
            letter-spacing: 1px;
            @media only screen and (max-width: 480px) {
              letter-spacing:0;
              font-size: 15px;
            }
            &:hover{
              color: rgba(0,0,0,0.8)
            }
          }
          .log-out-btn{
            .logout{
              background-color: #fff;
              color: rgba(0,0,0,0.4);
              padding: 10px 50px;
              text-align: center;
              border: 2px solid rgba(0,0,0,0.4);
              transition: all 0.4s ease-in;
              @media only screen and (max-width: 480px) {
                padding: 10px 20px;
              }

              &:hover,
              &:focus{
                color: #18c746;
                border: 2px solid #18c746;
              }
              &:active{
                color: tomato;
                border: 2px solid tomato;
                outline: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
