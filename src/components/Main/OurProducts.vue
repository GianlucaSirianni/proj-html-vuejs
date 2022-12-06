<template>
  <div class="ourProducts">
    <div class="ourProductsContainer">
      <div class="prodDescription">
        <p class="fresh">OUR PRODUCTS</p>
        <h1>
          All our delectable pastries are backed fresh in our Kitchen every
          morning and are made with all-natural, all-organic ingredients.
        </h1>
        <button>Start Shopping</button>
      </div>
      <div class="prodSlider">
        <div class="leftSlider">
          <div class="bgBlack">
            <img src="../../assets/img/choco-chip-cookies-768x979.jpg" alt="" />
          </div>

          <div class="txtCnt">
            <div class="centerIt">
              <h6>Choco Chip Cookies</h6>
              <p>Cookies, Pastries</p>
              <h6>$18.00 - $32.00</h6>
            </div>
          </div>

          <div class="abL"><strong>&lt;</strong></div>
        </div>
        <div class="rightSlider">
          <div class="bgBlack">
            <img
              src="../../assets/img/strawberry-jam-cookies-768x979.jpg"
              alt=""
            />
          </div>

          <div class="txtCnt">
            <div class="centerIt">
              <h6>Strawberry Jam Cookies</h6>
              <p>Cookies, Pastries</p>
              <h6>$36.00 - $60.00</h6>
            </div>
          </div>

          <div class="abR"><strong>&gt;</strong></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurProducts",
};
</script>

<style lang="scss" scoped>
.bgBlack {
  position: relative;
}



.txtCnt {
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: white;
  text-align: center;
  top: 45%;
  left: 35%;
  background-color: black;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  h6{
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  p{
    font-size: 2rem;
  }
}

.leftSlider:hover .txtCnt{
  display: flex;  
}



.rightSlider:hover .txtCnt{
  display: flex;
}

.txtCnt:hover{
  opacity: 0.6;
  transition-duration: 1s;
}

.ourProducts {
  width: 100%;
  margin-top: 6rem;
  margin-bottom: 10rem;
}

.ourProductsContainer {
  width: 90%;
  margin: auto;
  display: flex;
}

.prodSlider {
  display: flex;
  justify-content: center;
  gap: 25px;
}

.prodDescription {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}

.fresh {
  font-size: 1rem;
  color: #929295;
}

.leftSlider {
  width: 40%;
  position: relative;
  img {
    width: 100%;
  }
}

.rightSlider {
  width: 40%;
  position: relative;
  img {
    width: 100%;
  }
}

.abR {
  background-color: #5b2ca2;
  padding: 2rem 1rem;
  position: absolute;
  top: 45%;
  right: 0;
  color: white;
  opacity: 0.6;
}

.abL {
  background-color: #5b2ca2;
  padding: 2rem 1rem;
  position: absolute;
  top: 45%;
  color: white;
  opacity: 0.6;
}

.abL:hover {
  background-color: gray;
}

.abR:hover {
  background-color: gray;
}

h1 {
  font-size: 2.2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #5b2ca2;
  text-align: start;
  //   padding-right: 0.5rem;
}

button {
  font-size: 1rem;
  margin-top: 2rem;
  padding: 1rem;
  color: white;
  border-color: #5b2ca2;
  background-color: #5b2ca2;
  border-style: none;
  border-radius: 5px;
  width: 170px;
}

button:hover {
  background-color: white;
  color: #5b2ca2;
  border: 2px solid grey;
}
</style>
