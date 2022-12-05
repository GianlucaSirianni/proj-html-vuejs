<template>
    <div class="callToAction">
        <div class="text">
            <p>TRY OUR SEASONAL PRODUCTS</p>
            <h1>Order for pick-up or delivery to your home</h1>
            <button>Shop Now</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CallAction',
    }
</script>

<style lang="scss" scoped>
    .callToAction{
        background-image: url(../../assets/img/call-to-action-bg.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        height: 550px;
        position: relative;
    }

    .text{
        width: 30%;
        color: white;
        position: absolute;
        top: 150px;
        left: 300px;
        
    }

    button {
    width: 250px;
    padding: 1rem;
    color: #5b2ca2;
    border-color: white;
    background-color: white;
    border-style: none;
    border-radius: 5px;
    font-size: larger;  
    margin-top: 3rem;

  }

  button:hover{
    background-color: #5b2ca2;
    color: white;
    transition-duration: 0.5s;
  }

  p{
    color: lightgray;
  }

  h1 {
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-size: 3rem;

  }

</style>