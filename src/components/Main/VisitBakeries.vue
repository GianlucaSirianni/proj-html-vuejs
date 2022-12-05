<template>
  <div class="genContainer" :class="baker.bg">
    <div class="imgContainer">
      <img :src="`/imgs/${baker.pict}`" alt="" />
    </div>
    <div class="whereContainer">
      <h1>{{ baker.location }}</h1>
    </div>
    <div class="infoContainer">
      <div class="callUs">
        <p class="grey">CALL US</p>
        <p>1.800.458.556</p>
      </div>
      <div class="open">
        <p class="grey">OPEN ALL WEEK</p>
        <p>9:00 AM - 6:00 PM</p>
      </div>
      <div class="btn">
        <button>Explore Our Products</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisitBakeries",
  props: {
    baker: String,
  },
};
</script>

<style lang="scss" scoped>
.genContainer {
  width: 50%;

  img {
    width: 100%;
  }
}

.imgContainer{
    overflow: hidden;
}
.imgContainer img {
  width: 100%;
  transition: 0.7s all ease-in-out;
}

img:hover {
            transform: scale(1.2);
}

.bg1 {
  background-color: #f0edf5;
}

.bg2 {
  background-color: #f9f1f2;
}

.whereContainer {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.infoContainer {
  font-size: 1.2rem;
  display: flex;
  justify-content: space-around;
  align-content: center;
}

button {
  padding: 1rem;
  color: #5b2ca2;
  border-color: white;
  background-color: white;
  border-style: none;
  border-radius: 5px;
  height: 70px;
}

button:hover {
  background-color: #5b2ca2;
  color: white;
}

.grey{
    color: gray;
}

.btn{
    display: flex;
    justify-content: center;
    align-content: center;
}

p{
    margin-bottom: 1rem;
}
</style>
