var CWF;
(function (CWF) {
    //control是个抽象的控件概念 表达了ui层级结构
    //并不实现具体绘制
    var Control = (function () {
        function Control(parent) {
            this.parent = parent;
        }
        Control.prototype.eventactive = function (e) {
        };
        return Control;
    }());
    CWF.Control = Control;
})(CWF || (CWF = {}));
//# sourceMappingURL=Control.js.map