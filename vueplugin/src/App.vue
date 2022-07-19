<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Test />
    <Test3 />
  </div>
</template>

<script>
import mixin from './app.js'
import HelloWorld from './components/HelloWorld.vue'
import Test3 from './views/Test3'

export default {
  name: 'App',
  mixins: [mixin],
  components: {
    HelloWorld,
    Test3
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
