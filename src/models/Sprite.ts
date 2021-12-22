export default class Pos {
    x: number
    y: number
    private _scale: number

    constructor(xPos = 0, yPos = 0, scale = 100) {
        this.x = xPos
        this.y = yPos
        this.scale = scale
    }


    get scale() {
        return this._scale
    }
    set scale(value: number) {
        if(value > 0) {
            this._scale = value
        }
        else {
            throw new Error("Scale must be greater than zero.")
        }
    }
}