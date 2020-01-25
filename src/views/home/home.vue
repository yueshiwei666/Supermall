<template>
  <div id="home_box">
    
        <!-- 最上方购物街组件的使用 -->
        <shoppingStreet class="shopping">
          <strong slot="center">购物车</strong>
        </shoppingStreet>
    <BScroll class="content"> 
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
        <texts :text="arr" class="texts" @textclick='textclick' ></texts>

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
    goods
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
      type:'pop'
    }
  },
  computed: {
    goodss(){
      return this.goods[this.type].list
    }
  },
  methods: {
    /* 自定义事件的方法 */


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
      })
      .catch(err =>{
        alert('商品数据请求失败');
      })
      
    }


    // getHomegoods(type){
    //     var page = this.goods[type].page;
    //     homedata2(type,page)
    //     .then(result =>{
    //        this.goods[type].list.push(...result.data.data.list);
    //        this.goods[type].page +=1
    //     })
    //     .catch(err =>{
    //       alert('商品数据请求失败')
    //     })
    // }


  },
  
  created() {
    //在组件创建好之后就执行函数中的代码   生命周期函数
    this.getHomedata() //获取首页的大量数据


    //获取首页的商品数据
     this.getHomegoods('pop') 
     this.getHomegoods('new')
     this.getHomegoods('sell')
      
  },
  activated() {


  },
  deactivated() {}
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
  position: absolute;
}
.content{
  
  height: 100vh;   /* 100vh  就是100% */
  overflow: hidden;
}
</style>