<template>
    <div >
        <Header />
        <div class="bg">
                <h1>Le petit explorateur</h1>
            <div class="container" >
                <div class="container__block-items" v-for="item in items" :key="item.image">
                   <img :src="item.photo" :alt="item.title" :title="item.title">
                    <h2>{{item.title}}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur autem dolores dolor quod quibusdam explicabo numquam in delectus</p>
                    <div class="container__block-items__details">
                    <p>Distance 4millions de km</p><br>
                    <p>Prix 4000000€</p>
                    <button type="button" role="button" title="Voir le détail de l'offre" class="container__block-items__details--button">Voir l'offre</button>
                    </div>            
                </div>                 
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
    name: 'Destination',
    components: {
        Header, Footer
    }, 
    data() {
        return {
            items: [
                    {
                        photo: require('@/assets/rose.jpg'),
                        title: "La planete rose"
                    },

                    {
                        photo: require("@/assets/feubleu.jpg"),
                        title: "La planete feu bleu"
                    },

                    {
                        photo: require("@/assets/bleu.jpg"),
                        title: "La planete bleu"
                    },
                    {
                        photo: require("@/assets/jaune.jpg"),
                        title: "La planete jaune"
                    },
                    {
                        photo: require("@/assets/eau.jpg"),
                        title: "La planete d'eau"
                    },
                    {
                        photo: require("@/assets/gob.jpg"),
                        title: "La planete gob"
                    }
            ]

            
        }    
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
            color: #f1f1f1;
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
            background-color: white;
            text-align: center;
            overflow: hidden;
            box-shadow: 10px 10px 50px #f1f1f1;
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
            }
            &__details {
                display: flex;
                & p {
                    text-align: center;
                    border-right: 1px solid #1f1f1f;
                }
                &--button {
                    align-self: center;
                    vertical-align: center;
                    width: 40%;
                    margin: 10px 10px;
                    padding: 10px 20px;
                    background-color: #1f1f1f;
                    color: #f1f1f1;
                    cursor: pointer;
                    border-radius: 20px;
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

