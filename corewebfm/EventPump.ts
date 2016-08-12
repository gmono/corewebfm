namespace CWF {
    export class EventPump {

        objects: {}

        doer: IDoer;
        addobject(obj: IEventObject): number {
            //这个函数添加一个对象并返回id号
            var id = 0;
            for (var i = 0; i < Number.MAX_VALUE; ++i) {
                if (this.objects[i] == undefined) {
                    id = i;
                }
            }
            this.objects[id] = obj;
            return id;
        }
        deleteobject(id: number) {
            this.objects[id] = undefined;
        }
        getobjbyid(id: number): IEventObject {
            return this.objects[id];
        }
        getidbyobj(obj: IEventObject): number {
            for (var t in this.objects) {
                if(this.objects[t] == obj) return this.objects[t];
            }
            return undefined;
        }
        throwevent(e: Event) {
            var obj = this.objects[e.des] as IEventObject ;
            if (obj == undefined || obj == null) return;
            this.doer.dosome(() => obj.event(e));
        }
        setdoer(doer: IDoer) {
            if (doer == undefined || doer == null) return;
            this.doer = doer;
        }
    }
}