<template>
    <Page
        :is="component[$device]"
        v-bind.sync="$attrs"
        v-on="$listeners"
    />
</template>

<script>
    export default {
        name: "Test2",
        data(){
            return {
                component: {
                    pc: ()=>import(/* webpackChunkName: "Test2" */`./pc`),
                    h5: ()=>import(/* webpackChunkName: "Test2" */`./h5`),
                }
            }
        }
    }
</script>

<style scoped>

</style>
