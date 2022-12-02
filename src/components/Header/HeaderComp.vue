<template>
  <header>
    <div class="containerNav">
      <div class="logoContainer">
        <img src="../../assets/img/avada-bakery-logo.png" alt="" />
      </div>
      <div class="navbarContainer">
        <NavBar
          v-for="(elem, index) in itemsNav" :key="index" :item="elem" class="NavBar"/>
      </div>
    </div>
  </header>
</template>

<script>
import NavBar from "../Header/NavBar.vue";

export default {
  name: "HeaderComp",
  props: {
    itemsNav: Array,
  },

  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
}
.containerNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
