<template>
    <div id='tabbar-Item' @click="click">
        
        <div class="icon" v-if="!active"> <!-- 不活跃显示这个图片 -->
             <slot name='icon1'></slot>
        </div>
        
        <div class="icon" v-else>        <!-- 活跃显示这个图片 -->
            <slot name='icon2'></slot>
        </div>
        
        <div class="text">               <!-- 设置的文字 -->        
            <slot name='text'></slot>
        </div>
        
    </div>
</template>

<script>
   
    export default {
        data(){
            return {
                active:false,
                aaa:"111"
            }
        },
        methods:{
            click:() =>{
                
            }
        },
        computed:{
            
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