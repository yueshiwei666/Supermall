//使用手册Vuex.Store({中有五个对象，      把本文件给改成index 文件形式，在购物车中有实例的案例
//不要管那个报错了
        //那个state是管理数据的，就是保存数据的
        //mutations就是methods方法，不一样的是必须通过mutations来操作state中的数据
                //不然直接在外部对数据做改变的话，state的数据的本身是不变的
        //那个getters就是类似那个计算属性，
        //另外两个不详   从136看起


        //在外部的使用方法：    一些参数的问题在他下部写，这里没写
          //this.$store  就是访问的是 vuex这个总的空间了 
          //this.$store.state.state中保存的数据   访问state中的数据
          //this.commit('mutations中的定义的方法'，参数，参数)  访问mutations中的方法
          //this.$store.在getters中的方法  不用加括号就可以调用的，类似计算属性   方法getters中的方法   
//})

import Vue from 'vue'
import Vuex from 'vuex'
//在vue中使用vuex
Vue.use(Vuex)
//通过vuex创建一个vuex的实例
const store = new Vuex.Store({
//在外部访问vuex时需要，{{$store.state.vuex中存放的变量名字}}
                    //或者 this.$store.state.state中存放的名字
//mtations是vuex中方法，就是vuex中需要写一些逻辑的函数，可以写在这个里面的

    state:{
        //在vuex中保存的数据，也是保存的状态
        num:1,
        num2:1,
        test:['我是vuex保存的数据'],
        student:[
            {name:'王五',age:10},
            {name:'张三',age:5}
        ]

    },
    mutations:{// !!!强调这里的函数的第一个参数都是上面的state    
         //第二个参数是你自定义的参数，在外部就引入             
                               //commit == mutations
    //使用方法：在外部需要 this.$store.commit('mutations中的方法的名字')==调用了一次vuex中的函数
    //vuex中写入的一些方法，方法中的第一个参数就是vuex中state
        //在外部还有一种提交的风格  this.$store.commit({
            //type:'这个事件的名字',
            //参数   这个参数在store中的方法中打印就是一个对象  你先后台打印一下
        //})
        num(state,num){
            state.num += num
        },
        addCart(state,payload){
            state.num = state.num + payload
        }
    },
    actions:{

    },
    getters:{
        //类似那个计算属性  computed 实时来检测数据的变化
        //这个里面第一个参数是state第二个参数是getters 不用加括号就是调用的
        //他不接受第三个参数
        //类似那个计算属性  computed 实时来检测数据的变化
        filterage(state,getters){     //这个是过滤函数 s == state.student
            return state.student.filter(s => s.age > 9)
        },
        push(){
            return '--------------'
        }
    },
    modules:{

    }
})
//把vuex的实例导出即可
export default store  