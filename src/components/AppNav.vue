<template>
  <div class="nav" id="nav">
    <ul>
      <li>
        <router-link to="/dashboard">
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/userInfromation">
          User Infomation
        </router-link>
      </li>
      <li>
        <div class="log-out-btn">
          <button @click="logout" type="button" class="logout"> Logout </button>
        </div>
      </li>
    </ul>
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
.nav{
  ul{
    padding-inline-start: 0px;
    li{
      list-style: none;
      padding: 10px 0px;
      a{
        text-decoration: none;
        color: rgba(0,0,0,0.4);
        font-weight: 400;
        letter-spacing: 1px;
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
          &:hover{
            color: #18c746;
            border: 2px solid #18c746;
          }
        }
      }
    }
  }
}
</style>
