var CWF;
(function (CWF) {
    (function (EMouse) {
        EMouse[EMouse["Press"] = 0] = "Press";
        EMouse[EMouse["Release"] = 1] = "Release";
        EMouse[EMouse["Click"] = 2] = "Click";
        EMouse[EMouse["Whell"] = 3] = "Whell";
        EMouse[EMouse["Move"] = 4] = "Move";
        EMouse[EMouse["Over"] = 5] = "Over";
        EMouse[EMouse["Out"] = 6] = "Out";
    })(CWF.EMouse || (CWF.EMouse = {}));
    var EMouse = CWF.EMouse; //分别是鼠标 按下 放开 单击 滚轮 移动 进入 移出
    (function (EKey) {
        EKey[EKey["Press"] = 0] = "Press";
        EKey[EKey["Release"] = 1] = "Release";
        EKey[EKey["Enter"] = 2] = "Enter";
    })(CWF.EKey || (CWF.EKey = {}));
    var EKey = CWF.EKey; //分别是 按键按下 按键放开 和 键盘输入（按下字母按键）
})(CWF || (CWF = {}));
//# sourceMappingURL=BoxEvents.js.map