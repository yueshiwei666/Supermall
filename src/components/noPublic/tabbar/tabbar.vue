<template>
    <div id="tabbar">
            <slot></slot>
    </div>
</template>

<script>
    export default {
       name:'tabbar.vue',
       components:{
           
       }
    }
</script>

<style scoped>
    #tabbar{
        position: fixed;;
        bottom:0;
        left: 0;
        right: 0;
        
        width:100%;
        height: 49px;
        
        display:flex;
        
        box-shadow:0px -10px 10px rgba(233, 110, 110, 0.2);
    }
</style>