import Vue from 'vue'
import Vuex from 'vuex'
//在vue中使用vuex
Vue.use(Vuex)
//通过vuex创建一个vuex的实例
const store = new Vuex.Store({
    state:{
        qqqq:['我是vuex保存的数据']
    },
    mutations:{
        addCart(state,payload){
           return '------------------'
        }
    } 
})
//把vuex的实例导出即可
export default store  