<template>
    <div class="div">
        <div class="div1">
            <img :src="shop.logo" alt="">
        </div>
        <div class="div2">
            <div align='center'> 
                    <p>{{shop.sells}}</p>
                    总销量
            </div>
            <div align='center'>
                <p>{{shop.goodsCount}}</p>
                全部宝贝
            </div>
            <div >
                <table>
                    <tr v-for="(item,index) in shop.score" :key="index">
                        <td>{{item.name}}</td>
                        <td class="score"
                            :class="{'score-better' : item.isBetter}">{{item.score}}</td>
                        <td class="better" :class="{'better-more' : item.isBetter}">
                            <span>{{item.isBetter ? '高' : '低'}}</span>
                        </td>
                    </tr>
                </table>
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
        shop:{
            type:Object,
            default:{}
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>
    .div{
        position: relative;
        top: 10vh;

    }
    .div1 img{
        width: 30%;
        height: 30%;
    }
    .div2{
        display: flex;
        
    }
    .div2>div:nth-child(1){
        flex: 1;
        margin-top: 15px;
    }
    .div2>div:nth-child(2){
             flex: 1;
             margin-top: 15px;
    }
    .div2>div:nth-child(3){
               flex: 1;
    }
    .score{
        color:green;
    }
    .score-better{
        color: red;
    }
    .better{
        background: rgb(163, 235, 163);
    }
    .better-more{
        background: red;
    }
</style>
