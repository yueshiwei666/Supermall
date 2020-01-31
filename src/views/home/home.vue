<template>
  <div id="home_box">
    
        <!-- 最上方购物街组件的使用 -->
        <shoppingStreet class="shopping">
          <strong slot="center">购物车</strong>
        </shoppingStreet>

        <!-- 返回顶部的图片 -->
        <!-- !!!切记组件是没有监听事件的，必须在组件的后面加上
        点native转换为原生的元素才能
        原生的元素是有监听事件的所以不用native -->
        <base-top @click.native='top'
                  class="top"
                  ref="top"
                  v-show='show_hide_top'></base-top>

        <!-- 防止text三个数据被scroll滑动消失 -->
         <texts v-show="show_text"
                :text="arr"
                class="textss"
                @textclick='textclick'
                ref="text2" ></texts>


    <BScroll class="content" 
             ref="scroll"
             @scroll='monitor'
             :pullUpLoad='true'
             @pullUpLoad='pullUpLoad'> 
        <!-- 轮播图的图片 -->
        <!-- <div  class='slide_img'
                v-for="(value,index) in banner.list"
                :key='index'>
          <img  :src='value.image'  alt="">
        </div>-->
        <img
          class="slide_img"
          src="https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
          alt
        />

        <!-- 推荐的信息 -->
        <recommend :data="recommend"></recommend>

        <!-- 就是推荐下面的图片 -->
        <div class="recommend">
          <img src="~assets/img/img.jpg" alt />
        </div>

        <!-- 三个滑动的标题效果展示 -->
        <texts :text="arr"
               class="texts"
               @textclick='textclick'
               ref="text1"></texts>

        <!-- 展示商品的数据 -->
        <goods :goods="goodss"></goods>

    </BScroll>

    <div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
    </div>
  </div>
</template>

<script>
/* 购物街组件 */
import shoppingStreet from "components/public/购物街";
/* 轮播图的组件 */
//我会写的等等啊
/* 推荐信息的组件 */
import recommend from "./home_components/推荐得信息";
/* 文字点击效果组件 */
import texts from "./home_components/text.vue";
/* 商品数据的获取 */
import goods from 'components/public/HomeGoods/goods'
/* 返回顶部的点击按钮 */
import baseTop from 'components/public/baseTop/baseTop.vue'


//插件
//使用axios请求的数据
import { homedata,homedata2} from "network/homedata.js";
/* better-scroll 滚动插件 */
import BScroll from "plug-in/滚动的插件/BetterScroll.vue";


