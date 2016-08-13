namespace CWF {
    export class EventPump {

        objects: {}; //sid映射表
        cols: {}; //cid映射表 映射到一个array<string>

        guid: GUID;
        doer: IDoer;
        constructor() {
            this.objects = {}
            this.cols = {}
            this.guid =new GUID();
        }
        addobject(obj: IEventObject): string {
            //这个函数添加一个对象并返回id号 如果添加成功 并且对象sid有效则返回对象sid否则返回
            //分配的guid  如果添加失败则返回null
            var sid;
            if (obj.sid == undefined || obj.sid == null) do {
                sid = this.guid.newGUID();
            } while (this.objects[sid] != undefined);
            if (this.objects[sid] != undefined) return null;
            this.objects[sid] = obj;
            //sid映射表处理完毕
            //处理cid映射表
            if (obj.cid == undefined || obj.cid == null) return sid;
            if (this.cols[obj.cid] == undefined) this.cols[obj.cid] = new Array<string>();
            var ar = this.cols[obj.cid] as Array<string>;
            ar.push(sid);//将对象的sid加入组中
            //cid处理完毕
            return sid;
        }
        deleteobject(sid: string) {
            this.objects[sid] = undefined;
        }
        getobjbysid(sid: string): IEventObject {
            return this.objects[sid];
        }
        getsidbyobj(obj: IEventObject): string {
            for (var t in this.objects) {
                if (this.objects[t] == obj) return t;
            }
            return undefined;
        }
        throwevent(e: Event) {
            var obj = this.objects[e.des] as IEventObject;
            if (obj == undefined || obj == null) return;
            this.doer.dosome(() => obj.eventactive(e));
        }
        throwbyclass(e: Event, cid: string) {
            //这里会用每个特定对象的sid代替e中的des
            var ar = this.cols[cid];
            if (ar == undefined || ar == null) return;
            for (var t in ar) {
                var sid = ar[t] as string;
                var te = new Event(sid, e.eid, e.msg);
                this.throwevent(te);
            }
        }
        setdoer(doer: IDoer) {
            if (doer == undefined || doer == null) return;
            this.doer = doer;
        }
    }
}