<template>
  <header>
    <div class="containerNav">
      <div class="logoContainer">
        <img src="../../assets/img/avada-bakery-logo.png" alt="" />
      </div>
      <div class="navbarContainer">
        <NavBar v-for="(elem, index) in itemsNav" :key="index" :item="elem" class="NavBar"/>
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      </div>
    </div>
    <JumboTron/>

  </header>
</template>

<script>
import NavBar from "../Header/NavBar.vue";
import JumboTron from "../Header/JumboTron.vue";

export default {
  name: "HeaderComp",
  props: {
    itemsNav: Array,
  },

  components: {
    NavBar,
    JumboTron,
  },
};
</script>

<style lang="scss" scoped>

header {
  width: 100%;
  height: 1000px;
  background-image: url(../../assets/img/hero-header-bakery.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.containerNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
}

.fa-cart-shopping{
    color:#5b2ca2;
}

.fa-cart-shopping:hover{
    color: #929295;
}

.logoContainer {
  width: 20%;
}

.navbarContainer {
  display: flex;
  justify-content: space-around;
  width: 40%;
}


</style>
