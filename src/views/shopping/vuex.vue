<template>
    <div>
        <h2 align='center'>欢迎来到vuex，<span @click="back">点击返回</span></h2>
        <div>
            <p>访问vuex中的state状态中的数据：</p>
                {{$store.state.test}}----
            <hr/>
            <p>vuex中的mutations方法的使用：{{$store.state.num}}--{{$store.state.num2}}</p>
            <p>看着数据在改变，但是store中的state中的那个num2是没有改变的， 最好通过commit（）让store中的方法来执行</p>
            <button @click="$store.state.num2++">+</button>
            <p>-------------</p>
            <button @click="click">访问vuex中的方法</button>
            <hr/>
            <div>
                <p>使用getters：</p>
                    {{$store.getters.filterage}}
                <p>加入数据，让getters中的函数在计算一个
                    <button @click="push">加入数据</button>
                </p>
                <hr/>
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

    },
    created() {
    /*这里访问不到模板中的 this.refs 元素等等啊访问不到，在模板没有挂载到页面就执行*/ 

    },
    mounted() {
    /*这里能访问到模板中的元素*/

    },
    methods: {
        back(){
            //router是控制现在路由的路径的变化的，做到更改路由的路径，和跳转到某个对应的路径
            //this.$router.back();  这个
            this.$router.go(-1) 
        },
        click(){
            this.$store.commit('num',10)
        },
        push(){
            this.$store.state.student.push({name:'李四',age:100})
        }
    },
    filters:{
    /*vue中的过滤器，用来过滤数据的*，{数据 | 写在filters中的函数对象不带括号}，在元素中也可以写 百度吧/
    /*使用方法 qqq(value){ 记得传递参数}*/

    },
    updated: {
    /*this.nextTick(回调函数callback)表示当组件中的东西都加载好之后就执行这个函数的回调函数*/
     /*//当页面只要一发生变化就执行函数updated中的内容,注意不只执行一次的*/

    },
}
</script>

<style scoped>

</style>
