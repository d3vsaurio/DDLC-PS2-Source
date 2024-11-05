import { renJS } from "./ren.js"
import { audio } from "./audio.js"
import { bgMan } from "./bgman.js"
import { config } from "../config.js"
import { characters } from "./characters.js"

export const Sayori  = characters[0]
export const Natsuki = characters[1]
export const Yuri    = characters[2]
export const Monika  = characters[3]

export const bg = function (img) {
    bgMan.setBg(img)
}
export const music = function (snd) {
    audio.setBGM(snd)
}
export const x = function (lbl, txt) {
    dialog(lbl, txt)
}
export const bl = function (txt) {
    dialog('', txt)
}
export const s = function (txt) {
    dialog('Sayori', txt)
}
export const n = function (txt) {
    dialog('Natsuki', txt)
}
export const y = function (txt) {
    dialog('Yuri', txt)
}
export const m = function (txt) {
    dialog('Monika', txt)
}
export const mc = function (txt) {
    dialog(config.player, txt)
}
const dialog = function (label, txt) {
    renJS.setTitle(label)
    renJS.loadDlg(txt)
    renJS.dialog()
}
export const getupAll = function () {
    characters.forEach(element => {
        element.getup()  
    })
}
export const hideAll = function () {
    characters.forEach(element => {
        element.hide()  
    })
}