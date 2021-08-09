<template>
    <div>
        <Header />
        <div class="bg">
                <h1>Le petit explorateur</h1>
            <div class="container">
                <div class="container__block-items" v-for="item in dataBase" :key="item.title" :id="item.id">
                   <img :src="item.image" :alt="item.descriptifPhoto" :title="item.titlePhoto">
                    <h2>{{item.title}}</h2>
                    <p>{{item.content}}</p>
                    <div class="container__block-items__details">
                        <p>Distance {{item.range}} millions de km</p><br>
                        <p>Prix {{item.price}} €</p>
                        <button type="button" role="button" title="Voir le détail de l'offre" class="container__block-items__details--button"
                        @click="displayModale(item.id)">Voir l'offre</button>
                    </div> 
                    <Item  v-if="itemModale"/>        
                 </div>               
            </div>            
        </div>
        <Footer/>
    </div>
</template>

<script>
import axios from 'axios'
import Header from "../components/Header.vue"
import Item from "../components/Item.vue"
import Footer from "../components/Footer.vue"
import {mapState} from 'vuex'
export default {
    name: 'Destination',
    components: {
        Header, Item, Footer
    }, 

    mounted() {
        axios.get("http://localhost:3000/api/")
         .then(response => { 
                this.dataBase = response.data;
                console.log(this.dataBase);
            })
            .catch(error => console.log(error)); 
    },
    data() {
        return {
            dataBase: [
                {
                    title: "",
                    image: "",
                    titlePhoto: "",
                    descriptifPhoto: "",
                    content: "",
                    range: "",
                    price: "",
                    id: ""
                }
            ]
           
        }    
    },
    methods: {
        displayModale() {
            this.$store.commit('TOGGLE_MODALE');
        }
    },

    computed: {  /* test*/
        ...mapState(['image', 'title', 'range', 'price', 'itemModale', 'items[photo, title, id]']),
    }
}
</script>

<style lang="scss" scoped>
    .bg {  /*background*/
        background-attachment: fixed;
        background-image: url(../assets/Background.jpg);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        & h1 {
            text-align: center;    
            color: $light-color;
            font-size: 2rem;
            padding: 50px;
        }
    }


    .container {  /*block de tout les items*/
        margin-bottom: 100px;
        width: 60%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;   
        &__block-items {  /* l'item*/
            margin: 20px;
            width: 29%;        
            border-radius: 20px;
            background-color: var(--color-light);
            text-align: center;
            overflow: hidden;
            box-shadow: 10px 10px 50px var(--color-light);
            color: var(--color-dark);
            & img {   /*image dans l'item*/
                width: 100%;
                height: 250px;
                object-fit: cover;
            }
            & h2 {
                margin: 5px 0;
            }
            & p {
                padding: 0 10px;
                text-align: justify;
                margin: 10px 0;
            }
            &__details {
                display: flex;
                & p {
                    text-align: center;
                    border-right: 1px solid var(--color-dark);
                }
                &--button {
                    align-self: center;
                    width: 40%;
                    margin: 10px 5px;
                    padding: 10px 10px;
                    background-color: var(--color-dark);
                    color: var(--color-light);
                    cursor: pointer;
                    border-radius: 10px;
                    border: none;
                    &:hover {
                        opacity: 0.9;
                    }
                }
            }
        }
    }

    @media all and (max-width: 1700px) {
        .container {
            width: 80%;
        }
    }

    @media all and (max-width: 1440px) {
        .container {
            width: 100%;
            &__block-items {
                width: 40%;
            }
        }
    }

    @media all and (max-width: 768px) {
        .container {
            width: 100%;
            &__block-items {
                width: 80%;
            }
        }
    }
</style>

