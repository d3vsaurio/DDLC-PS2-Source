import { config } from "../config.js"
import { bgMan } from "../ren/bgman.js"
import { characters } from "../ren/characters.js"

export class dlgScene { // for dialog scenes
    init() {} // init for child classes
    tInit() {
        this.player = config.player
        this.init()  // init for child classes
    }
    bgPreload(arr) {
        bgMan.preload(arr)
    }
    update() {} // loop events for children classes
    tUpdate() { // main loop events
        this.update()
    }
    tFree() {  // before the next scene
        characters.forEach(element => {
            element.unload()
        })
        bgMan.unload()
        std.gc()
    }
}