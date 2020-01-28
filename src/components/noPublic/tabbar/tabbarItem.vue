<template>
    <div id='tabbar-Item'  @click='click'>
                           <!--注意啊这个active不只是在data中出现
                            还可以在computed计算属性中出现的
                            这个就是在active就是在计算属性中使用的 -->
        <div class="icon" v-if="!active"> <!-- 不活跃显示这个图片 -->
             <slot name='icon1'></slot>
        </div>
        
        <div class="icon" v-else>        <!-- 活跃显示这个图片 -->
            <slot name='icon2'></slot>
        </div>

          <!--  class="text"  -->                      <!--当active是true时候这个class中的color类就会暴露出来  -->
        <div :style='activeColor'>  <!--动态绑定样式 :style="{color:red,font-size:19px}" -->       <!-- 设置的文字 -->        
                            <!--activeColor作用就是控制样式的显示和不显示，就是看false和true -->
            <slot name='text'></slot>
        </div>
        
    </div>
</template>

<script>
   
    export default {
        data(){
            return {
                
            }
        },
        props:{    /* 这个啊就是获取   使用本组件的那个组件中 中获取的数据 */
            path:{     /* 吧path从外面的父组件中导入进来使用 */
               type:String
            },
            activecolor:{   /*把color从外面的父组件中导入进来使用 */
                type:String,
                default:'red'
            }
        },
        computed:{  /* It is 计算属性 执行时间：在组件创建的时候自动执行一次和在函数内部有数据发生变化的时候执行 */
            active(){
                //这个就是在上面用的时候用这个return返回一个false或者是true来显示图片和文字的颜色
                    //this.$route 就是获取处于活跃的路由
               return this.$route.path.indexOf(this.path) !== -1
            },
            activeColor(){
                return this.active ? {color:this.activecolor} : {}
            }
        },
        methods:{
            //！！！重点：注意这个$router和$route不是一样的   
                //this.$router是更改地址的他有  replace（不能后退往前）   push（可以后退和往前）
                //this.$route是获取处于活跃状态的路由地址的    
                
            //这个replace是无法前后返回的 
            //这个push是可以前后返回的
            click(){          
                this.$router.replace(this.path);
            }
        }
    }
</script>

<style scoped>
    #tabbar-Item{
        flex:1;
        text-align:center;
        font-size: 14px;
    }
    .text{
        position: relative;
        top: -3px;
    }
    .icon{
        position: relative;
        top: 2px;
    }
</style>