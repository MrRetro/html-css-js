<template>
    <div @click="click('pc')">pc</div>
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
