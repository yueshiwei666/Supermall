<template>
    <div>
        <nav-bar class="navbar"><!-- title的展示 -->
            <div slot="left" class="left" @click='back'>
                <img src="~assets/img/img/common/back.svg" alt="">
            </div>
            <div slot='center' class="title" >
                <div class="titleItem"
                     v-for='(value,index) in title'
                     :key="index"
                     :class='{active:currentindex == index}'
                     @click='click(index)'>
                    {{value}}
                </div>
            </div>
        </nav-bar>


        <!-- 轮播图的展示 -->
       <detailSwiper :data='slideshow' />
        

    </div>
</template>

<script>
import NavBar from "components/public/购物街";
import scroll from 'plug-in/滚动的插件/BetterScroll.vue'
import detailSwiper from './detailSwiper'
/* 网络请求本页的数据 */
import {getdetail} from 'network/detail.js'
export default {
    name:'Detail',
    data() {
        return {
            detail:'',
            title:['商品','参数','评论','推荐'],
            currentindex:0,
            //轮播图的图片的保存
            slideshow:[]
        }
    },
    components:{
        NavBar,
        scroll,
        detailSwiper
    },
    created() {
                   //这个params参数的意思固定的  
                   //iid是router文件中index配置的路由的基本信息
        this.detail = this.$route.params.iid
        
        /* 获取数据的展示 */
        getdetail(this.detail)
        .then(result =>{
            this.slideshow = result.data.result.itemInfo.topImages;
        })
        .catch(err =>{
            alert('详情页面的数据获取失败')
        })
    },
    mounted() {

    },
    methods: {
        click(index){
            this.currentindex = index;
        },
        back(){
            //下面两个的方法都是返回的，go可以指定，第一个就是返回一个
            //this.$router.back()  //返回一次
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
  .title{
      
      display:flex;
  }
  .titleItem{
      flex:1;
      font-size: 14px;
      margin: 0px auto;
      line-height: 44px;
  }
  .active{
      color:red;
  }
  .left img{
    position: relative;
      top: 5px;
      width: 30%;
      height: 30%;
  }
  .scroll{
      height: 50%;
      overflow: hidden;
      position: relative;
      top: 44px;
  }
  .class{
      position: relative;
      top: 44px;
      height: 30px;
      overflow: hidden;
  }
</style>
