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

export function getdetailrecommend(){
    return requests({
        url:'/api/hy/recommend'
    })
}
export class goods {
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.realPrice = itemInfo.lowNowPrice;
    }
}


export class shop {
    constructor(g){
        this.logo = g.shopLogo;
        this.name = g.name;
        this.fans = g.cFans;
        this.sells = g.cSells;
        this.score = g.score;
        this.goodsCount = g.cGoods;
        
    }
}


export class goodsparam{
    constructor(info,rule){
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}


