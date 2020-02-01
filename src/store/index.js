import Vue from 'vue'
import Vuex from 'vuex'
//在vue中使用vuex
Vue.use(Vuex)
//通过vuex创建一个vuex的实例
const store = new Vuex.Store({
    state:{
        shop:[],//用数据，可以用length来判断他有几个商品
    },
    mutations:{
        addshop(state,shop){
            state.shop = shop
            return state.shop
        }
    },
    getters:{
       

    } 
})
//把vuex的实例导出即可
export default store  