<template>
    <div id="">
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

        width: 100%;
        height: 44px;
        line-height: 44px;

        background-color: pink;
    }
    .left{
        flex: 1;
        text-align: left;
    }
    .center{
        flex: 1;
        text-align: center;
        color: white;
        font-size: 20px;
    }
    .right{
        flex: 1;
        text-align: right;
    }
</style>