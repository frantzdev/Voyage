<template>
    <footer>
        <div class="container-footer">
            <div class="link">
                <a href="#">Les conditions de vente</a>
                <a href="#">Politique de confidentialité</a>
                <a href="#" class="contact">Nous contacter</a>
            </div>
           <div class="reseaux-sociaux">
               <a href="https://google.com" alt="Lien vers google" title="Lien vers google"><i class="fab fa-google"></i></a>
               <a href="https://facebook.com" alt="Lien vers facebook" title="Lien vers facebook"><i class="fab fa-facebook"></i></a>
               <a href="https://twitter.com" alt="Lien vers twitter" title="Lien vers twitter"><i class="fab fa-twitter"></i></a>
               <a href="#" alt="Lien vers youtube" title="Lien vers youtube"><i class="fab fa-youtube"></i></a>
           </div>
          
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
.container-footer {
    display: flex;
    flex-direction: column;
    background-color: #f1f1f1;
    text-align: center;
    & .link {
        margin-top: 10px;
        & a {
            padding: 0 10px; 
            text-decoration: none;
            color: #1f1f1f;
            font-weight: bold;
            border-right: 1px solid black;
        }
        & .contact {
            border: none;
        }
    }
    & .reseaux-sociaux {        
        margin: 0;
        padding: 20px 50px;
        & a {
            padding: 0 20px;
            text-decoration: none;
            color: #1f1f1f;
            font-weight: bold;
            & .fab {
                font-size: 2em;
            }
        }
    }
}
</style>