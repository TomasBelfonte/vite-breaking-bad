<template> 
  <h1 class="text-center my-5">Rick & Morty</h1>
  <FilterBanner @filtered="filterResult"></FilterBanner>
  <TheCharList></TheCharList>  
</template>

<script>
  import TheCharList from './components/TheCharList.vue';
  import TheSingleChar from './components/TheSingleChar.vue';
  import Pagination from './components/Pagination.vue';
  import {store, recoveryChar} from './store';
  import FilterBanner from './components/Filterbanner.vue';

  export default {
    components: {TheCharList, TheSingleChar, Pagination, FilterBanner},
    data() {
      return {
        store
      };
    },

    methods: {
      filterResult (filtersOn) {
        this.store.appliedFilters = filtersOn

        recoveryChar ();

        console.log (filtersOn);

      }
    },

    computed: {

    },
  }
</script>

<style lang="scss">
@use "./style/general.scss";

</style>
