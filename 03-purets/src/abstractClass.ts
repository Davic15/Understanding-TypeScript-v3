//* no new object can be create from this class
//* an abstract class is a kind of blueprint
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}

    //* we can define methods and implement then in other classes (inheritance)
    abstract getSepia(): void;
    //* we can define methods and the implementation here
    getReelTime(): number {
        return 8
    }
}


class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ) {
            super(cameraMode, filter, burst)
        }

        getSepia(): void {
            console.log('hi');
        }
}

const fm = new Instagram('test', 'test', 3);
fm.getReelTime();
