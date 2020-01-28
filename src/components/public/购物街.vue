<template>
        <div class='div'>
            <div class="left">
                <slot name="left"></slot>
            </div>
            <div class="center">
                <slot name="center"></slot>
            </div>
            <div class="right">
                <slot name="right"></slot>
            </div>
        </div>
</template>

<script>
    export default {

    
    }
</script>

<style scoped>
    .div{
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        display: flex;
        z-index: 10;

        width: 100%;
        height: 44px;
        

        
    }
    .left{
        flex: 1;
        text-align: left;
    }
    .center{
        flex: 2;
        text-align: center;

    }
    .right{
        flex: 1;
        text-align: right;
    }
</style>