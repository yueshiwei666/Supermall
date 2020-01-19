//使用之前首先要导入这个文件啊
import axios from 'axios'

export function request(config) {
    //用axios创建一个实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    
    //这个axios创建的实例，在内部自动返回一个reprmise
    return instance(config)
}






export function requests(config) {
    //用axios创建一个实例
    const instance = axios.create({
        baseURL:'http://106.54.54.237:8000/api/hy',
        timeout:5000
    })
    
    //这个axios创建的实例，在内部自动返回一个reprmise
    return instance(config)
}