export default{
    //payload是承载负荷说白了就是外面的形参   
    addshop(context,payload){
        //context是store，代表上下文的意思
        //查看store中shop保存的数据和  用户点击的商品的iid是不是一样的
        //一样就把这个商品加1

        let oldproduct = null;//这个保存的是之前在shop中添加的商品
        //for循环的作用是新添加的商品在 store中保存的商品中有没有和他一样的
        //通过iid方式来判断   有的话就把旧的那个对象赋值给上面那个临时的变量
        for(let item of context.state.shop){  
            if(item.iid == payload.iid){
                  oldproduct = item;
            }
        }
        //判断
            
        if(oldproduct){//有值代表是之前就有的商品了 对他商品的个数加1
            context.commit('addcounter', oldproduct)
        }else{//oldproduct是空的话代表没有仓库中和新商品匹配的数据
            //给他创建一个count是1记录当前的商品加入购物车的个数
            payload.count = 1;
            //最后把新的商品push到store中的shop中
            context.commit('newshop',payload)
        }
        
       }
}