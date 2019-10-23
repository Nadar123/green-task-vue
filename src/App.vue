<template>
  <div id="app">
    <!-- <app-nav /> -->
    <router-view class="page" />
  </div>
</template>

<script>
// import AppNav from './components/AppNav'

export default {
  // components: { AppNav }
}
</script>

<style lang="scss">
@import "~flexboxgrid/dist/flexboxgrid.min.css";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap");
body{
  max-width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
}
h1,h2,h2,h4,h5,h6{
  font-family: 'Roboto', sans-serif;
}
</style>
