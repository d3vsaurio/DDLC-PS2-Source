export class timerClass {
    constructor() {
        this.time   = Timer.new()
    }
    reset() {
        Timer.reset(this.time)
    }
    get() {
        return Timer.getTime(this.time)
    }
}