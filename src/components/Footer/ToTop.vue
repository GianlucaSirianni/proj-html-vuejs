<template>
  <div>
    <button class="noselect" @click="toTop()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg></button>
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
	background-color: #5de6de;
	background-image: linear-gradient(315deg, #bda2f3 0%, #5b2ca2 74%);
	border: none;
	border-radius: 50%;
	transition: 200ms;
}

button svg {
	fill: white;
	width: 30px;
	height: 30px;
	position: absolute;
	transform: translateX(-50%) translateY(-50%);
}

button:before {
	content: 'Back to Top';
	position: absolute;
	transform: translateX(-50%) translateY(45px);
	font-size: 15px;
	transition: 200ms;
	color: transparent;
	font-weight: bold;
}

button:hover {
	box-shadow: 0 1px 5px rgba(0,0,0,0.2);
	width: 80px;
	height: 80px;
}

button:hover::before {
	color: #fff;
}

button:hover svg {
		animation: bounce 2s infinite linear;
}

@keyframes bounce {
	0% {transform: translateX(-50%) translateY(-50%)}
	25% {transform: translateX(-50%) translateY(-65%)}
	50% {transform: translateX(-50%) translateY(-50%)}
	75% {transform: translateX(-50%) translateY(-35%)}
	100% {transform: translateX(-50%) translateY(-50%)}
}

button:focus {
	outline: none;
}

</style>
