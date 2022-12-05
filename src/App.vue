<template>
  <div id="app">

    <HeaderComp :itemsNav="navItems"/>

    <MainComp :wedPic="weddingPic" :freshSlide="sliderPic" :bakery="visitBakeries"/>

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
        ],

          weddingPic: [
            {
              img: 'corporate-bg.jpg',
              imgx: 'corporate-hover-bg.jpg',
              smallTxt: 'International Bakery',
              bigTxt: 'Corporate Events',
              btnTxt: 'Explore More'
            },

            {
              img: 'wedding-bg.jpg',
              imgx: 'wedding-hover-bg.jpg',
              smallTxt: 'Private Dining Hall',
              bigTxt: 'Wedding & Parties',
              btnTxt: 'Explore More'
            }
          ],

          sliderPic: [
            {
              url: 'choco-chip-cookies-400x510.jpg',
              text: 'Choco Chip Cookies',
              price: '$19.00 - $39.00'
            },

            {
              url: 'strawberry-jam-cookies-400x510.jpg',
              text: 'Strawberry Jam Cookies',
              price: '$24.00 - $62.00'
            },

            {
              url: 'strawberry-donut-400x510.jpg',
              text: 'Strawberry Donut',
              price: '$24.00 - $42.00'
            },

            {
              url: 'perfect-macarons-400x510.jpg',
              text: 'Perfect Macarons',
              price: '$18.00 - $52.00'
            },

          ],

          visitBakeries: [
            {
              pict: 'new-york-bk-600x397.jpg',
              location: 'New York',
              bg: 'bg1'
            },

            {
              pict: 'london-bk-600x397.jpg',
              location: 'London',
              bg: 'bg2',
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
