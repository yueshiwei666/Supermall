//使用之前首先要导入这个文件啊
import axios from 'axios'

    /*  */
/* http://123.207.32.32:8000/api/hy/home/data?type=sell&page=1 */
export function request(config) {   //首页轮播图还有推荐的数据
    //用axios创建一个实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    
    //这个axios创建的实例，在内部自动返回一个reprmise
    return instance(config)
}

   /*  */
//http://106.54.54.237:8000/api/hy/home/data?type=sell&page=1
export function requests(config) {
    //用axios创建一个基础的baseURL，赋值给一个实例
    //然后把实例导出，记得传入参数
    var instance = axios.create({   
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    return instance(config)
}


