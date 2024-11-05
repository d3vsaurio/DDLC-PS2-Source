import { stdScene } from "./stdscene.js"
import { audio } from "../ren/audio.js"

export class scnPoem extends stdScene {
    init() {
        this.imgTmp = new Image("assets/images/tmp/poemgame.png")
        audio.setBGM('4')
    }
    update() {
        if (this.pad.justPressed(Pads.START)) {
            this.nextScene('title')
        }
        this.imgTmp.draw(0, 0)
    }
    free() {
        this.imgTmp = null
    }
}