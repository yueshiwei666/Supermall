import {request,requests} from './request'
export function homedata() {
    return request({
        url:'/api/hy/home/multidata'
    })

}