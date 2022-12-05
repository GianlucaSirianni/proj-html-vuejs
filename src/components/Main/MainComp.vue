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

    <div class="freshness">
      <div class="leftFresh">
        <h1>Find a freshly baked product perfect for you</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nulla
          ullam et culpa hic, natus in quae animi rerum porro.
        </p>
        <div class="centerBtn">
          <button>Shop All Products</button>
        </div>
        
      </div>
      <div class="rightFresh">
        <FreshProduct 
        v-for="(elem, index) in freshSlide"
        :key="index"
        :slide="elem"
        />
        <div class="abL"><strong>&lt;</strong></div>
        <div class="abR"><strong>&gt;</strong></div>
      </div>
    </div>
    <MainSteps/>
  </div>
</template>

<script>
import OurProducts from "../Main/OurProducts.vue";
import CorporateWeddings from "../Main/CorporateWeddings.vue";
import FreshProduct from "../Main/FreshProduct.vue";
import MainSteps from "../Main/MainSteps.vue";

export default {
  name: "MainComp",
  props: {
    wedPic: Array,
    freshSlide: Array,
  },

  components: {
    OurProducts,
    CorporateWeddings,
    FreshProduct,
    MainSteps,
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

  p {
    font-size: 0.7rem;
    color: #929295;
  }
}

.freshness{
  width: 90%;
  margin: auto;
  display: flex;
}

.leftFresh {
  width: 20%;

  p {
    color: #929295;
    line-height: 1.5rem;
    font-size: 0.8rem;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #5b2ca2;
    text-align: center;
  }

  .centerBtn{
    width: 100%;
    text-align: center;
    // display: flex;
    // justify-content: space-between;
  }

  button {
    margin-top: 1rem;
    padding: 1rem;
    color: white;
    border-color: white;
    background-color: #5b2ca2;
    border-style: none;
    border-radius: 5px;
  }

  button:hover {
    background-color: white;
    color: #5b2ca2;
    border: 2px solid gray;
    
  }
}

.rightFresh{
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.abR {
  background-color: #5b2ca2;
  padding: 2rem 1rem;
  position: absolute;
  top: 40%;
  right: 0;
  color: white;
  opacity: 0.6;
}

.abL {
  background-color: #5b2ca2;
  padding: 2rem 1rem;
  position: absolute;
  top: 40%;
  color: white;
  opacity: 0.6;
}

.abL:hover {
  background-color: gray;
}

.abR:hover {
  background-color: gray;
}



.corpWed {
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rem;
}
</style>
