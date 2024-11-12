import { ddlc } from "../ddlc.js"
import { dlgScene } from "../scenes/dlgscene.js"
import { Sayori, Natsuki, Yuri, Monika } from "../ren/functions.js"
import { config } from "../config.js"
import { ch0es } from "./es/ch0.js"
import { ch0en } from "./en/ch0.js"

export class ch0 extends dlgScene {
    init () {
        //preload graphics
        this.bgPreload(['residential', 'club', 'corridor', 'class'])
        Sayori.preload(
            ['a', 'b', 'g', 'h', 'j', 'k', 'm', 'p', 'q', 'r', 'x', 'y'],
            ['1', '2', '3', '4', '5a', '5b', '5c', '5d']
        )
        Natsuki.preload(
            ['2c', 'a', 'b', 'c', 'd', 'g', 'h', 'o', 'p', 'q', 'r', 's', 'v', 'z'],
            ['1', '2', '4', '5']
        )
        Yuri.preload(
            ['a', 'b2', 'e', 'l', 'f', 'm', 'n', 'o', 'u', 'v'],
            [ '1', '2', '3', '4']
        )
        Monika.preload(
            ['a', 'b', 'd', 'e', 'g', 'j', 'k', 'p'],
            [ '1', '2', '3', '4', '5a']
        )
    }
    update () {
        if (config.lang == 'es') {
            ch0es(this.player)
        }
        else {
            ch0en(this.player)
        }
        ddlc.nxt = 'poem'
        ddlc.newScene = "loading"
    }
}