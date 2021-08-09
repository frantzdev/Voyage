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
                <!-- <transition name="fade"> -->
                    <div class="dropdown-child" v-if="displayDropdown">
                        <a role="button" type="button" @click="displayModaleAccount()"><i class="fas fa-user"></i>Mon compte</a>
                        <a role="button" type="button" @click="displayModaleAccount()"><i class="fas fa-headset"></i>Support 24H/7</a>
                        <a role="button" type="button" @click="switchDarkMode()"><i class="far fa-moon"></i>Dark mode</a>
                        <a role="button" type="button" @click="displayModaleAdmin()">Administrer</a>

                    </div>
                 <!-- </transition> -->
            </div>
        </nav>
        <AccountModale :displayModale="displayModale" :displayModaleAccount="displayModaleAccount"/>
        <Admin :displayModaleAdmin="displayModaleAdmin" :displayAdmin="displayAdmin"/>
    </header>
</template>

<script>
import AccountModale from '../components/AccountModale'
import Admin from '../components/Admin'
    export default {
        name: "Header",
        components: {
            AccountModale, Admin
        },    
        data() {
            return {
                displayDropdown: false,
                displayModale: false,
                darkMode: false,
                displayAdmin: false
            }
        },

        mounted() {
            this.toggleDarkMode(localStorage.getItem("dark") == "true")
        },
              
        methods: {
            displayModaleAccount() {
                this.displayModale = !this.displayModale;
            },
            switchDarkMode() {               
                this.darkMode = !this.darkMode; 
                console.log(this.darkMode)     
                this.toggleDarkMode(this.darkMode);
                this.setDarkModeLocalStorage(this.darkMode);                
            },
            toggleDarkMode(darkMode) {
                document.documentElement.classList.toggle("dark-mode", darkMode);            
            },
            setDarkModeLocalStorage(darkMode) {
                localStorage.setItem("dark", darkMode);
            },
            displayModaleAdmin() {
                this.displayAdmin = !this.displayAdmin;
            }
        }
    }
</script>

<style scoped>   
    header {
        display: flex;
        justify-content: center;
        background-color: var(--color-light);
    }

    nav {
        padding: 0;
        width: 65%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--color-dark);
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
        background-color: var(--color-light);
    }

    .dropdown-child a {       
        color: var(--color-dark);
        padding: 10px;
        margin: 5px 0;
        text-decoration: none;  
        border-radius: 20px;     
    }

    a:hover {
        background-color: var(--color-dark);
        color: var(--color-light);
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