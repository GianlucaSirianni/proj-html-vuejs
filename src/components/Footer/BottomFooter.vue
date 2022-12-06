<template>
  <div class="bottomF">
    <div class="copyrights">
      <p>
        &copy; Copyright 2012 - 2022 | Avada Theme by Gianluca Sirianni | All
        Rights (not really) Reserved | Powered by a Long Weekend
      </p>
    </div>
    <div class="social">
      <font-awesome-icon icon="fa-brands fa-instagram" />
      <font-awesome-icon icon="fa-brands fa-twitter" />
      <font-awesome-icon icon="fa-brands fa-facebook" />
      <font-awesome-icon icon="fa-brands fa-pinterest" />
    </div>

  </div>
</template>

<script>
export default {
  name: "BottomFooter",

};

</script>

<style lang="scss" scoped>
.bottomF {
  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 6rem;
  display: flex;
  justify-content: space-between;

  .social {
    width: 300px;
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
    color: #5b2ca2;
  }
}

    p{
        color: gray;
    }
.fa-instagram:hover,
.fa-twitter:hover,
.fa-facebook:hover,
.fa-pinterest:hover {
  color: black;
}
</style>
