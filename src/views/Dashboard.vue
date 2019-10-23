<template>
  <div>
  <app-nav />
    <div dir="rtl" class="row">
      <div class="col-lg-12 col-xs-12 page-width">
        <div class="pager-content">
          <div class="dashborad-wrapper">
            <h4>   שלום {{user.firstName}}, ברוך הבא ל <span class="businesses-name">{{user.businesses[0].name}} </span>  </h4>
          </div>
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
    console.log()
  },
  computed: mapState(['userInfo'])
}
</script>
<style lang="scss" scoped>
  .page-width{
    max-width: 1200px;
    margin: auto;
    padding-top: 4rem;
     .dashborad-wrapper{
       color:darkgrey;
       @media only screen and (max-width: 480px) {
         text-align: center;
       }
      // @media only screen and (max-width: 960px) {
      //   padding: 20px;
      // }
    .businesses-name{
      color: #18c746;
    }
  }
  }
</style>
