import Vue from 'vue'
import Vuex from 'vuex'
//在vue中使用vuex
Vue.use(Vuex)
//通过vuex创建一个vuex的实例
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
//把vuex的实例导出即可
export default store  