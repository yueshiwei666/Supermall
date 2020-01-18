<template>
    <div id="">
        <tabbar>
            <tabbarItem>
                <img slot='icon1' src="../../../assets/img/1.png" alt="">
                <img slot='icon2' src="../../../assets/img/2.png" alt="">
                <strong slot='text'>首页</strong>
            </tabbarItem>
            <tabbarItem>
                <img slot='icon1' src="../../../assets/img/1.png" alt="">
                <img slot='icon2' src="../../../assets/img/2.png" alt="">
                <strong slot='text'>分类</strong>
            </tabbarItem>
            <tabbarItem>
                <img slot='icon1' src="../../../assets/img/1.png" alt="">
                <img slot='icon2' src="../../../assets/img/2.png" alt="">
                <strong slot='text'>购物车</strong>
            </tabbarItem>
            <tabbarItem>
                <img slot='icon1' src="../../../assets/img/1.png" alt="">
                <img slot='icon2' src="../../../assets/img/2.png" alt="">
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
    
</style>