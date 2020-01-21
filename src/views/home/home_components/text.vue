<template>
    <div id="div">
        <div class="div">  
            <a href="javascript:void(0);"  class="text" 
                 v-for="(value,index) in text" 
                 :key='index'
                 @click='click(index)'
                 :class='current_index == index ? {click_text1:true} : {}'
                  >
                         {{value}}
                         <div
                         :class="current_index == index ? {click_text2:true} : {}"></div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                current_index:0
            }
        },
        props:{
            text:{
                type:Array,
                default:[]
            }
        },
        methods:{
            click(index){
                this.current_index = index;
                
            }
        },
        created(){
            
        },
        activated(){
            
        }
    }
</script>

<style scoped>
    a{
        display:inline-block;
    }
    .div{
        width: 100%;
        height: 50px;
        display:flex;

    }
    .click_text1{
        color:rgb(248, 94, 119);
    }
    .click_text2{
        border-radius: 20px;
        background: red;
    }
    .text{
        margin: 5px 0px 5px;
        flex:1;
        text-align: center;
    }
    .text div{
        width: 40px;
        height: 5px;
        
        margin: 5px auto;
        
    }
</style>