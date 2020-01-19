//万事都要先使用
import axios from 'axios'

//1.axios的基本使用方法
axios({
    //  method默认是get请求
    url:'http://123.207.32.32:8000/home/data',
    params:{   
  //这个params是参数，其实也就是写url只不过到最后axios会自动的对参数进行拼接处理
  //最后得到一个完整的url的地址而已  
  // http://123.207.32.32:8000/home/data?type=pop||page=1
      type:'pop',
      page:1
    }
  }).then(result => {
    console.log(result);
    
  })
  
  
  //2.axios发送并发请求
  axios.all(
  [ 
        axios({
        url:'http://123.207.32.32:8000/home/multidata'
        }),
        axios({
        url:'http://123.207.32.32:8000/home/data'
        })
  ]).then(axios.spread(  
    (res1,res2) => {   
    //这样拿到的是一个数组使用的时候需要  results[0] results[1]
    //axios有一个方法spread对数据分割
    console.log(res1);  //这个就是第一个数据
    console.log(res2);   //这个就是第二个数据
    }
  ))
  
  
  //3.   axios全局配置  还没有开始就把基础的baseURL给设置好
  axios.defaults.baseURL = 'http://123.207.32.32:8000'
  axios.defaults.timeout = 5000;
  axios({
    url:'/home/data'
  }).then(result => {
    console.log(result);
    
  })


  //4.   最终的方案  
  //在axios的源码中，axios创建一个实例他会自动的返回一个promise
  //然后直接使用的时候就 .then  .
  export function request(config) {
        //创建一个基础的axios的实例
            //instance就是实例的意思
      const instance = axios.create({
        baseURL:'http://123.207.32.32:8000/home/data',
        timeout:5000
      })

      return instance(config)
  }


  //在外部使用方法四的时候就直接
      import {request} from './network/基础教学'
      request({
        url:'/home/multidata'
      }).then(res => {   //这个是成功时候执行的
        console.log(res);
      }).catch(err => {  //这个是失败之后执行的
        console.log(err);
      })


      