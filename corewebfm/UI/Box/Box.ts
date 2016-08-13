namespace CWF {
    //盒子类 将一个html标签当作一个盒子 主要是加上事件监听
    //目前只有鼠标事件
    export class Box {
        eps: Array<EventPump>;
        maincont: Control;//主控件 构造函数中生成 向外部提供
        mainids: Array<string>;//主控件在各个pump中的sid号 
        constructor(ele: HTMLElement, pumps: Array<EventPump>) {
            this.eps = pumps;
            this.maincont = new Control();
            for (var t = 0; t < this.eps.length; ++t) {
                var e = this.eps[t];
                this.mainids[t]=e.addobject(this.maincont);
            }
            this.eventinit(ele);//进行控件事件监听初始化
        }
        //此函数为控件事件初始化函数
        private eventinit(ele: HTMLElement) {
            //鼠标事件 //暂时只添加上个鼠标事件监听器
            ele.onclick = (e) => this.send(EMouse.Click, e);
            ele.onmousedown = (e) => this.send(EMouse.Press, e);
            ele.onmouseup = (e) => this.send(EMouse.Release, e);

            //键盘事件
            ele.onkeydown = (e) => this.send(EKey.Press, e);
            ele.onkeyup = (e) => this.send(EKey.Release, e);
            ele.onkeypress = (e) => this.send(EKey.Enter, e);
        }
        send(eid: number, msg: any) {
            var e = new Event(null, eid, msg);
            for (var t = 0; t < this.eps.length; ++t) {
                var ep = this.eps[t];
                var des = this.mainids[t];
                var te = new Event(des, e.eid, e.msg);
                ep.throwevent(te);
            }
        }
    }
}