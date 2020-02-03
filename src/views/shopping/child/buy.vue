<template>
    <div class="div">
        <div >
           <span @click="show">
              <img :class="{'activee':all}"
                  src="~assets/shop.svg" alt="">
            </span>
           全选
        </div>
        <div>
            合计：{{price}}
        </div>
        <div>
            去计算：{{suan}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    props:{
    /*获取父元素传递过来的值*/

    },
    created() {
    /*这里访问不到模板中的 this.refs 元素等等啊访问不到，在模板没有挂载到页面就执行*/ 

    },
    mounted() {
    /*这里能访问到模板中的元素*/

    },
    methods: {
       show(){
           if(this.all){ //表明现在的全部按钮是 选中的状态
               this.$store.state.shop.forEach(a=>{a.check = false})
           }else{//表明现在的全选按钮是部分选中的状态
               this.$store.state.shop.forEach(a=>{
                   a.check = true
               })
           }
       }
    },
    computed:{
        price(){
            return this.$store.state.shop.filter(value =>{
                return value.check
            }).reduce((a,b) =>{
                let num = parseInt(b.trueprice)
                return a+parseInt(b.trueprice)*b.count
            },0).toFixed(2)
        },
        suan(){
            return this.$store.state.shop.filter(value =>{
                return value.check
            }).length
        },
        all(){
            if(this.$store.state.shop.length == 0){
                return false
            }
            return !this.$store.state.shop.find(a =>{
                return !a.check
            })
        }
    },
    activated(){
    //使用<keep-alive>发挥作用,这个组件需要在路由中发挥作用

    },
    deactivated(){
    //使用<keep-alive>发挥作用,这个组件需要在路由中发挥作用

    },
    stroyed(){
    //不详   不在app中使用keep-alive发挥作用好像是啊

    },
    destroyed(){
    //不在app中使用keep-alive发挥作用
    },
    filters:{
    /*vue中的过滤器，用来过滤数据的*，{数据 | 写在filters中的函数对象不带括号}，在元素中也可以写 百度吧/
    /*使用方法 qqq(value){ 记得传递参数}*/

    },
    updated: {
    /*this.nextTick(回调函数callback)表示当组件中的东西都加载好之后就执行这个函数的回调函数*/
     /*//当页面只要一发生变化就执行函数updated中的内容,注意不只执行一次的*/

    },
    watch:{
    //watch可以监听数据的变化在内部写上data.监听变化的那个数据 最后加个()来用

    }
}
</script>

<style scoped>
.div{
    width: 100%;
    display: flex;
}
.div>div:nth-child(1) img{
    position: relative;
    top: 2px;
    border: 1px solid black;
    border-radius: 10px;
}
.div>div:nth-child(1){
    flex: 1;
    width: 200px;
   
    position: relative;
}
.div>div:nth-child(2){
     flex: 1;
    width: 300px;
   
}
.div>div:nth-child(3){
    background: rgb(235, 108, 35);
    flex: 1;
   
    text-align: center;
    font-weight: 700;
    color: white;
    line-height: 30px;
}
.activee{
    background-color: red;
}
</style>
