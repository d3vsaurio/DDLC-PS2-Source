import { stdScene } from "./stdscene.js";
import { fonts } from "../ren/fonts.js";

export class scnDummy extends stdScene {
    init() {
        this.x    = 250
        this.y    = 180
        fonts.setDefScale(1)
    }
    update() {
        fonts.print0(this.x, this.y, "DUMMY SCENE")
    }
}