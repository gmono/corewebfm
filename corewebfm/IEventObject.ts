namespace CWF {
    export interface IEventObject {
        eventactive(e: Event);
        cid?: string;//这是可重复的组特征串
        sid?: string;//这是不可重复的特征串
        //以上两个都不是必要的如果sid为undefined或null 则自动分配一个guid  如果存在而且冲突则添加失败
        //如果cid为undefined和null则不加入分组对象表
    }
} 