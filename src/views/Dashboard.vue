<template>
  <div>
   <app-nav />
    <div class="dashborad-wrapper">
    DashBoard
  </div>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
// import apiService from '@/service/apiService'
export default {
  components: { AppNav },
  data () {
    return {
      data: []
    }
  },
  created () {
    
    // apiService.getData()
    //   .then(response => {
    //     console.log(response.data)
    //     // this.data = response.data
    //   })
    //   .catch(error => {
    //     console.log('there is an error', error.response)
    //   })
  }
}
</script>
