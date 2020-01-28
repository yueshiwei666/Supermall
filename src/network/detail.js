/* 封装对详情页数据的展示 */
import {requests} from './request'
export function getdetail (iid){
    return requests({
        url:'/api/hy/detail',
        params:{
            iid:iid
        }
    })
}