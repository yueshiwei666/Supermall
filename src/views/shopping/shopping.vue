<template>
    <div id="">
        <div class="button">
            
            <button @click="vuex">Vuex:改一下store文件中的名字才能使用</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            vuex(){
                 //这个replace是无法前后返回的 
                this.$router.push('/vuex');
            }
        },
    }
</script>

<style scoped>
.button{
    position: relative;
    top: 500px;;
    left:0px;
}
</style>