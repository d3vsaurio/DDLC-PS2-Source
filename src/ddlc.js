import { fonts } from "./ren/fonts.js"
import { debug } from "./debug.js"
import { scnSelect } from "./scenes/scnselect.js"
import { scnKeyboard } from "./scenes/keyboard.js"
import { scnWarning } from "./scenes/scnwarning.js"
import { scnTitle } from "./scenes/scntitle.js"
import { scnDummy } from "./scenes/scndummy.js"
import { scnPoem } from "./scenes/scnpoem.js"
import { ch0 } from "./scripts/script-ch0.js"
import { timerClass } from "./ren/timerclass.js"
import { scnLoading } from "./scenes/scnloading.js"

export const ddlc = {
    init: function () {
        fonts.init()
        debug.init()
        this.loading  = new Image("assets/images/loading.png")
        this.nxt      = ''
        this.tiempo   = new timerClass(),
        this.pad      = Pads.get(0),
        this.curScene = 'select'
        this.newScene = this.curScene
        this.scenes   = {
            'select'  : new scnSelect(),
            'warning' : new scnWarning(),
            'keyboard': new scnKeyboard(),
            'title'   : new scnTitle(),
            'ch0'     : new ch0(),
            'poem'    : new scnPoem(),
            'dummy'   : new scnDummy(),
            'loading' : new scnLoading(),
        }
    },
    game: function () {
        while (true) {
            if (this.newScene != this.curScene) {
                this.curScene = this.newScene
            }
            this.scenes[this.curScene].tInit()
            this.scenes[this.curScene].tUpdate()
            this.scenes[this.curScene].tFree()
        }
    }
}