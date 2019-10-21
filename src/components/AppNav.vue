<template>
  <div id="nav">
    <router-link to="/dashboard">
      Dashboard
    </router-link>
    <router-link to="/userInfromation">
      User Infomation
    </router-link>
    <div class="log-out-btn">
      <button @click="logout" type="button" class="logout"> Logout </button>
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
</style>
