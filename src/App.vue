<template>
  <div id="app">
     <router-view></router-view>
     <Maintabbar class="background"></Maintabbar>
  </div>
</template>

<script>
import Maintabbar from './components/noPublic/tabbar/Maintabbar'
import $ from 'jquery' /* 导入jquery */
export default {
  name: 'app',
  components:{
    Maintabbar
  }
}
</script>

<style scoped>
/*这个scoped是css的作用域 */
@import "./assets/css.css"; /* 导入css的文件的方法 */
  .background{
      background-color: red;
  }
</style>
