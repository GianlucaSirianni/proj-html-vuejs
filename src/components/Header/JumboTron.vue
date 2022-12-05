<template>
    <div class="jumbotron">
        <div class="jumboInside">
            <p class="fresh">FRESH & TASTY BAKERY EVERY DAY</p>
            <h1>The Perfect Fresh Bread</h1>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, culpa? Quo sunt, pariatur consequatur commodi voluptate dolorem aliquam odio.</p>
            <button>Explore Our Products</button>
            <div class="absDemos">
                <div class="ciaparat">
                    <font-awesome-icon icon="fa-solid fa-folder" />
                </div>
                
                <p>Demos</p>
            </div>
            <div class="absSale">
                <span>
                    <div><font-awesome-icon icon="fa-solid fa-dollar-sign" /></div>
                    <div><p class="sale">39</p></div>
                </span>
                <p >On Sale</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JumboTron',
    }
</script>

<style lang="scss" scoped>

.jumbotron{
    width: 100%;
    padding-top: 10rem;
    padding-left: 2rem;
    position: relative;
}

.jumboInside{
    width: 30%;
    padding: 2rem;
    margin-left: 4rem;
}

span{
    display: flex;
    position: relative;
    justify-content: center;

}

.fa-dollar-sign{
    font-size: 0.7rem;
    color: green;
    position: absolute;
    top: 5px;
}

.fa-folder{
    color: #282d2c;
    font-size: 1.4rem;
}



.ciaparat{
    text-align: center;
}

.absDemos{
    background-color: white;
    border-radius: 10px;
    padding: 0.5rem;
    position: absolute;
    top: 5px;
    right: 20px;
    box-shadow: 10px 10px 5px lightgray;
}

.absSale{
    background-color: white;
    border-radius: 10px;
    padding: 0.3rem;
    position: absolute;
    top: 85px;
    right: 20px;
    box-shadow: 10px 10px 5px lightgray;
}


.sale{
    color: green;
    margin-left: 7px;
    font-weight: bolder;
    font-size: 1.5rem;
}

p{
    color: #929295;
    line-height: 2rem;
    font-size: 1.2rem;
}

h1{
    font-size: 4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #5b2ca2;
}

.fresh{
    font-size: 0.7rem;
}

button{
    margin-top: 1rem;
    padding: 1rem;
    color: #5b2ca2;
    border-color: white;
    background-color: white;
    border-style: none;
    border-radius: 5px;
}

button:hover{
        background-color: #5b2ca2;
        color: white;
    }

</style>