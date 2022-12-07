<template>
<div>
    
    <button class="noselect" @click="toTop()">
        <span><font-awesome-icon icon="fa-solid fa-arrow-up" /></span>
    </button>
    
  </div>    
</template>

<script>
export default {
  name: "ToTop",
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>

div{
    display: flex;
    justify-content: flex-end;
}

button {
    padding: 1rem;
    margin: 0rem 3rem 1rem 0rem;
      width: 75px;
      height: 75px;
      cursor: pointer;
      background-image: linear-gradient(315deg, #bda2f3 10%, #5b2ca2 75%);
      border: none;
      border-radius: 50%;
      
  }
  
  .fa-arrow-up{
      fill: white;
      width: 30px;
      height: 30px;
      position: absolute;
      font-size: 1.5rem;
      transform: translateX(-50%) translateY(-50%);
  }
  
  button:before {
      content: 'Back to Top';
      position: absolute;
      transform: translateX(-50%) translateY(50px);
      font-size: 1rem;
      transition: 200ms;
      color: transparent;
      font-weight: bold;
  }

  .fa-arrow-up{
    width: 24px;
    height: 24px;
    color: white;
  }
  
  button:hover {
      width: 80px;
      height: 80px;
  }
  
  button:hover::before {
      color: black;
  }
  
  button:hover .fa-arrow-up{
        animation: bounce 1s infinite linear;
  }
  
  @keyframes bounce {
      0% {transform: translateX(-50%) translateY(-50%)}
      25% {transform: translateX(-50%) translateY(-75%)}
      50% {transform: translateX(-50%) translateY(-50%)}
      75% {transform: translateX(-50%) translateY(-30%)}
      100% {transform: translateX(-50%) translateY(-50%)}
  }
  


</style>
