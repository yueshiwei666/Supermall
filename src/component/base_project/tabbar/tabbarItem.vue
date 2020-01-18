<template>
    <div id='tabbar-Item'>
        <slot name='icon1'></slot>
        <slot name='icon2'></slot>
        <div class="text">
            <slot name='text'></slot>
        </div>
        
    </div>
</template>

<script>
   
    export default {
        commponents:{
            
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
</style>