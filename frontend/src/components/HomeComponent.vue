<template>

  <section class="photo">
    <router-link to="/destination">
      <a type="button" role="button" class="buttonHome" title="Cliquez ici pour consulter toutes nos destinations">
        <h1>Cliquez pour voyager !</h1>
      </a>
    </router-link>
  </section>

</template>

<script>
  export default {
    name: 'HomeComponent'
  }
</script>

<style>
  .photo {
    width: 100%;
    height: 1000px;
    background-image: url(../assets/nuage.jpg);
    position: relative;
  }

  .buttonHome {
    padding: 10px 20px;
    position: absolute;
    left: 820px;
    top: 800px;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.7);
    color: #f1f1f1;
    cursor: pointer;
  }

  .buttonHome H1 {
    font-size: 1.5rem;
  }
</style>