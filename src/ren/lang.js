import { config, trad } from "../config.js"

export const lang = function (str) {
    let ret = str
    if (config.lang != 'en') {
        if (trad[config.lang][str] != undefined) {
            ret = trad[config.lang][str]
        }
        else {
            ret = 'undefined'
        }
    }
    return ret
}