var CWF;
(function (CWF) {
    var EventPump = (function () {
        function EventPump() {
            this.objects = {};
            this.cols = {};
            this.guid = new CWF.GUID();
        }
        EventPump.prototype.addobject = function (obj) {
            //这个函数添加一个对象并返回id号 如果添加成功 并且对象sid有效则返回对象sid否则返回
            //分配的guid  如果添加失败则返回null
            var sid;
            if (obj.sid == undefined || obj.sid == null)
                do {
                    sid = this.guid.newGUID();
                } while (this.objects[sid] != undefined);
            if (this.objects[sid] != undefined)
                return null;
            this.objects[sid] = obj;
            //sid映射表处理完毕
            //处理cid映射表
            if (obj.cid == undefined || obj.cid == null)
                return sid;
            if (this.cols[obj.cid] == undefined)
                this.cols[obj.cid] = new Array();
            var ar = this.cols[obj.cid];
            ar.push(sid); //将对象的sid加入组中
            //cid处理完毕
            return sid;
        };
        EventPump.prototype.deleteobject = function (sid) {
            this.objects[sid] = undefined;
        };
        EventPump.prototype.getobjbysid = function (sid) {
            return this.objects[sid];
        };
        EventPump.prototype.getsidbyobj = function (obj) {
            for (var t in this.objects) {
                if (this.objects[t] == obj)
                    return t;
            }
            return undefined;
        };
        EventPump.prototype.throwevent = function (e) {
            var obj = this.objects[e.des];
            if (obj == undefined || obj == null)
                return;
            this.doer.dosome(function () { return obj.eventactive(e); });
        };
        EventPump.prototype.throwbyclass = function (e, cid) {
            //这里会用每个特定对象的sid代替e中的des
            var ar = this.cols[cid];
            if (ar == undefined || ar == null)
                return;
            for (var t in ar) {
                var sid = ar[t];
                var te = new CWF.Event(sid, e.eid, e.msg);
                this.throwevent(te);
            }
        };
        EventPump.prototype.setdoer = function (doer) {
            if (doer == undefined || doer == null)
                return;
            this.doer = doer;
        };
        return EventPump;
    }());
    CWF.EventPump = EventPump;
})(CWF || (CWF = {}));
//# sourceMappingURL=EventPump.js.map