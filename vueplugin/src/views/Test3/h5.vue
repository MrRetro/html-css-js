<template>
    <div @click="click('h53')">h53</div>
</template>

<script>
    import mixin from './mixin.js'
    export default {
        name: "Test3",
        mixins: [mixin]
    }
</script>

<style scoped>

</style>
