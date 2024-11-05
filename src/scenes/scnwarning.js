import { stdScene } from "./stdscene.js";
import { fonts } from "../ren/fonts.js";
import { config } from "../config.js";

export class scnWarning extends stdScene {
    init() {
        this.spc  = 24
        this.x    = 30
        this.y    = 30
        fonts.setDef(0.7, 'white')
        let msg = [
            "Notice",
            "",
            "This game is in beta (incomplete)",
            "and only has the first chapter.",
            "This port is not official and is not affiliated with Team Salvato.",
            "Please support the official game: https://ddlc.moe",
            "",
            "You can download and contribute to the source code:",
            "https://github.com/d3vsaurio/DDLC-PS2-Source",
            "",
            "This game was developed with AthenaEnv:",
            "https://github.com/DanielSant0s/AthenaEnv",
            "",
            "Press Start to continue..."
        ]
        if (config.lang == 'es') {
            msg = [
                "Aviso",
                "",
                "Este juego está en fase beta (incompleto)",
                "y solo tiene el primer capítulo.",
                "Este port no es oficial y no está afiliado con Team Salvato.",
                "Por favor, apoya el juego oficial: https://ddlc.moe",
                "",
                "Puedes descargar y aportar al código fuente:",
                "https://github.com/d3vsaurio/DDLC-PS2-Source",
                "",
                "Este juego se desarrolló con AthenaEnv:",
                "https://github.com/DanielSant0s/AthenaEnv",
                "",
                "Presione Start para continuar..."
            ]
        }
        this.msg = msg
    }
    update() {
        if (this.pad.justPressed(Pads.START)) {
            this.nextScene('keyboard')
        }
        for (let i = 0; i < this.msg.length; i++) {
            fonts.print0(this.x, this.y + this.spc*i, this.msg[i])
        }
    }
}