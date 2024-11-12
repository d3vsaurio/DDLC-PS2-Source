import { ddlc } from "../ddlc.js"
import { stdScene } from "./stdscene.js"
import { audio } from "../ren/audio.js"
import { fonts } from "../ren/fonts.js"
import { lang } from "../ren/lang.js"

export class scnLoading extends stdScene {
    init() {
        audio.silence()
        this.num = 0
    }
    update() {
        this.num++
        ddlc.loading.draw(0, 0)
        fonts.print1(520, 390, lang("Loading"))
        if (this.num > 10)
            this.nextScene(ddlc.nxt)
    }
}