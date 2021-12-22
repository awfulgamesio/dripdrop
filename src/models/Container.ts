import Color from "./Color";
import { ContainerStatus } from "./Enums";
import Sprite from "./Sprite";

export default class {
    sprite: Sprite
    row: number
    status: ContainerStatus
    color: Color

    constructor(row: number, status?: ContainerStatus, sprite?: Sprite, color?: Color) {
        this.row = row
        this.sprite = sprite
        this.status = status ?? ContainerStatus.BottomRow
        this.color = color ?? new Color()
    }
}