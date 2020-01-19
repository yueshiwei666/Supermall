/* 这个文件是为文件夹配置别名的 */
module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                /* 这个@就是文件的根目录  src */
                'assets':'@/assets',
                'components':'@/components',
                'views':'@/views',  
                'store':"@/store", /* vuex */
                'network':'@/network', /* 数据请求 */
                'common':'@/common', /* 放公共的组件 */
            }
        }
    }
}