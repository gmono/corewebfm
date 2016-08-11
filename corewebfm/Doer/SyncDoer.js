var CWF;
(function (CWF) {
    //同步执行的doer
    var SyncDoer = (function () {
        function SyncDoer() {
        }
        SyncDoer.prototype.dosome = function (fun) {
            fun();
        };
        return SyncDoer;
    }());
    CWF.SyncDoer = SyncDoer;
})(CWF || (CWF = {}));
//# sourceMappingURL=SyncDoer.js.map