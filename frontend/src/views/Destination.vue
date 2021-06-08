<template>
    <div >
        <Header />
        <div class="bg"></div>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
export default {
    name: 'Destination',
    components: {
        Header
    }
}
</script>

<style>
    .bg {
        background-image: url(../assets/Background.jpg);
        width: 100%;
        height: 1000px;
        display: flex;
        justify-content: center;
    }
</style>