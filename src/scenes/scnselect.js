import { stdScene } from "./stdscene.js";
import { fonts } from "../ren/fonts.js";
import { config } from "../config.js";

export class scnSelect extends stdScene {
    init() {
        this.spc  = 40
        this.x    = 250
        this.y    = 180
        this.options = ["English", "Spanish (ES)"]
        this.values  = ["en", "es"]
        this.current = 0
        fonts.setDef(1, 'white')
    }
    update() {
        if (this.pad.justPressed(Pads.DOWN)) {
            this.current = (this.current + 1 < this.options.length) ? this.current + 1 : 0
        }
        if (this.pad.justPressed(Pads.UP)) {
            this.current = (this.current - 1 >= 0) ? this.current - 1 : this.options.length - 1
        }
        if (this.pad.justPressed(Pads.CROSS)) {
            config.lang = this.values[this.current]
            this.nextScene('warning')
        }
        for (let i = 0; i < this.options.length; i++) {
            fonts.print0(this.x, this.y + this.spc*i, this.options[i])
        }
        fonts.print0(this.x - 30, this.y + this.spc*this.current, "X")
    }
}