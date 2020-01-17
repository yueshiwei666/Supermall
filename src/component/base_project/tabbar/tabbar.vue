<template>
    <div id="">
        <div id='tabbar'>
            <div>首页</div>
            <div>分类</div>
            <div>购物车</div>
            <div>我的</div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery' /* 导入jquery */
    export default {
        methods:{
            bu:function() {
                $('#tabbar').css('background','blue')
            }
        }
    }
</script>


<style scoped>
    #tabbar{
        position: fixed;
        bottom:0;
        background-color:red;
        width:100%;
        height: 49px;
        display:flex;
        box-shadow:0px -10px 10px red;
    }
    #tabbar div{
        display: inline;
        flex:1;
        text-align:center;
        line-height:49px;
        
    }
    
</style>