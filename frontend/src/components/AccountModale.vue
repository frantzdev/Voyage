<template>
    <div class="bloc-modale" v-if="displayModale">
        <div class="overlay" @click="displayModaleAccount(); displaySuscribe = false"></div>

        <div class="card">
            <div class="card__header">
                <h2>Créez votre compte</h2>
                <div class="card__header--button" role="button" type="button"
                    @click="displayModaleAccount(); displaySuscribe = false"><i class="fas fa-times-circle"></i></div>
            </div>

            <div class="card__account">
                <div class="card__account--suscribe">
                    <a role="button" type="button" title="S'inscrire" @click="displayFormSuscribe()">Créer mon compte</a>
                </div>
                <div class="card__account--login">
                    <h3>J'ai déjà un compte</h3>
                    <form action="">
                        <label for="email-login">Entrez votre email</label>
                        <input type="email" placeholder="Email" id="email-login" required v-model="email">
                        <label for="password-login">Entrez votre mot de passe</label>
                        <input type="password" placeholder="********" id="password-login" autocomplete="off" required v-model="password">
                        <button type="button" role="submit" class="suscribe-button" @click="submitLogin">Valider</button>
                    </form>
                </div>
            </div>
            <FormSuscribe :displaySuscribe="displaySuscribe" :displayModaleAccount="displayModaleAccount" :displayFormSuscribe="displayFormSuscribe"/>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'
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
                email: "",
                password: ""
            }
        },

        methods: {
            displayFormSuscribe() {
                this.displaySuscribe = !this.displaySuscribe;
            },

            submitLogin() {
                axios.post(this.$url + "api/auth/login", {
                    email: this.email,
                    password: this.password
                })
                .then(response => {
                    console.log(response);
                    this.displayModaleAccount();
                    document.location.reload();
                })
                .catch(error => console.log(error));
            }
        }
    }
</script>

<style lang="scss">
    label {
        display: none;
    }
    .card {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
        max-width: 600px;
        min-height: 300px;
        background-color: var(--color-light);
        border-radius: 20px;
        overflow: hidden;
        font-size: 1.2rem;
        flex-wrap: wrap;

        &__header {
            background-color: var(--color-dark);
            padding: 0 10px;
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            color: var(--color-light);

            & h2 {
                margin: 10px 0;
            }

            &--button {
                background-color: var(--color-dark);
                color: var(--color-light);
                font-size: 30px;
                cursor: pointer;
                border: none;
            }
        }

        &__account {
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
            background-color: var(--color-light);
            padding: 0;
            text-align: center;

            &--suscribe {
                padding: 70px 0;
                width: 100%;
                border-right: 1px solid rgba($dark-color, 0.3);
                align-self: center;

                & a {
                    text-decoration: none;
                    color: var(--color-form-light);
                    font-size: 1.17em;
                    font-weight: bold;
                    cursor: pointer;
                }
            }

            &--login {
                margin: 10px 0;
                width: 100%;

                & h3 {
                    color: var(--color-form-light);
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

    .suscribe-button {
        margin-top: 10px;
        border-radius: 10px;
        padding: 10px 0;
        width: 40%;
        background-color: var(--color-dark);
        color: var(--color-light);
        border: none;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
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