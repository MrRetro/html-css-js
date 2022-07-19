<template>
    <component
        ref="page"
        :is="is"
        v-bind.sync="$attrs"
        v-on="$listeners"
    />
</template>

<script>
    export default {
        name: "Page",
        props: {
            is: {
                type: Function
            }
        }
    }
</script>

<style scoped>

</style>
