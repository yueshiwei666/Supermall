<template>
    <div id="">
        <tabbar class="qqq">
            <!-- 这个 /home字符串赋值给了path  可以在组件内部用props来获取这个path-->
            <!-- 但是  :path="/home  加了这个v-bing的话就是把/home当成一个变量了" -->
            <tabbarItem path='/home' activecolor='red'> 
                 <!-- 在src中的 @就是指项目的根目录 src -->
                 <!-- 或者也可以用这个  ~  符号来表示   两种都可以-->
                <img slot='icon1' src="~assets/img/1.png" alt="">
                <img slot='icon2' src="~assets/img/2.png" alt="">
                <strong slot='text'>首页</strong>
            </tabbarItem>


            <tabbarItem path='/classify' activecolor='blue'>
                <img slot='icon1' src="@/assets/img/1.png" alt="">
                <img slot='icon2' src="@/assets/img/2.png" alt="">
                <strong slot='text'>分类</strong>
            </tabbarItem>


            <tabbarItem path='/shopping' activecolor='pink'>
                <img slot='icon1' src="@/assets/img/1.png" alt="">
                <img slot='icon2' src="@/assets/img/2.png" alt="">
                <strong slot='text'>购物车</strong>
            </tabbarItem>


            <tabbarItem path='/myself' activecolor='black'>
                <img slot='icon1' src="@/assets/img/1.png" alt="">
                <img slot='icon2' src="@/assets/img/2.png" alt="">
                <strong slot='text'>我的</strong>
            </tabbarItem>

        </tabbar>
    </div>
</template>

<script>
    import tabbar from './tabbar';
    import tabbarItem from './tabbarItem';
    export default {
        components:{
            tabbar,
            tabbarItem
        }
    }
</script>

<style scoped>
    .qqq{
        background: rgb(226, 223, 223);
        z-index: 100;
    }
</style>