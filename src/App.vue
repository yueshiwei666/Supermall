<template>
  <div id="app">
    <keep-alive exclude="Detail">  
  <!-- exclude(排除)=’组件内部name属性的名字‘ -->
     <!-- 意思就是让detail组件重新的销毁和重建，以此来展示新的数据
          exclude排除  后面跟的是组件中name的名字-->
    <!-- keep-alive让组件不要从新的销毁，保存组件被销毁之前的样子 -->
     <router-view></router-view>
    </keep-alive>
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

  .background{
      background-color: red;
  }
</style>
