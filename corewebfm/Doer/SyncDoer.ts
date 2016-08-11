namespace CWF {
//同步执行的doer
    export class SyncDoer implements IDoer {
        dosome(fun: Function) {
            fun();
        }
    }
}