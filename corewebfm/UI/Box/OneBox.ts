namespace CWF {
//这是单一事件泵的box的辅助类
    export class OneBox extends Box {
        constructor(ele: HTMLElement, ep: EventPump) {
            super(ele, [ep]);
        }
    }
}