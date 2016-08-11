var CWF;
(function (CWF) {
    var ASyncDoer = (function () {
        function ASyncDoer() {
        }
        ASyncDoer.prototype.dosome = function (fun) {
            setTimeout(fun, 0);
        };
        return ASyncDoer;
    }());
    CWF.ASyncDoer = ASyncDoer;
})(CWF || (CWF = {}));
//# sourceMappingURL=ASyncDoer.js.map