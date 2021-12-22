import { createArrowFunction } from "typescript"

export interface ColorValue {
    red: number
    blue: number
    green: number
}

export class Color {
    _red: number
    _blue: number
    _green: number

    constructor(color: ColorValue) {
        let checked = this._toInt(this._checkValues(color))

        this._red = checked.red ?? 0
        this._blue = checked.blue ?? 0
        this._green = checked.green ?? 0
    }

    addColor(color: ColorValue) {
        let checked = this._toInt(this._checkValues(color))
        this._red += checked.red ?? 0
        this._blue += checked.blue ?? 0
        this._green += checked.green ?? 0
    }

    removeColor(color: ColorValue) {
        let checked = this._toInt(this._checkValues(color))

        this._red -= checked.red ?? 0
        this._blue -= checked.blue ?? 0
        this._green -= checked.green ?? 0

    }

    get red(): number { return this._red } 

    get blue(): number { return this._blue }

    get green(): number { return this._green }

    get total(): number {
        return this._red + this._blue + this._green
    }

    get hexColor(): string {
        if(this._red > 255 || this._blue > 255 || this._green > 255){
            let max = Math.max(this._red, this._blue, this._green)
            let color = {
                red: Math.round(this._red / max * 255),
                green: Math.round(this._green / max * 255),
                blue: Math.round(this._blue / max * 255),
            }

            return this._toHex(color.red) + this._toHex(color.blue) + this._toHex(color.green)
        }
        else {
            return this._toHex(this._red) + this._toHex(this._blue) + this._toHex(this._green)
        }
    }

    _toInt(color: ColorValue){
        return {
            red: Math.floor(color.red),
            blue: Math.floor(color.blue),
            green: Math.floor(color.green)
        }
    }

    _checkValues(color: ColorValue) {
        if(color.red >= 0 && color.blue >= 0 && color.green >= 0) {
            return color
        }
        else {
            throw new Error('Color must be greater than zero.')
        }
    }

    _toHex(value: number) {
        return value < 16 ? '0' + value.toString(16) : value.toString(16)
    }
}