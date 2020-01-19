import Vue from 'vue'  
import VueRouter from 'vue-router'


/*导入对应的路由显示的组件 */
      //import home from '../views/home.vue'
      //上面的那种形式导入不好，但是我忘了怎么不好
          //下面是文件的懒加载
const classify = () => import('../views/classify.vue')
const home = () => import('../views/home.vue')
const myself = () => import('../views/myself.vue')
const shopping = () => import('../views/shopping.vue')

//安装vue-router
Vue.use(VueRouter)

//创建路由对象
const routes = [
    {
        path:'',   /* 表示一开始打开的是一个空的路径的话 */
        redirect:'/home'  /* 就把页面重定向到 http://localhost:8080/#/home 样子 */
    },
    {
        path:'/home',  /* 表示路径是home的时 */
        component:home  /* 就使用这个home的组件 */
    },
    {
        path:'/classify',
        component:classify
    },
    {
        path:'/shopping',
        component:shopping
    },
    {
        path:'/myself',
        component:myself
    }
]
   
const router = new VueRouter({
    routes,
    mode:'history',  /* 这个就是把localhost:8080/#/home   变成localhost:8080/home */ 
})

//最后导出router路由
export default router 