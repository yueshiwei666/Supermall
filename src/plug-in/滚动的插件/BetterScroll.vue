<template>
    <div class="wrapper" ref="wrapper">  
    <!--在外面使用这个组件时，让使用的那个组件设置一个高度就行因为元素有继承性的-->
    <!-- 这个元素的高度  取决于外面的元素/父元素 -->
    <!-- wrapper包装  必须给这个元素设置一个高度，使其在哪个范围内进行滚动
         而且他的里面必须只能有一个元素，他内部元素多少这个不管 -->
         <div>
             <slot></slot>
         </div>
         
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        data(){
            return {
                scroll:''
            }
        },
        created(){  /* 在组件创建好之后，不可以获取元素 */
            console.log(BScroll);
            
        },
        mounted(){  /* 在组件创建好之后，他可以获取挂载的元素 */
          this.scroll = new BScroll(this.$refs.wrapper,{
                probeType:3,//2是不能监听惯性滚动  3是可以监听所有的
            })

            /* this.scroll.on('scroll',(qq) =>{
                console.log(qq);
                
            }) */
         
          
            
        }
    
    }
</script>

<style scoped>
    .wrapper{
        height: 400px;;
    }
</style>