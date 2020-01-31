import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
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

export default store