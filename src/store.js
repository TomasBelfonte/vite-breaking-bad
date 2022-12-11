import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    charList: [],

    currentPage: 1,
    pagesInfo: {},
    appliedFilters: null,
    filtersOn: null

});

export function recoveryChar (pgChanged) {

    axios.get("https://rickandmortyapi.com/api/character", {

        params: {
            page: store.currentPage,
            ...store.appliedFilters
        }
    }) 
    
    .then((resp) => {

    store.charList = resp.data.results;
    store.pagesInfo = resp.data.info;

    console.log(store);


    })

};
