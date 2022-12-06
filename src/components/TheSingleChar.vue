<template lang="">
    <div class="d-flex">
        <div class="card my-5 text-center" style="width: 13rem;" >                        
            <img class="card-img-top" src="/vite.svg" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">{{pgDetail.name}}</p>
                <p class="card-text">{{pgDetail.gender}}</p>
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