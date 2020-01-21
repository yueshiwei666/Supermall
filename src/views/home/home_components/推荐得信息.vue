<template>
    <div id="big">
        <div class='item' align='center' v-for='(value,index) in data.list' :key='index'>  <!-- 推荐的信息 -->
            <!-- <a :href='value.link' class="a"> -->
                <img :src="value.image" alt="" align='center'>
                <p>{{value.title}}</p>
            <!-- </a> -->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props:['data']
    }
</script>

<style scoped>
    #big{
       display: flex;
        width: 100%;

        height: 120px;
        padding: 0px 0px 10px;  /* 上   左右   下 */
        border-bottom: 15px solid #eee;
    }
    .item{
       flex:1;
    }
    
    img{
        height:80px;
 
    }
    .item p{
        text-align:center;
        color:black;
        font-size:15px;
        font-weight:bold;
    }
</style>