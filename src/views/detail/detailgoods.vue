<template>
    <div v-if="Object.keys(images).length !== 0"
         class="images">
         <div class="desc">{{images.desc}}</div>
        <div class="">
            {{images.detailImage[0].key}}
        </div>
        <div class="imagess">
            <img v-for="(item,index) in images.detailImage[0].list" 
                 :key="index" :src="item" alt=""
                 @load="image">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            number:0,
            length:0
        };
    },
    props:{
        images:{
            type:Object,
            default:{}
        }
        
    },
    created() {

    },
    mounted() {

    },
    methods: {
        image(){
            this.$bus.$emit('image');
            //当图片的数量全部都加载好了，才开始对scroll的refresh（）
            /* if(++this.number == this.length){
                this.$bus.$emit('image');
            } */   //太慢了   不这样做了
        }
    },
    watch:{
          //防止获取到的imgaes是一个空的对象，这样
        //watch可以监听数据的变化，这里就监听images为了获取图片的个数
        images(){ //这个是props的监听的函数，根据props是谁，就写一个哈数
        //防止玩意请求数据慢了。images是空的就报错了
            this.length = this.images.detailImage[0].list.length;
        }
        
    }
};
</script>

<style scoped>
.imagess img{
    width: 100%;
    height: 100%;
}
</style>
