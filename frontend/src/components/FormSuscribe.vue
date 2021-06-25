<template>
    <div v-if="displaySuscribe" class="blocFormSuscribe">
        <h3>Remplissez le formulaire pour vous inscrire</h3>
        <form action="" @submit.prevent="submit">
            <div class="container-input">
                <div class="container-input__column">
                    <label for="email">Votre email</label>
                    <input type="email" placeholder="Email" id="email" autocomplete="off"
                        v-model.trim.lazy="$v.email.$model" required>
                    <div class="error" v-if="!$v.email.isUnique">Veuillez entrer un email valide</div>
                </div>
                <div class="container-input__column">
                    <label for="password">Votre mot de passe</label>
                    <input type="password" placeholder="Mot de passe, (8 caractères mini)" id="password"
                        autocomplete="off" v-model.trim="$v.password.$model" required>
                    <div class="error" v-if="!$v.password.isUnique">Requis 1 chiffre, 1 majuscule</div>
                </div>
                <div class="container-input__column">
                    <label for="firstname">Votre prénom</label>
                    <input type="text" placeholder="Prénom" id="firstname" autocomplete="off"
                        v-model.trim.lazy="$v.firstname.$model" required>
                    <div class="error" v-if="!$v.firstname.minLength">Requis {{$v.firstname.$params.minLength.min}}
                        lettres minimum</div>
                    <div class="error" v-if="!$v.firstname.isUnique">Caractère non accepté</div>
                </div>
                <div class="container-input__column">
                    <label for="lastname">Votre nom</label>
                    <input type="text" placeholder="Nom" id="lastname" autocomplete="off"
                        v-model.trim.lazy="$v.lastname.$model" required>
                    <div class="error" v-if="!$v.lastname.minLength">Requis {{$v.lastname.$params.minLength.min}}
                        lettres minimum</div>
                    <div class="error" v-if="!$v.lastname.isUnique">Caractère non accepté</div>
                </div>
                <div class="container-input__column bloc-date">
                    <label for="birthdate">Date d'anniversaire</label>
                    <input placeholder="Date de naissance (dd/mm/yyyy)" id="birthdate" name="birthdate" type="date"
                        v-model="birthdate" required>
                </div>
                <div class="container-input__column">
                    <label for="country">Selectionner votre nationalité</label>
                    <select id="country" v-model="selected" required>
                        <option disabled value=""> Pays</option>
                        <option>Espagne</option>
                        <option>France</option>
                        <option>Italie</option>
                        <option>Royaume-Uni</option>
                        <option>Canada</option>
                        <option>États-Unis</option>
                        <option>Chine</option>
                        <option>Japon</option>
                    </select>
                </div>
                <div class="bloc-checkbox">
                    <label for="checkbox">Cliquer pour confirmer la politique de confidentialité</label>
                    <input type="checkbox" id="checkbox" v-model="checked" required>
                    <p>J'accepte la politique de confidentialité</p>
                </div>
                <button type="submit" role="submit" class="suscribe-button" 
                    :disabled="submitStatus === 'PENDING'">Valider</button>
            </div>
        </form>
                <div>
                    <p class="submitAlert" v-if="submitStatus === 'OK'">Merci pour votre inscription !</p>
                    <p class="submitAlert" v-if="submitStatus === 'ERROR'">veuillez remplir tout les champs</p>
                    <p class="submitAlert" v-if="submitStatus === 'PENDING'">Transmission...</p>
                </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { minLength } from 'vuelidate/lib/validators';
    export default {
        name: 'FormSuscribe',
        props: ["displaySuscribe", 'displayModaleAccount', 'displayFormSuscribe'],

        data() {
            return {
                email: "",
                password: "",
                firstname: "",
                lastname: "",
                birthdate: "",
                selected: "",
                checked: "",
                submitStatus: null
            }
        },

        validations: {
            email: {
                isUnique(value) {
                    if (value === "") return true
                    let regexEmail = /(.+)@(.+){2,}\.(.+){2,}/;
                    return regexEmail.test(value);
                }
            },
            password: {
                isUnique(value) {
                    if (value === "") return true
                    let regexPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
                    return regexPassword.test(value);
                }
            },
            firstname: {
                minLength: minLength(2),
                isUnique(value) {
                    if (value === "") return true
                    let regexFirstname = /^[A-Za-zéèê'à -]{0,30}$/;
                    return regexFirstname.test(value);
                }
            },
            lastname: {
                minLength: minLength(2),
                isUnique(value) {
                    if (value === "") return true
                    let regexLastname = /^[A-Za-zéèê'à -]{0,30}$/;
                    return regexLastname.test(value);
                }
            }
        },

        methods: {
            submit() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    this.submitStatus = 'PENDING'
                    axios.post(this.$url + "api/auth/signup", {
                        firstname: this.firstname,
                        lastname: this.lastname,
                        email: this.email,
                        password: this.password,
                        birthdate: this.birthdate,
                        country: this.selected
                    })
                    .then(response => { 
                        console.log(response);
                        setTimeout(() => {
                            this.submitStatus = 'OK'
                            setTimeout(() => {
                                this.displayFormSuscribe();
                                this.displayModaleAccount();
                        },1500)                        
                            }, 1000)
                    })
                    .catch(error => console.log('Nous rencontrons un problème pour joindre le serveur',error));                     
                }                
            }
        }
    }
</script>

<style lang="scss">
    .blocFormSuscribe {
        flex-wrap: wrap;
        padding: 10px;
        text-align: center;

        & h3 {
            border-top: 1px solid var(--color-dark);
            margin: 0px 20px;
            padding: 10px;
            color: var(--color-form-light);
        }

        & .container-input {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

            &__column {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }

    label {
        display: none;
    }

    #email,
    #password,
    #firstname,
    #lastname,
    #birthdate {
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid rgba($dark-color, 0.3);
        width: 100%;
    }

    .bloc-date {
        width: 211px;

        & #birthdate {
            padding: 8.5px 10px;
        }
    }
    
    #country {
        margin: 10px -10px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid rgba($dark-color, 0.3);
        width: 233px;
    }

    #email-login::placeholder,
    #password-login::placeholder,
    #email::placeholder,
    #password::placeholder,
    #firstname::placeholder,
    #lastname::placeholder,
    #birthdate,
    #country {
        color: $dark-color;
    }

    input:focus-within {
        outline: 0;
    }

    .bloc-checkbox {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;

        & #checkbox {
            margin: 0 10px;
        }

        & p {
            font-weight: bold;
            color: var(--color-form-light);
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

    .error, .submitAlert {
        font-size: 1rem;
        font-style: italic;
        font-weight: bold;
        color: var(--color-dark);
    }
</style>