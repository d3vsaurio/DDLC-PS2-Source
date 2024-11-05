import { defChars } from "./defchars.js";
import { timerClass } from "./timerclass.js";
import { seconds } from "./utils.js";
import { debug } from "../debug.js";

export class char {
    constructor (name, topy) {
        this.name = name
        this.top1 = 0
        this.top2 = 14
        this.topy = topy
        this.reset()
        this.tiempo = new timerClass()

        //transitions vars
        let spd    = 0.15 //duration 0.15
        this.totcyc = seconds(spd) //total cyc
        this.maxalp = 128 //max alpha
        this.dividr = this.totcyc/this.maxalp
        /*
        coordenadas char (centro)
        head: x=128
        left: y+178
        righ: x+192
        */
    }
    reset () {
        this.x = 0
        this.y = this.top1
        this.z = 2
        this.imgs  = {}
        this.imgh  = ''
        this.imgl  = ''
        this.imgr  = ''
        this.state = 'hidden'
        this.alpha = 0
        this.htop  = false
        this.lx    = 0
        this.ly    = 0
        this.elaps = 0
        this.appear= false
        this.movex = 0
        this.difex = 0
        this.signx = 0
        this.divex = 0
        this.xorig = 0
        this.movey = 0
        this.signy = 0
        this.divey = 0
        this.yorig = 0
        this.yfin  = 0
    }
    show (body, head='', pos='') {
        this.tiempo.reset()
        if (this.state == 'hidden') {
            this.appear = true
            this.state  = 'in'
            this.y = this.top1
        }
        else {
            this.appear = false
        }
        let el = this.verifySet(body)
        if (head == '') {
            this.imgh = defChars['sets'][el]['l']
            this.imgl = ''
            this.imgr = ''
        }
        else {
            this.imgh = head
            this.imgl = defChars['sets'][el]['l']
            this.imgr = defChars['sets'][el]['r']
            this.htop = defChars.hIsTop(this.name, head)
        }
        this.lx = defChars.lMoveX(this.name, this.imgl)
        this.ly = defChars.lMoveY(this.name, this.imgl)

        if (pos != '') {
            let nx = defChars['xpos'][pos]
            if (!this.appear && nx != this.x) {
                this.movex = nx
                let difex  = nx - this.x
                this.difex = Math.abs(difex)
                this.signx = Math.sign(difex)
                this.divex = this.totcyc/this.difex
                this.xorig = this.x
            }
            else {
                this.x = nx
                this.movex = 0
            }
        }
        else {
            
        }
    }
    bend (elsign=1) {
        this.movey = this.top2
        this.difey = this.top2
        this.signy = elsign
        this.divey = this.totcyc/this.difey
        this.yorig = this.y
        this.yfin  = (elsign == 1) ? this.top2 : 0
        /*
        this.movey = this.top2
        this.signx = -1
        this.divey = this.totcyc/this.movey
        */
    }
    getup (elsign=-1) {
        this.bend(elsign)
    }
    fademove () {
        let elapsed = this.tiempo.get()
        if (this.movex != 0) {
            let nwposx = Math.round(elapsed/this.divex)
            if (nwposx < this.difex) {
                this.x = this.xorig + nwposx*this.signx
            }
            else {
                this.x = this.movex
                this.movex = 0
            }
        }
        if (this.movey != 0) {
            let nwposy = Math.round(elapsed/this.divey)
            if (nwposy < this.movey) {
                this.y = this.yorig + nwposy*this.signy
            }
            else {
                this.y = this.yfin
                this.movey = 0
            }
        }
        if (this.state == 'out') {
            elapsed = this.totcyc - elapsed
        }
        let nwalpha = Math.round(elapsed/this.dividr)
        if (this.state == 'in') {
            if (nwalpha >= this.maxalp) {
                this.state = 'visible'
                nwalpha = this.maxalp
            }
            this.alpha = nwalpha
        }
        if (this.state == 'out') {
            if (nwalpha <= 0) {
                this.state = 'hidden'
                nwalpha = 0
            }
            this.alpha = nwalpha
        }
    }
    verifySet (el) {
        let overr = defChars['overrides'][this.name][el]
        if (overr != undefined) {
            el = overr
        }
        return el
    }
    zorder (num) {
        this.z = num
    }
    preload (h, b) {
        h.forEach(element => {
            this.imgs[element] = this.loadImage(element)         
        })
        b.forEach(element => {
            let el = this.verifySet(element)
            this.loadPart(defChars['sets'][el]['l'])
            this.loadPart(defChars['sets'][el]['r'])
        })
    }
    loadImage (img) {
        return new Image("assets/images/" + this.name + "/" + img + ".png")
    }
    loadPart (part) {
       if (part != '') {
            if (this.imgs[part] == undefined) {
                this.imgs[part] = this.loadImage(part)
            }
        }
    }
    unload() {
        this.imgs = {}
    }
    hide () {
        this.tiempo.reset()
        this.state = 'out'
    }
    hideLeft() {
        this.hide()
    }
    draw () {
        this.fademove()
        if (this.state != 'hidden') {
            //debug.aux1 = 'imgl: ' + this.imgl
            if (this.imgh != '' && !this.htop) {
                this.imgs[this.imgh].color = Color.new (128, 128, 128, this.alpha)
                this.imgs[this.imgh].draw(this.x, this.y)
            }
            if (this.imgl != '') {
                this.imgs[this.imgl].color = Color.new (128, 128, 128, this.alpha)
                this.imgs[this.imgl].draw(this.x + this.lx, this.y + this.topy + this.ly)
                //this.imgs[this.imgl].draw(this.x, this.y)
            }
            if (this.imgr != '') {
                this.imgs[this.imgr].color = Color.new (128, 128, 128, this.alpha)
                this.imgs[this.imgr].draw(this.x + 192, this.y + this.topy)
            }
            if (this.imgh != '' && this.htop) {
                this.imgs[this.imgh].color = Color.new (128, 128, 128, this.alpha)
                this.imgs[this.imgh].draw(this.x, this.y)
            }
        }
    }
}