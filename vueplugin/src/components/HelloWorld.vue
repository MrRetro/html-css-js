<template>
  <div class="hello">
    <p><button @click="handlePreviewOne">图片预览[this]</button></p>
    <p><button @click="handlePreviewTwo">图片预览[直接调]</button></p>
  </div>
</template>

<script>
  import {PreviewImg} from "../plugin/previewImg";

  export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    handlePreviewOne(){
      this.$PreviewImg.show({
        src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1248937280,3830799013&fm=26&gp=0.jpg',
        duration: 2000
      })
    },
    handlePreviewTwo(){
      PreviewImg.show({
        src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fit8s.com%2Fupload%2FPlupload%2FImg_390%2F20180525171302278.jpg&refer=http%3A%2F%2Fit8s.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612428591&t=acf427ca891a45da953479e1a1c7f3b4',
        duration: 1000
      })
    }
  }
}
</script>
