<template>
    <Pagination :currentPage="store.currentPage" @newPage="theNewPage"></Pagination>
    <div class="bg-dark">
        <div class="container">
            <div class="row d-flex ">
                <div class="col d-flex" v-for="(single, i) in store.charList" :key="i">
                    <TheSingleChar :pgDetail="single" ></TheSingleChar>
                </div>
            </div>
        </div>
    </div>
    <Pagination :currentPage="store.currentPage" @newPage="theNewPage"></Pagination>
</template>

<script>
import axios from "axios";
import Pagination from "./Pagination.vue";
import TheSingleChar from "./TheSingleChar.vue";
import { store, recoveryChar} from "../store.js"

export default {
    components: { TheSingleChar, Pagination },
    currentPage: 1,

    data() {
        return {
            store,
        };

        
    },

    methods: {
        theNewPage (pgChanged) {
            console.log( "azione di modifica pagina ricevuto da emit di pagination" )
            this.store.currentPage = pgChanged;

            recoveryChar(pgChanged);
        },

        TheSingleChar (pgChanged) {

        }
    },

    mounted () {
        // axios.get("https://rickandmortyapi.com/api/character" + "?page" + pgChanged)
        // .then(resp => {
        //     console.log(resp);
        //     this.charList = resp.data.results;
        // } );
    },

    created () {
        recoveryChar()
    }
}
</script>

<style scoped>
    
</style>