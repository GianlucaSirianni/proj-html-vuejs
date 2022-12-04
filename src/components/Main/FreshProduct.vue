<template>
  <div>

      <img :src="`/imgs/${slide.url}`" alt="" />
      <h3>{{slide.text}}</h3>
      <p>{{slide.price}}</p>

  </div>
</template>

<script>
export default {
    name: 'FreshProduct',
    props: {
    slide: String
    }
};
</script>

<style lang="scss" scoped>

div{
    width: calc((100%/4) - 40px);
}

img{
    width: 100%;
}

h3{
    text-align: center;
    color: #5b2ca2;
    margin-bottom: 10px;
}

p{
    text-align: center;
    color: #5b2ca2;;
}

</style>
