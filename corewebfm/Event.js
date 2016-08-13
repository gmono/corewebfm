var CWF;
(function (CWF) {
    var Event = (function () {
        function Event(des, eventid, message) {
            this.des = des;
            this.eid = eventid;
            this.msg = message;
        }
        return Event;
    }());
    CWF.Event = Event;
})(CWF || (CWF = {}));
//# sourceMappingURL=Event.js.map