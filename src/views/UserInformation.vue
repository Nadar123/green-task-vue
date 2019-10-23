<template>
  <div>
    <app-nav />
    <div dir="rtl" class="row inner-row">
      <div class="col-lg-12 col-xs-12 page-width">
        <div class="page-content">
          <div class="info-user-wrapper">
            <div class="user-infromation">
              <div class="user-info-title">
                <h3> {{personalInfo}} </h3>
              </div>
              <div class="user-content">
                <span> שם פרטי </span>
                <p> {{user.firstName}} </p>
                <hr>
                <span> שם משפחה </span>
                <p> {{user.lastName}} </p>
                 <hr>
                <span> תעודת זהות  </span>
                <p> {{user.businesses[0].taxId}} </p>
                 <hr>
                <span> מייל </span>
                <p> {{user.businesses[0].accountEmail}} </p>
                 <hr>
                <span> כתובת </span>
                <p> {{user.businesses[0].address}} </p>
                  <hr>
                <span> עיר מגורים </span>
                <p> {{user.businesses[0].city}} </p>
              </div>
                <!-- <ul> -->
                 <!-- <ul v-for="(businesses, index) in user.businesses" :key="index">
                  <li v-for="(item, index) in businesses" :key="index">{{item}}</li> -->
                  <!-- <li>Address {{business.address}}</li> -->
                  <!-- {{business.address}} -->
                   <!-- {{user.firstName}}
                   {{user.lastName}}
                    {{user.email}} -->
                     <!-- adress:{{user.businesses[0].address}}
                     name{{user.businesses[0].name}}
                     {{user.businesses[0].city}} -->
                     <!-- {{user.businesses[0].accountEmail}} -->
                     <!-- {{user.businesses[0].taxId}} -->
                <!-- </ul> -->
                   <!-- {{user.businesses[0]}} -->
            </div>
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
  components: { AppNav },
  data () {
    return {
      user: this.$store.state.user,
      personalInfo: 'פרטים אישיים'
    }
  },
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
  .page-content{
    box-shadow: 4px 5px 6px 7px rgba(0,0,0,0.2);
    padding: 1.35rem;
    max-width: 65%;
    margin: auto;
    @media only screen and (max-width: 480px) {
      max-width: 80%;;
    }

    .user-infromation{
      .user-info-title{
        h3{
          text-align: center;
          font-weight: 400;
          color: rgba(0,0,0,0.7);
          line-height: 1.5rem;
          letter-spacing: 1px;
          display: inline-block;
          border-bottom: 2px solid #18c746;
          cursor: pointer;
        }
      }
      .user-content{
        span{
          font-size: 13px;
          font-weight: 300;
          color: rgba(0,0,0,0.7);
          line-height: 13px;
        }
      }
    }
  }
}
 @media only screen and (max-width: 480px) {
  .inner-row{
    padding-bottom: 4rem;
  }
}
</style>
