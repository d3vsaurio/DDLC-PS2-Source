import { stdScene } from "./stdscene.js"
import { fonts } from "../ren/fonts.js"
import { lang } from "../ren/lang.js"
import { config } from "../config.js"

export class scnKeyboard extends stdScene {
    init() {
        this.letters = "qwertyuiop asdfghfklñ zxcvbnm."
        this.keys    = this.letters.split(' ')
        this.indexes = this.keys.join('').split('')
        this.rx = 0
        this.ry = 0
        this.kbx = 28
        this.kby = 180 
        this.kbw = 54 //kb width
        this.kbh = 54 //kb height
        this.kbs = 4  //kb spacing
        this.bgcolor = Color.new(255, 255, 255, 125)
        this.border  = Color.new(255, 189, 225, 125)
        this.border2 = Color.new(187,  85, 153, 125)
        this.kbcolor = Color.new(255, 230, 244, 125)
        this.fcolor  = Color.new(  0,   0,   0, 125)
        this.lcolor  = Color.new(150, 150, 150, 125)
        fonts.setDef(1, 'black')
        this.imgR2 = new Image("assets/images/gui/kbr2.png");
        this.imgSquare = new Image("assets/images/gui/kbsquare.png");
        this.imgTriangle = new Image("assets/images/gui/kbtriangle.png");
        //
        this.ikey = 0
        this.ckey = 1 //current key
        this.prevspc = 0
        this.textbox = ''
        this.ret = 30
        this.cc = 0
    }
    update() {
        this.cc++
        if (this.pad.justPressed(Pads.LEFT)) {
            this.goKey('left')
        }
        if (this.pad.justPressed(Pads.RIGHT)) {
            this.goKey('right')
        }
        if (this.pad.justPressed(Pads.DOWN)) {
            this.goKey('down')
        }
        if (this.pad.justPressed(Pads.UP)) {
            this.goKey('up')
        }
        if (this.pad.justPressed(Pads.CROSS)) {
            this.write()
        }
        if (this.pad.justPressed(Pads.SQUARE)) {
            this.backspace()
        }
        if (this.pad.justPressed(Pads.TRIANGLE)) {
            this.space()
        }
        if (this.pad.justPressed(Pads.R2)) {
            this.enter()
        }
        Draw.rect(0, 0, 640, 448, this.bgcolor)
        Draw.rect(this.kbx, this.kby-20, (this.kbw + this.kbs)*10-this.kbs, 2, this.lcolor)
        //let ry = 0
        let numrow = 0
        this.resetY()
        this.keys.forEach(row => {
            numrow++
            this.resetX()
            let str = row.split('')
            str.forEach(kb => {
                //this.drawKey(rx + this.kbx, this.kby + ry, kb)
                this.drawKey(kb)
                //rx = rx + this.kbw + this.kbs
            })
            if (numrow<3)
                this.nextRow()
            //ry = ry + this.kbh + this.kbs
        })
        this.drawKey('', this.kbw*2 + this.kbs)
        this.imgSquare.draw(this.kbx + this.kbw*8 + this.kbs*7 + 4, this.ry)
        this.resetX()
        this.nextRow()
        this.drawKey('', this.kbw*8 + this.kbs*7)
        this.imgTriangle.draw(this.kbx, this.ry)
        this.drawKey('', this.kbw*2 + this.kbs)
        this.imgR2.draw(this.kbx + this.kbw*8 + this.kbs*7 + 4, this.ry)
        this.ikey = 0
        let cursor = ''
        if (this.cc >= this.ret) {
            cursor = '|'
            if (this.cc >= this.ret*2)
                this.cc = 0
        }
        fonts.print0(this.kbx, this.kby-60, this.textbox + cursor)
        fonts.print0(this.kbx, 50, lang('Write your Name') + ':')
        fonts.print0(this.kbx+210, 365, lang('Space'))
        fonts.print0(this.kbx+480, 365, lang('Done'))
    }
    resetX() {
        this.rx = this.kbx
    }
    resetY() {
        this.ry = this.kby
    }
    nextRow() {
        this.ry = this.ry + this.kbh + this.kbs
    }
    drawKey(txt='', width = 0) {
        this.ikey++
        let elwidth = this.kbw
        if (width != 0)
            elwidth = width
        let elcolor = this.border
        if (this.ikey == this.ckey)
            elcolor = this.border2
        Draw.rect(this.rx, this.ry, elwidth, this.kbh, elcolor)
        Draw.rect(this.rx + 2, this.ry + 2, elwidth-4, this.kbh-4, this.kbcolor)
        
        if (txt != '')
            fonts.print0(this.rx + 20, this.ry + 9, txt)
        this.rx = this.rx + elwidth + this.kbs
    }
    write() {
        let newtext  = this.textbox
        if (this.ckey < 29) {
            let newletter = this.indexes[this.ckey - 1]
            newtext = newtext + newletter
            newtext = newtext.trim()
            if (newtext.length <= 10) {
                this.textbox = newtext.charAt(0).toUpperCase() + newtext.slice(1);
            }
        }
        if (this.ckey == 29) {
            this.backspace()
        }
        if (this.ckey == 30) {
            this.space()
        }
        if (this.ckey == 31) {
            this.enter()
        }
    }
    backspace() {
        if (this.textbox.length != 0)
            this.textbox = this.textbox.slice(0, -1);
    }
    space() {
        if (this.textbox.length <= 10) {
            this.textbox = this.textbox + ' ';
        }
    }
    enter() {
        config.player = this.textbox
        this.nextScene('title')
    }
    goKey(dir) {
        switch (dir) {
            case 'left':
                if (this.ckey > 1)
                    this.ckey--
                break;
            case 'right':
                if (this.ckey < 31)
                    this.ckey++
                break;
            case 'down':
                if (this.ckey < 20) {
                    this.ckey = this.ckey+10
                }
                else if (this.ckey == 20) {
                    this.ckey = 29
                }
                else if (this.ckey > 20 && this.ckey < 29) {
                    this.prevspc = this.ckey
                    this.ckey = 30
                }
                else if (this.ckey == 29) {
                    this.ckey = 31
                }
                break;
            case 'up':
                if (this.ckey > 10 && this.ckey < 30) {
                    this.ckey = this.ckey-10
                }
                else if (this.ckey == 30) {
                    if (this.prevspc != 0)
                        this.ckey = this.prevspc
                    else
                        this.ckey = 21
                }
                else if (this.ckey == 31) {
                    this.ckey = 29
                }
            default:
                break;
        }
    }
    free() {
        this.imgR2 = null
        this.imgSquare = null
        this.imgTriangle = null
    }
}