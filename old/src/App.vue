<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      autocomplete: ''
    }
  },
  // created(){
  //   debugger;
  //   this.$store.dispatch('login/tryAutoLogin')
  // }
  // mounted(){
  //   this.autocomplete = new google.maps.places.Autocomplete();
  // }
}
</script>

<style>

</style>
