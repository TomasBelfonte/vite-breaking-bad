<template lang="">
    <div class="d-flex">
        <div class="card my-5 text-center" style="width: 13rem;" >                        
            <img class="card-img-top" :src=pgDetail.image alt="Card image cap">
            <div class="card-body">
                <p class="card-text">Name: {{pgDetail.name}}</p>
                <p class="card-text">Status: {{pgDetail.status}}</p>
                <p class="card-text">Species: {{pgDetail.species}}</p>
                <p class="card-text">Type: {{pgDetail.type}}</p>
                <p class="card-text">Gender: {{pgDetail.gender}}</p>
            </div>                    
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            pgDetail: Object
        }
}
</script>
<style lang="">
    
</style>