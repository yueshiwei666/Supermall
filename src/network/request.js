//使用之前首先要导入这个文件啊
import axios from 'axios'

    /*  */
/* http://123.207.32.32:8000/api/wh/home/multidata */
export function request(config) {   //首页轮播图还有推荐的数据
    //用axios创建一个实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000/api/wh',
        timeout:5000
    })
    
    //这个axios创建的实例，在内部自动返回一个promise
    return instance(config)
}

   /*  */
//http://106.54.54.237:8000/api/wh/home/data?type=sell&page=1
export function requests(config) {
    //用axios创建一个基础的baseURL，赋值给一个实例
    //然后把实例导出，记得传入参数
    var instance = axios.create({   
        baseURL:'http://106.54.54.237:8000/api/wh',
        timeout:5000
    })
    return instance(config)
}





     // ctrl+k+u 撤销
//  //第二种方法
//  import axios from 'axios'

//  //请求拦截器
//  axios.interceptors.request.use(result=>{
//      //作用
//     /* 1:比如一些参数中的数据信息不符合要就让用户重新的写入 
//        2：比如每次发送网络请求的时候在用户的界面显示一个图标
//        拦截分成功的，失败的结果 */
//        //注意必须return把结果给返回出去，让then()可以拿到
//        return  
//  },err=>{
//      //失败的
//  })
 
 
//  //响应拦截器
//  axios.interceptors.response.use(result=>{
//      /* 作用：响应就是数据得到了，然后可以到结果做一个处理，然后让.then()他拿到的就是你处理的结果
//      */    //对结果做一个处理
//      return result.data
//  },err=>{
 
//  })



