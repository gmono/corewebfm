var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CWF;
(function (CWF) {
    //这是单一事件泵的box的辅助类
    var OneBox = (function (_super) {
        __extends(OneBox, _super);
        function OneBox(ele, ep) {
            _super.call(this, ele, [ep]);
        }
        return OneBox;
    }(CWF.Box));
    CWF.OneBox = OneBox;
})(CWF || (CWF = {}));
//# sourceMappingURL=OneBox.js.map