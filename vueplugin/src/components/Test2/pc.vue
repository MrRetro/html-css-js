<template>
    <div @click="click('pc2')">pc2</div>
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
