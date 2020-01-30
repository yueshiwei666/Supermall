<template>
              <!-- 万一detailparams是一个空的对象的话
              由于网速慢的情况的话 -->
    <div class="div" v-if="Object.keys(detailparams).length !== 0">
        <table class="table1" v-for="(table,index) in detailparams.sizes" :key="index">
            <tr class="tr" v-for="(tr,indey) in table" :key="indey">
                
                <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
            </tr>
        </table>
        <table class="table2">
            <tr v-for="(info,index) in detailparams.infos" :key="index">
                
                <td>{{info.key}}</td>
                <td>{{info.value}}</td>
            </tr>
        </table >
        <div class="table3" v-if="detailparams.image.length !== 0">
            <img :src="detailparams.image" alt="">
        </div>
        <img src="@/assets/111.png" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            data:{}
        };
    },
    //也可以这样的单个的传入的形式
    props:{
        detailparams:{
            type:Object
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
    top: 100px;
}
.tr{
   border:10px solid red;
}
</style>
