<template>
    <div @click="click('h5')">h5</div>
</template>

<script>
    import mixin from './mixin.js'
    export default {
        name: "Test",
        mixins: [mixin]
    }
</script>

<style scoped>

</style>
