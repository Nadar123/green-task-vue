<template>
  <div>
    <div class="row">
      <div class="col-lg-2">
        <div class="side-bar-user">
          <div class="user">
            <BaseIcon name="user"/>
            <h3> {{user.firstName}} </h3>
          </div>
          <div class="side-bar-nav">
            <app-nav />
          </div>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="dashborad-wrapper">
          “Hello, {{user.firstName}} welcome to your {{user.lastName}}.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      user: this.$store.state.user
    }
  },
  components: { AppNav },
  created () {
    this.$store.dispatch('FetchUsers')
  },
  computed: mapState(['userInfo'])
}
</script>
<style lang="scss" scoped>
.side-bar-user{
  padding: 1.5rem;
  min-height: 100vh;
  border-right: 1px solid rgba(0,0,0,0.2);
  .user{
    h3{
      margin-block-start: 0px;
    margin-block-end: 0px;
    color: rgba(0,0,0,0.4);
    }
  }
}
</style>
