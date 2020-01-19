<template>
    <div id="">
        <!-- 最上方购物街组件的使用 -->
        <shoppingStreet>
            <strong slot="center">购物车</strong>
        </shoppingStreet>

        <!-- 轮播图的图片 -->
        <img v-for="(value,index) in banner.list" :src='banner.list[index].image'  alt="">

    </div>
</template>

<script>
    //导入的组件
    import shoppingStreet from 'components/public/购物街.vue'


    //使用axios请求的数据
    import {homedata} from 'network/homedata.js'

    export default {
        data(){
            return {
                banner:'',  /* 这个是保存的数据 */
                keyword:''
            }
        },
        components:{
            shoppingStreet
        },
        created(){  //在组件创建好之后就执行函数中的代码   生命周期函数
            homedata().then(res =>{
                this.banner = res.data.data.banner;
                this.keyword = res.data.data.dKeyword;
            })
        }
    }
</script>

<style scoped>
    
</style>