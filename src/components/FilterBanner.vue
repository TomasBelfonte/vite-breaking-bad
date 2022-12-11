<template >
    <form class="row g-3 d-flex text-center justify-content-center" @submit.prevent="search">
        <div class="col-md-2 ms-3">
            <label for="inputName" class="form-label">Name</label>
            <input type="text" class="form-control" id="input-name" placeholder="Nome" v-model="filters.name">
        </div>
        <div class="col-md-2">
            <label for="inputState" class="form-label">Status</label>
            <input type="text" class="form-control" id="input-state" placeholder="Stato" v-model="filters.status">
        </div>
        <div class="col-md-2">
            <label for="inputSpecie" class="form-label">Species</label>
            <input type="text" class="form-control" id="input-specie" placeholder="Specie" v-model="filters.species">
        </div>
        <div class="col-md-2">
            <label for="inputType" class="form-label">Type</label>
            <input type="text" class="form-control" id="input-type" placeholder="Tipologia" v-model="filters.type">
        </div>
        <div class="col-md-2">
            <label for="inputGender" class="form-label">Gender</label>
            <input type="text" class="form-control" id="input-gender" placeholder="Genere" v-model="filters.gender">
        </div>
        
        <div class="d-flex justify-content-center m-5 gap-3">
            <button type="reset" class="btn btn-danger">Resetta</button>
            <button type="submit" class="btn btn-primary">Cerca</button>
        </div>
    </form>

    

    <div class="d-flex justify-content-center">
        <div class="alert alert-primary " role="alert">
        Trovate {{store.pagesInfo.count}} cards-personaggio 
        per un totale di {{store.pagesInfo.pages}} pagine.
        </div>
    </div>
</template>

<script>
import {store, recoveryChar } from "../store";

export default {
    data() {
        return {
            store,
            filters: {
                name:"",
                status:"",
                species:"",
                type:"",
                gender:""
            }
        };
    },
    emits: ["filtered"],
    methods: {
        search () {
            recoveryChar();
            this.$emit("filtered", {...this.filters});
        }
    }

}
</script>

<style scoped>
    
</style>