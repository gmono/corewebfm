var CWF;
(function (CWF) {
    var EventFun = (function () {
        function EventFun(f, sid, cid) {
            this.fun = f;
            this.sid = sid;
            this.cid = cid;
        }
        EventFun.prototype.eventactive = function (e) {
            this.fun(e);
        };
        return EventFun;
    }());
    CWF.EventFun = EventFun;
})(CWF || (CWF = {}));
//# sourceMappingURL=EventFun.js.map