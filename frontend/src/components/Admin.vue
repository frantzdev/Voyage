<template>
   <div class="bloc-modale" v-if="displayAdmin">
        <div class="overlay" @click="displayModaleAdmin()"></div>

        <div class="destination">
            <div class="destination__header">
                <h2>Ajouter une destination</h2>
            </div>
            <div class="destination--button" role="button" type="button" @click="displayModaleAdmin()"><i class="fas fa-times-circle"></i></div>
            <form action="" >
                <label for="title">Titre</label>
                <input type="text" id="title" v-model="title">
                
                <label for="file" >Ajouter une image</label>
                <input type="file"  id="file" @change="handleFileUpload" />
               
                <label for="titlePhoto">Titre de la photo</label>
                <input type="text" id="titlePhoto" v-model="titlePhoto">

                <label for="descriptifPhoto">Description de la photo</label>
                <input type="text" id="descriptifPhoto" v-model="descriptifPhoto">

                <label for="content">Description de l'offre</label>
                <input type="text" id="content" v-model="content">

                <label for="range">Distance</label>
                <input type="text" id="range" v-model="range" pattern="[0-9]+">

                <label for="price">Prix</label>
                <input type="text" id="price" v-model="price" pattern="[0-9]+">

                <button role="button" type="submit" @click="submitItem()">Valider</button>
            </form>
        </div>
         
    </div>
</template>

<script>
import axios from "axios" 
export default {
    name: 'Admin',
    props: ['displayModaleAdmin', "displayAdmin"],
    data() {
        return {
            title: "",
            file: "",
            titlePhoto: "",
            descriptifPhoto: "",
            content: "",
            range: "",
            price: ""
        }
    },

    methods: {
        submitItem() {
            let formData = new FormData();
            formData.append('title', this.title);
            formData.append('image', this.file);
            formData.append('titlePhoto', this.titlePhoto);
            formData.append('descriptifPhoto', this.descriptifPhoto);
            formData.append('content', this.content);
            formData.append('range', this.range);
            formData.append('price', this.price);
                axios.post("http://localhost:3000" + "/api/planete", formData)
                .then(response => {
                    console.log(response);
                    this.displayModaleAdmin();
                    document.location.reload();
                })
                .catch(error => console.log(error));
        },
        handleFileUpload(event) {
                this.file = event.target.files[0];
                console.log(this.file)
        }
    }
}
</script>

<style lang="scss" scoped>
    .destination {
        position: absolute;
        top: 25%;
        bottom: 25%;
        left: 0%;
        right: 0;
        margin: auto;
        width: 40%;
        height: 500px;
        background-color: var(--color-light);
        border-radius: 20px;
        &__header {
            overflow: hidden;
            & h2 {
                background-color: var(--color-dark);
                color: var(--color-light);
                padding: 10px;
                margin: 0;
                border-radius: 20px 20px 0 0;
            }
        }
        &--button {
            font-size: 1.5rem;
            color: red;
            position: relative;
            cursor: pointer;
            top: -15%;
            left: 100%;
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            & input {
                width: 60%;
                margin: 5px 0;
            }
        }       
    }

    
</style>