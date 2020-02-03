<template>
    <div class="div">
        <scroll class="scroll"
                ref='scroll'>
            <listItem class="item"
                     v-for="value in shoplist"
                      :key="value.iid"
                      :value='value'></listItem>
        </scroll>
        
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import scroll from 'plug-in/滚动的插件/BetterScroll.vue'
import listItem from './listItem'

export default {

    data() {
        return {

        };
    },
    components:{
        scroll,
        listItem
    },
    computed: {
        /* ...mapGetters(['shoping_length','shoplist']) */
        shoplist(){
            return this.$store.state.shop
        }
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

    },
    activated() {
         console.log('1111111111+++++++++');
       this.$refs.scroll.refresh();
    },
    deactivated(){
      console.log('+++++++++++++');
    },
    filters:{
    /*vue中的过滤器，用来过滤数据的*，{数据 | 写在filters中的函数对象不带括号}，在元素中也可以写 百度吧/
    /*使用方法 qqq(value){ 记得传递参数}*/

    },
    updated: {
    /*this.nextTick(回调函数callback)表示当组件中的东西都加载好之后就执行这个函数的回调函数*/
     /*//当页面只要一发生变化就执行函数updated中的内容,注意不只执行一次的*/

    },
}
</script>

<style scoped>
.div{
  
     padding: 0;
    margin: 0;
    position: relative;
    top: 44px;
    height: calc(100% - 44px- 49px);
}
.scroll{
    padding: 0;
    margin: 0;
    height:91vh;
    position: relative;
    top:-40px;
    overflow: hidden;
}
.item{
   margin: 0px 0px 10px;
}

</style>
