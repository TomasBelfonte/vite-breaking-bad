<template>
    <div class="bg-black">
        <div class="container">
            <div class="row d-flex ">
                <div class="col d-flex" v-for="(single, i) in charList" :key="i">
                    <TheSingleChar :pgDetail="single" ></TheSingleChar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import TheSingleChar from "./TheSingleChar.vue";

export default {
    components: {TheSingleChar},
    props: {},
    data() {
        return {
            charList: [],
        };
    },

    methods: {

    },

    mounted () {
        axios.get("https://swapi.dev/api/people/")
        .then(resp => {
            console.log(resp);
            this.charList = resp.data.results;
        } );
    }
}
</script>

<style scoped>
    
</style>