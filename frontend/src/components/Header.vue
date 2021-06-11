<template>
    <header>
        <transition name="fade">
            <div v-if="displayDropdown">
                <div class="overlay" @click="displayDropdown = !displayDropdown"></div>
            </div>
        </transition>
        
        <nav>
            <p>Logo</p>
            <div class="dropdown" @click="displayDropdown = !displayDropdown"><i class="fas fa-bars"></i>
                <transition name="fade">
                    <div class="dropdown-child" v-if="displayDropdown">
                        <a href="#" @click="displayModaleAccount"><i class="fas fa-user"></i>Mon compte</a>
                        <a href="#" @click="displayModaleAccount"><i class="fas fa-headset"></i>Support 24H/7</a>
                        <a href="#"><i class="far fa-moon"></i>Dark mode</a>
                    </div>
                 </transition>
            </div>
        </nav>
        <AccountModale :displayModale="displayModale" :displayModaleAccount="displayModaleAccount"/>
    </header>
</template>

<script>
import AccountModale from '../components/AccountModale'
    export default {
        name: "Header",
        components: {
            AccountModale
        },    
        data() {
            return {
                displayDropdown: false,
                displayModale: false
            }
        },
        methods: {
            displayModaleAccount() {
                this.displayModale = !this.displayModale;
            }
        }
    }
</script>

<style scoped>   
    header {
        display: flex;
        justify-content: center;
        background-color: #f1f1f1;
    }

    nav {
        padding: 0;
        width: 65%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p {
        font-size: 2rem;
        padding: 0 20px;
    }

    .fa-bars {
        font-size: 1.5rem;
    }

    .dropdown {
        position: relative;
        min-width: 100px;
        text-align: center;
        cursor: pointer;
    }

    .dropdown-child {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: -100px;
        top: 40px;
        text-align: start;
        border-radius: 10px;
        padding: 10px;
        background-color: #f2f2f2;
    }

    .dropdown-child a {       
        color: #1f1f1f;
        padding: 10px;
        margin: 5px 0;
        text-decoration: none;  
        border-radius: 20px;     
    }

    a:hover {
        background-color: #1f1f1f;
        color: #f1f1f1;
        animation: essai 2s ease;
    }

    .fa-user,
    .fa-headset,
    .fa-moon {
        padding: 0 10px 0 0;
    }

    @keyframes essai {
        from {
            opacity: 0.3;
        }
        to {
            opacity: 1
        }
    }
</style>