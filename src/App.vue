<template>
  <div id="app">

    <HeaderComp :itemsNav="navItems"/>

    <MainComp />

    <FooterComp />

  </div>
</template>

<script>
import HeaderComp from "./components/Header/HeaderComp.vue";
import MainComp from "./components/Main/MainComp.vue";
import FooterComp from "./components/Footer/FooterComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    MainComp,
    FooterComp,
  },

  data(){
      return {
        navItems: [
          {
            name: 'HOME',
            url: 'www.google.com'
          },
          {
            name: 'SHOP',
            url: 'www.google.com'
          },
          {
            name: 'ABOUT',
            url: 'www.google.com'
          },
          {
            name: 'GALLERY',
            url: 'www.google.com'
          },
          {
            name: 'LOCATIONS',
            url: 'www.google.com'
          },
          {
            name: 'JOURNAL',
            url: 'www.google.com'
          },
          {
            name: 'CONTACT',
            url: 'www.google.com'
          },
          {
            name: 'MY ACCOUNT',
            url: 'www.google.com'
          },
        ]
      }
    },



};





</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
