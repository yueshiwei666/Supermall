<template>
    <div class="divv">
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

        <!-- 返回顶部的按钮啊 -->
        <basetop v-show="showtop"
                 class="basetop"
                 @click.native='basetops'></basetop>


        <scroll class="scrolll"
                ref="scroll"
                @detail='detailscroll'>
                <!-- 轮播图的展示 -->
            <detailSwiper :data='slideshow' />
                
            <!--轮播图下面基础信息-->
            <datailbaseInfo :goods='goods' />

            <!-- 商品 -->
            <datailshop :shop='shop'></datailshop>
            
            <!-- 最后的文字和图片 -->
            <datailgoods :images='images' class="images"></datailgoods>
            
            <!-- 展示第二大项的参数的信息了 -->
            <detailparams :detailparams='goodsparam'></detailparams>

            <!--展示评论信息-->
            <detailcommentInfo :detailcommentInfo='detailcommentInfo'></detailcommentInfo>
            
            <!-- 展示推荐的信息 -->
            <goodss class="goodss" :goods='getdetailrecommend' ></goodss>

            <br> <br> <br> <p></p>
       </scroll>
    </div>
</template>

<script>
import NavBar from "components/public/购物街";
import scroll from 'plug-in/滚动的插件/BetterScroll.vue'
import detailSwiper from './detailSwiper'  //轮播图的组件
import datailbaseInfo from './detailbaseInfo'  //轮播图下面基础信息
import datailshop from './detailshop'  //商品的数展示
import datailgoods from './detailgoods'  //最后的图片的数据
import detailparams from './detailparams'  
import detailcommentInfo from './detailcommentInfo'
import goodss from './goods.vue'
import basetop from 'components/public/baseTop/baseTop.vue'

/* 网络请求本页的数据 */
import {getdetail,goods,shop,goodsparam,getdetailrecommend} from 'network/detail.js'
export default {
    name:'Detail',
    data() {
        return {
            detail:'',
            title:['商品','参数','评论','推荐'],
            currentindex:0,
            //轮播图的图片的保存
            slideshow:[],
            goods:{},
            shop:{},
            images:{},
            goodsparam:{},
            detailcommentInfo:{},
            getdetailrecommend:[],
            showtop:false
        }
    },
    components:{
        NavBar,
        scroll,
        detailSwiper,
        datailbaseInfo,
        datailshop,
        datailgoods,
        detailparams,
        detailcommentInfo,
        goodss,
        basetop
        
    },
    created() {
                   //这个params参数的意思固定的  
                   //iid是router文件中index配置的路由的基本信息
        this.detail = this.$route.params.iid
        
        /* 获取数据的展示 */
        getdetail(this.detail)
        .then(result =>{            
            //为什么在这里写 let  const报错
            var result= result;       //老师在这个地方同步
                                   //      ||  数据同步
            this.slideshow = result.data.result.itemInfo.topImages;
        
            //这里需要把轮播图下面的杂乱的数据整合到一个对象goods中goods中有
            //已经整合好的数据了，之后就访问就可以了
            var data = result.data.result; //同步到老师的数据中
            
            
            this.goods = new goods(data.itemInfo,data.columns,data.shopInfo.services);
            
            
            this.shop = new shop(data.shopInfo)

            this.images = data.detailInfo;

            this.goodsparam = new goodsparam(data.itemParams.info,
            data.itemParams.rule)

            if(data.rate.cRate !== 0){ //判断有没有值啊
                this.detailcommentInfo = data.rate.list[0]
            }

        })
        .catch(err =>{
            alert('详情页面的数据获取失败')
        })

        //获取推荐的信息页面
        getdetailrecommend()
        .then(result =>{
            this.getdetailrecommend = result.data.data.list;
           
            
        })
        .catch(err =>{
            alert('推荐信息获取失败')
        })

        
    },
    mounted() {
        //获取事件的获取元素的一般最会写在mounted里面
        this.$bus.$on('image',() =>{
            this.$refs.scroll.refresh();
        })

        this.$bus.$on('img',() =>{
             this.$refs.scroll.refresh();
        })

        this.$bus.$on('imgLoad',() =>{
            this.$refs.scroll.refresh();
        })
    },
    methods: {
        click(index){
            this.currentindex = index;
            if(index == 0){
                this.$refs.scroll.basetop(0,0,200)
            }
            if(index == 1){
                this.$refs.scroll.basetop(0,-15620,300);
            }
        },
        back(){
            //下面两个的方法都是返回的，go可以指定，第一个就是返回一个
            //this.$router.back()  //返回一次
            this.$router.go(-1);
        },
        detailscroll(location){
            let show = -(location.y);
            this.showtop = show>1000
        },
        basetops(){
            this.$refs.scroll.basetop(0,0)
        }
    }
};
</script>

<style scoped>
  .divv{
      position: relative;
      z-index: 11;
      background: #ffffff;
      height: 150vh;
     
  }

  .scrolll{
      /* height: calc(100%); */
      position: relative;
     
      height:100vh; 
      overflow: hidden;
      border: 1px solid red;
  }
  .navbar{
      position:fixed;
      background: #ffffff;
  }
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
      height: calc(100% - 44px);
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
  .images{
      position: relative;
      top: 70px;
  }
  .goodss{
      position: relative;
      top: 200px;
  }
  .basetop{
      position: absolute;
      z-index: 12;
      top: 50%;
      left: 70%;
     width: 100px;
     height: 100px;
  }
</style>
