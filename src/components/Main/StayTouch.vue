<template>
  <div class="generalContainer">
    <div class="shareUp">
      <div class="upL">
        <img src="../../assets/img/social-1.jpg" alt="" />
      </div>
      <div class="upC">
        <p>MADE FOR SHARING</p>
        <h1>Let's stay in touch</h1>
        <button><font-awesome-icon icon="fa-brands fa-instagram" /> Follow Us</button>
      </div>
      <div class="upR">
        <img src="../../assets/img/social-2.jpg" alt="" />
      </div>
    </div>
    <div class="shareDown">
        <div><img src="../../assets/img/social-3.jpg" alt=""></div>
        <div><img src="../../assets/img/social-4.jpg" alt=""></div>
        <div><img src="../../assets/img/social-5.jpg" alt=""></div>
        <div><img src="../../assets/img/social-6.jpg" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.shareUp {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 40px;
  
}
.upL {
    width: 25%;


  img {
    width: 100%;
  }
}

.upC {
width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f2eef5;


  button {
    width: 250px;
    padding: 1rem;
    background-color: #5b2ca2;
    border-color: white;
    color: white;
    border-style: none;
    border-radius: 5px;
    font-size: larger;
    display: flex;
    align-content: center;
    justify-content: center;
    
     .fa-instagram{
        margin-right: 10px;
     }
  }

  button:hover{
    color: #5b2ca2;
    background-color: white;
    transition-duration: 0.5s;
  }

  h1 {
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 3rem;
    color: #5b2ca2;
  }

  p{
    color: gray;
  }
}

.upR {
  width: 25%;

  img {
    width: 100%;
  }
}


.shareDown{
    display: flex;
    justify-content: space-between;
    gap: 30px;
    div{
        width: calc(100%/4);
        
        

        img{
            width: 100%;
        }
    }
}
</style>
