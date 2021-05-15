<template>
  <div id="app">
    <div ref="list" class="list-box" @scroll="scrollEvent">
        <div ref="shadow" class="shadow">
            <ul :style="`transform: translateY(${scrollTop - scrollTop % 100}px)`">
                <li v-for="(item, index) in arr" :key="index">{{item.id}}</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
    mounted(){
      this.screenHeight = this.$el.clientHeight
    },
    data(){
      return {
          scrollTop: 0,
          screenHeight: 0,
          arr: [
              {id: '1'},
              {id: '2'},
              {id: '3'},
              {id: '4'},
              {id: '5'},
              {id: '6'},
              {id: '7'},
              {id: '8'},
              {id: '9'},
              {id: '10'},
          ],
          data: Array.from(Array(100), (v,k) =>{ return {id: k+1} })
      }
    },
    methods: {
        scrollEvent(){
            this.scrollTop = this.$refs.list.scrollTop
            this.updateData()
        },
        updateData(){
            let count = Math.floor(this.scrollTop / (this.screenHeight/5))
            console.log(count, this.data.slice(count))
            this.arr = this.data.slice(count, count+10)
        }
    }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
.list-box{
    height: 100vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.shadow{
    height: 10000px;
}
ul{
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
}
li{
    background-color: #6fb936;
    height: 20vh;
    line-height: 20vh;
    text-align: center;
}
</style>
