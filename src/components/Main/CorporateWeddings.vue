<template>
  <div class="hover">
    <img :src="`/imgs/${pic.img}`" alt="" class="im1" />
    <div class="im2">
      <img :src="`/imgs/${pic.imgx}`" alt="" />
      <div class="txtStyle">
        <p>{{ pic.smallTxt }}</p>
        <h2>{{ pic.bigTxt }}</h2>
        <button>{{ pic.btnTxt }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CorporateWeddings",

  props: {
    pic: String,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 750px;
}

.hover {
  margin-top: 2rem;
}

.im1 {
  display: block;
}
.im2 {
  display: none;
  position: relative;
}

.txtStyle {
  position: absolute;
  text-align: center;
  font-size: 2rem;
  color: white;
  line-height: 3rem;
  top: 50%;
  left: 25%;
}

.hover:hover .im1 {
  display: none;
}

.hover:hover .im2 {
  display: block;
}

button {
  margin-top: 1rem;
  padding: 1rem;
  color: white;
  border-color: #5b2ca2;
  background-color: #5b2ca2;
  border-style: none;
  border-radius: 5px;
}

button:hover {
  background-color: white;
  color: #5b2ca2;
}

</style>
