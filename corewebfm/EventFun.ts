namespace CWF {
    export class EventFun implements IEventObject {
        fun: Function;
        sid: string;
        cid: string;
        constructor(f: Function,sid?:string,cid?:string) {
            this.fun = f;
            this.sid = sid;
            this.cid = cid;
        }
        eventactive(e: Event) {
            this.fun(e);
        }

    }
}