<template>
  <div class="containerSteps">
    <div class="sec1Container">
      <div class="sec1Img">
        <img src="../../assets/img/bakery-process-1.jpg" alt="" />
      </div>
      <div class="sec1Overlay"></div>
      <h1 class="titleSec1">Tell us what you have in mind</h1>
      <h2 class="numSec1">01</h2>
      <div class="textCard">
        <p class="grey">MANUAL INGREDIENTS SELECTION</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex in
          mollitia voluptatum reiciendis atque corrupti facere architecto
          recusandae? Similique amet dolores eum consectetur eaque animi
          sapiente est eius sunt? Tempora?
        </p>
      </div>
    </div>

    <div class="sec2Container">
      <div class="sec2">
        <div class="sec2Img">
          <img src="../../assets/img/bakery-process-2.jpg" alt="" />
        </div>

        <div class="sec2Overlay">
        </div>

        <h1 class="titleSec2">We Start Baking</h1>
        <h2 class="numSec2">02</h2>
        <div class="textCard">
          <p class="grey">SWEET & DELICIOUS</p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex in
            mollitia voluptatum reiciendis atque corrupti facere architecto
            recusandae? Similique amet dolores eum consectetur eaque animi
            sapiente est eius sunt? Tempora?
          </p>
        </div>
      </div>
      <div class="sec2-1">
        <div class="sec2-1Txt">
          <p>DON'T JUST TAKE OUR WORD FOR IT</p>
          <h1>"Finally found an alternative to mass produced products. Something that incorporates real organic ingredients, nutrient dense wellness while promoting sustainability and activity"</h1>
          <p>Rachel Cooper, Founder</p>
        </div>
      </div>
    </div>
    <div class="sec3Container">
      <div class="sec3Img">
        <img src="../../assets/img/bakery-process-3.jpg" alt="" />
      </div>
      <div class="sec3Overlay"></div>
      <h1 class="titleSec3">Delivered to your home</h1>
      <h2 class="numSec3">03</h2>
      <div class="textCard">
        <p class="grey">BAKED TO ORDER & GIFT WRAPPED</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex in
          mollitia voluptatum reiciendis atque corrupti facere architecto
          recusandae? Similique amet dolores eum consectetur eaque animi
          sapiente est eius sunt? Tempora?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSteps",
};
</script>

<style lang="scss" scoped>
.containerSteps {
  padding-top: 7rem;
  width: 90%;
  margin: auto;
}

.sec1Container {
  width: 100%;
  position: relative;
  margin-bottom: 2rem;

  .sec1Img {
    width: 100%;

    img {
      width: 100%;
      height: 750px;
    }
  }
}

.sec1Overlay {
  color: white;
  position: absolute;
  width: 100%;
  height: 750px;
  background-color: black;
  opacity: 0.4;
  top: 0;
}

.titleSec1 {
  color: white;
  font-size: 3.5rem;
  width: 40%;
  position: absolute;
  top: 60px;
  left: 60px;
}

.numSec1 {
  color: white;
  font-size: 4rem;
  position: absolute;
  top: 60px;
  right: 60px;
}

.textCard {
  color: lightgray;
  width: 30%;
  position: absolute;
  bottom: 100px;
  right: 60px;
}

.sec2Container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  .sec2Img {
    width: 100%;

    img {
      width: 100%;
      height: 750px;
    }
  }
}

.sec2Overlay {
  color: white;
  position: absolute;
  width: 100%;
  height: 750px;
  background-color: black;
  opacity: 0.4;
  top: 0;
}

.titleSec2 {
  color: white;
  font-size: 3.5rem;
  width: 40%;
  position: absolute;
  top: 60px;
  left: 60px;
}

.numSec2 {
  color: white;
  font-size: 4rem;
  position: absolute;
  top: 60px;
  right: 60px;
}

.sec1{
  width: 50%;
  position: relative;
}
.sec2-1{
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 750px;
  background-color: #F4EFF4;
  padding: 2rem;
  h1{
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #5b2ca2;
  }

  p{
    color: gray;
  }
}

.sec2-1Txt{
  padding: 4rem;
  font-size: 2rem;
}

.sec2{
  position: relative;
}

.grey {
  color: lightgray;
}

.sec3Container {
  width: 100%;
  position: relative;
  margin-bottom: 2rem;

  .sec3Img {
    width: 100%;

    img {
      width: 100%;
      height: 750px;
    }
  }
}

.sec3Overlay {
  color: white;
  position: absolute;
  width: 100%;
  height: 750px;
  background-color: black;
  opacity: 0.4;
  top: 0;
}

.titleSec3 {
  color: white;
  font-size: 3.5rem;
  width: 40%;
  position: absolute;
  top: 60px;
  left: 60px;
}

.numSec3 {
  color: white;
  font-size: 4rem;
  position: absolute;
  top: 60px;
  right: 60px;
}

.textCard {
  color: lightgray;
  width: 30%;
  position: absolute;
  bottom: 100px;
  right: 60px;
}


</style>
