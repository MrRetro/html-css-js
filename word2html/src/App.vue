<template>
  <div id="app">
    <input ref="input" type="file" @change="onChange" />
    <button @click="click">生成</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import docx2html from 'docx2html'

import HtmlToDocx from 'html-docx'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  methods: {
    click(){
      HtmlToDocx({
        exportElement: '#app', // 需要转换为word的html标签
        exportFileName: 'list.docx', // 转换之后word文档的文件名称
        StringStyle: '', // css样式以字符串的形式插入进去
        margins:{top: 1440,right: 1440,bottom: 1440,left: 1440,header: 720,footer: 720,gutter: 0} // word的边距配置
      })
    },
    onChange(){
      // let input = this.$refs.input
      // docx2html(input.files[0])
    }
  },
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
