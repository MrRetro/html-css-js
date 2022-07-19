<template>
    <Page
        :is="component[$device]"
        v-bind.sync="$attrs"
        v-on="$listeners"
    />
</template>

<script>
    export default {
        name: "Test",
        data(){
            return {
                component: {
                    pc: ()=>import(/* webpackChunkName: "Test" */`./pc`),
                    h5: ()=>import(/* webpackChunkName: "Test" */`./h5`),
                }
            }
        }
    }
</script>

<style scoped>

</style>
