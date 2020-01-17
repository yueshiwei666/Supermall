<template>
  <div id="app">
   <tabbar/>
  </div>
</template>

<script>
import tabbar from './component/base_project/tabbar/tabbar.vue'
import $ from 'jquery' /* 导入jquery */
export default {
  name: 'app',
  components:{
    tabbar
  }
}
</script>

<style scoped>
/*这个scoped是css的作用域 */
@import "./assets/css.css"; /* 导入css的文件的方法 */
</style>
