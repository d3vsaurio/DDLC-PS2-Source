import { FontOutline } from "../vendor/outline.js"

export const fonts = {
    init: function () {
        this.fontDef   = new Font("default")
        this.fontBase  = new Font("assets/fonts/BarlowCondensed-Regular.ttf")
        this.fontBold  = new Font("assets/fonts/BarlowCondensed-Bold.ttf")
        this.fontName  = new FontOutline(this.fontBold)
        this.fontBase.scale = 0.65
        this.fontBold.scale = 0.65
        this.cBlack   = Color.new(0, 0, 0, 128)
        this.cWhite   = Color.new(128, 128, 128, 128)
        this.cBorder  = Color.new(94, 43, 77, 128);
        this.fontBaseColor = this.cBlack
    },
    setDef (sz, color) {
        this.fontDef.scale = sz
        if (color == 'black')
            this.fontBaseColor = this.cBlack
        else
            this.fontBaseColor = this.cWhite
    },
    print0: function (x, y, txt) {
        this.fontDef.color = this.fontBaseColor
        this.fontDef.print(x, y, txt)
    },
    print1: function (x, y, txt) {
        this.fontBold.color = this.cWhite
        this.fontName.print(x, y, txt, 2, this.cBorder)
    },
    printName: function (txt) {
        //this.print1(138, 322, txt)
        this.print1(140, 322, txt)
    },
    printDialog: function (txt, ind) {
        let spc = 24
        let lef = 124
        let top = 353
        this.fontBase.color = this.cBlack
        this.fontBase.print (lef, top + spc*ind, txt)
    }
}