<template>
    <div id="">
        <!-- 最上方购物街组件的使用 -->
        <shoppingStreet>
            <strong slot="center">购物车</strong>
        </shoppingStreet>

        <!-- 轮播图的图片 -->
        <!-- <div  class='slide_img'
              v-for="(value,index) in banner.list"
              :key='index'>
        <img  :src='value.image'  alt="">
        </div> -->
       
        <img class='slide_img' src='https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg' alt="">
        



    </div>
</template>

<script>
    //导入的组件
    import shoppingStreet from 'components/public/购物街.vue'
    /* 轮播图的组件 */
    


    //使用axios请求的数据
    import {homedata} from 'network/homedata.js'

    export default {
        data(){
            return {
                banner:[],  /* 这个是保存的数据 */
                keyword:[]
            }
        },
        components:{
            shoppingStreet
        },
        created(){  //在组件创建好之后就执行函数中的代码   生命周期函数
            homedata().then(res =>{
                this.banner = res.data.data.banner;
                this.keyword = res.data.data.dKeyword;
            }).catch(err =>{
                alert('数据失败')
            })
        },
        methods: {
            
        },
        activated(){
            
        },
        deactivated(){
            
        }
    }
</script>

<style scoped>
    .slide_img{
        width: 100%;
        height: 100%;
        margin-top:44px;
    }
</style>