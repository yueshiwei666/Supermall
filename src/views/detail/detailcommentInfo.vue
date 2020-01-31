<template>
    <div class="div" v-if='Object.keys(detailcommentInfo).length !== 0'>
        <div>
            <div class='left'>用户评价</div>
            <div class='right'>更多</div>
        </div>
        <div>
            <div>
                <img :src="detailcommentInfo.user.avatar" alt="">
                <span>{{detailcommentInfo.user.uname}}</span>
            </div>
        </div>
        <div>
            <p>{{detailcommentInfo.content}}</p>
            <div>时间转换没有写在198课
                <span>{{detailcommentInfo.created}}</span>
                <span>{{detailcommentInfo.style}}</span>
            </div>
            <div>
                <img :src="item" 
                 v-for="(item,index) in detailcommentInfo.images"
                 :key="index" alt=""
                 @load="img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props:{
    /*获取父元素传递过来的值*/
        detailcommentInfo:{
            type:Object,
            default:{}
        }
    },
    created() {
    /*这里访问不到模板中的 this.refs 元素等等啊访问不到，在模板没有挂载到页面就执行*/ 

    },
    mounted() {
    /*这里能访问到模板中的元素*/

    },
    methods: {
        img(){
            this.$emit('img')
        }
    },
    filters:{
    /*vue中的过滤器，用来过滤数据的*，{数据 | 写在filters中的函数对象不带括号}，在元素中也可以写 百度吧/
    /*使用方法 qqq(value){ 记得传递参数}*/

    },
}
</script>

<style scoped>
.div{
    position: relative;
    top: 100px;
}
.div>div:first-child{
    display:flex;
    border-bottom: 5px solid rgb(69, 63, 63);
    border-top: 5px solid rgb(69, 63, 63);
}
.div>div:first-child>:nth-child(1){
    flex:1;
    text-align: left;
}
.div>div:first-child>:nth-child(2){
    flex:1;
    text-align: right;
}
</style>
