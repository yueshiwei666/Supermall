<template>
    <div class="big">
        <div v-for="(value,index) in goods" :key='index' class="goods">
            <goodsItem :goods='value'></goodsItem>
        </div>
    </div>
</template>
<script>
import goodsItem from './goodsItem'
export default {
    name:'goods',
    components:{
        goodsItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    created(){

    },
    mounted(){
        
        
    }
}
</script>

<style scoped>
    .big{
        width: 100%;
        
        display:flex;
        flex-wrap:wrap;   /* wrap是单行 */
        /* 根据item自己的宽度来来flex布局，一行的宽度超过了父元素设置的宽度就换行 */
        position: relative;
        margin: 0px auto;
        
        
    }
    .goods{
      width: 48%;
      height: 100%;
       
      border-radius: 5px;
      overflow: hidden;
      margin: 5px auto;
      padding: 0px auto;
    }
      
    
</style>