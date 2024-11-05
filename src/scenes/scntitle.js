import { stdScene } from "./stdscene.js"
import { lang } from "../ren/lang.js"
import { fonts } from "../ren/fonts.js"
import { audio } from "../ren/audio.js"

export class scnTitle extends stdScene {
    init() {
        this.imgTmp = new Image("assets/images/tmp/titletmp.png")
        this.imgOverlay = new Image("assets/images/tmp/overlay.png") //100x124

        this.cols = 8  // overlay cols
        this.rows = 5  // overlay rows
        this.iwidth = 100  // overlay width
        this.iheight = 124 // overlay height
        this.sw = false // var for stop previous CROSS pad
        this.cc = 0 // simple counter
        this.rt = 2 // a retardant
        this.nx = 0 // x coord for overlay
        this.ny = 0 // y coord for overlay
        audio.setBGM('1') // 
    }
    update() {
        if (this.pad.justPressed(Pads.CROSS) && this.sw) {
            this.nextScene('ch0')
        }
        this.sw = true
        this.cc++
        if (this.cc >= this.rt) {
            this.nx = this.nx - 1
            this.ny = this.ny - 1
            this.cc = 0
        }
        if (this.nx <= this.iwidth*-1) {
            this.nx = 0
        }
        if (this.ny <= this.iheight*-1) {
            this.ny = 0
        }
        for (let ii = 0; ii < this.cols; ii++) {
            for (let jj = 0; jj < this.rows; jj++) {
                this.imgOverlay.draw(this.nx + ii*this.iwidth, this.ny + jj*this.iheight)
            }
        }
        this.imgTmp.draw (0, 0)
        fonts.print1(44, 249, lang("New Game"))
    }
    free () {
        this.imgTmp = null
        this.imgOverlay = null
    }
}