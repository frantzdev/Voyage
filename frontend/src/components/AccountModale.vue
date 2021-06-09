<template>
 <transition name="fade">
    <div class="bloc-modale" v-if="displayModale">
        <div class="overlay" @click="displayModaleAccount"></div>

        <div class="modale-card">
            <div class="container-button">
                <p>Créez votre compte</p>
                <button class="btn-modale" role="button" type="button" @click="displayModaleAccount">X</button>
            </div>
            <div class="bloc-account">
                <div class="bloc-suscribe">
                    <a href="#" title="s'inscrire" @click="displayModaleAccount">Créer mon compte</a>
                </div>
                <div class="bloc-login">
                    <form action="">
                        <p>J'ai déjà un compte</p>
                        <input type="email" placeholder="Email" class="input-email">
                        <input type="password" placeholder="********" class="input-password">
                        <button type="button" role="submit" class="suscribe-button">Valider</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</transition>   

</template>

<script>
    export default {
        name: "AccountModale",
        props: ['displayModale', 'displayModaleAccount']
    }
</script>

<style scoped>
    .modale-card {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        max-width: 600px;
        min-height: 300px;
        background-color: #f1f1f1;
        border-radius: 20px;
        overflow: hidden;
        font-size: 1.2rem;
    }

    .container-button {
        background-color: #1f1f1f;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        color: white;
        padding: 0 20px;
        position: relative;
    }

    .btn-modale {
        background-color: red;
        color: white;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 20px;
        border: none;
        position: absolute;
        top: 25%;
        right: 10px;
    }

    .bloc-account {
        padding: 0 10px;
        color: red;
        display: flex;
        justify-content: space-between;
        background-color: #f1f1f1;
        padding: 0;
        text-align: center;
    }

    .bloc-suscribe {
        padding: 70px 0;
        margin: 10px 0;
        width: 100%;
        border-right: 2px solid #1f1f1f;
        align-self: center;
    }

    .bloc-suscribe a {
        text-decoration: none;
        color: red;
    }

    .bloc-login {
        margin: 10px 0;
        width: 100%;
        border-right: 2px solid black;
        border: none;
    }

    .input-email,
    .input-password {
        margin: 10px 0;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        width: 70%;
    }

    .input-email::placeholder,
    .input-password::placeholder {
        color: red;
    }

    .suscribe-button {
        margin-top: 10px;
        border-radius: 10px;
        padding: 10px 0;
        width: 40%;
        background-color: #1f1f1f;
        color: #f1f1f1;
        border: none;
    }

    @media all and (max-width: 767px) {
        .bloc-account {
            flex-direction: column;
        }
    }

    @media all and (max-width: 767px) {
        .bloc-suscribe {
            padding: 10px;
        }
    }
</style>