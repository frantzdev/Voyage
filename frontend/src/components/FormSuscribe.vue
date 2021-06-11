<template>
     <div v-if="displaySuscribe" class="bloc-form-suscribe">
                <h3>Remplissez le formulaire pour vous inscrire</h3>
                <form action="" >   
                    <label for="email">Votre email</label>             
                    <input type="email" placeholder="Email" id="email" autocomplete="off" required>
                    <label for="password">Votre mot de passe</label>
                    <input type="password" placeholder="Mot de passe" id="password" autocomplete="off" required>
                    <label for="firstname">Votre prénom</label>
                    <input type="text" placeholder="Prénom" id="firstname" autocomplete="off" required>
                    <label for="lastname">Votre nom</label>
                    <input type="text" placeholder="Nom" id="lastname" autocomplete="off" required>
                    <label for="birthdate">Date d'anniversaire</label>
                    <input placeholder="Date de naissance (dd/mm/yyyy)" id="birthdate" name="birthdate"
                        type="text" pattern="\d\d\/\d\d/\d\d\d\d" required>
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
                    <div class="bloc-checkbox">
                        <label for="checkbox">Cliquer pour confirmer la politique de confidentialité</label>
                        <input type="checkbox" id="checkbox" required>
                        <p>J'accepte la politique de confidentialité</p>
                    </div>
                    <button type="button" role="submit" class="suscribe-button">Valider</button>
                </form>
            </div>
</template>

<script>
export default {
    name: 'FormSuscribe',
    props : ["displaySuscribe"]
}
</script>

<style>
    .bloc-form-suscribe {
            flex-wrap: wrap;
            padding: 10px;
            text-align: center;
    }

    h3 {
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        margin: 0px 20px;
        padding: 10px;
        color: red;
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
        width: 40%;
    }

    #country {
        margin: 10px 10px;
        padding: 10px 9px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        width: 44%;
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

</style>