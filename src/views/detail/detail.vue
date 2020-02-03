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

        <!-- 购物车的展示 -->
        <shopbar @addToCart='addToCartt'></shopbar>



        <scroll class="scrolll"
                ref="scroll"
                @detail='detailscroll'>
                <!-- 轮播图的展示 -->
            <detailSwiper :data='slideshow' />
                
            <!--轮播图下面基础信息-->
            <datailbaseInfo :goods='goods' />

            <!-- 商品 -->
            <datailshop ref="shop" :shop='shop'></datailshop>
            
            <!-- 最后的文字和图片 -->
            <datailgoods @image='image' :images='images' class="images"></datailgoods>
            
            <!-- 展示第二大项的参数的信息了 -->
            <detailparams ref="params" :detailparams='goodsparam'></detailparams>

            <!--展示评论信息-->
            <detailcommentInfo @img='img' ref="commentInfo" :detailcommentInfo='detailcommentInfo'></detailcommentInfo>
            
            <!-- 展示推荐的信息 -->
            <goodss @imgLoad='imgLoad' ref="goodss" class="goodss" :goods='getdetailrecommend' ></goodss>

            
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
import shopbar from './shopbar'
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
            showtop:false,
            tabbar:[]
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
        basetop,
        shopbar
        
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
            console.log(data)
            
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

          //这个this就是获取本地的vue就是本组件，
          //nexttick就是在组件的东西都完成好之后就开始执行他内部的回调函数
        this.$nextTick(() =>{
               
               
        })
        
    },
    mounted() {
        //获取事件的获取元素的一般最会写在mounted里面


    },
    methods: {
        click(index){
            this.currentindex = index;
            this.$refs.scroll.basetop(0,-(this.tabbar[index]),200)

        },
        back(){
            //下面两个的方法都是返回的，go可以指定，第一个就是返回一个
            //this.$router.back()  //返回一次
            this.$router.go(-1);
        },
        detailscroll(location){
            let show = -(location.y);
            this.showtop = show>1000

            //this.tabbar 中保存的是各个组件对应顶部的位置信息
            //完成滑动到哪个位置就让最上面的字变成相应的颜色
            for(let i=0;i<this.tabbar.length; i++){
                let length = this.tabbar.length;
                //针对第一二三   元素进行的   因为第4个元素我是无法滑动的底部的所以需要单独的设置一下
                if((this.currentindex !== i) && ( i< length-1 && this.tabbar[i] <= show && this.tabbar[i+1] > show ) 
                                         || 
                  ( i == length-1 && show >= this.tabbar[i])){ 
                      console.log(i)
                      this.currentindex =i; 
                  }
            }
        },
        basetops(){
            this.$refs.scroll.basetop(0,0)
        },
        image(){
            this.$refs.scroll.refresh();
            //当只要有图片加载完成的时候就来刷新组件对应顶部的一个高度，
            //并且把最新的高度保存到data中的数组中
            this.refresh_scroll_height()
        },
        img(){
            this.$refs.scroll.refresh();
            //当只要有图片加载完成的时候就来刷新组件对应顶部的一个高度，
            //并且把最新的高度保存到data中的数组中
            this.refresh_scroll_height()
        },
        imgLoad(){
            this.$refs.scroll.refresh();
            //当只要有图片加载完成的时候就来刷新组件对应顶部的一个高度，
            //并且把最新的高度保存到data中的数组中
            this.refresh_scroll_height()
        },
        refresh_scroll_height(){
            this.tabbar = []
            //$el 就是拿到组件的根组件，offsetTop就是距离顶部的位置
            this.tabbar.push(0)
            this.tabbar.push(this.$refs.params.$el.offsetTop)
            this.tabbar.push(this.$refs.commentInfo.$el.offsetTop)
            this.tabbar.push(this.$refs.goodss.$el.offsetTop)
            /* console.log(this.tabbar); */
        },
        addToCartt(){
            console.log(this.goods);
            
            let product = {}
            product.image = this.slideshow[0];
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            product.price = this.goods.newPrice
            product.iid = this.detail;
            product.trueprice = this.goods.realPrice;

            //使用vuex把用户添加的购物车的那些东西都方法哦vuex数据中做保存
            //用store中的actions中来调用方法
            //this.$store.dispatch('addshop', product)  
            this.$store.commit('addshop',product).then(result=>{
                console.log(result);
                
            }) 
              
            
        }
    },
            //当页面只要一发生变化就执行函数updated中的内容的
            //注意不只执行一次的
    updated() {

            /* //这里写这个代码也可以获取到各个组件对应的顶部的高度
            //但是有的时候因为图片加载慢的原因，导致获取的高度是不正确的
            this.tabbar = []
            //$el 就是拿到组件的根组件，offsetTop就是距离顶部的位置
            this.tabbar.push(0)
            this.tabbar.push(this.$refs.params.$el.offsetTop)
            this.tabbar.push(this.$refs.commentInfo.$el.offsetTop)
            this.tabbar.push(this.$refs.goodss.$el.offsetTop)
            console.log(this.tabbar); */
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
