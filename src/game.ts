export default class {
    private _running : boolean = false
    private _lastRender = 0

    constructor() {
        this._lastRender = performance.now()
    }

    get running() {
        return this._running
    }
    set running(value: boolean) {
        this._running = value
    }

    private _loop(timestamp) {
        var progress = timestamp - this._lastRender
      
        if(this._running) {
            this._update(progress)
            this._draw()
        }
      
        this._lastRender = timestamp
        window.requestAnimationFrame(this._loop)
    }

    private _update(progress) {

    }

    private _draw() {

    }
}