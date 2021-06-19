<template>
     <div v-if="displaySuscribe" class="blocFormSuscribe">
                <h3>Remplissez le formulaire pour vous inscrire</h3>
                <form action="" >
                  <div class="container-input"> 
                    <div class="container-input__column">
                        <label for="email">Votre email</label>             
                        <input type="email" placeholder="Email" id="email" autocomplete="off" v-model.lazy="$v.email.$model" required>
                        <small v-if="!$v.email.isUnique">Veuillez entrer un email valide</small>
                    </div>
                    <div class="container-input__column">
                        <label for="password">Votre mot de passe</label>
                        <input type="password" placeholder="Mot de passe, (8 caractères mini)" id="password" autocomplete="off" v-model.trim="$v.password.$model" required>
                        <small v-if="!$v.password.isUnique">Requis 1 chiffre, 1 majuscule</small>
                     </div>
                    <div class="container-input__column">
                        <label for="firstname">Votre prénom</label>
                        <input type="text" placeholder="Prénom" id="firstname" autocomplete="off" v-model.trim="$v.firstname.$model" required>
                        <small v-if="!$v.firstname.minLength">Prénom trop court</small>
                        <small v-if="!$v.firstname.isUnique">Caractère non accepté</small>
                     </div>
                    <div class="container-input__column">
                        <label for="lastname">Votre nom</label>
                        <input type="text" placeholder="Nom" id="lastname" autocomplete="off" v-model.trim="$v.lastname.$model" required>
                        <small v-if="!$v.lastname.minLength">Nom trop court</small>
                        <small v-if="!$v.lastname.isUnique">Caractère non accepté</small>
                    </div>
                    <div class="container-input__column">
                        <label for="birthdate">Date d'anniversaire</label>
                        <input placeholder="Date de naissance (dd/mm/yyyy)" id="birthdate" name="birthdate"
                        type="text" v-model.lazy="$v.birthdate.$model" required>
                        <small v-if="!$v.birthdate.isUnique">Le format n'est pas correct</small>
                    </div>
                    <div class="container-input__column">
                        <label for="country">Selectionner votre nationalité</label>
                        <select placeholder id="country">
                            <option value="espagne">Espagne</option>
                            <option value="france" selected>France</option>
                            <option value="italie">Italie</option>
                            <option value="royaume-uni">Royaume-Uni</option>
                            <option value="canada">Canada</option>
                            <option value="etats-unis">États-Unis</option>
                            <option value="chine">Chine</option>
                            <option value="japon">Japon</option>
                        </select>  
                    </div>                      
                    <div class="bloc-checkbox">
                        <label for="checkbox">Cliquer pour confirmer la politique de confidentialité</label>
                        <input type="checkbox" id="checkbox" required>
                        <p>J'accepte la politique de confidentialité</p>
                    </div>
                    <button type="button" role="submit" class="suscribe-button">Valider</button>
                </div>     
                </form>
            </div>
</template>

<script>
import { minLength } from 'vuelidate/lib/validators';
export default {
    name: 'FormSuscribe',
    props : ["displaySuscribe"],

    data() {
        return {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            birthdate: ""
        }
    },

     validations: {
            birthdate: {
                isUnique(value) {
                    if(value === "") return true
                    let regexDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
                    return regexDate.test(value);                    
                }
            },
            email: {
                isUnique(value) {
                    if(value === "") return true
                    let regexEmail = /(.+)@(.+){2,}\.(.+){2,}/;
                    return regexEmail.test(value);                    
                }
            },
            password: {
                isUnique(value) {
                    if(value === "") return true
                    let regexPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
                    return regexPassword.test(value);
                }
            },
            firstname: {
                minLength: minLength(2),
                isUnique (value) {
                    if(value === "") return true
                    let regexFirstname = /^[A-Za-zéèê'à -]{0,30}$/;
                    return regexFirstname.test(value);
                }
            },
            lastname: {
                minLength: minLength(2),
                isUnique (value) {
                    if(value === "") return true
                    let regexLastname = /^[A-Za-zéèê'à -]{0,30}$/;
                    return regexLastname.test(value);
                }
            }
    }
}
</script>

<style lang="scss">

    small {
        font-size: 1rem;
        font-style: italic;
        font-weight: bold;
        color: red;
    }

    .blocFormSuscribe {
            flex-wrap: wrap;
            padding: 10px;
            text-align: center;

            & h3 {
                border-top: 1px solid rgba(0, 0, 0, 0.3);
                margin: 0px 20px;
                padding: 10px;
                color: red;
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
        margin: 10px 10px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        width: 100%;
    }

    #country {
        margin: 10px -10px;
        padding: 10px 0;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        width: 233px;
    }

    #email-login::placeholder,
    #password-login::placeholder,
    #email::placeholder,
    #password::placeholder,
    #firstname::placeholder,
    #lastname::placeholder,
    #birthdate::placeholder,
    #country {
        color: red;
    }

    input:focus-within {
       outline: 0;
    }

    .bloc-checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    }

    .suscribe-button {
        margin-top: 10px;
        border-radius: 10px;
        padding: 10px 0;
        width: 40%;
        background-color: #2f2f2f;
        color: #f1f1f1;
        border: none;
        cursor: pointer;
    }
</style>