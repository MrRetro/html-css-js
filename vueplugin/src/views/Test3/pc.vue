<template>
    <div @click="click('pc3')">pc3</div>
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
