<template>
  <div id="app">
     <router-view></router-view>
     <Maintabbar></Maintabbar>
  </div>
</template>

<script>
import Maintabbar from './components/base_project/tabbar/Maintabbar'
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
</style>
