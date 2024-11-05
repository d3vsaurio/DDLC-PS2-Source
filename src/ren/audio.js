import { timerClass } from "./timerclass.js"
import { seconds } from "./utils.js"

export const audio = {
    first : true,
    time  : new timerClass,
    tloop : 0,
    tsingles : { // time for singles
        '0' : 0,
        '1' : 22.072,
        '2' : 4.498,
        '3' : 26.158,
        '4' : 19.436,
    },
    setBGM : function (bgm) { // set bgm and first sound duration
        this.bgm    = bgm
        this.tloop  = seconds(this.tsingles[bgm])
        this.time.reset()
        this.play(bgm)
        this.single = true // checks the time of first sound
    },
    updateBGM: function () { 
        if (this.tloop > 0) {
            if (this.time.get() >= this.tloop && this.single) {
                this.play(`${this.bgm}l`, true)
                this.single = false
            }
        }
    },
    play : function (audiox, loop = false) {
        if (audiox != '0') {
            if (this.first) {
                this.first  = false
            }
            else {
                Sound.pause(this.audio)
            }
            this.audio = Sound.load("assets/audio/bgm/" + audiox + ".wav")
            Sound.play(this.audio)
            Sound.repeat(loop)
        }
        else {
            Sound.pause(this.audio)
        }
    }
}