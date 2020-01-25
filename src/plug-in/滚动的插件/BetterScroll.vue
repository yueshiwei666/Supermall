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
        props:{
            pullUpLoad:{
                type:Boolean,
                default:false
            }
        },
        created(){  /* 在组件创建好之后，不可以获取元素 */
           
            
        },
        mounted(){  /* 在组件创建好之后，他可以获取挂载的元素 */
          this.scroll = new BScroll(this.$refs.wrapper,{
                probeType:3,
                //0是啥也不能干       1是开启滚动好像是
                //2是不能监听惯性滚动  3是可以监听所有的
                /* 为了使组件有选择性，需要在外部传入true，不然默认是一个false */
                pullUpLoad:this.pullUpLoad
          })


          /* 监听组件的滚动的位置，参数是瞎整的 */
          this.scroll.on('scroll',(location) =>{
              /* 这个是个对象，对象中有x值和y值，注意y是一个负数 */
        /* 事件的名字就是 @scroll='执行函数'*/
                 /* 只要这里函数执行了外面你用的事件的函数，
                 他会自动的调用函数的 */
              this.$emit('scroll',location)
          })
          

          /* 当使用的scroll组件被滚动到底部的时候就调用后面的函数 */
          /* 注意需要在newscroll那里说明不然是不能使用的 */
          this.scroll.on('pullingUp',() =>{
              /* 当scroll组件被滚动到最顶部时向外面发出一个事件 */
              this.$emit('pullUpLoad');
          })
        },
        methods:{  
      
           /*创建一个回到某个位置的函数，以供外面的组件可以使用这个方法 */             
            basetop(x,y,time=800){/* 这个是默认传入赋值是100，在没有写第三个参数的时候 */
            /* scrollTo是内置函数指定返回的位置，和需要多长的时间 */
                         /*第一个参数是距离x的距离 */
                         /* 第二个参数是距离上面的距离 */
                         /* 第三个是需要多长的时候返回到那里 */
                this.scroll.scrollTo(x,y,time);
            }
        }
          
          
                 
    
    }
</script>

<style scoped>
    
</style>