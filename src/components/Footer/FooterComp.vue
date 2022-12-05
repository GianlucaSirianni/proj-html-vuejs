<template>
    <div>
        <CallAction class="callAction"/>
    </div>
</template>

<script>
import CallAction from '../Footer/CallAction.vue'
    export default {
        name: 'FooterComp',
        components: {
            CallAction,
        }
    }
</script>

<style lang="scss" scoped>

.callAction{
    margin-top: 12rem;
}

</style>