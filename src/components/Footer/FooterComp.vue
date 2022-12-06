<template>
  <div>
    <CallAction class="callAction" />
    <div class="topFooterContainer">
      <div class="top">
        <div class="logoContainer">
          <img src="../../assets/img/avada-bakery-logo.png" alt="logo bakery" />
        </div>
        <div class="newsletter">
          <h1>Subscribe to our newsletter</h1>
        </div>
      </div>
      <div class="bottom">
        <div class="nav">
          <NavFooter
            v-for="(elem, index) in itemsFooter"
            :key="index"
            :item="elem"
            class="NavBar"
          />
          <div class="cart">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            <div class="bg">
              <h3>0</h3>
            </div>
          </div>
        </div>
        <div class="inputBtn">
          <input type="text" placeholder="Enter email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CallAction from "../Footer/CallAction.vue";
import NavFooter from "../Footer/NavFooter.vue";
export default {
  name: "FooterComp",
  props: {
    itemsFooter: Array,
  },

  components: {
    CallAction,
    NavFooter,
  },
};
</script>

<style lang="scss" scoped>
.callAction {
  margin-top: 12rem;
}

.top {
  display: flex;
  justify-content: space-between;
  padding-right: 4rem;
  padding-left: 4rem;
  padding-top: 4rem;
  padding-bottom: 3rem;

  .newsletter {
    font-size: 1.2rem;
    color: #5b2ca2;
    display: flex;
    align-items: center;
  }
}

.bottom {
  display: flex;
  justify-content: space-between;
  padding-right: 4rem;
  padding-left: 4rem;
  padding-bottom: 4rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  width: 800px;
}

.fa-cart-shopping {
  color: #5b2ca2;
}

.cart {
  display: flex;

  .bg{
    background-color: #b17dff;
    border-radius: 50px;
    margin-left: 5px;
    padding-left: 2px;
    padding-right: 2px;
    padding-bottom: 2px;
  }
}

</style>
