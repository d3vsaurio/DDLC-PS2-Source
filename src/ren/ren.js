import { config } from "../config.js"
import { audio } from "./audio.js"
import { bgMan } from "./bgman.js"
import { characters } from "./characters.js"
import { fonts } from "./fonts.js"
import { debug } from "../debug.js"
import { timerClass } from "./timerclass.js"
import { seconds } from "./utils.js"

export const renJS = {
    hist    : "",
    title   : "",
    textbox : new Image("assets/images/gui/textbox.png"),
    namebox : new Image("assets/images/gui/namebox.png"),
    tiempo  : new timerClass,
    pad     : Pads.get(0),
    showbox : true,
    ndialog : 0,
    setTitle: function (lbl) {
        this.title = lbl
    },
    loadDlg : function (txt) {
        this.ndialog++
        this.curr     = 0,
        this.parraf   = []
        this.uparraf  = []
        this.txt      = txt
        this.nextDlg  = false
        this.parraf   = this.chunkDlg(txt)
        this.cparraf  = 0
        this.nparraf  = this.parraf.length
        for (let ix = 0; ix < this.nparraf; ix++) {
            this.uparraf[ix] = ""
        }
        let tmp = this.chunkDlg(txt)
        this.hist += tmp.join("\n")
        this.hist += "\n\n"
        this.finished   = false
        this.pressed    = 0
        this.tiempo.reset()
    },
    chunkDlg: function (txt) {
        let count = config.dlgCount
        let words = txt.split(" ")
        let parag = []
        let tword = ""
        let tline = ""
        let tsize = 0
        let tparr = 0

        for (let i = 0; i < words.length; i++) {
            tword   = words[i] + " "
            tsize   = (tline + tword).length - 1
            if (tsize > count ) {
                parag[tparr] = tline
                tparr++
                tline = tword
            }
            else {
                tline += tword
            }
        }
        parag[tparr] = tline

        return parag
    },
    historyDlg: function () {
        this.str.hist += parag.join("\n")
        this.str.hist += "\n\n"
    },
    writeTxt : function () {
        if (this.cparraf < this.nparraf ) {
            if (this.curr < this.parraf[this.cparraf].length) {
                this.uparraf[this.cparraf] = this.parraf[this.cparraf].substring(0, this.curr + 1)
                //this.uparraf[this.cparraf] = this.curr + 1
                this.curr++
            }
            else {
                this.curr = 0
                this.cparraf++
            }
        }
        else {
            this.finished = true
        }
    },
    showTxt : function () {
        fonts.printName(this.title)
        for (let ix = 0; ix < this.nparraf; ix++) {
            fonts.printDialog(this.uparraf[ix], ix)
        }
    },
    dialog : function () {
        //let txt =''
        let speed   = seconds(config.dlgSpeed)
        let acum    = 0
        let tcurr   = 0
        let tprev   = this.tiempo.get()
        let delta   = 0
        while (!this.nextDlg) {
            audio.updateBGM()
            Screen.clear()
            this.pad.update()
            if (this.pad.justPressed(Pads.CROSS)) {
                this.pressed++
                if (this.finished) {
                    this.nextDlg = true
                }
                if (!this.finished) {
                    this.finished = true
                    this.uparraf  = this.parraf
                }
            }
            if (!this.finished) {
                tcurr = this.tiempo.get()
                delta = tcurr - tprev
                acum += delta
                if (acum >= speed) {
                    this.writeTxt()
                    acum  = 0
                }
                tprev = tcurr
            }

            if (bgMan.image != "") {
                bgMan.list[bgMan.image].draw(0, 0)
            }
            characters.forEach(element => {
                element.draw()
            })
            if (this.showbox) {
                if (this.title != '') {
                    this.namebox.draw(133, 329)
                }
                this.textbox.draw(116, 353)
                this.showTxt()
            }
            if (config.debug) {
                debug.show(30, 400)
            }
            Screen.flip()
        }
    }
}