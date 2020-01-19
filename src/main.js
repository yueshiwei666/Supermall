import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'

import router from './router'  
//这个router文件下的index文件不用写，vue会自动的查找index文件的

Vue.config.productionTip = false

Vue.prototype.$ = $; 
//使用命令行安装一下jquery，在来导入jq和加入到原型中jq就可以使用

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')














