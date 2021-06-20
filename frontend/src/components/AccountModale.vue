<template>
    <div class="bloc-modale" v-if="displayModale">
        <div class="overlay" @click="displayModaleAccount(); displaySuscribe = false"></div>

        <div class="card">
            <div class="card__header">
                <h2>Créez votre compte</h2>
                <button class="card__header--button" role="button" type="button"
                    @click="displayModaleAccount(); displaySuscribe = false">X</button>
            </div>

            <div class="card__account">
                <div class="card__account--suscribe">
                    <a href="#" title="s'inscrire" @click="displayFormSuscribe">Créer mon compte</a>
                </div>
                <div class="card__account--login">
                    <h3>J'ai déjà un compte</h3>
                    <form action="">
                        <label for="email-login">Entrez votre email</label>
                        <input type="email" placeholder="Email" id="email-login" required>
                        <label for="password-login">Entrez votre mot de passe</label>
                        <input type="password" placeholder="********" id="password-login" autocomplete="off" required>
                        <button type="button" role="submit" class="suscribe-button">Valider</button>
                    </form>
                </div>
            </div>
            <FormSuscribe :displaySuscribe="displaySuscribe" />
        </div>
    </div>

</template>

<script>
    import FormSuscribe from '../components/FormSuscribe.vue'
    export default {
        name: "AccountModale",
        components: {
            FormSuscribe
        },
        props: ['displayModale', 'displayModaleAccount'],
        data() {
            return {
                displaySuscribe: false,
            }
        },

        methods: {
            displayFormSuscribe() {
                this.displaySuscribe = !this.displaySuscribe;
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../public/style.scss";
    .card {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
        max-width: 600px;
        min-height: 300px;
        background-color: $light-color;
        border-radius: 20px;
        overflow: hidden;
        font-size: 1.2rem;
        flex-wrap: wrap;

        &__header {
            background-color: $dark-color;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            color: $light-color;
            position: relative;

            & h2 {
                margin: 10px 0;
            }

            &--button {
                background-color: red;
                color: $light-color;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                border-radius: 20px;
                border: none;
                position: absolute;
                top: 25%;
                right: 10px;
            }
        }

        &__account {
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
            background-color: $light-color;
            padding: 0;
            text-align: center;

            &--suscribe {
                padding: 70px 0;
                width: 100%;
                border-right: 1px solid rgba($dark-color, 0.3);
                align-self: center;

                & a {
                    text-decoration: none;
                    color: red;
                    font-size: 1.17em;
                    font-weight: bold;
                }
            }

            &--login {
                margin: 10px 0;
                width: 100%;

                & h3 {
                    color: red;
                }

                & #email-login,
                #password-login {
                    width: 70%;
                    margin: 10px 10px;
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid rgba($dark-color, 0.3);
                }
            }
        }
    }





    @media all and (max-width: 767px) {
        .card__account {
            flex-direction: column;
        }

        .card__account--suscribe {
            padding: 10px;
        }

        #email,
        #password,
        #firstname,
        #lastname,
        #birthdate {
            width: 70%;
        }

        #country {
            width: 77%;
        }
    }
</style>