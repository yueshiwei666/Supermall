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
        position: fixed;
        bottom:0;
        
        width:100%;
        height: 49px;
        
        display:flex;
        
        background: rgba(154, 146, 146, 0.2);
        box-shadow:0px -10px 10px rgba(233, 110, 110, 0.2);
    }
</style>