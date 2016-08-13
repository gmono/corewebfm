namespace CWF {
    export class Event {
        constructor(des: string, eventid: number, message: any) {
            this.des = des;
            this.eid = eventid;
            this.msg = message;
        }
        
        des: string; //IEventObject在某个事件泵中的id
        eid: number;//事件id
        msg: any;//消息实体
    }
}