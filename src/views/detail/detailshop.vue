<template>
    <div class="div">
        <div class="div1">
            <img :src="shop.logo" alt="">
        </div>
        <div class="div2">
            <div align='center'> 
                <!-- 过滤器的使用  关键字 | -->
                    <p>{{shop.sells | filter}}</p>
                    总销量
            </div>
            <div align='center'>
                <p>{{shop.goodsCount | filters}}</p>
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

    },
    filters:{
        filter(value){
            let result = value;
            if(result >= 10000){
                result = (result/10000).toFixed(1) + "万";
                return result
            }
        },
        filters(value){
            let result = value
            if(result > 100 ){
                result = (result/100).toFixed(1) + "百"
            } 
            return result
        }
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
