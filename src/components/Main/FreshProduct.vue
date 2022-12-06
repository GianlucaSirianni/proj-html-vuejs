<template>
  <div>
    <div class="imgC">
        <img :src="`/imgs/${slide.url}`" alt="" />
        <div class="bg">
            <p class="white">SELECT OPTIONS / QUICK VIEW</p>
        </div>
    </div>
    
    
    <div class="prova">
      <h3>{{ slide.text }}</h3>
      <p>{{ slide.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreshProduct",
  props: {
    slide: String,
  },
};
</script>

<style lang="scss" scoped>
div {
  width: calc((100% / 4) - 10px);
  position: relative;
}

.imgC{
    width: 100%;
}

.imgC:hover .bg{
    display: flex;
}

img {
  width: 100%;
}

h3 {
  margin-top: 1rem;
  text-align: center;
  color: #5b2ca2;
  margin-bottom: 1rem;
}

p {
  text-align: center;
  color: #5b2ca2;
}

.bg{
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    background-color: black;
    height: 100%;
    width: 100%;
    opacity: 0.5;
}

.white{
    color: white;
}

.prova{
    width: 100%;
}
</style>
