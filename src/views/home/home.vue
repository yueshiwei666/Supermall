<template>
  <div id="home_box">
    <!-- 最上方购物街组件的使用 -->
    <shoppingStreet>
      <strong slot="center">购物车</strong>
    </shoppingStreet>

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
    <texts :text='arr'>
    </texts>

    <ul>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>qweqweqwe</li>
    </ul>
  </div>
</template>

<script>
/* 购物街组件 */
import shoppingStreet from "components/public/购物街";
/* 轮播图的组件 */

/* 推荐信息的组件 */
import recommend from "./home_components/推荐得信息";

/* 文字点击效果组件 */
import texts from './home_components/text.vue'

//使用axios请求的数据
import { homedata } from "network/homedata.js";

export default {
  data() {
    return {
      banner: [] /* 轮播图数据数据 */,
      keyword: [],
      recommend: "", //推荐信息
      arr:['流行','新款','精选']
    };
  },
  components: {
    shoppingStreet,
    recommend,
    texts
  },
  created() {
    //在组件创建好之后就执行函数中的代码   生命周期函数
    homedata()
      .then(res => {
        this.banner = res.data.data.banner;
        this.keyword = res.data.data.dKeyword;
        this.recommend = res.data.data.recommend;
      })
      .catch(err => {
        alert("数据失败");
      });
  },
  methods: {},
  activated() {},
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
</style>