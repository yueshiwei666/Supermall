<template>
                  <!-- 判断一下这个goods还不是空，空的话不显示了 -->
    <div class="div" v-if="Object.keys(goods).length !== 0">
        <span>{{goods.title}}</span>
        <div class="div2">
            <span>{{goods.newPrice}}</span>
             ---{{spacing}}{{spacing}}
            <span>{{goods.oldPrice}}</span>
             ---{{spacing}}{{spacing}}
            <span>{{goods.discount}}</span>
        </div>
        <div class="div3">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div>
            <span class="img" v-for="(index,iii) in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
                <span v-if="iii !== 2">--</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           spacing:'          '
        };
    },
    props:{
        goods:{
            type:Object,
            default:{}
        }
    },
    created() {
      
    },
    mounted() {

    },
    methods: {
       
    }
};
</script>

<style scoped>
  .div{
     position: relative;
     top: 10vh;
     border-bottom:15px solid rgb(238, 232, 232);
     
     
  }
  .div>span:first-child{
      word-wrap: break-word;
      font-weight: bold;
  }
  .div2>span:first-child{
      color:red;
  }
  .img{
      font-size: 14px;
  }
  .img img{
      
      width: 3%;
      height: 3%;
  }
  .div3{
      display: flex;
  }
  .div3>span:first-child{
      flex: 1;
      text-align: left;
  }
  .div3>span:nth-child(2){
       flex: 1;
       text-align: center
  }
  .div3>span:nth-child(3){
      flex: 1;
      text-align: right;
  }
</style>
