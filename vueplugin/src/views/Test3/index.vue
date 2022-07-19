<template>
    <Page
        :is="component[$device]"
        v-bind.sync="$attrs"
        v-on="$listeners"
    />
</template>

<script>
    export default {
        name: "Test3",
        data(){
            return {
                component: {
                    pc: ()=>import(/* webpackChunkName: "pc/Test3" */ './pc'),
                    h5: ()=>import(/* webpackChunkName: "h5/Test3" */ './h5'),
                }
            }
        }
    }
</script>

<style scoped>

</style>
