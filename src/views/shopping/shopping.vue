<template>
    <div id="div">
        <navbar class="navbar">
            <span slot="left" @click="vuex">点我是vuex的</span>
            <span slot="center">购物车({{num}})</span>
        </navbar>

        <list></list>





    </div>
</template>

<script>
import navbar from 'components/public/购物街.vue'
import list from './child/shoplist'

import {mapGetters} from 'vuex'
    export default {
        data(){
          return {

          }  
        },
        components:{
            navbar,
            list
        },
        computed: {
            //这个对this.$store.state中的getters中的方法都全部的做一个解构的
            //就是把那个getters中的方法都导入到这里...就是做一个方法的解构就可以挨个挨个来使用了
               //这种方式名字不能自己来取...mapGetters(['shoping_length'])
            //因为store中的getters中的用法类似计算属性的所以可以直接调用它来这里
            ...mapGetters({
                //这种方式名字不能自己来取...mapGetters(['shoping_length'])
                num:'shoping_length'
            })
        },
        methods: {
            vuex(){
                 //这个replace是无法前后返回的 
                this.$router.push('/vuex');
            }
        },
    }
</script>

<style scoped>
#div{
    height: 100%;
    overflow: hidden;
    
}
.navbar{
    background: pink;
    color: white;
    font-weight: 900;
    line-height: 45px;
}

</style>