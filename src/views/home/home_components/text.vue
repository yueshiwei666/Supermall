<template>
    <div id="div">
        <div class="div">  
            <a href="#div"  class="text" 
                 v-for="(value,index) in text" 
                 :key='index'
                 @click='click'>
                         {{value}}
                         <div></div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            text:{
                type:Array,
                default:[]
            }
        },
        methods:{
            click(){
                
            }
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
    .text{
        margin: 5px 0px 5px;

        flex:1;
        text-align: center;
    }
    .text div{
        width: 50px;
        height: 5px;
        background: red;
        
        
        margin: 5px auto;
        
    }
</style>