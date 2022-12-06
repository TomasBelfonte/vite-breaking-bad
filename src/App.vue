<template>  
  <TheCharList></TheCharList>  
</template>

<script>
  import TheCharList from './components/TheCharList.vue';
  import TheSingleChar from './components/TheSingleChar.vue';
  export default {
    components: {TheCharList, TheSingleChar}
  }
</script>

<style lang="scss">
@use "./style/general.scss";

</style>
