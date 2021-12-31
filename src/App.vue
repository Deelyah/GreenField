<template>
  <div>
    <the-heading></the-heading>
    <router-view></router-view> 


  </div>
</template>

<script>

import theHeading from './components/TheHeading.vue';


export default {
  components: {
    theHeading,
  
  },

   mounted() {
        this.$store.dispatch('fetchData')
    }
    
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

</style>