<template>
  <!-- 轮播图的展示 -->
  <div id="div">
    <!-- 注意不要设置  overflow-y:hidden -->
    <Swiper class="div">
      <SwiperItem v-for="(value, index) in data" :key="index">
        <img :src="value" alt="" />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/public/swiper/index.js";

export default {
  data() {
    return {
      //轮播图的图片的保存
    };
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.div {
  position: relative;
  top: 44px;
  height: 230px;
  overflow: hidden;
}
</style>
