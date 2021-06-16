<template>

  <section class="photo">
    <img src="../assets/nuage.jpg" alt="Vu d'un alignement de planète" class="active">
    <img src="../assets/volcan.jpg" alt="Un volcan en erruption">
    <img src="../assets/Background.jpg" alt="Une petit lac dans un canyon de glace">
    <p class="photo--firstLine">Le tourisme dans l'univers</p>
    <p class="photo--secondLine">est maintenant ...</p>
    <p class="photo--thirdLine">Accessible à tous !</p>
    <router-link to="/destination">
      <a type="button" role="button" class="photo__buttonHome"
        title="Cliquez ici pour consulter toutes nos destinations">
        <p>Cliquez pour voyager !</p>
      </a>
    </router-link>
    <button class="photo__btn-nav left" @click="prevSlide"><i class="fas fa-chevron-left"></i></button>
    <button class="photo__btn-nav right" @click="nextSlide"><i class="fas fa-chevron-right"></i></button>
  </section>

</template>

<script>
  export default {
    name: 'HomeComponent',
    data() {
      return {
        count: 0
      }
    },

    computed: {
      images() {
        return document.querySelectorAll("img");
      },
      slidesNumber() {
        return this.images.length;
      }
    },

    methods: {
      nextSlide() {
        this.images[this.count].classList.remove('active');
        if (this.count < this.slidesNumber - 1) {
          this.count++;
        } else {
          this.count = 0;
        }
        this.images[this.count].classList.add('active');
      },

      prevSlide() {
        this.images[this.count].classList.remove('active');
        if (this.count > 0) {
          this.count--;
        } else {
          this.count = this.slidesNumber - 1;
        }
        this.images[this.count].classList.add('active');
      }
    }
  }
</script>

<style lang="scss">
  .photo {
    display: flex;
    justify-content: center;

    & img {
      width: 100%;
      height: 1000px;
      object-fit: cover;
      position: relative;
      display: none;
    }

    &--firstLine {
      position: absolute;
      top: 300px;
      color: #f1f1f1;
      opacity: 0;
      font-size: 48px;
      animation: describ 10s 1s cubic-bezier(0, 0, .50, .50) forwards;
    }

    &--secondLine {
      position: absolute;
      top: 250px;
      color: #f1f1f1;
      opacity: 0;
      font-size: 48px;
      animation: describ 8s 3s cubic-bezier(0, 0, .50, .50) forwards;
    }

    &--thirdLine {
      position: absolute;
      top: 200px;
      color: white;
      opacity: 0;
      font-size: 48px;
      animation: describ 6s 5s cubic-bezier(0, 0, .50, .50) forwards;
    }

    &__buttonHome {
      font-size: 1.5rem;
      padding: 10px 20px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 800px;
      border-radius: 30px;
      background-color: rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      color: #f1f1f1;
      cursor: pointer;
    }

    &__btn-nav {
      margin: 0 10px;
      border: none;
      font-size: 2rem;
      background-color: rgba(0, 0, 0, 0);
      color: #f1f1f1;
      cursor: pointer;

      &.left {
        position: absolute;
        top: 50%;
        left: 0%;
      }

      &.right {
        position: absolute;
        top: 50%;
        right: 0%;
      }
    }
  }

  img.active {
    display: block;
  }

  @keyframes describ {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }

    50% {
      transform: translateY(-50px);
      opacity: 1;
    }

    100% {
      transform: translateY(0px);
      opacity: 0;
    }

  }
</style>