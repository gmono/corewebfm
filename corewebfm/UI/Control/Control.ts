namespace CWF {
    //control是个抽象的控件概念 表达了ui层级结构
    //并不实现具体绘制
    export class Control implements IEventObject {
        parent: Control;
        constructor(parent?: Control) {
            this.parent = parent;
        }
        event(e: Event) {
        }

    }
}