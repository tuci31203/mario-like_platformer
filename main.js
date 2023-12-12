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
const lastLv = JSON.parse(localStorage.getItem("lv"))

const scenes = {
    menu: () => {
        uiManager.displayMainMenu(lastLv)
    },
    controls: () => {
        uiManager.displayControlMenu()
    },
    continueLast: () => {
        uiManager.displayContinueLastPlay(lastLv)
    },
    1: () => {
        level1()
    },
    2: () => {
        level2()
    },
    3: () => {
        level3()
    },
    4: () => {
        level4()
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
        uiManager.displayGOScreen(JSON.parse(localStorage.getItem("lv")))

    },
    "end": () => {
        localStorage.removeItem("lv")
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