<template>
    <div class="item-modale">
        <div class="overlays" @click="displayModale()"></div>
        <div class="card-item" >
            <h1 @click="displayModale()">hello{{itemModale}}</h1>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Item',
    methods: {
        displayModale() {
            this.$store.commit('TOGGLE_MODALE');
        }
    },
    computed: {  /* test*/
        ...mapState(['image', 'title', 'range', 'price', 'itemModale']),
    }
}
</script>

<style lang="scss" scoped>

.card-item {
    position: absolute;
    top: 40%;
    bottom: 20%;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    background-color: white;
    border-radius: 10px;
}

.overlays {
    background: rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>