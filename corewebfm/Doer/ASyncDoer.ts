namespace CWF {
    export class ASyncDoer implements IDoer {
        dosome(fun: Function) {
            setTimeout(fun, 0);
        }
    }
}