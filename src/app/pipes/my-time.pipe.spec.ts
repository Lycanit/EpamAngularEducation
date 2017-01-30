import { MyTimePipe } from "./my-time.pipe";

describe('MyPipe Tests', () => {
    let pipe: MyTimePipe;

    beforeEach(() => {
        pipe = new MyTimePipe();
    });

    it('Should convert 3661 sec into string hours : 1 mins : 1 sec :1', () => {
        var result = pipe.transform(3661, null);
        expect(result).toEqual('hours : 1 mins : 1 sec :1');
    });
});