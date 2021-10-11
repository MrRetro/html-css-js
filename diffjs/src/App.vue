<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
const Diff = require('diff')
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    window.dif = Diff
    const str = Diff.diffChars('aa', 'abb')
    const json = Diff.diffJson({a: 1, b: 2}, {a: 1, b: 3})
    const arr = Diff.diffJson([{a: 1, b: 2}], [{a: 1, c: 3}])
    console.log('str==>', str)
    console.log('json==>', json)
    console.log('arr==>', arr)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
