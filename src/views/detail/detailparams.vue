<template>
              <!-- 万一detailparams是一个空的对象的话
              由于网速慢的情况的话 -->
    <div class="div" v-if="Object.keys(detailparams).length !== 0">
        <table v-for="(table,index) in detailparams.sizes" :key="index">
            <tr v-for="(tr,indey) in table" :key="indey">
                <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
            </tr>
        </table>
        <table>
            <tr v-for="(info,index) in detailparams.infos" :key="index">
                <td>{{info.key}}</td>
                <td>{{info.value}}</td>
            </tr>
        </table>
        <div>
            <img :src="detailparams.image" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    //也可以这样的单个的传入的形式
    props:['detailparams'],
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>

</style>
