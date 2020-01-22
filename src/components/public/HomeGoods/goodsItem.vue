<template>
    <div id="" class="item">
        <img :src="goods.show.img" alt="">
        <p class="p">{{goods.title}}</p>
        <div class='span1' align='center'>
            <span class="span2">{{goods.price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="span3">收藏{{goods.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            goods:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        created(){
            
            
        }
    
    }
</script>

<style scoped>
   
    .item img{
        width: 100%;
        height: 100%;
    }
    .p{
        width: 100%;
        font-size: 13px;
        overflow: hidden;

        text-overflow:ellipsis;  /* 文本溢出时设置成省略 */
         /* 不换行 */
        white-space:nowrap;     /* 文本单行显示 */
    }
    .span2{
        color:rgb(247, 136, 154);
    }
</style>