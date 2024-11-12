import { ddlc } from "../ddlc.js"
import { debug } from "../debug.js"
import { config } from "../config.js"
import { audio } from "../ren/audio.js"

export class stdScene { // for standar scenes
    init() {} // init for child classes
    tInit() {
        this.tScene = false    // var for looping -> true = break
        this.pad    = ddlc.pad // the pad
        this.init()            // init for child classes
    }
    nextScene(scn) { // set the new scene and break the loop
        ddlc.newScene = scn
        this.tScene = true
    }
    loadScene(scn) { // new scene with loading...
        ddlc.newScene = 'loading'
        ddlc.nxt = scn
        this.tScene = true
    }
    update() {} // loop events for children classes
    tUpdate() { // main loop events
        while (!this.tScene) {
            audio.updateBGM()
            this.pad.update()
            Screen.clear()
            this.update()
            if (config.debug) {
                debug.show(30, 400)
            }
            Screen.flip()
        }
    }
    free() {} // before the next scene
    tFree() {
        this.free()
    }
}