<template>
    <div id="" class="item" @click='detail'>
                                         <!-- 这个@load是vue内部自带的指令，
                                            意思是在加载完成之后会掉用你后面的方法 -->
        <img :src="goods.show.img " alt=""   @load="imgload">
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
        data(){
            return {}
        },
        created(){
            
            
        },
        methods:{
             imgload(){
                 /* 这里用到事件的总线，就是任何一个vue的组件都可以访问到这个里面的方法 */
                 /*需要在main文件中引用一下这个因为是没有这个方法的，需要给他付一个实例的vue
                  this.$bus----->事件的总线管理中心 */

                  //当一张图片加载完成就对scroll做一个刷新  refresh()
                  this.$bus.$emit('imgLoad') 
                  /* 用的时候就  this.$bus.$on('事件的名字'，执行的函数) */
             },
             detail(){          
                 this.$router.push('/detail/'+this.goods.iid)
             }
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

        /* 三个同事用才行啊 */
        overflow: hidden;
        text-overflow:ellipsis;  /* 文本溢出时设置成省略 */
         /* 不换行 */
        white-space:nowrap;     /* 文本单行显示 */
    }
    .span2{
        color:rgb(247, 136, 154);
    }
</style>