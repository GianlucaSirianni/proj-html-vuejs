<template>
  <div>
    <nav class="navbar">
        <div class="aContainer">
            <a href="">{{ item.name }}</a>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        item: String,
    }
};

</script>


<style lang="scss" scoped>

a{
    text-decoration: none;
    font-size: 0.8rem;
}

.aContainer{
    padding-bottom: 0.5rem;
}

.aContainer:hover{
    border-bottom: 2px solid #5b2ca2;
}


</style>


