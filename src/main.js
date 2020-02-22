import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import store from './store'
import router from './router'  
//这个router文件下的index文件不用写，vue会自动的查找index文件的
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
//创建一个事件的总线的事件，可以让每一个组件在都可以访问的到，类似vuex数据管家
Vue.prototype.$bus = new Vue();

//使用命令行安装一下jquery，在来导入jq和加入到原型中jq就可以使用
Vue.prototype.$ = $; 

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')





















