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
        name: 'NavFooter',
        props: {
            item: String,
        }
    };
</script>

<style lang="scss" scoped>

a{
    text-decoration: none;
}

</style>