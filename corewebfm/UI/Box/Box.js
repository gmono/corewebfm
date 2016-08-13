var CWF;
(function (CWF) {
    //盒子类 将一个html标签当作一个盒子 主要是加上事件监听
    //目前只有鼠标事件
    var Box = (function () {
        function Box(ele, pumps) {
            this.eps = pumps;
            this.maincont = new CWF.Control();
            for (var t = 0; t < this.eps.length; ++t) {
                var e = this.eps[t];
                this.mainids[t] = e.addobject(this.maincont);
            }
            this.eventinit(ele); //进行控件事件监听初始化
        }
        //此函数为控件事件初始化函数
        Box.prototype.eventinit = function (ele) {
            var _this = this;
            //鼠标事件 //暂时只添加上个鼠标事件监听器
            ele.onclick = function (e) { return _this.send(CWF.EMouse.Click, e); };
            ele.onmousedown = function (e) { return _this.send(CWF.EMouse.Press, e); };
            ele.onmouseup = function (e) { return _this.send(CWF.EMouse.Release, e); };
            //键盘事件
            ele.onkeydown = function (e) { return _this.send(CWF.EKey.Press, e); };
            ele.onkeyup = function (e) { return _this.send(CWF.EKey.Release, e); };
            ele.onkeypress = function (e) { return _this.send(CWF.EKey.Enter, e); };
        };
        Box.prototype.send = function (eid, msg) {
            var e = new CWF.Event(null, eid, msg);
            for (var t = 0; t < this.eps.length; ++t) {
                var ep = this.eps[t];
                var des = this.mainids[t];
                var te = new CWF.Event(des, e.eid, e.msg);
                ep.throwevent(te);
            }
        };
        return Box;
    }());
    CWF.Box = Box;
})(CWF || (CWF = {}));
//# sourceMappingURL=Box.js.map