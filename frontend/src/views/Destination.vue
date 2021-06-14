<template>
    <div >
        <Header />
        <div class="bg">
                <h1>Title H1</h1>
            <div class="container" >

                <div class="block-items" v-for="item in items" :key="item.image">
                   <img :src="item.photo" :alt="item.title" :title="item.title">
                    <h2>{{item.title}}</h2>
                    <p>descriptif</p>
                </div>                 
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
export default {
    name: 'Destination',
    components: {
        Header
    }, 
    data() {
        return {
            items: [
                    {
                        photo: require('@/assets/nuage.jpg'),
                        title: "le titre H2"
                    },

                    {
                        photo: require("@/assets/glace.jpg"),
                        title: "le titre H3"
                    },

                    {
                        photo: require("@/assets/volcan.jpg"),
                        title: "le titre H4"
                    },
                    {
                        photo: require("@/assets/volcan.jpg"),
                        title: "le titre H4"
                    },
                    {
                        photo: require("@/assets/volcan.jpg"),
                        title: "le titre H4"
                    },
                    {
                        photo: require("@/assets/volcan.jpg"),
                        title: "le titre H4"
                    }
            ]

            
        }    
    }
}
</script>

<style>


    .bg {  /*background*/
        background-image: url(../assets/Background.jpg);
        width: 100%;
        /* height: 1000px; */
        display: flex;
        justify-content: center;
    }

    .container {  /*block de tout les items*/
        margin: 10% 0;
        padding: 20px;
        width: 70%;
        background-color: rgba(0, 0, 0, 0);
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;   
    }

    .block-items {  /* l'item*/
        margin: 20px;
        width: 25%;        
        border: 1px solid black;
        border-radius: 10px;
        background-color: white;
        text-align: center;
        overflow: hidden;
        border: 2px solid goldenrod;
    }

    .block-items img {   /*image dans l'item*/
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-bottom: 3px solid goldenrod;
    }
</style>