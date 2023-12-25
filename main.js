import kaboom from "./libs/kaboom.mjs"
import { load } from "./utilities/Loader.js"
import { uiManager } from "./utilities/UIManager.js"
import { level1 } from "./play/level1.js"
import { level2 } from "./play/level2.js"
import { level3 } from "./play/level3.js"
import { level4 } from "./play/level4.js"


kaboom({
    width: 1280,
    height: 720,
    letterbox: true,
    canvas: document.querySelector("#game-container"),
})

load.fonts()
load.sounds()
load.assets()
const lastPlay = JSON.parse(localStorage.getItem("p"))
const lastLv = lastPlay ? window.atob(lastPlay["lv"]) : 0
const lastlives = lastPlay ? window.atob(lastPlay["lives"]) : 0
let cont = 0, currlv = 0, playLive = 0

const scenes = {
    menu: () => {
        uiManager.displayMainMenu(lastLv)
    },
    controls: () => {
        uiManager.displayControlMenu()
    },
    continueLast: () => {
        uiManager.displayContinueLastPlay()
        onKeyPress("c", () => {
            play("confirm", { speed: 1.5 })
            cont = 1
            go(lastLv)
        })
    },
    1: () => {
        currlv = 1
        playLive = lastLv == 1 && cont ? lastlives : 0

        level1(playLive)
    },
    2: () => {
        currlv = 2
        playLive = lastLv == 2 && cont ? lastlives : 0

        level2(playLive)
    },
    3: () => {
        currlv = 3
        playLive = lastLv == 3 && cont ? lastlives : 0

        level3(playLive)
    },
    4: () => {
        currlv = 4
        playLive = lastLv == 4 && cont ? lastlives : 0
        level4(playLive)
    },
    "preview": () => {
        uiManager.displayPreview()
    },
    "gameover": () => {
        const gover = play("gover", {
            volume: 1,
            loop: false
        })
        onSceneLeave(() => {
            gover.paused = true
        })
        cont = 0
        uiManager.displayGOScreen(currlv)

    },
    "end": () => {
        localStorage.removeItem("p")
        const congrat = play("congrat", {
            volume: 1,
            loop: false
        })
        onSceneLeave(() => {
            congrat.paused = true
        })
        uiManager.displayEndScreen()
    },
}


for (const k in scenes) {
    scene(k, scenes[k])
}


go("menu")