export default {
  components: {
    shoppingStreet,
    recommend,
    texts,
    BScroll,
    goods,
    baseTop
  },
  data() {
    return {
      banner: [] /* 轮播图数据数据 */,
      keyword: [],
      recommend: "", //推荐信息
      arr: ["流行", "新款", "精选"],
      goods:{ //商品数据
        'pop':{page:0,list:[]},  //保存流行数据
        'new':{page:0,list:[]},  //保存新款数据
        'sell':{page:0,list:[]}  //保存精选数据
      },
      type:'pop',
      show_hide_top:false,
      saveY:0,
      show_text:false
    }
  },
  computed: {
    goodss(){
      return this.goods[this.type].list
    }
  },
  
  methods: {
    /* 自定义事件的方法 */
    
    /*完成上拉加载更多的数据*/
    pullUpLoad(){
        this.getHomegoods(this.type)
        
    },

    /*监听回到顶部按钮的显示和隐藏*/
    monitor(location){
      let num = -(location.y)
      this.show_hide_top = num > 500
      
      this.show_text = num > 631
      //num > 500 ? this.show_hide_top = true :this.show_hide_top = false 
    },
    top(){   /* 点击回到顶部的函数 */
      this.$refs.scroll.basetop(0,0);
    },
   
    textclick(index){  /* 点击text组件中的3个文字实现goods对应的数据 */
       if(index == 0){
          this.type = 'pop'
       }
       if(index == 1){
         this.type = 'new'
       }
       if(index == 2){
         this.type = 'sell'
       }
       /* 让两个text的文字组件都保持一致的  文字的显示 */
       this.$refs.text1.current_index = index;
       this.$refs.text2.current_index = index;
    },

    /* 网络请求相关的方法 */
    getHomedata(){
      homedata()//请求首页的多个数据
      .then(res => {
        this.banner = res.data.data.banner;
        this.keyword = res.data.data.dKeyword;
        this.recommend = res.data.data.recommend;
      })
      .catch(err => {
        alert("首页更多数据请求失败");
      });
    },

    getHomegoods(type){
      let page = this.goods[type].page + 1;
      homedata2(type,page)  //根据获取到的数据去保存相应的数据
      .then(result =>{
        this.goods[type].list.push(...result.data.data.list);
        this.goods[type].page +=1

        /*刷新一次上拉加载更多，不然下次这个方法使用无效   插件scroll中this.scroll.on('pullingUp',function(){})  后面的函数时不会进行调用的*/
        this.$refs.scroll.scroll.finishPullUp();
      })
      .catch(err =>{
        alert('商品数据请求失败');
      })
      
      
    },

    /* 处理多次使scroll刷新的  防抖函数 */
    debounce(func,dalay){
        let timer = null;
        return function(...args){
          if(timer){clearTimeout(timer)}
          timer = setTimeout(() => {
            func.apply(this,args)
          }, dalay);
        }
    }
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh,200)
        /* 当图片都加载完成的时候对scroll组件做一个刷新 */
             /* 这个$on是在某个地方用$emit('发射的事件')来使用的方法 */
             /* 在组件的就是  <组件  @发射事件的名字='函数'  /> */
     this.$bus.$on('imgLoad',() =>{  //在vue中尽量不要使用function里面的this都是window
       //this.$refs.scroll.scroll.refresh();   防止多次的使scroll刷新需要  写一个debounce防止多次刷新的函数
          refresh();
     })
  },//
  created() {
    
    
    //在组件创建好之后就执行函数中的代码   生命周期函数
    this.getHomedata() //获取首页的大量数据


    //获取首页的商品数据
     this.getHomegoods('pop') 
     this.getHomegoods('new')
     this.getHomegoods('sell')
  },
  activated() { //活跃的组件执行的函数内容
    //在app中使用<keep-alive>发挥作用
      this.$refs.scroll.scrollTo(0,this.saveY)
       //防止进入home页面不能滚动，最好对scroll做一个刷新
      this.$refs.scroll.refresh();
  },
  deactivated() {  //死亡之前执行的函数
   //在app中使用<keep-alive>发挥作用
       //在离开之前就记录home组件的位置
       this.saveY = this.$refs.scroll.getscrollY();
  },
  stroyed(){    //好像是啊
     //不详   不在app中使用keep-alive发挥作用
    console.log('穿件的函数');
  },
  destroyed() {  //消失之前执行的函数的内容
    //不在app中使用keep-alive发挥作用
    console.log('222');
  }     
};
</script>

<style scoped>
#home_box {
  margin-bottom: 49px;
}
.slide_img {
  width: 100%;
  height: 100%;
  margin-top: 44px;
}
.recommend img {
  width: 100%;
}
.texts {
  display: block;
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 10;
}
.shopping{
  line-height: 44px;
  background: rgb(243, 202, 209);
}
.content{
   /*根据移动设备的不同对于设置移动端来说
   出现了   1vw   1vh
   1vw视口就是手机屏幕的1%
   1vh视口就是手机屏幕的1%*/
   /* 还有1em = 16px   em的使用在于他的父元素是多少
   如果他的父元素是100px  你在他后代元素中写0.75em
   就是他这个后代元素是100*0.75=（75）px*/
    height:100vh;   /* 100vh  就是100% */

    overflow: hidden;
    
}
.top{
   position: absolute;
   z-index: 1;
   top: 82%;
   right: 0%;
   
}
.textss{
  width: 100%;
  top: 44px;
  background: #fff;
  position: fixed;
  z-index: 11;
}
</style>