<template>
  <div class="containerSteps">
    <div class="step100 one">
      <img src="../../assets/img/bakery-process-1.jpg" alt="" />
      <div class="overlay">
        <div class="titleUpLeft">
          <h2>Tell us what you have in mind</h2>
        </div>
        <div class="titleUpRight">
          <h2>01</h2>
        </div>
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
.one {
  background-color: black;
}

.containerSteps {
  width: 90%;
  margin: auto;
}



.step100 {
  width: 100%;
  position: relative;
    img {
        width: 100%;
    } 
}

.overlay{
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(0deg, #00000088 30%, #ffffff44 100%);  
}



.titleUpLeft {
  position: absolute;
  top: 90px;
  left: 90px;
  font-size: 2rem;
  width: 35%;
  color: white;
}

.titleUpRight {
  position: absolute;
  top: 90px;
  right: 90px;
  font-size: 2rem;
  color: white;
}

</style>
