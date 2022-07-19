<template>
    <div @click="click('h52')">h52</div>
</template>

<script>
    import mixin from './mixin.js'
    export default {
        name: "Test2",
        mixins: [mixin]
    }
</script>

<style scoped>

</style>
