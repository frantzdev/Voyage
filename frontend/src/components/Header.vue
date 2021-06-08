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
                        <a href="#"><i class="fas fa-user"></i>Mon compte</a>
                        <a href="#"><i class="fas fa-headset"></i>Support 24H/7</a>
                        <a href="#"><i class="far fa-moon"></i>Dark mode</a>
                    </div>
                 </transition>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Header",

        data() {
            return {
                displayDropdown: false
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

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
        background-color: #1f1f1f;
    }

    .dropdown-child a {       
        color: white;
        padding: 20px 10px;
        text-decoration: none;        
    }

    .fa-user,
    .fa-headset,
    .fa-moon {
        padding: 0 10px 0 0;
    }
</style>