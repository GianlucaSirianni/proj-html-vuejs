<template>
  <div>
    <OurProducts />
    <div class="corpTxt">
      <p>CORPORATE & WEDDINGS</p>
      <h1>Baking Special Moments</h1>
    </div>
    <div class="corpWed">
      <CorporateWeddings
        v-for="(elem, index) in wedPic"
        :key="index"
        :pic="elem"
      />
    </div>
  </div>
</template>

<script>
import OurProducts from "../Main/OurProducts.vue";
import CorporateWeddings from "../Main/CorporateWeddings.vue";

export default {
  name: "MainComp",
  props: {
    wedPic: Array,
  },

  components: {
    OurProducts,
    CorporateWeddings,
  },
};
</script>

<style lang="scss" scoped>
.corpTxt {
  text-align: center;
  h1 {
    font-size: 2.2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #5b2ca2;
  }

  p{
    font-size: 0.7rem;
    color: #929295;
  }
}

.corpWed {
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
</style>
