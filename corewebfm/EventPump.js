var CWF;
(function (CWF) {
    var EventPump = (function () {
        function EventPump() {
        }
        EventPump.prototype.addobject = function (obj) {
            //这个函数添加一个对象并返回id号
            var id = 0;
            for (var i = 0; i < Number.MAX_VALUE; ++i) {
                if (this.objects[i] == undefined) {
                    id = i;
                }
            }
            this.objects[id] = obj;
            return id;
        };
        EventPump.prototype.deleteobject = function (id) {
            this.objects[id] = undefined;
        };
        EventPump.prototype.getobjbyid = function (id) {
            return this.objects[id];
        };
        EventPump.prototype.getidbyobj = function (obj) {
            for (var t in this.objects) {
                if (this.objects[t] == obj)
                    return this.objects[t];
            }
            return undefined;
        };
        EventPump.prototype.throwevent = function (e) {
            var obj = this.objects[e.des];
            if (obj == undefined || obj == null)
                return;
            this.doer.dosome(function () { return obj.event(e); });
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